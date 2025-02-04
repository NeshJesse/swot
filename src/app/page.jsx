import React from "react";


const HeroSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Make Smarter <span className="text-indigo-600">Dating Decisions</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Whether you're dating, crushing, or scouting potential partners, BaeSWOT helps you analyze compatibility like a pro. No more overlooking red flags! 🚩
      </p>
      <a href='/home'>
      <button className="bg-indigo-600 text-white text-lg px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
        Start Your Analysis
      </button>
      </a>
    </div>
  </section>
);

const FeatureCard = ({ title, description, color }) => (
  <div className={`bg-${color}-50 p-8 rounded-2xl`}>
    <h3 className={`text-2xl font-bold text-${color}-700 mb-4`}>{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const FeaturesGrid = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard title="Strengths" description="Identify what makes them special. From their amazing cooking skills to their emotional intelligence." color="green" />
        <FeatureCard title="Weaknesses" description="Spot potential deal-breakers early. Know what you're getting into and if it's worth it." color="red" />
        <FeatureCard title="Opportunities" description="See the potential for growth together. Discover shared goals and future possibilities." color="blue" />
        <FeatureCard title="Threats" description="Evaluate external challenges. From demanding schedules to different life goals." color="yellow" />
      </div>
    </div>
  </section>
);

const StepCard = ({ step, title, description }) => (
  <div>
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">{step}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <StepCard step="1️⃣" title="Enter Their Name" description="Start with the basics. No account needed, just jump right in!" />
        <StepCard step="2️⃣" title="Add Your Insights" description="Quick and easy analysis with helpful prompts and suggestions." />
        <StepCard step="3️⃣" title="Get Clarity" description="See the bigger picture and make informed decisions about your love life." />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-indigo-50">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Dating Game?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Whether you're single, dating, or just curious - BaeSWOT helps you make smarter romantic decisions.
      </p>
      <a href='/home'>
      <button className="bg-indigo-600 text-white text-lg px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
        Start Your Free Analysis
      </button>
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 py-8">
    <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
      <p>© 2025 BaeSWOT - Make smarter dating decisions 🌟 Built by 
        <a href="https://www.instagram.com/itsjesse.nehemiah">Jesse Nehemiah</a>
      </p>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
    <main>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default LandingPage;