import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import { ToastContainer } from "react-toastify"; // ✅ Toast Import
import "react-toastify/dist/ReactToastify.css"; // ✅ Toast CSS

// Layouts
import MainLayout from "./component/MainLayout";
import AdminLayout from "./component/admin/AdminLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import FAQ from "./component/FAQ";
import Privacypolicy from "./component/Privacypolicy";
import Client from "./component/Client";
import Candidate from "./component/Candidate";
import CVForm from "./component/CVForm";
import AdminDashboard from "./component/admin/AdminDashboard";
import ManageJobs from "./component/admin/ManageJobs";
import AdminrResume from "./component/admin/AdminrResume";
import AdminPrivateRoute from "./component/admin/AdminPrivateRoute";
import AdminLogin from "./component/admin/AdminLogin";
import AdminRequirementList from "./component/admin/AdminRequirementList";
import AdminJobManager from "./component/admin/AdminJobManager";
import AdminCategory from "./component/admin/AdminCategory";
import AdminContact from "./component/admin/AdminContact";
import AdminChangePassword from "./component/admin/AdminChangePassword";
import FloatingWhatsApp from "./component/FloatingWhatsApp";
import ResetPassword from "./component/admin/ResetPassword";
import ForgotPassword from "./component/admin/ForgotPassword";

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

        <Route path="/srlogin" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin/reset-password/:token"
          element={<ResetPassword />}
        />

        <Route
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<ManageJobs />} />
          <Route path="/admin/resume" element={<AdminrResume />} />
          <Route path="/admin/requirement" element={<AdminRequirementList />} />
          <Route path="/admin/job" element={<AdminJobManager />} />
          <Route path="/admin/categories" element={<AdminCategory />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route
            path="/admin/changePassword"
            element={<AdminChangePassword />}
          />
        </Route>
      </Routes>

      {/* ✅ Toast Container added here */}
      <ToastContainer position="top-right" autoClose={2000} />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
