import { useTransform, motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa6";


export default function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
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
                <div className="flex gap-5">
                    <FaQuoteLeft size={30} color="indigo" className="absolute"/>
                    <p className="text-sm pl-10">{item.review}</p>
                </div>

                <h2 className="mt-1 font-bold text-sm pl-10">{item.user}</h2>
                <p className="text-sm pl-10">{item.desc}</p>
            </div>
        </motion.div>
    );
}
