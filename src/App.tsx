import './App.css';
import Navbar from './navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import BlogList from './components/Blog';
import Services from './components/services';
import Careers from './components/careers';
import AdminDashboardLayout from './components/AdminDashboard';
import Dashboard from './components/AdminDashboard/dashboard';
import ContactUsDashboard from './components/AdminDashboard/contact';
import TeamDashboard from './components/AdminDashboard/Team';
import JobCreationFormTable from './components/AdminDashboard/careers';
import TestimonialsTable from './components/AdminDashboard/Testimonals';
import BlogTable from './components/AdminDashboard/Blog';
import WebMobileServices from './components/services/WebandMobileApp';
import { DigitalMarketingServices } from './components/services/DigitalMarketing';
import { CyberSecurityServices } from './components/services/CyberSecurity';
import { DataTrackingServices } from './components/services/DataTrackingSecurity';
import { ITManagementService } from './components/services/ITManagementService';
import { UIUXBrandService } from './components/services/UIUX';
import MLAIServices from './components/services/MachineLearningAI';
import QATestingServices from './components/services/QATesting';

function App() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-mobile-app" element={<WebMobileServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
        <Route path="/services/cyber-security" element={<CyberSecurityServices />} />
        <Route path="/services/data-tracking-services" element={<DataTrackingServices />} />
        <Route path="/services/it-management-service" element={<ITManagementService />} />
        <Route path="/services/ui-ux-brandservice" element={<UIUXBrandService />} />
        <Route path="/services/ml-ai-service" element={<MLAIServices />} />
        <Route path="/services/qa-testing-service" element={<QATestingServices />} />


        
        
        
        

        <Route path="/careers" element={<Careers />} />
        <Route
          path="/admin"
          element={
            <AdminDashboardLayout>
              <Dashboard />
            </AdminDashboardLayout>
          }
        />
        <Route path="/admin/contact" element={<ContactUsDashboard />} />
        <Route path="/admin/our-team" element={<TeamDashboard />} />
        <Route path="/admin/careers" element={<JobCreationFormTable />} />
        <Route path="/admin/testimonal" element={<TestimonialsTable />} />
        <Route path="/admin/blog" element={<BlogTable />} />



        

      </Routes>

      {!isAdminPath && <Footer />}
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
