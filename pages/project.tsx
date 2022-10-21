import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function Project() {
  return (
    <Container title="Project – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Projects</h3>
               
            </div>
        </div>
    </Container>
  );
}
