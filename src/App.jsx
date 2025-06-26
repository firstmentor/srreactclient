import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';

// Layouts
import MainLayout from './component/MainLayout';
import AdminLayout from './component/admin/AdminLayout';

// Pages
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import FAQ from './component/FAQ';
import Privacypolicy from './component/Privacypolicy';
import Client from './component/Client';
import Candidate from './component/Candidate';
import CVForm from './component/CVForm';
import AdminDashboard from './component/admin/AdminDashboard';
import ManageJobs from './component/admin/ManageJobs';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/client" element={<Client />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/cvform" element={<CVForm />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<ManageJobs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
