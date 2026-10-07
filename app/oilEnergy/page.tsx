'use client'; // Mark as Client Component for GSAP animations

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

    // Content text animation
    gsap.fromTo(
      '.content > *',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 1,
      }
    );

    // Filling station images animation (carousel)
    gsap.fromTo(
      '.cfoil .carousel-item img',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.cfoil',
          start: 'top 60%',
        },
      }
    );

    // Oil section animation
    gsap.fromTo(
      '.oil > .container > *',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.oil',
          start: 'top 60%',
        },
      }
    );

    // Petrocard section animation
    gsap.fromTo(
      '.petrocard > .container > *',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.petrocard',
          start: 'top 60%',
        },
      }
    );

    // Petrocard images animation
    gsap.fromTo(
      '.petrocard img',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.petrocard',
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-30 font-sans p-2">
      <div className="container m-auto rounded-lg">
        <div className="reas">
          <div className="header flex justify-center items-center">
            <Image
              src="/assets/cfoillogo.png" // Ensure public/assets/cfoillogo.png exists
              alt="Cfoil Energy Logo"
              width={100}
              height={100}
              placeholder="blur"
              className="w-16 md:w-24 h-auto object-contain"
            />
            <h1 className="flex text-lg md:text-3xl lg:text-4xl font-bold text-red-600 items-center">
              Cfoil Energy Service
              <p className="text-sm font-light ml-2">(Ng) Limited</p>
            </h1>
          </div>
          <div className="body rounded-lg p-5">
            <div className="content">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Vision</h4>
              <p className="text-lg text-black mb-6">
                We commit to building and sustaining a globally recognized and
                foremost Pan-African PREMIUM ENERGY (Petroleum Products) services
                and distribution WAREHOUSE.
              </p>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h4>
              <p className="text-lg text-black mb-6">
                We are poised to bridge the ENERGY (Petroleum Products) supply gap
                by ensuring regular quality products availability to the teeming
                consumers through our team of specialized and highly motivated
                workforce.
              </p>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Interests</h4>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-lg text-black mb-2">Oil and Gas</li>
                <li className="text-lg text-black mb-2">Domestic Gas</li>
                <li className="text-lg text-black mb-2">Lubricant</li>
                <li className="text-lg text-black mb-2">Shipping/Haulage</li>
                <li className="text-lg text-black mb-2">
                  Global Partnership/Ownership (Petrocard Czech filling stations)
                </li>
              </ul>
            </div>
          </div>
          <div className="cfoil">
            <h1 className="text-2xl font-bold text-blue-900 m-5">
              One of our filling stations
            </h1>
            <Carousel
              className="w-full mb-8"
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
            >
              <CarouselContent className="-ml-4">
                {[
                  { src: '/assets/cfoilso2.jpeg', alt: 'Cfoil Filling Station 2' },
                  { src: '/assets/cfoilso3.jpeg', alt: 'Cfoil Filling Station 3' },
                  { src: '/assets/cfoilso1.jpeg', alt: 'Cfoil Filling Station 1' },
                  { src: '/assets/cfoilso1.jpeg', alt: 'Cfoil Filling Station 1' },
                  { src: '/assets/cfoilso1.jpeg', alt: 'Cfoil Filling Station 1' },
                ].map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 carousel-item"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.src} // Ensure images exist in public/assets/
                        alt={item.alt}
                        fill
                        className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="oil px-5">
            <div className="container">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Cfoil Energy Services
              </h3>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Oil and Gas</h4>
              <p className="text-lg text-black leading-relaxed mb-6">
                At Cfoil Energy, our ambition is to be recognised as a leading
                supplier of oil and gas, extracting the valuable energy that the
                world needs. We believe that we can serve our many stakeholders by
                executing our operations safely, efficiently and conscientiously
                with due consideration for the communities in which we operate.
              </p>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Domestic Gas</h4>
              <p className="text-lg text-black leading-relaxed mb-6">
                Cfoil Energy provides Domestic gas for home and industrial use in
                various components and extraction.
              </p>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Lubricants</h4>
              <p className="text-lg text-black leading-relaxed mb-6">
                Cfoil Energy provides a wide range of lubricants for vehicles and
                industrial machines.
              </p>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Shipping/Haulage</h4>
              <p className="text-lg text-black leading-relaxed mb-6">
                Cfoil Energy engages in the shipping/Haulage of petroleum products
                to designated locations.
              </p>
            </div>
          </div>
          <div className="petrocard px-5">
            <div className="container">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Cfoil Portable Mobile Filing Station (AVK)
              </h3>
              <div className="p1 flex flex-col md:flex-row gap-6 mb-6 items-center">
                <p className="text-lg text-black leading-relaxed flex-1">
                  Cfoil Energy services proudly presents an original design based
                  on the worldwide patented technology of a large-capacity
                  automatic petrol station intended for dispensing of liquids and
                  gases. It is simply a shipping container with an internal tank
                  and equipment allowing fuels to be dispensed without the need for
                  an attendant.
                </p>
                <Image
                  src="/assets/AVK-0001.jpg" // Ensure public/assets/AVK-0001.jpg exists
                  alt="Cfoil AVK Portable Filling Station"
                  width={400}
                  height={300}
                  className="rounded-md shadow-sm"
                />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                The device is intended for:
              </h4>
              <ul className="list1 list-disc pl-6 mb-6">
                {[
                  'Areas with a low density of traditional filling stations, villages, resort areas.',
                  'Airports, ports, construction sites and freight yards logistic centres.',
                  'State administration and local government for handling crisis situations (areas affected by catastrophes, floods or war conflicts).',
                  'Security forces the army and police (fuel supply in crisis areas).',
                  'Factory filling stations.',
                  'Enlarging the services in recreation facilities, shared car parks, etc.',
                ].map((item, index) => (
                  <li key={index} className="text-lg text-black mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p1 flex flex-col md:flex-row gap-6 mb-6">
                <Image
                  src="/assets/AVK-0008.jpg" // Ensure public/assets/AVK-0008.jpg exists
                  alt="Cfoil AVK Portable Filling Station Control"
                  width={400}
                  height={300}
                  className="rounded-md shadow-sm"
                />
                <p className="text-lg text-black leading-relaxed flex-1">
                  This automat enables the self-service sale or simply issue of
                  fuels with remote control and remote data transfer. When tanking
                  up with liquids, the customer uses a contact-less chip card to
                  pay for the quantity consumed (the chip card serves as an
                  electronic wallet) or simply as identification (the chip card
                  serves as an identification card). The network of filling
                  stations which can be situated anywhere in the world consists of
                  stand-alone liquid vending machines (dispensers). GSM network
                  supporting GPRS transfer is used for communication between the
                  vending machines and the centre. In case that this transfer is
                  not available satellite internet communication can be used.
                </p>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                AVK 01.1 portable filling station comprises of:
              </h4>
              <ul className="list1 list-disc pl-6 mb-6">
                {[
                  'Automatic sales device for liquids (fuel tank, hydraulic unit, issue equipment, unit for registration of quantity and price of issued liquid, control and data transfer unit, charging unit).',
                  'Handling area special handling, and cleaning auxiliary area serving also as a catching reservoir for oil elements.',
                  'Roofing of handling area with built-in lighting, and optional camera supervision.',
                  'Additional fuel tank container with operational capacity of 15,608 litres.',
                ].map((item, index) => (
                  <li key={index} className="text-lg text-black mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p2 mb-6">
                <p className="text-lg text-black leading-relaxed">
                  The filling and control systems of AVK 01.1 automat are placed in
                  a special 1CC container in accordance with the ISO 668. The
                  dimensions of the container are: length = 6.058 metres, width =
                  2.438 metres, height = 2.591 metres. The inner areas of the
                  automat are equipped with a system of active ventilation and an
                  automatic extinguishing system.
                </p>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                The technological equipment is divided into four basic parts:
              </h4>
              <ul className="list1 list-disc pl-6 mb-6">
                {[
                  'A double-shell cubic tank with a capacity of 5,500 litres or 9,975 litres or 13,740 of stored fuel.',
                  'A hydraulic module containing all necessary hydraulic systems for the fuel filling and vapour recuperation.',
                  'A filling module containing all the necessary hydraulics for filling of the fuel.',
                  'An electronic module for filling control, communication with the customer and the transfer of information to a network administrator.',
                ].map((item, index) => (
                  <li key={index} className="text-lg text-black mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                Payment System
              </h4>
              <div className="p1 flex flex-col md:flex-row gap-6 mb-6">
                <p className="text-lg text-black leading-relaxed flex-1">
                  The contact-less chip card operates using the MIFARE® technology
                  secured by the RSA protocol.
                </p>
                <Image
                  src="/assets/AVK-0002.jpg" // Ensure public/assets/AVK-0002.jpg exists
                  alt="Cfoil AVK Payment Chip Card"
                  width={400}
                  height={300}
                  className="rounded-md shadow-sm"
                />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                There are 3 different types:
              </h4>
              <ul className="list1 list-disc pl-6 mb-6">
                {[
                  'Card of fuel supplier (identification of the supplier, access to pump module only) will make filing of AVK possible.',
                  'Service card (identification of employee, access to internal space of AVK) will make controls and maintenance possible.',
                  'Customer card enabling issue of fuel to customers',
                ].map((item, index) => (
                  <li key={index} className="text-lg text-black mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list1 list-disc pl-6 mb-6">
                {[
                  'Electronic wallet (customer identification, detection of finance level on the card), designed for the public.',
                  'ID card (customer ID) designed for non-public filling stations. The customer can, for every electronic wallet, within the scope of his account and after entering his PIN, check it on-line on an Internet.',
                  'Disposable amount of the money on the account.',
                  'Place, date, hour and quantity of fuel dispensed.',
                  'Place, date and hour of electronic wallet charging.',
                  'Place, date and hour of electronic wallet blocking.',
                ].map((item, index) => (
                  <li key={index} className="text-lg text-black mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}