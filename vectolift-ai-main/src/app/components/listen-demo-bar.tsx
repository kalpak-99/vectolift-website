"use client";

import { useRef, useState } from "react";

const BAR_COUNT = 24;
const DEMO_AUDIO_SRC = "/assets/audio/audioforweb.mp3";

export default function ListenDemoBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <audio
        ref={audioRef}
        src={DEMO_AUDIO_SRC}
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <div className="flex w-full max-w-md items-stretch overflow-hidden rounded-xl border border-white/15 bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {/* Left: mic + waveform */}
        <div className="flex flex-1 items-center gap-3 px-4 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-white">
              <rect x="5.5" y="1" width="5" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3 7.5a5 5 0 0010 0M8 12.5V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex h-8 flex-1 items-center gap-[3px]" aria-hidden="true">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] origin-center rounded-full bg-white/70"
                style={{
                  height: "100%",
                  transform: playing ? undefined : `scaleY(${0.35 + Math.sin(i * 0.5) * 0.25})`,
                  animationName: playing ? "waveform" : "none",
                  animationDuration: playing ? `${0.5 + (i % 7) * 0.08}s` : undefined,
                  animationTimingFunction: playing ? "ease-in-out" : undefined,
                  animationIterationCount: playing ? "infinite" : undefined,
                  animationDirection: playing ? "alternate" : undefined,
                  animationDelay: playing ? `${i * 0.04}s` : undefined,
                }}
              />
            ))}
          </div>
        </div>
        {/* Right: Listen Demo button */}
        <button
          type="button"
          onClick={togglePlayback}
          className="flex shrink-0 items-center gap-2 bg-black/50 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/70"
          aria-label={playing ? "Pause demo audio" : "Play demo audio"}
        >
          {playing ? (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
              <path d="M0 0h3v12H0V0zm7 0h3v12H7V0z" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
              <path d="M0 0v12l10-6L0 0z" />
            </svg>
          )}
          {playing ? "Pause Demo" : "Listen Demo"}
        </button>
      </div>
    </div>
  );
}
