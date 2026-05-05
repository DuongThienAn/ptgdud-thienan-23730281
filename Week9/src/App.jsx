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
import SearchPage from './pages/SearchPage';
import RecipeBox from './pages/RecipeBox';


const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authModal, setAuthModal] = useState('none'); // 'none', 'login', 'signup', 'createAccount'
  const [user, setUser] = useState(null); // Mock user state
  const location = useLocation();

  // Show discovery modal on home page after short delay
  useEffect(() => {
    if (location.pathname === '/' && authModal === 'none' && !user) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, authModal, user]);

  const handleCloseDiscovery = () => {
    setIsModalOpen(false);
  };

  const handleFinishCarousel = () => {
    setIsModalOpen(false);
    setAuthModal('createAccount');
  };

  const handleLogin = (userData) => {
    setUser(userData || { name: 'Emma Gonzalez', avatar: '/img/avatar.png' });
    setAuthModal('none');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} onLogin={() => setAuthModal('login')} onLogout={handleLogout} />
      <main className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home onSignup={() => setAuthModal('createAccount')} />} />
          <Route path="/recipe" element={<RecipeDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe-box" element={<RecipeBox />} />
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
        onLoginSuccess={handleLogin}
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
