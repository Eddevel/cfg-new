'use client'; // Mark as Client Component

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

    // Core values animation
    gsap.fromTo(
      '.core-value',
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

    // Image carousel animation (core, cfanon, imglist1)
    gsap.utils.toArray<HTMLElement>('.image-section, .imglist1').forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.carousel-item img'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-10 p-1">
      <div className="container m-auto">
        <div className="header flex justify-center items-center">
          <Image
            src="/assets/cfanlog.png" // Ensure public/assets/cfanlog.png exists
            alt="CFAN Contractors Logo"
            width={90}
            height={100}
            placeholder="blur"
            className="w-10 md:w-20 h-auto object-contain"
          />
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-red-600">
            Cfan Contractor Limited
          </h1>
        </div>
        <div className="body">
          <div className="rounded-lg mb-5 p-5">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Introduction</h4>
            <p className="text-lg text-gray-700 mb-6">
              CFAN Contractors Ltd is a dynamic and result-oriented Engineering
              consortium engaged in Civil Engineering and Project Management.
              Its technical operations cover the areas of Civil works, Civil
              Engineering Designs, Civil Engineering Testing, Commercial
              Properties: Sale, Leasing and Rentals, and Hospitality Service the Company-Client involvements include brief
              development, soil investigation, project design, and construction
              management. To achieve this, the company is packed with experienced
              and talented professionals, exposed in both the private and public
              sectors of Nigerian Engineering practice.
            </p>
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide the most reliable and well-engineered solutions to
              construction needs of our teeming clients by adhering strictly to
              approved and well-established industry standard-ethics, achieving
              higher levels of productivity and profitability through realistic
              management policy.
            </p>
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Our Mission</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By recruiting and deploying to site well-motivated, well-trained
              personnel who are highly skilled with a huge knack for research and
              personal-organizational growth.
            </p>
            <h4 className="text-xl font-semibold text-blue-600 mb-4">CFAN Core Values</h4>
            <ul className="list-disc pl-6 mb-6">
              {[
                'Excellence',
                'Integrity',
                'Safety',
                'Promptness',
                'Research',
                'Growth',
              ].map((value, index) => (
                <li key={index} className="core-value text-lg text-gray-700 mb-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="core image-section">
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
              <span className="text-blue-600">COMING SOON...</span> CFAN Island
            </h1>
            <Carousel
              className="w-full m-6"
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
            >
              <CarouselContent className="-ml-4">
                {['cfan6.jpeg', 'cfan5.jpeg', 'cfan9.jpeg', 'cfan7.jpeg', 'cfan8.jpeg', 'cfan4.jpeg'].map(
                  (img, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 carousel-item"
                    >
                      <div className="relative w-full h-40">
                        <Image
                          src={`/assets/${img}`} // Ensure images exist in public/assets/
                          alt={`CFAN Island Project ${index + 1}`}
                          fill
                          className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="cfanon image-section">
            <h1 className="text-2xl font-bold text-blue-600 text-center m-5">
              Ongoing CFAN Annex Office Project
            </h1>
            <Carousel
              className="w-full m-6"
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
            >
              <CarouselContent className="-ml-4">
                {['cfanon1.jpeg', 'cfanon2.jpeg', 'cfanon3.jpeg', 'cfanon4.jpg', 'cfanon5.jpg', 'cfanon6.jpg'].map(
                  (img, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 carousel-item"
                    >
                      <div className="relative w-full h-40">
                        <Image
                          src={`/assets/${img}`} // Ensure images exist in public/assets/
                          alt={`CFAN Annex Office ${index + 1}`}
                          fill
                          className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="cfanon image-section">
            <h1 className="text-2xl font-bold text-blue-600 text-center m-5">
              Cfoil Stations Built by CFAN
            </h1>
            <Carousel
              className="w-full m-6"
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
            >
              <CarouselContent className="-ml-4">
                {['cfoil1.jpeg', 'cfoil2.jpeg'].map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 carousel-item"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        src={`/assets/${img}`} // Ensure images exist in public/assets/
                        alt={`Cfoil Station ${index + 1}`}
                        fill
                        className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="building bg-gray-100 py-12">
        <div className="container max-w-7xl mx-auto p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Few Built-to-Sell Residential/Office Apartments
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            General Constructions ranging from international building projects to
            small-scale building projects.
          </p>
          <Carousel
            className="w-full"
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
          >
            <CarouselContent className="-ml-4">
              {['reales9.jpeg', 'reales01.jpeg', 'reales2.jpeg', 'reales3.jpeg', 'reales1.jpeg', 'reales8.jpeg'].map(
                (img, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 carousel-item imglist1"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={`/assets/${img}`} // Ensure images exist in public/assets/
                        alt={`Residential Project ${index + 1}`}
                        fill
                        className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}