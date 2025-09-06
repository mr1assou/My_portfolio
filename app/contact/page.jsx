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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form or thank you */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-300">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="h-[200px]"
                  placeholder="Type your message here."
                  required
                />
                <Button 
                  type="submit" 
                  size="md" 
                  className="max-w-40"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl text-center">
                <h3 className="text-3xl text-accent">
                  ✅ Thank you for your message!
                </h3>
                <p className="text-white/70">
                  We will contact you soon.
                </p>
              </div>
            )}
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
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
