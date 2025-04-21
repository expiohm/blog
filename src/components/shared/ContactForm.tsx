'use client';

import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

interface ContactFormProps {
  showContactInfo?: boolean;
  className?: string;
}

export default function ContactForm({ showContactInfo = true, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`grid ${showContactInfo ? 'md:grid-cols-2' : ''} gap-12 ${className}`}>
      {showContactInfo && (
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">123 Design Street, Creative City, 12345</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
              <EnvelopeIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@designstudio.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ClockIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
} 