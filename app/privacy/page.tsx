'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicyPage() {
  const mainRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in animation for sections
      gsap.utils.toArray<HTMLElement>('.policy-section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-gray-30" ref={mainRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-2">
        <div className="text-center mb-4">
          <h1 className="text-lg md:text-3xl font-bold text-red-600 mb-4">Privacy Policy</h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Effective Date: January 1, 2025
          </p>
        </div>

        <div className="space-y-4">
          {/* Introduction */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Introduction</h2>
            <p className="text-gray-600">
              At Cookey Franklins Group, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services in general merchandising, investment advisory, energy solutions, real estate, ICT, agriculture, logistics, finance, and related areas. By using our services, you consent to the practices described herein.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personal Information: Name, email, address, phone number, and identification details provided during investment consultations or real estate inquiries.</li>
              <li>Financial Information: Bank details, investment portfolios, and transaction history for finance and venture capital services.</li>
              <li>Usage Data: IP address, browser type, pages visited, and cookies for analytics in our ICT and web app features.</li>
              <li>Other: Location data for logistics or energy services, if applicable.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your data to provide and improve services, such as managing investment portfolios, offering real estate advice, or distributing energy solutions. We may also use it for marketing (with opt-out options), compliance with laws, and internal analytics.
            </p>
          </section>

          {/* Sharing Your Information */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Sharing Your Information</h2>
            <p className="text-gray-600">
              We share data with affiliates, service providers (e.g., payment processors for finance), and authorities as required by law. We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          {/* Data Security */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement encryption, firewalls, and access controls to protect your data. In case of a breach, we will notify affected users promptly.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600">
              You have the right to access, correct, delete, or restrict your data. Contact us to exercise these rights. For GDPR/POPIA compliance, we support data portability and objection to processing.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600">
              We use cookies for functionality and analytics. You can manage preferences via your browser settings.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">International Data Transfers</h2>
            <p className="text-gray-600">
              As a Pan-African company, data may be transferred across borders. We use safeguards like standard contractual clauses to ensure protection.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for children under 16. We do not knowingly collect data from minors.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this policy periodically. Changes will be posted here with the new effective date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="policy-section bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For questions, email privacy@cookeyfranklinsgroup.com or write to <br />No 1A, Cookey Franklins Lane, Behind OPIC Plaza, MTR Estate by Opic Bus stop, Off Lagos-Ibadan Express way, Isheri-North.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}