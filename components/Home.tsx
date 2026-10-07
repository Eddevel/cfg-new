'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Define TypeScript interfaces
interface Service {
  name: string;
}

interface CoreValue {
  name: string;
}

export default function Home() {
  // References for GSAP context and elements
  const component = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const coreValuesRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const presidentRef = useRef<HTMLElement>(null);

  // Service and Core Values data
  const services: Service[] = [
    { name: 'ICT/MGT Consultants' },
    { name: 'Real Estate Managers' },
    { name: 'Venture Capitalist' },
    { name: 'Transportation' },
    { name: 'Agriculture' },
    { name: 'Oil and Gas' },
  ];

  const coreValues: CoreValue[] = [
    { name: 'Respect' },
    { name: 'Excellence' },
    { name: 'Integrity' },
    { name: 'Speed' },
    { name: 'Responsiveness' },
  ];

  useLayoutEffect(() => {
  // Create GSAP context
  const ctx = gsap.context(() => {
    // Animate h1 text (WELCOME TO COOKEY FRANKLINS GROUP)
    if (h1Ref.current) {
      const splitText = new SplitText(h1Ref.current, { type: 'chars' });
      gsap.from(splitText.chars, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    // Animate About section
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelectorAll('h2, p, button'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Animate Services section
    if (servicesRef.current) {
      gsap.from(servicesRef.current.querySelectorAll('.service-card'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Animate Core Values section
    if (coreValuesRef.current) {
      const coreValueItems = coreValuesRef.current.querySelectorAll('li');
      if (coreValueItems.length > 0) {
        gsap.from(coreValueItems, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: coreValuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }

    // Animate Vision and President sections
    if (visionRef.current && presidentRef.current) {
      gsap.from([visionRef.current, presidentRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Refresh ScrollTrigger to handle dynamic DOM updates
    ScrollTrigger.refresh();
  }, component);

  // Cleanup on unmount
  return () => {
    ctx.revert(); // Reverts all animations and kills ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <div ref={component}>
      <section className="bg-[url(/assets/cfg-logo000.png)] bg-no-repeat bg-center bg-contain text-gray-900 mt-3 text-center content-center">
        <div className="bg-white/30 backdrop-blur-none  ">
          <h1 ref={h1Ref} className="text-2xl   md:text-5xl p-10 text-center text-blue-900  w-90 md:w-full font-bold h-100 content-center">
            WELCOME TO COOKEY FRANKLINS GROUP
          </h1>
          
        </div>
        
      </section>
      <p className="text-lg font-bold text-orange-600 text-center md:text-xl max-w-2xl mx-auto">
            We See The Next Height...
          </p>

      {/* About Section */}
      <section ref={aboutRef} className="p-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
          About Us
        </h2>
        <p className="text-lg text-black ">
          We focus on the issues that demand urgent solutions to teeming business challenges, General
          Merchandising, Investment and Advisory portfolios managers, Mutual Fund manager and Venture
          capital managers, Energy solutions: Power and Petroleum, Real Estate: Design and
          Construction Engineering, Real Estate Consultancy: building, rentals and leasing,
          Information Communication and Management Technology(ICT), Agriculture: Food beverages and
          water technology, Logistics: Transport shipping, aviation and general transportation
          management system. Committed to building and sustaining globally.
          <Link className='hover:text-gray-900 text-white bg-red-500 p-1 rounded-lg text-lg hover:bg-blue-600 mx-1 ' href="/about">Read More</Link>
          
        </p>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Service Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={coreValuesRef} className="core-values-section py-10 shadow-2xl">
        <h2 className="text-3xl text-blue-600 font-bold text-center mb-8">Group Core Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 md:p-10 text-center">
          {coreValues.map((value, index) => (
            <li key={index} className="text-lg font-medium md:m-3">{value.name}</li>
          ))}
        </ul>
      </section>

      {/* Vision and President Sections */}
      <div className="flex flex-col md:flex-row mb-2">
        <section ref={visionRef} className="vision-section bg-gray-900 text-white py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            To be the foremost pan-African conglomerate offering services that bridge the need gap of
            families and corporate/government establishments.
          </p>
        </section>

        <section ref={presidentRef} className="president-section py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">The Group President</h2>
          <p className="text-lg text-black">
            Our commitment is to deliver unparalleled value to our clients and stakeholders.
          </p>
          <Button className="bg-red-500 mt-5">
            <Link href="/president">President Corner</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}