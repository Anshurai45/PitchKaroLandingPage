import React from 'react';
import './styles/globals.css';

import Navbar                                  from './components/Navbar';
import Hero                                    from './components/Hero';
import { TrustBar, About, HowItWorks,
         WhoCanApply }                         from './components/Sections';
import Investors                               from './components/Investors';
import Startups                                from './components/Startups';
import KaroStartup                             from './components/KaroStartup';
import { CTA, Footer }                         from './components/CTAFooter';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <Startups />
        <KaroStartup />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
