/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, X, Star, ArrowRight, Play, DollarSign, Wallet, ShieldCheck, Zap } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Constants
const AFFILIATE_LINK = "https://amzn.to/4n5inCI";
const CTA_COLOR = "bg-[#FF3B30]";
const CTA_HOVER = "hover:bg-[#E03429]";

const CheckIcon = () => <Check className="w-5 h-5 text-green-500 shrink-0" />;
const XIcon = () => <X className="w-5 h-5 text-red-500 shrink-0" />;

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Container - Max 800px as requested */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* 1. HERO SECTION */}
        <section className="pt-12 pb-16 md:pt-20 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Make Car Scratches <span className="text-[#FF3B30]">Less Visible</span> in Minutes
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Restore your car’s shine at home without expensive repairs. Professional results for surface imperfections.
            </p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${CTA_COLOR} ${CTA_HOVER} text-white font-bold py-5 px-10 rounded-lg text-xl inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-red-500/20`}
              id="hero-cta"
            >
              Check Price on Amazon
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 rounded-xl overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1507136566006-bbc5055cb2f6?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional car polishing detailing close up" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                Trusted by 50,000+ car owners
              </span>
            </div>
          </motion.div>
        </section>

        {/* 2. VIDEO DEMO */}
        <section className="py-16 border-t border-slate-100">
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-[#FF3B30] ml-1" />
            </div>
            <h2 className="text-3xl font-display font-bold">See It In Action</h2>
            <p className="text-slate-500 mt-2">Real results from everyday users</p>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/9XGSRYCH2S0" 
              title="Car Scratch Remover Real Results" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 3 & 4. PROBLEM & SOLUTION */}
        <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-400">
                  <XIcon /> THE PROBLEM
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Scratches make your valuable car look old and neglected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Professional body shops charge <span className="font-bold text-slate-800">$300+</span> for minor buffing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Traditional DIY kits are complicated and take hours of effort</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-50">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
                  <CheckIcon /> THE SOLUTION
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span>Easy DIY liquid formula - no power tools required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span>Works in under 5 minutes - just apply and buff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span>Saves you hundreds while keeping your car looking new</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1625032585293-68d298341695?auto=format&fit=crop&q=80&w=600" 
              alt="Car scratch remover application" 
              className="rounded-xl shadow-lg w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 5. BENEFITS */}
        <section className="py-16 bg-slate-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-20 lg:px-20 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm">Light Scratches Gone</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm">Restore Factory Shine</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm">Save $100s in Labor</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm">Simple to Use DIY</p>
            </div>
          </div>
        </section>

        {/* 6. BEFORE / AFTER */}
        <section className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold">Real Visual Proof</h2>
            <p className="text-slate-500 mt-2">See the difference after one application</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" 
                alt="Car scratch before treatment" 
                className="rounded-xl w-full h-[300px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Before</div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" 
                alt="Car scratch after treatment" 
                className="rounded-xl w-full h-[300px] object-cover border-4 border-green-500/30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">After</div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">*Results may vary depending on scratch depth and paint color.</p>
        </section>

        {/* 7. EXPECTATION SECTION */}
        <section className="py-16 px-8 bg-slate-900 text-white rounded-2xl">
          <h2 className="text-3xl font-display font-bold text-center mb-10">When This Works (And When It Doesn’t)</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-green-400 font-bold flex items-center gap-2">
                <Check className="w-5 h-5" /> GREAT FOR:
              </h4>
              <ul className="space-y-3 opacity-90">
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  Light surface scratches
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  Swirl marks from washing
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  Surface paint imperfections
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-red-400 font-bold flex items-center gap-2">
                <X className="w-5 h-5" /> NOT FOR:
              </h4>
              <ul className="space-y-3 opacity-90">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Deep scratches you can feel with a fingernail
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Paint chips or missing paint
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Bare metal exposure
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center pt-8 border-t border-white/10 italic text-slate-400 text-lg">
            "This is not a magic fix — but for small scratches, the results can be impressive."
          </div>
        </section>

        {/* 8. SOCIAL PROOF */}
        <section className="py-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Real Customer Feedback</h2>
          <div className="grid gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm italic">
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xl text-slate-700 leading-relaxed">
                "Didn’t remove everything, but made a huge difference. For the price, you can't beat it. Definitely worth a try before going to a shop."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">J</div>
                <p className="font-bold text-slate-900">— Jason M.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-600">"Got rid of the swirl marks on my black truck. Looks 100x better now."</p>
                <p className="mt-4 font-bold text-sm">— Mark S.</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 text-slate-300" />
                </div>
                <p className="text-slate-600">"Easy to use. Best on light scratches. Good value for money."</p>
                <p className="mt-4 font-bold text-sm">— Sarah L.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. PRICE COMPARISON */}
        <section className="py-20 border-y border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">Why Pay More?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 opacity-60">
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2">Repair Shop</p>
              <div className="text-4xl font-display font-bold text-slate-400 flex items-center">
                <DollarSign className="w-6 h-6" />
                300+
              </div>
              <p className="text-xs text-slate-400 mt-4">Labor fees, overhead, 2-3 days downtime.</p>
            </div>
            
            <div className="p-6 border-2 border-[#FF3B30] rounded-xl bg-red-50 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 bg-[#FF3B30] text-white py-1 px-10 rotate-45 font-bold text-xs">BEST VALUE</div>
              <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-2">This Solution</p>
              <div className="text-4xl font-display font-bold text-[#FF3B30] flex items-center">
                Under $20
              </div>
              <p className="text-xs text-red-600/70 mt-4 font-medium">One-time purchase, 5 mins of work, stays in your garage for next time.</p>
            </div>
          </div>
        </section>

        {/* 10. CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Ready to Restore Your Car's Finish?</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${CTA_COLOR} ${CTA_HOVER} text-white font-bold py-6 px-12 rounded-lg text-2xl inline-flex items-center gap-3 shadow-2xl shadow-red-500/30 w-full md:w-auto justify-center`}
            >
              Check Price on Amazon
              <ArrowRight className="w-7 h-7" />
            </a>
          </motion.div>
          <div className="flex items-center justify-center gap-6 mt-8 opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon logo" className="h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Free Shipping with Prime</span>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="py-20 border-t border-slate-100">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Q: Does it remove deep scratches?</h4>
              <p className="text-slate-600">A: No. It is specifically designed for light surface scratches and swirl marks. If you can feel the scratch with your fingernail, it likely needs professional repair.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Q: Is it safe for all colors and cars?</h4>
              <p className="text-slate-600">A: Yes, it works on most paint finishes and colors. It's clear-coat safe, meaning it won't damage your car's top protective layer.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Q: Do I need any special tools?</h4>
              <p className="text-slate-600">A: No professional tools or electric buffers are required. You just need the liquid and a clean micro-fiber cloth (often included or available cheaply).</p>
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-24 text-center">
          <div className="max-w-xl mx-auto bg-slate-900 rounded-[2rem] p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h2 className="text-3xl font-display font-bold mb-6 relative z-10 leading-tight">
              See how much you can improve your car in minutes
            </h2>
            <p className="text-slate-400 mb-10 text-lg relative z-10">
              Don't let minor scratches ruin the look of your ride. Restore that showroom shine today.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CTA_COLOR} ${CTA_HOVER} text-white font-bold py-5 px-10 rounded-lg text-xl inline-flex items-center gap-3 shadow-lg shadow-black/20`}
              >
                Check Price on Amazon
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
          
          <div className="mt-12 text-slate-400 text-sm">
            <p>© 2026 CarCare Pro Tips. All Rights Reserved.</p>
            <p className="mt-2 text-[10px] max-w-lg mx-auto leading-relaxed">
              *Disclaimer: We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
