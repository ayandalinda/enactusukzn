<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enactus UKZN | Entrepreneurial Action Us</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Custom Animations */\n        .fade-up {\n            opacity: 0;\n            transform: translateY(30px);\n            transition: all 0.8s ease-out;\n        }\n\n        .fade-up.visible {\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        .slide-in-left {\n            opacity: 0;\n            transform: translateX(-50px);\n            transition: all 0.8s ease-out;\n        }\n\n        .slide-in-left.visible {\n            opacity: 1;\n            transform: translateX(0);\n        }\n\n        /* Hero Gradient overlay - Enactus Gold to Dark */\n        .hero-overlay {\n            background: linear-gradient(135deg, rgba(180, 157, 99, 0.75) 0%, rgba(33, 33, 33, 0.9) 100%);\n        }\n\n        /* Card Hover Effects */\n        .project-card:hover .card-image {\n            transform: scale(1.1);\n        }\n        \n        /* Blob Animation Background */\n        @keyframes blob {\n            0% { transform: translate(0px, 0px) scale(1); }\n            33% { transform: translate(30px, -50px) scale(1.1); }\n            66% { transform: translate(-20px, 20px) scale(0.9); }\n            100% { transform: translate(0px, 0px) scale(1); }\n        }\n        .animate-blob {\n            animation: blob 7s infinite;\n        }\n        .animation-delay-2000 {\n            animation-delay: 2s;\n        }\n        .animation-delay-4000 {\n            animation-delay: 4s;\n        }\n    "
    }}
  />
  {/* Navigation */}
  <nav
    className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300"
    id="navbar"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-heading font-bold text-enactus-gray tracking-tighter">
            <img
              src="/images/logo.png"
              alt="Enactus UKZN"
              className="h-12 w-auto"
            />
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className="text-gray-700 hover:text-enactus-gold font-semibold transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-enactus-gold font-semibold transition"
          >
            About
          </a>
          <a
            href="#impact"
            className="text-gray-700 hover:text-enactus-gold font-semibold transition"
          >
            Impact
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-enactus-gold font-semibold transition"
          >
            Projects
          </a>
          <a
            href="#join"
            className="px-5 py-2 bg-enactus-gold text-gray-900 rounded-full font-bold hover:bg-enactus-gray hover:text-white transition shadow-lg transform hover:-translate-y-0.5"
          >
            Join Us
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-btn"
            className="text-gray-700 hover:text-enactus-gold focus:outline-none"
          >
            <i className="fas fa-bars text-2xl" />
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu Panel */}
    <div
      id="mobile-menu"
      className="hidden md:hidden bg-white border-t border-gray-100"
    >
      <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
        <a
          href="#home"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-enactus-gold hover:bg-gray-50"
        >
          Home
        </a>
        <a
          href="#about"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-enactus-gold hover:bg-gray-50"
        >
          About
        </a>
        <a
          href="#impact"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-enactus-gold hover:bg-gray-50"
        >
          Impact
        </a>
        <a
          href="#projects"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-enactus-gold hover:bg-gray-50"
        >
          Projects
        </a>
        <a
          href="#join"
          className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-enactus-gold text-gray-900"
        >
          Join The Team
        </a>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <section
    id="home"
    className="relative h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="images/team.jpg"
        alt="Enactus Ukzn students"
        className="w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
    </div>
    {/* Animated Background Blobs */}
    <div className="absolute top-0 -left-4 w-72 h-72 bg-enactus-gray rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-enactus-gold rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-up">
      <span className="block text-enactus-gold font-bold tracking-widest uppercase mb-4">
        Inspiring Greatness
      </span>
      <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
        ENTREPRENEURIAL ACTION FOR OTHERS
        <br />
        CREATES A BETTER WORLD FOR{" "}
        <span className="text-enactus-gold">US ALL.</span>
      </h1>
      <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
        We are a community of students, academic and business leaders committed
        to using the power of entrepreneurial action to transform lives.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-enactus-gold text-gray-900 font-bold rounded-full shadow-lg hover:bg-white transition transform hover:scale-105"
        >
          View Our Projects
        </a>
        <a
          href="#about"
          className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about" className="py-20 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-s1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-in-left">
          <h4 className="text-enactus-gold font-bold uppercase tracking-wide mb-2">
            About Us
          </h4>
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Mind for Business. <br />
            Heart for communities.
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Enactus UKZN is part of an international non-profit organization
            dedicated to inspiring students to improve the world through
            entrepreneurial action. We provide a platform for teams of
            outstanding university students to create community development
            projects that put people's own ingenuity and talents at the center
            of improving their livelihoods.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-enactus-gold mr-3" />{" "}
              Sustainable Development
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-enactus-gold mr-3" />{" "}
              Student Leadership
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-enactus-gold mr-3" />{" "}
              Innovation &amp; Entrepreneurship
            </li>
          </ul>
        </div>
        <div className="relative fade-up">
          <div className="absolute -inset-4 bg-enactus-gold rounded-xl opacity-30 transform rotate-3" />
          <img
            src="images/happy.jpg"
            alt="Team meeting"
            className="relative rounded-xl shadow-2xl w-full object-cover h-96"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Impact Statistics (Counters) */}
  {/*<section id="impact" class="py-16 bg-enactus-dark text-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="stat-item fade-up">
              <div class="text-5xl font-heading font-bold text-enactus-gold mb-2 counter" data-target="120">0</div>
              <div class="text-sm uppercase tracking-widest text-gray-400">Active Members</div>
          </div>
          <div class="stat-item fade-up" style="transition-delay: 100ms;">
              <div class="text-5xl font-heading font-bold text-white mb-2 counter" data-target="8">0</div>
              <div class="text-sm uppercase tracking-widest text-gray-400">Active Projects</div>
          </div>
          <div class="stat-item fade-up" style="transition-delay: 200ms;">
              <div class="text-5xl font-heading font-bold text-enactus-gold mb-2 counter" data-target="3500">0</div>
              <div class="text-sm uppercase tracking-widest text-gray-400">Lives Impacted</div>
          </div>
          <div class="stat-item fade-up" style="transition-delay: 300ms;">
              <div class="text-5xl font-heading font-bold text-white mb-2 counter" data-target="15">0</div>
              <div class="text-sm uppercase tracking-widest text-gray-400">Awards Won</div>
          </div>
      </div>
  </div>
    </section> */}
  {/* Projects Section */}
  <section id="projects" className="py-20 bg-enactus-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-up">
        <h4 className="text-enactus-gray font-bold uppercase tracking-wide mb-2">
          Our Work
        </h4>
        <h2 className="text-4xl font-heading font-bold text-gray-900">
          Current Initiatives
        </h2>
        <div className="w-24 h-1 bg-enactus-gold mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer fade-up">
          <div className="h-48 overflow-hidden">
            <img
              src="images/my panic logo.jpg"
              alt="My panic logo"
              className="card-image w-full h-full object-cover transition duration-500"
            />
          </div>
          <div className="p-6 relative">
            <div className="absolute -top-6 right-6 bg-enactus-gold text-gray-900 p-3 rounded-full shadow-md">
              <i className="fas fa-seedling text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-enactus-gold transition">
              My panic
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              A compact, silicone whistle keychain that provides a reliable,
              accessible tool for personal safety.
            </p>
            <span className="text-enactus-gray font-bold text-sm uppercase tracking-wider group-hover:text-enactus-gold transition">
              Read Case Study →
            </span>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer fade-up">
          <div className="h-48 overflow-hidden">
            <img
              src="images/ecobloom compost logo.jpg"
              alt="ECOBLOOM COMPOST logo"
              className="card-image w-full h-full object-cover transition duration-500"
            />
          </div>
          <div className="p-6 relative">
            <div className="absolute -top-6 right-6 bg-enactus-gold text-gray-900 p-3 rounded-full shadow-md">
              <i className="fas fa-seedling text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-enactus-gold transition">
              ECOBLOOM COMPOST
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              a recycling enterprise that converts organic waste (food scraps,
              grass cuttings, and leaves) into compost, aligning with the United
              Nations Sustainable Development Goals addressing challenges like
              food security, waste management, and live improvement.
            </p>
            <span className="text-enactus-gray font-bold text-sm uppercase tracking-wider group-hover:text-enactus-gold transition">
              Read Case Study →
            </span>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer fade-up">
          <div className="h-48 overflow-hidden">
            <img
              src="images/Growers Choice logo.jpg"
              alt="Growers Choice logo"
              className="card-image w-full h-full object-cover transition duration-500"
            />
          </div>
          <div className="p-6 relative">
            <div className="absolute -top-6 right-6 bg-enactus-gold text-gray-900 p-3 rounded-full shadow-md">
              <i className="fas fa-seedling text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-enactus-gold transition">
              Growers Choice
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Grower’s Choice aims to tackle rural underdevelopment,
              unemployment, and food insecurity by producing and selling fresh
              produce, smoothies, and processed goods through a three-pillar
              model of plantation, processing, and sales.
            </p>
            <span className="text-enactus-gray font-bold text-sm uppercase tracking-wider group-hover:text-enactus-gold transition">
              Read Case Study →
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call to Action / Join Section */}
  <section id="join" className="py-20 bg-enactus-gray relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#FFC222" />
      </svg>
    </div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
        Ready to Make a Difference?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Join a network of leaders who are committed to using business as a force
        for good. Be part of the Enactus UKZN legacy.
      </p>
      <button className="bg-enactus-gold text-gray-900 text-lg font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-1 border-2 border-transparent hover:border-enactus-gold">
        Apply for Membership
      </button>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-enactus-dark text-white pt-16 pb-8 border-t-4 border-enactus-gold">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-heading font-bold text-white mb-4">
            enactus <span className="text-enactus-gold">UKZN</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            University of KwaZulu-Natal
            <br />
            Westville Campus, Durban
            <br />
            South Africa
          </p>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/enactusZA?__tn__=%3C"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-enactus-gold hover:text-gray-900 transition"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/enactusukzn"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-enactus-gold hover:text-gray-900 transition"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/enactusukzn_/"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-enactus-gold hover:text-gray-900 transition"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://za.linkedin.com/company/enactus-ukzn"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-enactus-gold hover:text-gray-900 transition"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-enactus-gold">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition"
              >
                Our Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                News &amp; Events
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-enactus-gold">Contact</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <i className="fas fa-envelope mr-2" /> mhlongom2@ukzn.ac.za
            </li>
            <li className="text-gray-400">
              <i className="fas fa-phone mr-2" /> +27 31 260 8605
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Enactus UKZN. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</>
