"use client";

import { useState } from "react";
import clsx from "clsx";
import { achievements, timeline } from "@/lib/site-data";

const icons = [
  <path key="1" d="M12 3v18M3 12h18" />,
  <path key="2" d="M5 19l7-14 7 14M8 13h8" />,
  <path key="3" d="M4 12a8 8 0 1016 0 8 8 0 10-16 0zm8-4v5l3 2" />,
  <path key="4" d="M6 7h12v10H6zM9 7V5h6v2" />
];

export function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = timeline[activeIndex];

  return (
    <div className="mt-16 space-y-12">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#eef2f5] p-6 shadow-soft sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map((entry, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={entry.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    "group relative min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/80 bg-[#f7fafc] p-5 text-left transition duration-300",
                    "shadow-[12px_12px_26px_rgba(165,180,200,0.26),-12px_-12px_26px_rgba(255,255,255,0.9)]",
                    isActive && "border-[#9cc3df] bg-white ring-2 ring-[#c8e1f0]"
                  )}
                >
                  <div
                    className={clsx(
                      "absolute inset-x-6 top-5 h-2 rounded-full bg-gradient-to-r from-[#c6dce7] to-[#edf5f9] opacity-80 transition",
                      isActive && "from-[#67b7da] to-[#d7edf7]"
                    )}
                  />
                  <div
                    className={clsx(
                      "mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold text-navy transition",
                      "bg-[#eef3f7] shadow-[inset_8px_8px_18px_rgba(195,208,220,0.45),inset_-8px_-8px_18px_rgba(255,255,255,0.95)]",
                      isActive && "scale-105 bg-white text-[#2582ab]"
                    )}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {entry.year}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <span
                      className={clsx(
                        "flex h-11 w-11 items-center justify-center rounded-2xl text-[#59afd0] transition",
                        "bg-[#eef3f7] shadow-[6px_6px_14px_rgba(176,192,206,0.24),-6px_-6px_14px_rgba(255,255,255,0.95)]",
                        isActive && "bg-white text-[#1f8cb8]"
                      )}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {icons[index % icons.length]}
                      </svg>
                    </span>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#66a8c6]">{entry.focus}</p>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                    {entry.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-ink/60">{entry.description}</p>

                  <div
                    className={clsx(
                      "mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-navy transition",
                      isActive ? "opacity-100" : "opacity-55 group-hover:opacity-85"
                    )}
                  >
                    <span>{isActive ? "Selected" : "Click to focus"}</span>
                    <span aria-hidden>→</span>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="rounded-[2rem] border border-white/80 bg-white/90 p-7 shadow-[10px_10px_24px_rgba(171,186,199,0.22),-10px_-10px_24px_rgba(255,255,255,0.92)]">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">Focused Service Detail</p>
            <div className="mt-5 flex items-center gap-4">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f2f6f9] text-2xl font-semibold text-navy shadow-[inset_8px_8px_18px_rgba(195,208,220,0.45),inset_-8px_-8px_18px_rgba(255,255,255,0.95)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {activeEntry.year}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#66a8c6]">{activeEntry.focus}</p>
                <h3 className="mt-2 text-3xl font-semibold text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                  {activeEntry.title}
                </h3>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-ink/70">{activeEntry.description}</p>
            <div className="mt-6 space-y-3">
              {activeEntry.details.map((detail) => (
                <div key={detail} className="rounded-[1.4rem] bg-[#f6f8fa] px-5 py-4 text-base leading-7 text-ink/75">
                  {detail}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <div
            key={achievement}
            className={clsx(
              "rounded-[1.7rem] border border-black/5 p-5 transition",
              index === activeIndex ? "bg-navy text-white shadow-soft" : "bg-white/90 text-ink shadow-soft"
            )}
          >
            <p className="text-xs uppercase tracking-[0.26em] text-bronze/80">Achievement</p>
            <p className={clsx("mt-3 text-base leading-7", index === activeIndex ? "text-white/85" : "text-ink/75")}>
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
