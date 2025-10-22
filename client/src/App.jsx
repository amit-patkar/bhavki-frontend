// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* Home page uses the existing section components so you keep current layout */
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Values from "./components/Values";
import Vision from "./components/Vision";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";

/* Placeholder pages for future full-page routes */
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Values />
      <Vision />
      <Testimonials />
      <JoinForm />
    </>
  );
}

function AboutPage() {
  return <About />;
}

function JoinPage() {
  return <JoinForm />;
}

function KarmaDatasPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">For KarmaDātās</h2>
        <p className="text-lg">This page will explain how KarmaDātās can engage and verify KarmaYogis. Content coming soon.</p>
      </div>
    </div>
  );
}

function SevaCategoriesPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Seva Categories</h2>
        <p className="text-lg">Comprehensive list of Seva categories (expandable cards) — coming soon.</p>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Bhavki Blog / Updates</h2>
        <p className="text-lg">Blog and updates will appear here. (RSS/WordPress integration planned.)</p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Contact / Help Desk</h2>
        <p className="text-lg">Contact details, WhatsApp help, support number and forms will be here.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/karmadatas" element={<KarmaDatasPage />} />
          <Route path="/categories" element={<SevaCategoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home for any unmatched route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
