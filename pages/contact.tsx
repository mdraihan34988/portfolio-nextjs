import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function Contact() {
  return (
    <Container title="Contact – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Contact Me</h3>
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
                    <h2>Links</h2>
                        <ul>
                            <li>
                            Facebook: <a href="https://www.facebook.com/raihanulmd/">@raihanulmd</a>
                            </li>
                            <li>
                            GitHub: <a href="https://github.com/mdraihan34988">@mdraihan34988</a>
                            </li>
                            <li>
                            Website:{' '}
                            <Link href="https://mdraihan.netlify.app/">
                                <a>https://mdraihan.netlify.app/</a>
                            </Link>
                            </li>
                            <li>
                            LinkedIn:{' '}
                            <a href="https://www.linkedin.com/in/mdraihanulislam/">
                                https://www.linkedin.com/in/mdraihanulislam
                            </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}
