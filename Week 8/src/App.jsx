import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import DiscoverModal from './components/DiscoverModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import CreateAccountModal from './components/CreateAccountModal';

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authModal, setAuthModal] = useState('none'); // 'none', 'login', 'signup', 'createAccount'
  const location = useLocation();

  // Show discovery modal on home page after short delay
  useEffect(() => {
    if (location.pathname === '/' && authModal === 'none') {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, authModal]);

  const handleCloseDiscovery = () => {
    setIsModalOpen(false);
  };

  const handleFinishCarousel = () => {
    setIsModalOpen(false);
    setAuthModal('createAccount');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLogin={() => setAuthModal('login')} />
      <main className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home onSignup={() => setAuthModal('createAccount')} />} />
          <Route path="/recipe" element={<RecipeDetail />} />
        </Routes>
      </main>
      <Footer />

      <DiscoverModal 
        isOpen={isModalOpen} 
        onClose={handleCloseDiscovery} 
        onFinish={handleFinishCarousel}
      />

      <LoginModal 
        isOpen={authModal === 'login'} 
        onClose={() => setAuthModal('none')} 
        onSwitch={() => setAuthModal('signup')}
      />

      <SignupModal 
        isOpen={authModal === 'signup'} 
        onClose={() => setAuthModal('none')} 
        onSwitch={() => setAuthModal('login')}
      />

      <CreateAccountModal 
        isOpen={authModal === 'createAccount'} 
        onClose={() => setAuthModal('none')} 
      />
      
      {/* Small floating "Shortcut" for demo purposes */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
         <button 
           onClick={() => window.location.href = location.pathname === '/' ? '/recipe' : '/'}
           className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-xs font-bold"
         >
           Switch Page
         </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
