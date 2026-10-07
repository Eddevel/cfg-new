'use client'; // Mark as Client Component for GSAP and client-side features

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'; // Verify import path for Shadcn components
import Autoplay from 'embla-carousel-autoplay'; // Import Autoplay plugin

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // GSAP Animations
    // Header animation
    gsap.fromTo(
      '.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Body text animation
    gsap.fromTo(
      '.body > p, .body > h1, .body > h3',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );

    // List items (logos) animation
    gsap.fromTo(
      '.logo-list li',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1,
      }
    );

    // Service section images animation
    gsap.fromTo(
      '.service-section img',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.service-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-30 font-sans ">
      <div className="container max-w-7xl mx-auto ">
        <div className="header flex justify-center items-center">
          <Image
            src="/assets/cfcllogo.png" // Static import; ensure public/assets/cfcllogo.png exists
            alt="CFCL Parent Company Logo"
            width={50}
            height={50}
            className="w-10 md:w-15 h-auto object-contain"
            placeholder="blur"
          />
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-red-600 ">
            Cookey Franklins Consulting Limited
          </h1>
        </div>
        <div className="body px-5">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center ">
            Our Company (CFCL) is the parent company of the group and it&apos;s an
            investment and advisory arm of the group.
          </p>
          <ul className="logo-list grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { src: '/assets/cfoillogo.jpg', alt: 'Cfoil Company Logo' },
              { src: '/assets/cfanlog.jpeg', alt: 'CFAN Contractors Logo' },
            ].map((item, index) => (
              <li key={index} className="flex justify-center">
                <Image
                  src={item.src} // Ensure public/assets/cfoillogo.jpg and cfanlog.jpeg exist
                  alt={item.alt}
                  width={400}
                  height={200}
                  className="w-64 md:w-96 h-auto object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </li>
            ))}
          </ul>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Service Interests
          </h1>
          {[
            {
              title: 'ICT/MGT Consultants',
              images: [
                { src: '/assets/ictmgt1.jpg', alt: 'ICT Management 1' },
                { src: '/assets/ictmgt2.jpg', alt: 'ICT Management 2' },
                { src: '/assets/ictmgt3.jpg', alt: 'ICT Management 3' },
              ],
            },
            {
              title: 'Real Estate Managers',
              images: [
                { src: '/assets/realestate1.jpg', alt: 'Real Estate Project 1' },
                { src: '/assets/realstate2.jpg', alt: 'Real Estate Project 2' }, // Note: Verify filename (possible typo)
                { src: '/assets/reales2.jpeg', alt: 'Real Estate Project 3' },
                { src: '/assets/reales02.jpeg', alt: 'Real Estate Project 2' },
                { src: '/assets/reales5.jpeg', alt: 'Real Estate Project 3' },
              ],
            },
            {
              title: 'Venture Capitalist',
              images: [
                { src: '/assets/venture1.jpg', alt: 'Venture Capital 1' },
                { src: '/assets/venture2.jpg', alt: 'Venture Capital 2' },
                { src: '/assets/naira.jpg', alt: 'Venture Capital Currency' },



              ],
            },
            {
              title: 'Transportation',
              images: [
                { src: '/assets/transair.jpg', alt: 'Air Transportation' },
                { src: '/assets/tranship.jpg', alt: 'Ship Transportation' },
                { src: '/assets/transroad.jpg', alt: 'Road Transportation' },
              ],
            },
            {
              title: 'Oil and Gas',
              images: [
                { src: '/assets/cfoil1.jpeg', alt: 'Cfoil Station 1' },
                { src: '/assets/oilrig1.jpg', alt: 'Oil Rig 1' },
                { src: '/assets/cfoilso2.jpeg', alt: 'Cfoil Station 1' },
                { src: '/assets/oiloffshore.jpg', alt: 'Cfoil Station 1' },
              ],
            },
            {
              title: 'Agriculture',
              images: [
                { src: '/assets/agric1.jpg', alt: 'Agriculture Project 1' },
                { src: '/assets/agric2.jpg', alt: 'Agriculture Project 2' },
                { src: '/assets/agric3.jpg', alt: 'Agriculture Project 3' }, // Note: Repeated image; consider replacing
              ],
            },
            {
              title: 'Finance and Insurance',
              images: [
                { src: '/assets/finance1.jpg', alt: 'Finance Service 1' },
                { src: '/assets/finance2.jpg', alt: 'Finance Service 2' },
                { src: '/assets/finance3.jpg', alt: 'Finance Service 3' },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="service-section mb-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {section.title}
              </h3>
              <Carousel
                className="w-full"
                opts={{
                  align: 'start',
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000, // Autoplay with 5-second delay
                  }),
                ]}
              >
                <CarouselContent className="-ml-4">
                  {section.images.map((img, imgIndex) => (
                    <CarouselItem
                      key={imgIndex}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={img.src} // Ensure each image exists in public/assets/
                          alt={img.alt}
                          fill
                          className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}