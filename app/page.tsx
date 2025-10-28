'use client';


import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Resume from "@/components/resume";
import Projects from '@/components/projects';
import Logomarquee from '@/components/logomarquee';
import { CTA_BUTTON_BASE } from '@/lib/constants';
import { cn } from '@/lib/utils';


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [] = useState<Record<string, boolean>>({});
  const typingRef = useRef<HTMLSpanElement | null>(null);
  const socialLinkBase =
    "flex h-[30px] w-[30px] items-center justify-center overflow-hidden  text-[var(--text-black-900)] no-underline transition duration-300 ease-in-out transform hover:scale-[1.5] hover:rounded-[15px] active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--skin-color)] md:h-[60px] md:w-[60px] text-[20px]  md:text-[40px]";
  const heroCtaClasses = cn(CTA_BUTTON_BASE, "mt-4 md:mt-0 md:ml-[200px] md:text-lg");


  // Typed.js effect
  useEffect(() => {
    if (typingRef.current) {
      const typed = new Typed(typingRef.current, {
        strings: ['Software Engineer', 'Student', 'Web Developer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
      });

      return () => typed.destroy();
    }
  }, []);

  // ScrollReveal effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true,
        });

        sr.reveal('.home-info');
        sr.reveal('.home-img', { delay: 100 });
        sr.reveal('.featured-text-btn', { delay: 200 });
        sr.reveal('.social_icons', { delay: 200 });
        sr.reveal('.left-column', { origin: 'left', delay: 100 });
        sr.reveal('.right-column', { origin: 'right', delay: 100 });
        sr.reveal('.job', { interval: 200 });
        sr.reveal('.work', { interval: 200 });
      });
    }
  }, []);

  // Toggle function for mobile menu
  const toggleMobileMenu = () => setIsMenuOpen((open) => !open);

  return (
    <>
      <header>
        <div className="relative flex w-full items-center justify-center gap-4 px-4 py-4 sm:px-8 md:justify-between">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-sm backdrop-blur transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--skin-color)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </button>

          <a href="#" className="logo-holder" title="Home" aria-label="Home">
            <div className="logo">
              <Image src="/imgs/mohcen.png" alt="Profile Picture" className="profile-pic" width={100} height={100} />
            </div>
          </a>

          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-8 text-base font-semibold uppercase tracking-[0.3em] text-white">
            <a className="glow-text" href="#home">
              Home
            </a>
            <a className="glow-text" href="#about">
              About Me
            </a>
            <a className="glow-text" href="#projects">
              Projects
            </a>
          </nav>

          <a
            href="mailto:genkaiju1@gmail.com"
            className={cn(CTA_BUTTON_BASE, "hidden md:inline-flex px-6 py-2 text-sm md:ml-auto")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[1050] bg-black/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
          role="presentation"
        >
          <div
            className="absolute inset-x-6 top-24 rounded-3xl border border-white/10 bg-[rgba(21,21,21,0.95)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <ul className="flex flex-col gap-6 text-center text-lg font-semibold uppercase tracking-[0.3em] text-white">
              <li>
                <a className="glow-text block" href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a className="glow-text block" href="#about" onClick={() => setIsMenuOpen(false)}>
                  About Me
                </a>
              </li>
              <li>
                <a className="glow-text block" href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </li>
            </ul>
            <a
              href="mailto:genkaiju1@gmail.com"
              className={cn(CTA_BUTTON_BASE, "mt-8 w-full justify-center text-center")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      )}
      <main className="snap-y snap-mandatory min-h-screen">
        <section id="home" className="snap-start min-h-screen flex flex-col items-center justify-center">
          <div className="container">
            <div className="row">
              <div className="home-info">
                <h3 className="hello">
                  Hello, my name is <span className="name">Mohcen</span>
                </h3>
                <h3 className="my-profession">
                  I&apos;m a <span className="typing" ref={typingRef} />
                </h3>
                <p>
                  Welcome! I&apos;m a software engineering student with a passion for web development and AI. 
                  and I&apos;ve built this Portfolio to show my current and future side projects.
                </p>
                <div className="flex items-center gap-5 flex-wrap p-4">

                  <a
                    href="https://www.linkedin.com/in/djeidmohcen"
                    className={`${socialLinkBase} hover:bg-[#0072b1] hover:text-[var(--bg-black-900)]`}
                    target="_blank"
                    rel="noopener"
                    title="LinkedIn Profile"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href="https://github.com/Mohcen56"
                    className={`${socialLinkBase} hover:bg-[#181717] hover:text-white`}
                    target="_blank"
                    rel="noopener"
                    title="GitHub Profile"
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Mogen.dev"
                    className={`${socialLinkBase} hover:bg-[#FF0000] hover:text-white`}
                    target="_blank"
                    rel="noopener"
                    title="YouTube Channel"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a
                    href="https://wa.me/+905355235640"
                    className={`${socialLinkBase} hover:bg-[#25d366] hover:text-[var(--bg-black-900)]`}
                    target="_blank"
                    rel="noopener"
                    title="WhatsApp Contact"
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                  <a
                    href="mailto:genkaiju1@gmail.com"
                    className={heroCtaClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Hire Me</span>
                  </a>
                </div>
              </div>
              <div className="home-img">
                <Image src="/imgs/mohcen.png" alt="Profile secondary" width={500} height={500} />
              </div>
            </div>
          </div>
      
          <Logomarquee />
        </section>
        <section className="snap-start min-h-screen flex items-center justify-center" id="about">
          <div className="container">
              <Resume />
          </div>
        </section>
        <section className="snap-start min-h-screen flex items-center justify-center" id="projects">
          <div className="container">
     <Projects />
     </div>
        </section>
      </main>
      {/* --------------- FOOTER --------------- */}
      <footer>
        <div className="name">
          <p>Mohcen</p>
        </div>
        <div className="footer-social-icons">
          <a
            href="https://www.linkedin.com/in/djeidmohcen"
            className={`${socialLinkBase} hover:bg-[#0072b1] hover:text-[var(--bg-black-900)]`}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/Mohcen56"
            className={`${socialLinkBase} hover:bg-[#181717] hover:text-white`}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.youtube.com/@Mohgen"
            className={`${socialLinkBase} hover:bg-[#FF0000] hover:text-white`}
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube Channel"
            aria-label="YouTube Channel"
          >
            <i className="fa-brands fa-youtube" />
          </a>
          <a
            href="https://wa.me/+905355235640"
            className={`${socialLinkBase} hover:bg-[#25d366] hover:text-[var(--bg-black-900)]`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Contact"
            aria-label="WhatsApp Contact"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
        <div className="bottom-footer">
          <p>
            Copyright © <a href="#home" className="no-underline">Mohcen</a> - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
