"use client"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastProvider } from "./components/Toast"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import BlogPost from "./pages/BlogPost"
import Documentation from "./pages/Documentation"
import Guides from "./pages/Guides"
import Tutoriels from "./pages/Tutoriels"
import FAQ from "./pages/FAQ"
import Support from "./pages/Support"
import Communaute from "./pages/Communaute"

const App = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/tutoriels" element={<Tutoriels />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/communaute" element={<Communaute />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
