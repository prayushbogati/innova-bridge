import {
    Settings,
    Smartphone,
    Cloud,
    GitBranch,
    ShieldCheck,
    Shield,
    Palette,
    Brain,
    Sparkles,
} from "lucide-react";
import Img1 from '@/assets/images/services/image-1.png'
import Img2 from '@/assets/images/services/image-2.png'
import Img3 from '@/assets/images/services/image-3.png'
import Img4 from '@/assets/images/services/image-4.png'
import Img5 from '@/assets/images/services/image-5.png'
import Img6 from '@/assets/images/services/image-6.png'
import Img7 from '@/assets/images/services/image-7.png'
import Img8 from '@/assets/images/services/image-8.png'
import Img9 from '@/assets/images/services/image-9.png'

function slugify(str) {
    return (
        str
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9-\s]/g, '')
            .trim()
            .replace(/\s+/g, '-')
    )
}

export const rawServices = [
    {
        name: "IT Consulting and Modernization",
        description:
            "We help organizations rethink their technology strategy from the ground up, assessing current architecture, identifying legacy risk, and designing a roadmap that balances innovation with operational stability. From cloud readiness assessments to full-scale platform modernization, our consultants work alongside your team to ensure every recommendation is grounded in real business outcomes, not just technical trends.",
        icon: Settings,
        image: Img1
    },
    {
        name: "Web & Mobile App Development",
        description:
            "Our development team builds business websites, customer portals, mobile applications, and robust APIs using modern frameworks and best practices. We focus on performance, accessibility, and scalability from day one, ensuring every product we ship delivers a seamless experience across devices while remaining easy to maintain and extend as your business grows.",
        icon: Smartphone,
        image: Img2
    },
    {
        name: "Cloud, Backup & Data Management",
        description:
            "We design and implement cloud infrastructure tailored to your workloads, handling migration, storage architecture, automated backup strategies, and ongoing data management. Our approach prioritizes security, redundancy, and compliance, giving your business the resilience it needs to maintain continuity even in the face of unexpected disruptions or disasters.",
        icon: Cloud,
        image: Img3
    },
    {
        name: "DevOps & Automation",
        description:
            "We build reliable CI/CD pipelines, automate infrastructure provisioning, and implement comprehensive monitoring to accelerate your software delivery lifecycle. By embedding DevOps culture and tooling into your workflows, we help engineering teams ship faster, reduce manual errors, and maintain visibility into system health at every stage of deployment.",
        icon: GitBranch,
        image: Img4
    },
    {
        name: "DevSecOps",
        description:
            "Security shouldn't be an afterthought — we integrate it directly into your CI/CD pipelines, enforcing policy-as-code, automated compliance checks, and infrastructure hardening throughout the development lifecycle. Our DevSecOps practices catch vulnerabilities early, reduce remediation costs, and help your team ship secure software without sacrificing delivery speed.",
        icon: ShieldCheck,
        image: Img5
    },
    {
        name: "Cybersecurity",
        description:
            "Our cybersecurity services include comprehensive risk assessments, implementation of technical and administrative controls, data protection strategies, and ongoing advisory support. We help identify vulnerabilities before attackers do, build a security posture aligned with industry standards, and safeguard the business assets and customer trust you've worked hard to build.",
        icon: Shield,
        image: Img6
    },
    {
        name: "UI/UX, Graphic Design & Media Animation",
        description:
            "Our design team crafts intuitive user interfaces, compelling graphic design, cohesive website branding, and engaging animation and media content. We combine research-driven UX principles with strong visual storytelling to create experiences that not only look great but genuinely resonate with your audience and reinforce your brand identity.",
        icon: Palette,
        image: Img7
    },
    {
        name: "AI/ML Solutions: NLP, Vision, Chatbots",
        description:
            "We build intelligent systems including conversational chatbots, natural language processing pipelines, computer vision applications, and personalized recommendation engines. Our AI/ML solutions are designed to integrate seamlessly into your existing workflows, unlocking automation and insights that were previously out of reach for your business.",
        icon: Brain,
        image: Img8
    },
    {
        name: "Digital Transformation, Animation",
        description:
            "We guide organizations through comprehensive digital transformation, combining strategic planning, modernization initiatives, and rich animation and media production. Our holistic approach ensures technology changes are matched by process and cultural shifts, future-proofing your business against evolving market demands and customer expectations.",
        icon: Sparkles,
        image: Img9
    },
];

export const services = rawServices.map(service => ({
    ...service,
    slug: slugify(service.name)
}))
