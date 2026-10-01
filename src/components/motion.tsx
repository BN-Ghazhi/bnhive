"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/** Fades/slides its children in the first time they scroll into view. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  children,
}: {
  as?: ElementType;
  delay?: number;
  variant?: "up" | "scale" | "left" | "right";
  className?: string;
  children: ReactNode;
}) {
  const { ref, visible } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      data-variant={variant}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Counts the numeric part of a value like "8+" or "11" up from zero when visible. */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const hasNumber = match !== null;
  const target = match ? parseInt(match[2], 10) : 0;
  const { ref, visible } = useInView<HTMLSpanElement>(0.5);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible || !hasNumber) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();
    const duration = reduce ? 0 : 1400;
    const tick = (t: number) => {
      const p = duration === 0 ? 1 : Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, hasNumber]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
}

/** Cycles through words with a flip-in animation. */
export function RotatingWords({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="relative inline-block [perspective:600px]" aria-live="polite">
      <span key={i} className="animate-word-in inline-block">
        <span className="text-brand-gradient-animated">{words[i]}</span>
      </span>
    </span>
  );
}

/** A card whose background glows under the cursor. */
export function Spotlight({
  as: Tag = "div",
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <Tag onMouseMove={onMove} className={`spotlight ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** Thin gradient bar at the top of the viewport showing scroll progress. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="bg-brand-gradient-violet h-full origin-left"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
