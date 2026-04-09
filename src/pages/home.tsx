import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Megaphone, Target, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const AnimatedEight = () => (
  <div className="relative w-72 h-[28rem] md:w-[26rem] md:h-[38rem] flex items-center justify-center">
    {/* Outer glow ring */}
    <motion.div
      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full"
      style={{ background: "radial-gradient(ellipse at center, rgba(108,192,74,0.2) 0%, transparent 70%)" }}
    />

    {/* Dark backdrop for contrast */}
    <div className="absolute inset-8 rounded-[3rem] bg-black/10 backdrop-blur-sm border border-white/10" />

    <motion.div
      animate={{ 
        rotateY: [0, 8, 0, -8, 0],
        rotateX: [0, 3, 0, -3, 0],
        y: [0, -8, 0, 8, 0],
      }}
      transition={{ 
        duration: 8, repeat: Infinity, ease: "easeInOut"
      }}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 200 360" className="w-full h-full" style={{ filter: "drop-shadow(0 0 40px rgba(108,192,74,0.7)) drop-shadow(0 0 80px rgba(108,192,74,0.3))" }}>
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9EE07A" />
            <stop offset="40%" stopColor="#6CC04A" />
            <stop offset="100%" stopColor="#3A8020" />
          </linearGradient>
          <linearGradient id="greenGradReverse" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#9EE07A" />
            <stop offset="60%" stopColor="#6CC04A" />
            <stop offset="100%" stopColor="#3A8020" />
          </linearGradient>
          <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0.0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* === TOP LOOP === */}
        {/* Filled green shape */}
        <path
          d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
          fill="url(#greenGrad)"
          opacity="0.85"
        />
        {/* Glossy highlight */}
        <path
          d="M 100,24 C 130,24 155,42 158,72 C 135,50 108,42 100,24 Z"
          fill="url(#glassShine)"
          opacity="0.6"
        />
        {/* Inner dark cutout for "8" shape */}
        <path
          d="M 100,42 C 128,42 148,58 148,80 C 148,102 128,120 100,128 C 72,120 52,102 52,80 C 52,58 72,42 100,42 Z"
          fill="white"
          opacity="0.08"
        />
        {/* Stroke */}
        <path
          d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
          fill="none"
          stroke="url(#greenGrad)"
          strokeWidth="3"
          filter="url(#glow)"
        />
        {/* Animated outline */}
        <motion.path
          d="M 100,18 C 140,18 170,40 170,80 C 170,120 140,155 100,175 C 60,155 30,120 30,80 C 30,40 60,18 100,18 Z"
          fill="none"
          stroke="#9EE07A"
          strokeWidth="1.5"
          strokeDasharray="400"
          animate={{ strokeDashoffset: [400, 0, -400] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          opacity="0.7"
        />

        {/* === BOTTOM LOOP (wider) === */}
        <path
          d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
          fill="url(#greenGradReverse)"
          opacity="0.85"
        />
        {/* Glossy highlight */}
        <path
          d="M 100,181 C 138,183 170,205 175,235 C 155,208 128,190 100,181 Z"
          fill="url(#glassShine)"
          opacity="0.5"
        />
        {/* Inner dark for depth */}
        <path
          d="M 100,200 C 138,200 162,222 162,255 C 162,288 138,312 100,318 C 62,312 38,288 38,255 C 38,222 62,200 100,200 Z"
          fill="white"
          opacity="0.06"
        />
        {/* Stroke */}
        <path
          d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
          fill="none"
          stroke="url(#greenGradReverse)"
          strokeWidth="3"
          filter="url(#glow)"
        />
        {/* Animated outline */}
        <motion.path
          d="M 100,175 C 148,175 185,205 185,255 C 185,305 148,342 100,342 C 52,342 15,305 15,255 C 15,205 52,175 100,175 Z"
          fill="none"
          stroke="#9EE07A"
          strokeWidth="1.5"
          strokeDasharray="500"
          animate={{ strokeDashoffset: [-500, 0, 500] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          opacity="0.7"
        />
      </svg>
    </motion.div>

    {/* Floating particle dots */}
    {[
      { x: "10%", y: "15%", delay: 0 },
      { x: "85%", y: "20%", delay: 1 },
      { x: "5%", y: "75%", delay: 2 },
      { x: "90%", y: "70%", delay: 0.5 },
      { x: "50%", y: "5%", delay: 1.5 },
      { x: "50%", y: "95%", delay: 2.5 },
    ].map((p, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-[#6CC04A]"
        style={{ left: p.x, top: p.y }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gray-950">
          {/* Dark gradient mesh background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(108,192,74,0.12) 0%, transparent 70%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 30%, rgba(108,192,74,0.06) 0%, transparent 60%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-950/50 to-gray-950" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC04A]/40 bg-[#6CC04A]/10 text-[#6CC04A] font-medium text-sm mb-6">
                  Ontario's Premium Digital Agency
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
                  We Grow Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC04A] to-[#9EE07A]">
                    Business Digitally.
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Data-driven strategies, breathtaking design, and relentless execution to scale your brand in the modern digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="h-14 px-8 text-lg bg-[#6CC04A] hover:bg-[#5aab3b] text-white rounded-full w-full sm:w-auto shadow-[0_0_30px_rgba(108,192,74,0.4)]">
                      Get Started <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <div className="flex justify-center lg:justify-end">
                <AnimatedEight />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-card relative">
          {/* Subtle background 8 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none text-[40rem] font-bold leading-none select-none">
            8
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-lg text-muted-foreground">
                We provide end-to-end digital solutions designed to capture attention, drive traffic, and convert visitors into loyal customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Globe, title: "Website Design", desc: "High-converting, visually stunning web experiences." },
                { icon: Target, title: "SEO Optimization", desc: "Dominate search rankings and capture organic traffic." },
                { icon: BarChart3, title: "Paid Advertising", desc: "ROI-focused campaigns across Google and Meta." },
                { icon: Megaphone, title: "Brand Identity", desc: "Memorable branding that resonates and endures." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <Link href="/services" className="text-primary font-medium flex items-center hover:underline">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/team-photo.png" 
                  alt="8Point Digital Team" 
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just execute tasks; we partner with you to understand your business goals and deliver measurable ROI.
                </p>
                <div className="space-y-6">
                  {[
                    "Data-driven decision making",
                    "Transparent reporting & communication",
                    "Premium, tailored design approach",
                    "Dedicated local team in Ontario"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary w-6 h-6 mt-0.5 shrink-0" />
                      <p className="text-lg font-medium">{point}</p>
                    </div>
                  ))}
                </div>
                <Link href="/about">
                  <Button className="mt-10 h-12 px-8 rounded-full border border-border bg-card hover:bg-secondary text-foreground">
                    Discover Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success</h2>
              <p className="text-lg text-muted-foreground">Hear from the brands we've scaled.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "8Point completely transformed our online presence. Our organic traffic is up 200% since launch.", author: "Sarah Jenkins", role: "CMO, TechFlow" },
                { quote: "The attention to detail and design quality is unmatched. Worth every penny of the investment.", author: "Marcus Thorne", role: "Founder, Apex Real Estate" },
                { quote: "Finally, an agency that actually understands ROI. The paid ad campaigns have been incredibly profitable.", author: "Elena Rodriguez", role: "Director, Solace Health" }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-8 rounded-2xl border border-border"
                >
                  <div className="flex gap-1 text-primary mb-6">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-lg mb-8 italic text-foreground/90">"{review.quote}"</p>
                  <div>
                    <p className="font-bold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 mix-blend-multiply bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Ready to scale your brand?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Let's build something extraordinary together. Reach out for a free audit and consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg bg-background text-foreground hover:bg-background/90 rounded-full font-bold">
                Let's Talk Business
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
