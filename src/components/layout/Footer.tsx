import { Link } from "wouter";
import { AtSign, Globe, Hash, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <img
                src={logoImg}
                alt="8Point Digital Services"
                className="h-12 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Premium digital marketing agency driving growth through data, design, and strategy.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-[#6CC04A] transition-colors">
                <AtSign size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#6CC04A] transition-colors">
                <Hash size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#6CC04A] transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Website Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#6CC04A] transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Paid Advertising</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Social Media</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Brand Identity</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-[#6CC04A] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#6CC04A] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#6CC04A] mt-1 shrink-0" size={18} />
                <span className="text-gray-400">Ontario, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#6CC04A] shrink-0" size={18} />
                <a href="tel:+13828800039" className="text-gray-400 hover:text-[#6CC04A] transition-colors">+1 382-880-0039</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#6CC04A] shrink-0" size={18} />
                <a href="mailto:hello@8pointdigital.ca" className="text-gray-400 hover:text-[#6CC04A] transition-colors">hello@8pointdigital.ca</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 8Point Digital Services. All rights reserved. Ontario, Canada.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-[#6CC04A] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[#6CC04A] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
