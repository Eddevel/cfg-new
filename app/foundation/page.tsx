"use client"
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Page() {
  useEffect(() => {
    // GSAP Animations
    // Header animation
    gsap.fromTo(
      ".header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Container elements animation with stagger
    gsap.fromTo(
      ".container > *",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // List items animation
    gsap.fromTo(
      ".scheme-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-60 mb-5 m-1">
      <div className="header   text-center py-4">
        <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-red-600 ">
          The Cookey Franklins Foundation
        </h1>
      </div>
      <div className="container px-5 md:p-7 bg-[url(/assets/cfg-logo000.png)] bg-no-repeat bg-center  m-auto  ">
      <div className="bg-white/30 backdrop-blur-none border-1 border-white rounded-lg shadow-md px-3 py-5">
          <p className="md:text-lg text-black mb-6">
          The Cookey Franklins Foundation focuses on the issues that demand urgent
          solution and measurable result, health security, youth empowerment, self
          reliance, and community development.
        </p>
        <h3 className="md:text-2xl font-semibold text-blue-600 mb-1">
          Our Schemes
        </h3>
        <ul className="list-disc pl-6 mb-1">
          {[
            "EDUCATIONAL SCHEME",
            "TALENT HUNT",
            "FINANCIAL EMPOWERMENT",
            "VOCATIONAL SCHEME",
            "SKILLWORKSHOP PROJECT",
          ].map((scheme, index) => (
            <li key={index} className="scheme-item text-black md:text-lg mb-1">
              {scheme}
            </li>
          ))}
        </ul>
        <h3 className="md:text-2xl font-semibold text-blue-600 mb-1">
          How to Apply
        </h3>
        <p className="md:text-lg text-black mb-1">
          Send an email to{" "}
          <a
            href="mailto:foundation@cookeyfranklinsgroup.com"
            className="text-black hover:underline"
          >
            foundation@cookeyfranklinsgroup.com
          </a>
        </p>
        <h3 className="md:text-2xl font-semibold text-blue-600 ">About Us</h3>
        <p className="md:text-lg text-black leading-relaxed mb-1">
          The foundation focuses on the issues that demand urgent solution and
          measurable result, health security, youth empowerment, self reliance,
          and community development.
        </p>
        <h4 className="md:text-xl font-semibold text-blue-600 mb-1">
          Our Objective
        </h4>
        <p className="md:text-lg text-black mb-1">
          Creating wealth and sustenance through empowerment
        </p>
        <h4 className="md:text-xl font-semibold text-blue-600 mb-3">Our Mission</h4>
        <p className="md:text-lg text-black leading-relaxed mb-4">
          At The Cookey Franklins Foundation (TCFF), our aim is to provide free
          scholarship education to assist Nigerian students in the Barrack to
          pursue their studies to a successful end without much stress or
          suffering, encourage and reward excellence.
        </p>
        <p className="md:text-lg text-black leading-relaxed mb-6">
          To create conditions under which Nigerian Military college students can
          maximally realize their potential right up to the highest degrees of
          academic qualification and at internationally competitive levels.
        </p>
        <h3 className="md:text-xl font-semibold text-blue-600 mb-1">
          Contact Us
        </h3>
        <h5 className="md:text-lg text-black mb-3">
          For further inquiries and registration information, contact us at:
        </h5>
        <p className="md:text-lg text-black mb-2">
          Address: No 1A, Cookey Franklins Lane, Behind OPIC Plaza, MTR Estate by
          Opic Bus stop, Off Lagos-Ibadan Express way, Isheri-North.
        </p>
        <p className="md:text-lg text-black">
          Email:{" "}
          <a
            href="mailto:foundation@cookeyfranklinsgroup.com"
            className="text-gray-900"
          >foundation@cookeyfranklinsgroup.com</a>
        </p>
      </div>
      </div>
    </div>
  );
}