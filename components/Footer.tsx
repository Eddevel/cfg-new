"use client";

import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Footer() {
  const bankers = [
    "Access Bank Plc",
    "Ecobank Bank Plc",
    "First Bank Plc",
    "Providus Bank Plc",
    "Zenith Bank Plc",
  ];
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/cookeyfranklinsgroup" },
    { name: "X", url: "https://x.com/CookeyFGroup" },
    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61561072612957" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/cookey-franklinsgroup-156341313/" },
  ];

  const socialIcons: { [key: string]: React.ElementType } = {
    Instagram: FaInstagram,
    X: FaTwitter,
    Facebook: FaFacebookF,
    LinkedIn: FaLinkedinIn,
  };

  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current.querySelectorAll(".footer-section"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-6 tracking-wide">Our Address</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            No 1A, Cookey Franklins Lane, Behind OPIC Plaza, MTR Estate by OPIC Bus Stop, Off
            Lagos-Ibadan Expressway, Isheri-North.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-6 tracking-wide">Official Bankers</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            {bankers.map((banker, index) => (
              <li key={index} className="hover:text-white transition-colors">
                {banker}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-6 tracking-wide">Follow Us</h3>
          <div className="flex space-x-6">
            {socials.map((social, index) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>Copyright &copy; 2025 Cookey Franklins Group | Powered by EDDEA</p>
      </div>
    </footer>
  );
}