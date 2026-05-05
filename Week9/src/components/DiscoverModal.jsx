import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    image: "/img/lotus_delight_salad.png",
    title: "Discover Chefify",
    description: "Easy and delicious cooking instructions right here. Start exploring now!"
  },
  {
    image: "/img/italian_style_tomato_salad.png",
    title: "Master New Recipes",
    description: "Learn from top chefs around the world with our step-by-step video guides."
  },
  {
    image: "/img/salad_with_cabbage_and_shrimp.png",
    title: "Share Your Creations",
    description: "Join our community, share your own recipes, and get feedback from others."
  }
];

const DiscoverModal = ({ isOpen, onClose, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-[32px] w-full max-w-[600px] p-8 overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-black text-primary mb-2 mt-4 tracking-tight">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-500 text-sm mb-8 px-10">
            {steps[currentStep].description}
          </p>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentStep}
                src={steps[currentStep].image}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mb-10">
            {steps.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentStep === idx ? "bg-primary w-6" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="btn-primary w-full py-4 text-lg rounded-2xl mb-4 font-bold"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Next"}
          </button>

          <button 
            onClick={onFinish}
            className="text-primary/60 hover:text-primary font-bold text-sm transition-colors mb-2"
          >
            Skip
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DiscoverModal;
