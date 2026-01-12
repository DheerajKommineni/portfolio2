'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Clock,
  Send,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submission (replace with API/email service later)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dheerajkom2804@gmail.com',
      link: 'mailto:dheerajkom2804@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (323) 347-1443',
      link: 'tel:+13233471443',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'USA',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/dheerajkommineni',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sri-hari-dheeraj-kommineni-8044223a5',
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map(info => (
                  <div key={info.label}>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="text-gray-400">{info.icon}</div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-3">
                        <div className="text-gray-400">{info.icon}</div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Connect with Me</h3>

              <div className="flex gap-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-gray-400">{social.icon}</span>
                    <span className="text-gray-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday – Friday: 9:00 AM – 6:00 PM </p>
                <p>Open to full-time and contract opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-white/20 outline-none"
                  value={formData.name}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-white/20 outline-none"
                  value={formData.email}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-white/20 outline-none"
                value={formData.subject}
                onChange={e =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-white/20 outline-none resize-none"
                value={formData.message}
                onChange={e =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">
                  Message sent successfully. I’ll respond shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
