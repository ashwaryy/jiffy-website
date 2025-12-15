"use client";

import { useState } from "react";
import Button from "../../components/Button";

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send data to Supabase here
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
          Let's Build Your Knowledge Agent
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
          Tell us about your institution and we'll show you how Jiffy can help.
        </p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* Form Section */}
           <div className="bg-white rounded-lg p-8 shadow-lg border border-slate-100">
             {submitted ? (
               <div className="text-center py-24">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
                 <h2 className="text-2xl font-bold text-secondary mb-4">Request Received!</h2>
                 <p className="text-slate-600">
                   Thanks for your interest. We'll be in touch within 24 hours to schedule your demo.
                 </p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     required 
                     className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                     placeholder="Jane Doe"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     required 
                     className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                     placeholder="jane@university.edu"
                   />
                 </div>

                 <div>
                   <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">Institution Name</label>
                   <input 
                     type="text" 
                     id="institution" 
                     required 
                     className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                     placeholder="University of Example"
                   />
                 </div>

                 <div>
                   <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">Institution Type</label>
                   <select 
                     id="type" 
                     className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-slate-600"
                   >
                     <option>University</option>
                     <option>College</option>
                     <option>K-12</option>
                     <option>Corporate</option>
                     <option>Other</option>
                   </select>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                   <textarea 
                     id="message" 
                     rows={4}
                     className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                     placeholder="Tell us about your specific needs..."
                   ></textarea>
                 </div>

                 <Button type="submit" className="w-full justify-center shadow-lg shadow-orange-100">Request Demo</Button>
               </form>
             )}
           </div>

           {/* Contact Info / Sidebar */}
           <div className="flex flex-col justify-center gap-10 lg:pl-12">
              <div>
                 <h3 className="text-2xl font-bold text-secondary mb-4">Contact Us</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   Have questions before scheduling a demo? Prefer to email us directly?
                 </p>
                 <a href="mailto:hello@jiffy.live" className="text-primary text-xl font-bold hover:text-orange-700 transition-colors">
                   hello@jiffy.live
                 </a>
              </div>

              <div className="bg-surface p-8 rounded-lg border border-slate-100">
                 <h4 className="font-bold text-secondary mb-3">Built by Good Faith Labs</h4>
                 <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                   We are committed to building AI that serves the public interest with honesty and transparency.
                 </p>
                 <a href="https://goodfaithlabs.com" className="text-sm font-bold text-primary hover:underline uppercase tracking-wide">
                   Visit our website
                 </a>
              </div>
           </div>

        </div>
      </section>
    </div>
  );
}