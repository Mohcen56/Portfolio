'use client';
import React from 'react';
import Image from 'next/image';

const logos1 = [
  { id: 1, src: '/logos/reactjs-icon.svg', alt: 'React' },
  { id: 2, src: '/logos/tailwindcss-icon.svg', alt: 'Tailwind CSS' },
  { id: 3, src: '/logos/nextjs-icon.svg', alt: 'Next.js' },
  { id: 4, src: '/logos/javascript-icon.svg', alt: 'JavaScript' },
  { id: 5, src: '/logos/typescriptlang-icon.svg', alt: 'TypeScript' },
  { id: 6, src: '/logos/nodejs-horizontal.svg', alt: 'Node.js' },
  { id: 7, src: '/logos/python-icon.svg', alt: 'Python' },
  { id: 8, src: '/logos/css.svg', alt: 'CSS' },
  { id: 9, src: '/logos/w3_html5-icon.svg', alt: 'HTML5' },
  { id: 10, src: '/logos/git-scm-icon.svg', alt: 'Git' },
  { id: 11, src: '/logos/postgresql-icon.svg', alt: 'PostgreSQL' },



];

function Logomarquee() {
  // Inject keyframes dynamically since Tailwind doesn’t support `cqw`
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Marquee subcomponent
  const Marquee = ({
    logos,
    direction = 'forwards',
  }: {
    logos: typeof logos1;
    direction?: string;
  }) => {
    const speed = '25s';
    const itemWidth = '120px';
    const itemGap = '25px';

    return (
      <div
        className="max-w-full overflow-hidden"
        style={
          {
            '--speed': speed,
            '--item-width': itemWidth,
            '--item-gap': itemGap,
            '--direction': direction,
          } as React.CSSProperties
        }
      >
        <div className="w-max flex">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-white"
              style={
                {
                  width: 'var(--item-width)',
                  aspectRatio: '1 / 1.2',
                  marginRight: 'var(--item-gap)',
                  animation: `marquee-move var(--speed) linear infinite ${direction}`,
                } as React.CSSProperties
              }
            >
              <div className="w-3/5 h-auto">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div className="items-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col gap-y-6">
        <Marquee logos={logos1} />
      </div>
    </div>
  );
}

export default Logomarquee;
