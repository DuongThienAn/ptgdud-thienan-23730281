import React from 'react';
import { Eye, X } from 'lucide-react';
import { motion } from 'framer-motion';

const CreateAccountModal = ({ isOpen, onClose }) => {
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
        className="relative bg-white rounded-[40px] w-[1200px] h-[660px] flex overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-12 lg:px-24">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-12 text-center">
              Create an account
            </h1>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1 ml-1">Full name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-4 rounded-xl bg-white border-2 border-primary/30 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="example.email@gmail.com"
                  className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1 ml-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter at least 8+ characters"
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none outline-none transition-all placeholder:text-gray-300"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button className="btn-primary w-full py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 mt-4 active:scale-95 transition-transform">
                Sign in
              </button>
            </form>

            <div className="mt-12 text-center text-sm">
              <p className="text-gray-400 mb-6 font-medium uppercase tracking-widest text-[10px]">Or sign in with</p>
              <div className="flex justify-center gap-6">
                <button className="w-16 h-12 flex items-center justify-center rounded-2xl bg-[#FFE8E8]/50 hover:bg-[#FFE8E8] transition-colors border-none">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" />
                </button>
                <button className="w-16 h-12 flex items-center justify-center rounded-2xl bg-[#E8F0FF]/50 hover:bg-[#E8F0FF] transition-colors border-none">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-6 h-6" />
                </button>
                <button className="w-16 h-12 flex items-center justify-center rounded-2xl bg-[#F5F5F5] hover:bg-[#EEEEEE] transition-colors border-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.062 13.916c-.027 3.327 2.721 4.925 2.85 5.01-.027.086-.442 1.516-1.458 2.997-.88 1.282-1.79 2.553-3.218 2.58-.396.007-.751-.106-1.127-.247-.394-.148-.795-.297-1.284-.297-.489 0-.904.148-1.312.302-.34.128-.679.255-1.047.261-1.378.026-2.435-1.387-3.32-2.662-1.81-2.61-3.193-7.369-1.332-10.59 1.096-1.898 3.053-3.1 5.176-3.13.435-.008.847.113 1.25.228.326.094.65.186.97.186.32 0 .64-.092.966-.186.381-.11.776-.226 1.18-.219 2.016.035 3.842 1.087 4.912 2.651-3.411 1.706-2.864 6.113.252 7.418zM14.659 4.887c-.901 1.091-2.036 1.838-3.364 1.72-.119-1.583.565-3.178 1.503-4.225.961-1.071 2.378-1.837 3.636-1.741.139 1.581-.54 3.12-1.775 4.246z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center relative overflow-hidden">
          <div className="relative z-10 w-full flex justify-center p-12">
            <img
              src="/img/visily-image-108.png"
              alt="Illustration"
              className="w-full max-w-xl h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateAccountModal;
