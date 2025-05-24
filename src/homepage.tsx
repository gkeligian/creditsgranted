import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DollarSign, FileCheck, Shield, ChevronRight, Beaker, Briefcase, Code, Building2, Plane, Leaf, FlaskRound as Flask, Zap } from 'lucide-react';
import CountUp from 'react-countup';
import Layout from './components/Layout';
import SEO from './components/SEO';
import CTAButton from './components/CTAButton';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const industries = [
    { icon: Code, name: 'Software Development', link: '/rd-tax-credit/software' },
    { icon: Building2, name: 'Manufacturing', link: '/rd-tax-credit/manufacturing' },
    { icon: Plane, name: 'Aerospace & Defense', link: '/rd-tax-credit/aerospace' },
    { icon: Leaf, name: 'Agriculture', link: '/rd-tax-credit/agriculture' },
    { icon: Flask, name: 'Biotechnology', link: '/rd-tax-credit/biotechnology' },
    { icon: Beaker, name: 'Chemical Engineering', link: '/rd-tax-credit/chemicals' },
    { icon: Building2, name: 'Construction', link: '/rd-tax-credit/construction' },
    { icon: Zap, name: 'Energy & Utilities', link: '/rd-tax-credit/energy' }
  ];

  return (
    <Layout>
      <SEO 
        title="R&D Tax Credit Experts | Credits Granted"
        description="Maximize your R&D tax credits with expert guidance and audit-ready documentation. Get a free evaluation today."
        canonical="https://creditsgranted.com"
      />
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Maximize Your R&D Tax Credits with Expert Guidance
          </h1>
          <p className="hero-subheadline text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Get audit-ready documentation and maximize your savings with our expert R&D tax credit services
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="text-xl">
              Get My Free Evaluation
            </CTAButton>
            <Link 
              to="/calculator"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 hover:shadow-lg border-2 border-white/20"
            >
              Calculate Your Credit
            </Link>
          </div>
        </div>
      </section>

      {/* What is the R&D Tax Credit Section */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className={`section-container ${isVisible ? 'visible' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
                What is the R&D Tax Credit?
              </h2>
              <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
                A dollar-for-dollar tax incentive for companies developing new or improved products, processes, software, or formulas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#F8FAFC] p-8 rounded-lg text-center">
                <DollarSign className="w-12 h-12 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                  <CountUp end={250000} prefix="$" separator="," duration={2.5} />+
                </h3>
                <p className="text-[#64748B]">Average Credit Amount</p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-lg text-center">
                <FileCheck className="w-12 h-12 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                  <CountUp end={3} duration={2.5} />-Year
                </h3>
                <p className="text-[#64748B]">Lookback Period</p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-lg text-center">
                <Shield className="w-12 h-12 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">100%</h3>
                <p className="text-[#64748B]">Audit Protection</p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-lg text-center">
                <CheckCircle className="w-12 h-12 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                  <CountUp end={15} duration={2.5} />%
                </h3>
                <p className="text-[#64748B]">Success Fee Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`section-container ${isVisible ? 'visible' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
                Who Qualifies for the R&D Tax Credit?
              </h2>
              <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
                If your company develops new products, processes, software, or formulas, you likely qualify. Here are some common industries:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Link 
                  key={index}
                  to={industry.link}
                  className="flip-card"
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front p-8">
                      <industry.icon className="w-12 h-12 text-[#124C56] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-[#1E293B]">{industry.name}</h3>
                    </div>
                    <div className="flip-card-back">
                      <Link 
                        to={industry.link}
                        className="text-[#124C56] font-semibold hover:text-[#0A6C74] transition-colors"
                      >
                        Learn More
                        <ChevronRight className="inline-block w-5 h-5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/calculator"
                className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold text-lg group"
              >
                See If You Qualify 
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="py-20 px-4 bg-[#124C56] text-white">
        <div className="max-w-7xl mx-auto">
          <div className={`section-container ${isVisible ? 'visible' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Trusted by Businesses Nationwide
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Join hundreds of companies maximizing their R&D tax credits with our expert guidance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">
                  <CountUp end={73} prefix="$" suffix="M+" duration={2.5} />
                </h3>
                <p className="text-lg text-white/80">Credits Secured</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">
                  <CountUp end={500} suffix="+" duration={2.5} />
                </h3>
                <p className="text-lg text-white/80">Successful Studies</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-lg text-white/80">Audit Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Ready to Maximize Your R&D Credits?
          </h2>
          <p className="text-xl text-[#64748B] mb-8">
            Book your free evaluation today and discover how much you could save.
          </p>
          <CTAButton className="text-xl">
            Get My Free Evaluation
          </CTAButton>
        </div>
      </section>
    </Layout>
  );
}

export default App;