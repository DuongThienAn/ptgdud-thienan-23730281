import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose, onSwitch }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-[32px] w-[1159px] h-[624px] flex overflow-hidden shadow-2xl"
      >
        {/* Left Column - Image */}
        <div className="hidden lg:block w-1/2 relative bg-gray-100">
          <img 
            src="/img/Image 72.png" 
            alt="Cooking" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-start justify-center p-12 text-center pt-24">
            <h2 className="text-white text-3xl font-black italic shadow-text leading-tight">
              "Embrace the art of cooking, where flavors come alive!"
            </h2>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 flex flex-col p-10 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-4">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Login</h1>
            <p className="text-gray-500 mb-8">Enter your email to log in.</p>

            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-gray-300 transition-all"
              />
              <button className="btn-primary w-full py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">
                Continue
              </button>
            </div>

            <div className="relative my-8 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10"></div>
              <span className="bg-white px-4">OR</span>
            </div>

            <p className="text-[10px] text-gray-400 text-center mb-6 leading-relaxed">
              By continuing, you agree to the updated <span className="text-gray-600 font-bold">Terms of Sale</span>, <span className="text-gray-600 font-bold">Terms of Service</span>, and <span className="text-gray-600 font-bold">Privacy Policy</span>.
            </p>

            <div className="space-y-3">
               <button className="w-full py-3 flex items-center justify-center gap-3 bg-[#E8F0FF]/50 hover:bg-[#E8F0FF] rounded-xl text-[#4285F4] font-bold text-sm transition-colors border border-transparent">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
                  Continue with Google
               </button>
               <button className="w-full py-3 flex items-center justify-center gap-3 bg-[#E8F0FF]/50 hover:bg-[#E8F0FF] rounded-xl text-[#1877F2] font-bold text-sm transition-colors border border-transparent">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" />
                  Continue with Facebook
               </button>
               <button className="w-full py-3 flex items-center justify-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-black font-bold text-sm transition-colors border border-transparent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.062 13.916c-.027 3.327 2.721 4.925 2.85 5.01-.027.086-.442 1.516-1.458 2.997-.88 1.282-1.79 2.553-3.218 2.58-.396.007-.751-.106-1.127-.247-.394-.148-.795-.297-1.284-.297-.489 0-.904.148-1.312.302-.34.128-.679.255-1.047.261-1.378.026-2.435-1.387-3.32-2.662-1.81-2.61-3.193-7.369-1.332-10.59 1.096-1.898 3.053-3.1 5.176-3.13.435-.008.847.113 1.25.228.326.094.65.186.97.186.32 0 .64-.092.966-.186.381-.11.776-.226 1.18-.219 2.016.035 3.842 1.087 4.912 2.651-3.411 1.706-2.864 6.113.252 7.418zM14.659 4.887c-.901 1.091-2.036 1.838-3.364 1.72-.119-1.583.565-3.178 1.503-4.225.961-1.071 2.378-1.837 3.636-1.741.139 1.581-.54 3.12-1.775 4.246z" />
                  </svg>
                  Continue with Apple
               </button>
            </div>

            <div className="mt-8 text-center text-sm font-medium text-gray-400">
               Don't have account? <button onClick={onSwitch} className="text-primary font-bold hover:underline">Sign up</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModal;
