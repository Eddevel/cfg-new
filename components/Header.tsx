'use client'; // Mark as Client Component for GSAP animations

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';

gsap.registerPlugin(); // No ScrollTrigger needed for header animations

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Logo and title animation
      gsap.fromTo(
        '.header-logo, .header-title',
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        }
      );

      // Nav links animation (desktop)
      gsap.fromTo(
        '.nav-link',
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.4,
        }
      );

      // Sidebar toggle animation (mobile)
      gsap.fromTo(
        '.sidebar-toggle',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 0.6,
        }
      );
    }, headerRef);

    // Dynamic shadow on scroll
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header?.classList.add('shadow-xl');
      } else {
        header?.classList.remove('shadow-xl');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert(); // Cleanup GSAP animations
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-white shadow-md sticky top-0 z-50 py-3 px-4 sm:px-6 lg:px-8 transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-102 focus:scale-105 focus:outline-none"
          aria-label="Cookey Franklins Group Home"
        >
          <Image
            src="/assets/cfg-logo000.png" // Static import
            alt="Cookey Franklins Group Logo"
            width={40}
            height={40}
            className="header-logo w-10 sm:w-12 h-10 sm:h-12 object-contain"
            placeholder="blur"
            priority
          />
          <span className="header-title text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-900 tracking-tight">
            Cookey Franklins Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {[
            { href: '/consult', label: 'CFCL' },
            { href: '/contractor', label: 'Cfan-Contractors' },
            { href: '/oilEnergy', label: 'Cfoil-Energy' },
            { href: '/foundation', label: 'Foundation' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-blue-600 hover:text-blue-900 font-medium text-sm lg:text-base hover:font-bold transition-all duration-300 hover:bg-blue-50 hover:px-3 hover:py-1 hover:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Toggle (Mobile) */}
        <div className="lg:hidden sidebar-toggle">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}