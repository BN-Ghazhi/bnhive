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
  // True once this script is running. Until then the CSS fail-safe reveals the
  // element on its own, so content never stays hidden if JavaScript fails.
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setArmed(true));
    return () => cancelAnimationFrame(id);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Very old browsers: just show everything.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // An element taller than the viewport can never reach a ratio threshold
        // (e.g. the stacked project grid on a phone), so also accept it once it
        // fills a quarter of the screen.
        const viewport = entry.rootBounds?.height ?? window.innerHeight;
        if (entry.intersectionRatio >= threshold || entry.intersectionRect.height >= viewport * 0.25) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: [0, 0.02, 0.05, 0.1, threshold, 0.25, 0.5, 1], rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible, armed };
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
  const { ref, visible, armed } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      data-armed={armed || undefined}
      data-variant={variant}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
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
      <div className="bg-brand-gradient-violet h-full origin-left" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
