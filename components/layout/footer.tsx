import Link from "next/link";

import Container from "../ui/container";

export default function Footer() {
    return (
        <footer className="bg-black py-20 text-white">
            <Container>
                <div className="grid gap-14 md:grid-cols-4">

                    {/* Brand */}

                    <div>

                        <h2 className="text-2xl font-bold">
                            Skema HQ
                        </h2>

                        <p className="mt-6 leading-8 text-neutral-400">
                            Creative Production House specializing in
                            exhibition booths, event activations,
                            and sales promotion.
                        </p>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-widest">
                            Services
                        </h3>

                        <ul className="space-y-3 text-neutral-400">

                            <li>Exhibition Booth</li>

                            <li>Event Activation</li>

                            <li>Sales Promotion</li>

                            <li>Creative Production</li>

                        </ul>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-widest">
                            Company
                        </h3>

                        <ul className="space-y-3 text-neutral-400 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-white transition">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/estimator" className="hover:text-amber-400 transition text-white font-medium">
                                    Cost Estimator ⚡
                                </Link>
                            </li>
                            <li>
                                <Link href="/track" className="hover:text-amber-400 transition text-white font-medium">
                                    Project Tracker 📍
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-widest">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-neutral-400 text-sm">

                            <li className="leading-relaxed">
                                Jl. Sepakat V, RT.2/RW.1, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13870
                            </li>

                            <li>
                                <a href="mailto:firmanskema@gmail.com" className="hover:text-white transition">
                                    firmanskema@gmail.com
                                </a>
                            </li>

                            <li>
                                <a href="https://wa.me/6287889527901" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                                    +62 878-8952-7901
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="mt-20 border-t border-neutral-800 pt-8 text-sm text-neutral-400">

                    © 2026 Skema HQ. All rights reserved.

                </div>

            </Container>
        </footer>
    );
}