"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: 0.5 },
          },
          bubble: {
            distance: 200,
            size: 8,
            duration: 2,
            opacity: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: ["#06b6d4", "#0ea5e9", "#10b981", "#34d399"],
        },
        links: {
          color: "#06b6d4",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 120,
        },
        opacity: {
          value: { min: 0, max: 0.9 },
          animation: { enable: true, speed: 1, minimumValue: 0.2 },
        },
        shape: {
          type: ["circle"],
        },
        size: {
          value: { min: 1, max: 9 },
          animation: { enable: true, speed: 2, minimumValue: 0.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
