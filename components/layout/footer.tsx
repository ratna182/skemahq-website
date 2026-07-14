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

                        <ul className="space-y-3">

                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/portfolio">
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact">
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

                        <ul className="space-y-3 text-neutral-400">

                            <li>Jakarta, Indonesia</li>

                            <li>hello@skemahq.com</li>

                            <li>+62 812-3456-7890</li>

                        </ul>

                    </div>

                </div>

                <div className="mt-20 border-t border-neutral-800 pt-8 text-sm text-neutral-500">

                    © 2025 Skema HQ. All rights reserved.

                </div>

            </Container>
        </footer>
    );
}