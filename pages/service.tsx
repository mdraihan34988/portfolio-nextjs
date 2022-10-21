import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import PostCard from 'components/PostCard';

import { FaPaintBrush } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function Service() {
  return (
    <Container title="Experience – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className="mb-4 font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Service</h3>
                <div className="flex gap-6 flex-col md:flex-row">
                    <PostCard
                    title="Everything I Know About Style Guides, Design Systems"
                    slug="style-guides-component-libraries-design-systems"
                    gradient="from-[#D8B4FE] to-[#818CF8]"
                    />
                    <PostCard
                    title="Rust Is The Future of JavaScript Infrastructure"
                    slug="rust"
                    gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                    />
                    <PostCard
                    title="Past, Present, and Future of React State Management"
                    slug="react-state-management"
                    gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                    />
                </div>

            </div>
        </div>
    </Container>
  );
}
