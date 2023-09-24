import React, { useCallback } from 'react'
import Particles, { ISourceOptions } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Link from 'next/link';

const Herobar = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className='h-11/12 relative'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#b5b5b5",
                    },
                    links: {
                        color: "#b5b5b5",
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 70,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
        }}
      />

      <div className="relative z-10 w-full flex flex-col justify-center px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-30">
          <div className="max-w-xl sm:mx-auto lg:max-w-6xl">
            <div className="flex flex-col my-16 sm:text-center sm:mb-0">
              <Link href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-14 h-14 text-blue-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </Link>
              <div className="max-w-xl mb-24 md:mx-auto sm:text-center lg:max-w-3xl md:mb-44">
                <h2 className="mb-6 font-sans text-black text-6xl font-bold leading-none tracking-tight md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-40 -mt-8 -ml-24 text-deep-purple-accent-800 lg:w-32 lg:-ml-24 lg:-mt-8 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Welcome</span>
                  </span>{' '}
                  to Open Code Era
                </h2>
                <p className="text-base text-gray-900 md:text-lg">
                  Its Open Code Era — your source for everything open source, knowledge, and collaboration!
                </p>
                <p className="my-10 text-blue-800 text-2xl font-semibold">
                Learn . Contribute . Grow
                </p>
              </div>
              <div class="flex flex-col items-center justify-center animate-bounce gap-2">
                <span
                  className="text-black font-normal text-lg"
                >
                  scroll down
                </span>
                <svg class="w-6 h-6 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>          
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Herobar;