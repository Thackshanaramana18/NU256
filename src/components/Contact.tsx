'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: 'mdi:email', title: 'Email', content: 'hello@nu256.com', href: 'mailto:hello@nu256.com' },
    { icon: 'mdi:phone', title: 'Phone', content: '+1 (555) 123-4567', href: 'tel:+1-555-123-4567' },
    { icon: 'mdi:map-marker', title: 'Location', content: 'San Francisco, CA' },
    { icon: 'mdi:clock', title: 'Hours', content: 'Mon - Fri: 9am - 6pm PST' },
  ];

  return (
    <section id="contact" className="page">
      <div className="page-container">
        <h2 className="section-title">Let's Collaborate</h2>
        <p className="section-subtitle">Join us in advancing genomic science. Get in touch with our team.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="p-6 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg text-center">
                <p className="text-green-400 font-bold">Thank you for your message!</p>
                <p className="text-gray-300 mt-2">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Organization"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="research">Research Collaboration</option>
                    <option value="services">Services Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded font-bold transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500 border-opacity-20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-green-400">
                    <i className="iconify" data-icon={info.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-green-400 hover:text-green-300">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
