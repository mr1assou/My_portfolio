"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 635 13 092",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "marwane.assoupf@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Agadir, Morocco",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4 md:py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-[30px]">
          {/* form or thank you */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 md:gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-2xl md:text-4xl text-accent">Let&apos;s work together</h3>
                
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-300">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  className="h-[150px] md:h-[200px]"
                  placeholder="Type your message here."
                  required
                />
                <Button
                  type="submit"
                  size="md"
                  className="max-w-32 md:max-w-40"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl text-center">
                <h3 className="text-xl md:text-3xl text-accent">
                  ✅ Thank you for your message!
                </h3>
                <p className="text-sm md:text-base text-white/70">
                  We will contact you soon.
                </p>
              </div>
            )}
          </div>

          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-6 md:mb-8 lg:mb-0">
            <ul className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-xl md:text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-white/60">{item.title}</p>
                    <h3 className="text-base md:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
