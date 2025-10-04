'use client';

import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export default function FloatingGoldParticles() {
  console.log('🎉 FloatingGoldParticles component mounted!');

  useEffect(() => {
    console.log('✨ Initializing particles engine...');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      console.log('✅ Particles engine loaded successfully!');
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
          },
        },
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      color: {
        value: ['#FFE55C', '#FFEA70', '#FFD700'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      size: {
        value: { min: 2, max: 6 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#FFE55C',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'top',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    detectRetina: true,
    reduceDuplicates: true,
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
