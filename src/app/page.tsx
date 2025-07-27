'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Set dynamic page title
    document.title = "Vše Pro Stavby - Vše pro vaše stavební projekty";

    // Generate a simple SVG favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3498db" /><stop offset="100%" stop-color="#2c3e50" /></linearGradient></defs><rect x="0" y="0" width="100" height="100" rx="20" ry="20" fill="url(#g)" /><text x="50%" y="60%" font-family="Arial, sans-serif" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">S</text></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
     

      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-3xl font-bold tracking-tight">
            Vše Pro Stavby
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-200 transition duration-300">O nás</a>
            <a href="#services" className="hover:text-blue-200 transition duration-300">Služby</a>
            <a href="#gallery" className="hover:text-blue-200 transition duration-300">Galerie</a>
            <a href="#contact" className="hover:text-blue-200 transition duration-300">Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 bg-opacity-95 py-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#about" onClick={toggleMenu} className="block text-white text-lg hover:text-blue-200 transition duration-300">O nás</a>
              <a href="#services" onClick={toggleMenu} className="block text-white text-lg hover:text-blue-200 transition duration-300">Služby</a>
              <a href="#gallery" onClick={toggleMenu} className="block text-white text-lg hover:text-blue-200 transition duration-300">Galerie</a>
              <a href="#contact" onClick={toggleMenu} className="block text-white text-lg hover:text-blue-200 transition duration-300">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/images/content-5.jpg")' }}></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Vše Pro Stavby
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-500">
            Vášeň pro kvalitu a spokojenost zákazníka v každém stavebním projektu.
          </p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-fade-in-up animation-delay-1000">
            Získat Nezávaznou Nabídku
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            O Nás
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Vítejte u firmy Vše Pro Stavby, kde se snoubí dlouholeté zkušenosti s inovativním přístupem v oblasti stavebnictví. Jsme tým profesionálů, kteří s vášní a precizností realizují vaše stavební sny.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Naše filozofie spočívá v otevřené komunikaci, transparentnosti a dodržování nejvyšších standardů kvality. Věříme, že každý projekt je jedinečný a zaslouží si individuální přístup a řešení na míru.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                S námi máte jistotu, že váš projekt bude v dobrých rukou – od prvního náčrtu až po finální předání. Spokojenost zákazníka je naší nejvyšší prioritou.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/content-2.jpg" alt="Tým Vše Pro Stavby" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Naše Služby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Zemní práce a základy</h3>
              <p className="text-gray-700 text-center">
                Profesionální zemní práce včetně výkopů, terénních úprav a přípravy základů pro jakýkoli typ stavby.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Novostavby a Rekonstrukce</h3>
              <p className="text-gray-700 text-center">
                Kompletní realizace novostaveb rodinných domů, komerčních objektů i citlivé rekonstrukce.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Zateplování fasád</h3>
              <p className="text-gray-700 text-center">
                Efektivní zateplování fasád pro úsporu energie a zlepšení komfortu bydlení s moderními materiály.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Zednické práce</h3>
              <p className="text-gray-700 text-center">
                Veškeré zednické práce, od vnitřních příček po nosné zdi, s důrazem na pevnost a estetiku.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14v6m-3-3h6m-9-11V4a1 1 0 011-1h2a1 1 0 011 1v3M7 21h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Hydroizolace</h3>
              <p className="text-gray-700 text-center">
                Komplexní řešení hydroizolace základů, střech a bazénů pro dlouhodobou ochranu proti vlhkosti.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 mb-4 text-5xl flex justify-center items-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 7h1m4-7h1m-1 7h1m-4-7h.01M7 12h.01M12 12h.01M17 12h.01M12 7h.01M12 17h.01M7 7h.01M17 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Dopravní stavby</h3>
              <p className="text-gray-700 text-center">
                Realizace dopravních komunikací, parkovišť a dalších infrastrukturních projektů s důrazem na životnost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Naše Projekty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-3.jpg" alt="Projekt 1" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Moderní rodinný dům</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-6.jpg" alt="Projekt 2" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Rekonstrukce historické budovy</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-7.jpg" alt="Projekt 3" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Výstavba komerční haly</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-8.jpg" alt="Projekt 4" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Zateplení bytového domu</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-9.jpg" alt="Projekt 5" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Hydroizolace střechy</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/content-2.jpg" alt="Projekt 6" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-xl font-semibold">Oprava fasády</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Kontaktujte Nás
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Máte dotaz nebo potřebujete nezávaznou nabídku? Neváhejte nás kontaktovat, rádi vám pomůžeme s vaším projektem.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-blue-200 mb-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-semibold text-xl">Email</p>
              <p className="text-blue-100 mt-2">info@vseprostavby.cz</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-200 mb-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="font-semibold text-xl">Telefon</p>
              <p className="text-blue-100 mt-2">+420 777 123 456</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-200 mb-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-semibold text-xl">Adresa</p>
              <p className="text-blue-100 mt-2">Stavební 123, 110 00 Praha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="text-sm mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">DigitalFusion</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        /* Custom animation for hero section */
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}