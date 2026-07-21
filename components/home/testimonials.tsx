"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Container from "../ui/container";
import { StaggerContainer, StaggerItem } from "../ui/motion-wrapper";

const testimonials = [
  {
    quote:
      "Skema HQ consistently delivers premium booth execution with excellent attention to detail and reliable project management for our major launches.",
    author: "Marketing Team",
    company: "KAO Indonesia",
    role: "Brand Activation Partner",
  },
  {
    quote:
      "Professional execution from planning to installation. The team understands our strict brand standards and always delivers beyond expectations.",
    author: "Brand Team",
    company: "KAO Indonesia",
    role: "Retail Marketing Specialist",
  },
  {
    quote:
      "A trusted production partner for event activations, exhibitions, and retail campaigns across nationwide locations.",
    author: "Project Management",
    company: "KAO Indonesia",
    role: "Event & Production Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-white border-t border-neutral-200 overflow-hidden">
      <Container>
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
          >
            Client Feedback
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl leading-[1.1]"
          >
            Trusted by Industry Leaders.
          </motion.h2>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col justify-between h-full rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-neutral-900 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-neutral-300 group-hover:text-neutral-950 transition-colors" />
                  </div>

                  <p className="text-base leading-relaxed text-neutral-700 font-medium">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-200/80 pt-6">
                  <h4 className="font-bold text-neutral-950 text-base">
                    {item.author}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                    {item.company} &bull; {item.role}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}