"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/container";

const stats = [
  {
    numericValue: 120,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successful exhibition booths & activations",
  },
  {
    numericValue: 8,
    suffix: "",
    label: "KAO Brands",
    description: "Trusted nationwide brand partnership",
  },
  {
    numericValue: 12,
    suffix: "+",
    label: "Years Experience",
    description: "Deep expertise in creative production",
  },
  {
    numericValue: 100,
    suffix: "%",
    label: "Client Commitment",
    description: "On-time delivery & quality control",
  },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const steps = 40;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-black">
      {count}
      {suffix}
    </span>
  );
}

export default function CompanyStats() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-neutral-200/90 bg-neutral-50/50 p-8 shadow-xs transition-all duration-300 hover:border-neutral-900 hover:bg-white hover:shadow-xl"
            >
              <div className="text-5xl font-black tracking-tight text-neutral-950 lg:text-6xl">
                <CountUpNumber value={stat.numericValue} suffix={stat.suffix} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {stat.label}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {stat.description}
              </p>

              {/* Subtle hover accent indicator line */}
              <div className="mt-6 h-1 w-8 rounded-full bg-neutral-200 transition-all duration-300 group-hover:w-16 group-hover:bg-neutral-950" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}