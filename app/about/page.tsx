'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);// Define TypeScript interface for service data
interface Service {
  title: string;
  description: string;
  image: string;
}export default function AboutPage() {
  const mainRef = useRef<HTMLElement>(null);  useLayoutEffect(() => {
    // Create GSAP context to manage animations and cleanup
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.head', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });  // Service Items Animation
  gsap.utils.toArray<HTMLElement>('.service-item').forEach((element, index) => {
    // Parent animation (alternate left/right)
    gsap.from(element, {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Even: from left, Odd: from right
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Image animation within .nod
    gsap.from(element.querySelector('.nod img'), {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Description animation within .nod (opposite direction of parent)
    gsap.from(element.querySelector('.nod p'), {
      opacity: 0,
      x: index % 2 === 0 ? 50 : -50, // Opposite direction of parent
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Refresh ScrollTrigger to handle dynamic DOM updates
  ScrollTrigger.refresh();
}, mainRef); // Scope animations to mainRef

// Cleanup on unmount
return () => ctx.revert();  }, []);  // Service data with TypeScript typing
  const services: Service[] = [
    {
      title: 'General Merchandising',
      description:
        'We deal with various products for general public use. Every product from our company is tested, trusted, and approved.',
      image: '/assets/tranship.jpg',
    },
    {
      title: 'Investment and Advisory Portfolios Managers',
      description:
        'We are money managers, investment consultants, and advisors. Our top-notch services include advising on asset allocation, market trends, and managing investment portfolios end-to-end.',
      image: '/assets/ictmgt1.jpg',
    },
    {
      title: 'Mutual Fund and Venture Capital Managers',
      description:
        'We invest in early-stage, expansion-stage, and acquisition-stage businesses, as well as publicly listed companies with high growth potential.',
      image: '/assets/venture1.jpg',
    },
    {
      title: 'Energy Solutions',
      description:
        'We commit to building and sustaining a globally recognized Pan-African PREMIUM ENERGY (Petroleum Products) services and distribution WAREHOUSE.',
      image: '/assets/AVK-0001.jpg',
    },
    {
      title: 'Real Estate',
      description:
        'Our properties feature modern, well-constructed designs with beautiful aesthetics, offering top-notch price, condition, and availability.',
      image: '/assets/realstate2.jpg',
    },
    {
      title: 'Real Estate Consultancy',
      description: 'We provide expert advice and recommendations to clients looking to purchase or develop property.',
      image: '/assets/realestate1.jpg',
    },
    {
      title: 'Information Communication and Management Technology (ICT)',
      description:
        'Our diverse set of technological tools and resources are used to transmit, store, create, share, or exchange information.',
      image: '/assets/ictmgt2.jpg',
    },
    {
      title: 'Agriculture',
      description:
        'We cultivate natural resources to sustain human life and provide economic gain, combining creativity and modern production methods.',
      image: '/assets/agric2.jpg',
    },
    {
      title: 'Logistics',
      description:
        'We handle various transportation systems including shipping, aviation, and general transport management, import-export, freight forwarding, and stevedoring.',
      image: '/assets/transroad.jpg',
    },
  ];  return (
    <main className="min-h-screen bg-gray-50" ref={mainRef}>
      <div className="about max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="head text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We focus on the issues that demand urgent solution to teaming business challenges
          </p>
        </div>
        <div className="aboutbody">
          <h4 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Service Interest</h4>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000, // 5 seconds autoplay delay
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h6 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h6>
                    <div className="nod flex flex-col md:flex-row gap-6 items-center">
                      <p className="text-gray-600 flex-1">{service.description}</p>
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="w-full md:w-1/3 h-48 object-cover rounded-md"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
}

