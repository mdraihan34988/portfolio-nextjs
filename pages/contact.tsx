import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function Contact() {
  return (
    <Container title="Contact – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">Contact Me</h3>
                <div className="mb-8 prose dark:prose-dark leading-6 px-6">
                    <ul>
                        <li>
                        Address: Narayanganj, Dhaka, Bangladesh.
                        </li>
                        <li>
                        Phone: +880-17800-34452
                        </li>
                        <li>
                        Email: <a href="mailto:mdraihanulislam716@gmail.com">mdraihanulislam716@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}
