import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="w-full bg-noir min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-jersey-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-hollow text-white">
              Get In <span className="text-cherry text-filled">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">
              Have questions about tickets, merch, or partnerships? Reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-display text-3xl font-bold uppercase mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0f0f0f] border border-white/10 rounded-sm flex items-center justify-center shrink-0 text-cherry">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-1">Headquarters & Arena</h4>
                      <p className="text-gray-400">123 Swish Avenue<br />Sports District<br />Cityville, ST 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0f0f0f] border border-white/10 rounded-sm flex items-center justify-center shrink-0 text-cherry">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-gray-400">General: +1 (555) 123-4567<br />Tickets: +1 (555) 123-8900</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0f0f0f] border border-white/10 rounded-sm flex items-center justify-center shrink-0 text-cherry">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-gray-400">info@swishbasketball.com<br />press@swishbasketball.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-sm">
                <h3 className="font-display text-2xl font-bold uppercase mb-4">Media & Press</h3>
                <p className="text-gray-400 text-sm mb-4">For press credentials, interview requests, and media inquiries, please contact our communications department.</p>
                <a href="mailto:press@swishbasketball.com" className="text-cherry font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">press@swishbasketball.com</a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-[#0f0f0f] border border-white/10 p-8 md:p-10 rounded-sm">
                <h2 className="font-display text-3xl font-bold uppercase mb-8">Send a Message</h2>
                
                {sent ? (
                  <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-sm text-center">
                    <p className="text-green-400 font-bold uppercase tracking-wider mb-2">Message Sent!</p>
                    <p className="text-gray-400 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Subject</label>
                      <select 
                        required
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="tickets">Tickets & Group Sales</option>
                        <option value="merch">Merchandise Support</option>
                        <option value="partnership">Sponsorship & Partnerships</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                      <textarea 
                        required 
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors resize-none" 
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-cherry hover:bg-red-700 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
