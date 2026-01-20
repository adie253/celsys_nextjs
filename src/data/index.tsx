
import { Globe, Smartphone, Palette, Cloud, Code2, BarChart, CheckCircle2, Zap, Users, Target } from "lucide-react";

export const services = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "High-performance websites built with Next.js, React, and modern technologies.",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-secondary" />,
        title: "Mobile Apps",
        description: "Cross-platform mobile applications that provide native-like experiences.",
    },
    {
        icon: <Palette className="w-8 h-8 text-accent" />,
        title: "UI/UX Design",
        description: "User-centric designs that are both beautiful and functional.",
    },
    {
        icon: <Cloud className="w-8 h-8 text-sky-400" />,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and serverless architecture management.",
    },
    {
        icon: <Code2 className="w-8 h-8 text-indigo-400" />,
        title: "Custom Software",
        description: "Tailored software solutions to solve complex business challenges.",
    },
    {
        icon: <BarChart className="w-8 h-8 text-pink-400" />,
        title: "Digital Strategy",
        description: "Data-driven strategies to grow your digital presence and ROI.",
    },
];

export const features = [
    {
        title: "Innovative Approach",
        description: "We don't just follow trends; we set them. Our team constantly explores new technologies to give you a competitive edge.",
        gradient: "from-primary to-cyan-500",
    },
    {
        title: "Scalable Architecture",
        description: "Built for growth. Our solutions are designed to handle millions of users without breaking a sweat.",
        gradient: "from-accent to-pink-500",
    },
    {
        title: "User-Centric Design",
        description: "Every pixel matters. We obsess over user experience to ensure your customers love using your product.",
        gradient: "from-orange-500 to-amber-500",
    },
];

export const about = {
    title: "Who We Are",
    subtitle: "About CelsysTech",
    description: "CelsysTech is a premier digital agency at the intersection of creativity and technology. We believe in the power of digital transformation to reshape businesses and industries. Our team of passionate engineers, designers, and strategists works cohesively to deliver products that are not just functional, but exceptional.",
    whatWeDo: [
        {
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            title: "Fast Execution",
            text: "We deliver high-quality solutions with speed and precision.",
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
            title: "Quality Assurance",
            text: " rigorous testing ensures bug-free and reliable software.",
        },
        {
            icon: <Users className="w-6 h-6 text-blue-400" />,
            title: "Collaborative Partnership",
            text: "We work alongside you as partners, not just vendors.",
        },
        {
            icon: <Target className="w-6 h-6 text-red-400" />,
            title: "Result Oriented",
            text: "Our focus is always on driving tangible business results.",
        }
    ]
};

export const portfolio = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        image: "/projects/project1.jpg", // Placeholder
        description: "A real-time financial data visualization platform for institutional investors.",
        technologies: ["Next.js", "TypeScript", "D3.js"],
        link: "#",
    },
    {
        title: "E-Commerce Reform",
        category: "Mobile App",
        image: "/projects/project2.jpg", // Placeholder
        description: "Next-gen shopping experience with AR product preview capabilities.",
        technologies: ["React Native", "Node.js", "GraphQL"],
        link: "#",
    },
    {
        title: "HealthAI Core",
        category: "AI Integration",
        image: "/projects/project3.jpg", // Placeholder
        description: "Machine learning interface for diagnostic assistance in healthcare.",
        technologies: ["Python", "React", "TensorFlow"],
        link: "#",
    },
    {
        title: "Smart City Grid",
        category: "IoT Dashboard",
        image: "/projects/project4.jpg", // Placeholder
        description: "Centralized control system for smart city infrastructure management.",
        technologies: ["Vue.js", "Socket.io", "Google Maps API"],
        link: "#",
    },
];

export const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of digital services including Web Development, Mobile App Development, UI/UX Design, Cloud Solutions, and Custom Software Development tailored to your business needs.",
    },
    {
        question: "How long does a project usually take?",
        answer: "Project timelines vary depending on complexity and scope. A standard website might take 4-6 weeks, while a complex custom software solution could take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer various support and maintenance packages to ensure your digital product remains up-to-date, secure, and performs optimally after launch.",
    },
    {
        question: "What is your pricing model?",
        answer: "We work on both fixed-price project bases and time-and-materials models, depending on the project requirements. We strive to provide transparent pricing with no hidden costs.",
    },
];

export const blogs = [
    {
        title: "The Future of Web Development: AI Integration",
        excerpt: "Exploring how Artificial Intelligence is reshaping the way we build and interact with websites.",
        date: "Jan 15, 2024",
        readTime: "5 min read",
        image: "/blog/blog1.jpg",
        link: "#",
    },
    {
        title: "Optimizing React Performance for Scale",
        excerpt: "Key strategies and best practices for keeping your React applications fast and responsive as they grow.",
        date: "Jan 10, 2024",
        readTime: "8 min read",
        image: "/blog/blog2.jpg",
        link: "#",
    },
    {
        title: "UI/UX Trends to Watch in 2024",
        excerpt: "A look at the emerging design trends that will define the digital landscape this year.",
        date: "Jan 05, 2024",
        readTime: "4 min read",
        image: "/blog/blog3.jpg",
        link: "#",
    },
];
