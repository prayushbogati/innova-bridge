'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

const DEFAULT_ITEMS = [
    {
        review: "Innova Bridge gave me the skills, confidence and support to switch my career to DevOps. The hands-on labs and mentorship are the best!",
        user: "Sandeep R.",
        desc: "DevOps Engineer at TCS",
        id: 1,
    },
    {
        review: "The training was incredibly practical and the trainers genuinely cared about our progress. I landed a job within two months of completing the course.",
        user: "Priya Sharma",
        desc: "Cloud Engineer at Amazon",
        id: 2,
    },
    {
        review: "I came in with zero background in tech and left with a solid foundation in Kubernetes and CI/CD. The mock interviews really boosted my confidence.",
        user: "Rajesh Thapa",
        desc: "Site Reliability Engineer at Leapfrog Technology",
        id: 3,
    },
    {
        review: "Innova Bridge's placement assistance made all the difference. The resume workshops and referrals helped me get multiple offers to choose from.",
        user: "Anita Gurung",
        desc: "DevSecOps Engineer at Deloitte",
        id: 4,
    },
    {
        review: "The real-world projects gave me exactly what my resume was missing. I could speak confidently about my experience in every interview I gave.",
        user: "Bikash Karki",
        desc: "Platform Engineer at Cotiviti",
        id: 5,
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const outputRange = [90, 0, -90];
    const rotateY = useTransform(x, range, outputRange, { clamp: false });

    return (
        <motion.div
            key={`${item?.id ?? index}-${index}`}
            className={`relative shrink-0 flex flex-col ${round
                ? 'items-center justify-center text-center bg-[#120F17] border-0'
                : 'items-start justify-between bg-gray-200 rounded-[12px]'
                } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
            }}
            transition={transition}
        >
            <div className="p-5">
                <p className="text-sm">{item.review}</p>
                <h2 className="mt-1 font-bold text-sm">{item.user}</h2>
                <p className="text-sm">{item.desc}</p>
            </div>
        </motion.div>
    );
}

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;
    const itemsForRender = useMemo(() => {
        if (!loop) return items;
        if (items.length === 0) return [];
        return [items[items.length - 1], ...items, items[0]];
    }, [items, loop]);

    const [position, setPosition] = useState(loop ? 1 : 0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (!autoplay || itemsForRender.length <= 1) return undefined;
        if (pauseOnHover && isHovered) return undefined;

        const timer = setInterval(() => {
            setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

    useEffect(() => {
        const startingPosition = loop ? 1 : 0;
        setPosition(startingPosition);
        x.set(-startingPosition * trackItemOffset);
    }, [items.length, loop, trackItemOffset, x]);

    useEffect(() => {
        if (!loop && position > itemsForRender.length - 1) {
            setPosition(Math.max(0, itemsForRender.length - 1));
        }
    }, [itemsForRender.length, loop, position]);

    const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationStart = () => {
        setIsAnimating(true);
    };

    const handleAnimationComplete = () => {
        if (!loop || itemsForRender.length <= 1) {
            setIsAnimating(false);
            return;
        }
        const lastCloneIndex = itemsForRender.length - 1;

        if (position === lastCloneIndex) {
            setIsJumping(true);
            const target = 1;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        if (position === 0) {
            setIsJumping(true);
            const target = items.length;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        setIsAnimating(false);
    };

    const handleDragEnd = (_, info) => {
        const { offset, velocity } = info;
        const direction =
            offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
                ? 1
                : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
                    ? -1
                    : 0;

        if (direction === 0) return;

        setPosition(prev => {
            const next = prev + direction;
            const max = itemsForRender.length - 1;
            return Math.max(0, Math.min(next, max));
        });
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
                right: 0
            }
        };

    const activeIndex =
        items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px]'
                }`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` })
            }}
        >
            <motion.div
                className="flex"
                drag={isAnimating ? false : 'x'}
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(position * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationStart={handleAnimationStart}
                onAnimationComplete={handleAnimationComplete}
            >
                {itemsForRender.map((item, index) => (
                    <CarouselItem
                        key={`${item?.id ?? index}-${index}`}
                        item={item}
                        index={index}
                        itemWidth={itemWidth}
                        round={round}
                        trackItemOffset={trackItemOffset}
                        x={x}
                        transition={effectiveTransition}
                    />
                ))}
            </motion.div>
            <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
                <div className="mt-4 flex w-[150px] justify-between px-8">
                    {items.map((_, index) => (
                        <motion.button
                            type="button"
                            key={index}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={activeIndex === index}
                            className={`h-2 w-2 rounded-full cursor-pointer border-0 p-0 appearance-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeIndex === index
                                ? round
                                    ? 'bg-white'
                                    : 'bg-[#333333]'
                                : round
                                    ? 'bg-[#555]'
                                    : 'bg-[rgba(51,51,51,0.4)]'
                                }`}
                            animate={{
                                scale: activeIndex === index ? 1.2 : 1
                            }}
                            onClick={() => setPosition(loop ? index + 1 : index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
