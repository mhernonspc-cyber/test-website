import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail';
import BookPage from './pages/Book';
import ShopPage from './pages/Shop';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import AdminPage from './pages/Admin';
import ThankYouPage from './pages/ThankYou';
import ScrollRestoration from './components/common/ScrollRestoration';

function App() {
  return (
    <MainLayout>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
