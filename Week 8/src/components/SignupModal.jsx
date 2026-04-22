import React from 'react';
import { X, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const SignupModal = ({ isOpen, onClose, onSwitch }) => {
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
        className="relative bg-white rounded-2xl w-[600px] h-[780px] p-10 flex flex-col shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-4xl font-black text-center text-gray-900 mb-10">Sign up</h1>

        <form className="space-y-6">
          <div className="flex gap-4">
             <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">First name</label>
                <input 
                  type="text" 
                  placeholder="Input first name"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-gray-300 transition-all text-sm"
                />
             </div>
             <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Last name</label>
                <input 
                  type="text" 
                  placeholder="Input last name"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-gray-300 transition-all text-sm"
                />
             </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email</label>
             <input 
                type="email" 
                placeholder="example.email@gmail.com"
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-gray-300 transition-all text-sm"
             />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Password</label>
             <div className="relative">
                <input 
                   type="password" 
                   placeholder="Enter at least 8+ characters"
                   className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-gray-300 transition-all text-sm"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                   <Eye className="w-4 h-4" />
                </button>
             </div>
          </div>

          <div className="flex items-start gap-3 py-2">
             <input type="checkbox" className="mt-1 accent-primary w-4 h-4 rounded border-gray-300" id="terms" />
             <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed font-medium">
               By signing up, I agree with the <span className="text-primary font-bold">Terms of Use</span> & <span className="text-primary font-bold">Privacy Policy</span>
             </label>
          </div>

          <button className="btn-primary w-full py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            Sign up
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-medium text-gray-500">
           Already have an account? <button onClick={onSwitch} className="text-primary font-bold hover:underline">Log in</button>
        </div>

        <div className="relative my-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10"></div>
           <span className="bg-white px-4">OR</span>
        </div>

        <div className="flex justify-center gap-6">
           <button className="w-14 h-14 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 transition-colors border-none group">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
           </button>
           <button className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition-colors border-none group">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
           </button>
           <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border-none group">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M17.062 13.916c-.027 3.327 2.721 4.925 2.85 5.01-.027.086-.442 1.516-1.458 2.997-.88 1.282-1.79 2.553-3.218 2.58-.396.007-.751-.106-1.127-.247-.394-.148-.795-.297-1.284-.297-.489 0-.904.148-1.312.302-.34.128-.679.255-1.047.261-1.378.026-2.435-1.387-3.32-2.662-1.81-2.61-3.193-7.369-1.332-10.59 1.096-1.898 3.053-3.1 5.176-3.13.435-.008.847.113 1.25.228.326.094.65.186.97.186.32 0 .64-.092.966-.186.381-.11.776-.226 1.18-.219 2.016.035 3.842 1.087 4.912 2.651-3.411 1.706-2.864 6.113.252 7.418zM14.659 4.887c-.901 1.091-2.036 1.838-3.364 1.72-.119-1.583.565-3.178 1.503-4.225.961-1.071 2.378-1.837 3.636-1.741.139 1.581-.54 3.12-1.775 4.246z" />
               </svg>
           </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupModal;
