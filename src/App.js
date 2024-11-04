import React, { useContext } from 'react';
import Header from "./pages/faq/header/Header";
import Footer from './pages/faq/footer/Footer';
import Hero from './pages/faq/heroSection/Hero';
import Title from './pages/faq/title/Title';
import TopicNavigation from './pages/faq/topicNav/TopicNavigation';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './App.css';
const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme === 'dark' ? 'container-dark' : ''}`}>
      <Header />
      <Title />
      <Hero />
      <TopicNavigation />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
