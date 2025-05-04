"use client";

import React, { useState, useEffect } from "react";

interface Leaf {
  id: number;
  src: string;
  left: number;
  size: number;
  blur: boolean;
  delay: number;
  duration: number;
  dir: "cw" | "ccw";
}

export default function LeavesFalling() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const images = Array.from({ length: 6 }, (_, i) => `/leaves/${i + 1}.png`);
    const arr: Leaf[] = [];
    for (let i = 0; i < 30; i++) {
      const src = images[Math.floor(Math.random() * images.length)];
      arr.push({
        id: i,
        src,
        left: Math.random() * 100,
        size: 20 + Math.random() * 80,
        blur: Math.random() < 0.3,
        delay: Math.random() * 20,
        duration: 10 + Math.random() * 20,
        dir: Math.random() < 0.5 ? "cw" : "ccw",
      });
    }
    setLeaves(arr);
  }, []);

  return (
    <>
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src={leaf.src}
          alt=""
          className="pointer-events-none absolute"
          style={{
            top: "-10%",
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            filter: leaf.blur ? "blur(2px)" : "none",
            animation: `${
              leaf.dir === "cw" ? "fallCW" : "fallCCW"
            } ${leaf.duration}s linear ${leaf.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes fallCW {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        @keyframes fallCCW {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(110vh) rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
}
