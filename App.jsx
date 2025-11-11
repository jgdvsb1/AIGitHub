import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import FindMentor from '@/pages/FindMentor';
import MentorProfile from '@/pages/MentorProfile';
import Schedule from '@/pages/Schedule';
import LearnerDashboard from '@/pages/LearnerDashboard';
import MentorDashboard from '@/pages/MentorDashboard';
import AdminOverview from '@/pages/AdminOverview';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import BecomeMentor from '@/pages/BecomeMentor';
import Login from '@/pages/Login';
import PairingDashboard from '@/pages/PairingDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';
import PrivacyBanner from '@/components/PrivacyBanner';
import SignUp from '@/pages/SignUp';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find-mentor" element={<FindMentor />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/schedule/:mentorId" element={<ProtectedRoute role={['learner', 'admin']}><Schedule /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-mentor" element={<BecomeMentor />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          <Route path="/learner-dashboard" element={<ProtectedRoute role="learner"><LearnerDashboard /></ProtectedRoute>} />
          <Route path="/mentor-dashboard" element={<ProtectedRoute role="mentor"><MentorDashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminOverview /></ProtectedRoute>} />
          <Route path="/pairing-dashboard" element={<ProtectedRoute role="admin"><PairingDashboard /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
      <PrivacyBanner />
    </div>
  );
}

export default App;