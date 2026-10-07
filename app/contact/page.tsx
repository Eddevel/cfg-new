"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const elements = formRef.current.querySelectorAll(".animate-form");
      gsap.from(elements, { opacity: 0, y: 20, duration: 0.5 });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(""); // Clear previous status
    try {
      console.log("Submitting:", formData); // Debug log
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error); // Log full error
      setStatus("Error sending message: " + (error as Error).message); // Show detailed error
    }
  };

  return (
    <div>
      <section className="text-gray-900 text-center m-2">
        <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-red-600">
          Get in Touch with Us
        </h1>
        <p className="text-sm md:text-lg text-blue-600 max-w-2xl mx-auto">
          Share Your Thoughts, Ideas, and Dreams!
        </p>
        <p className="text-sm md:text-lg max-w-2xl mx-auto text-start px-3">
          Looking for answers, guidance, or collaboration? Our team of experts is here to help. Fill out the form below and we&apos;ll respond promptly to discuss your needs, provide solutions, and explore opportunities for growth. Let&apos;s connect and achieve great things together!
        </p>
      </section>

      <section className="py-5 px-4 max-w-3xl mx-auto bg-[url(/assets/cfg-logo000.png)] bg-no-repeat bg-center">
        <div className="bg-white/30 backdrop-blur-none">
          <form onSubmit={handleSubmit} className="space-y-4 border-1 border-gray-200 rounded-lg p-10">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-gray-600"
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-gray-600"
              required
            />
            <Input
              type="tel"
              placeholder="Phone"
              className="border-gray-600"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Textarea
              placeholder="Message"
              className="border-gray-600"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <Button type="submit" className="bg-red-600">Send</Button>
            {status && <p className="text-center text-green-600">{status}</p>}
          </form>

          <div className="mt-6 text-center font-bold">
            <p>Email: <a href="mailto:Supportdesk@cookeyfranklinsgroup.com">Supportdesk@cookeyfranklinsgroup.com</a></p>
            <p>Phone: <a href="tel:+2348032234206">+234 803 223 4206</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}