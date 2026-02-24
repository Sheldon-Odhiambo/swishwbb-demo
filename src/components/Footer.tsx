import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-noir border-t border-white/10 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 relative flex items-center justify-center overflow-hidden rounded-sm transform group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-swish-blue)] to-[var(--color-cherry)]" />
                <span className="font-display font-black text-xl text-white italic relative z-10 transform -skew-x-12">S</span>
              </div>
              <span className="font-display font-black text-xl tracking-wider uppercase text-white group-hover:text-cherry transition-colors">
                Swish
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              The official online platform for the Swish Women Basketball team. Join the madness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cherry transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider mb-4">Team</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/players" className="text-gray-400 hover:text-white text-sm transition-colors">Roster</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-white text-sm transition-colors">Schedule & Results</Link></li>
              <li><Link to="/story" className="text-gray-400 hover:text-white text-sm transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Fan Zone */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider mb-4">Fan Zone</h3>
            <ul className="space-y-2">
              <li><Link to="/merch" className="text-gray-400 hover:text-white text-sm transition-colors">Swish Madness Store</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-white text-sm transition-colors">Buy Tickets</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest news, merch drops, and ticket offers.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-cherry transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-cherry hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm uppercase tracking-wider transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Swish Women Basketball. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
