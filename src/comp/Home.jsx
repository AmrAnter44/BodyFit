import React, { useState, useEffect } from 'react';
import Coaches from '../../src/comp/Coaches';
import Nav2 from '../Nav2';
// Mock Coaches component (replace with your actual Coaches component)


// Mock data for demonstration
const mockOffers = [
  { id: 1, duration: '1 Month', price: '450', price_new: '300', private: '4', inbody: '2', invite: '2' },
  { id: 2, duration: '3 Months', price: '1350', price_new: '700', private: '12', inbody: '6', invite: '6' },
  { id: 3, duration: '6 Months', price: '2400', price_new: '1200', private: '24', inbody: '12', invite: '12' },
  { id: 3, duration: '12 Months', price: '3600', price_new: '1800', private: '24', inbody: '12', invite: '12' },
];

const mockPTPackage = {
  id: 1,
  duration: '1 Month',
  price: '1500',
  price_discount: '1000'
};

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [ptPackage, setPtPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setOffers(mockOffers);
      setPtPackage(mockPTPackage);
      setIsVisible(true);
    }, 300);
  }, []);

  function handlebook(offer) {
    const phone = "201028188900";  
    const message = `Hello, I would like to book the ${offer.duration} offer.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  function handlePTBook(ptPackage) {
    const phone = "201028188900";  
    const message = `Hello, I would like to book ${ptPackage.sessions} PT Sessions for ${ptPackage.duration}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }



  return (
    <div className="min-h-screen bg-black">
      <Nav2></Nav2>
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">


          </div>
        </div>
      </div>

      {/* Membership Offers Section - الأول */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-black px-8 py-4 rounded-full border-2 border-red-600/50 backdrop-blur-sm">
              <i className="fa-solid fa-star text-3xl text-red-600"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-white gymfont">
                Membership Offers
              </h2>
              <i className="fa-solid fa-star text-3xl text-red-600"></i>
            </div>
            <p className="text-gray-400 mt-4 text-lg">Choose the perfect plan for your fitness journey</p>
          </div>

          {/* Offers Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {offers.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <i className="text-5xl text-red-600 fa-solid fa-spinner fa-spin" />
              </div>
            ) : (
              offers.map((offer, index) => (
                <div 
                  key={offer.id}
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-600/30 group-hover:border-red-600/60 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                        <i className="fa-solid fa-calendar-days text-3xl text-white"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-red-500 mb-2 gymfont">
                        {offer.duration}
                      </h3>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      {offer.price_new && offer.price_new !== "0" ? (
                        <div>
                          <span className="text-xl line-through text-gray-500 block mb-1">
                            {offer.price} EGP
                          </span>
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            {offer.price_new} EGP
                          </div>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold text-white">
                          {offer.price} EGP
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>{offer.private} Sessions Personal Training</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>{offer.inbody} Sessions InBody</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>{offer.invite} Guest Invitations</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>ALL Classes</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>SPA Access</span>
                      </li>
                    </ul>

                    {/* Book Button */}
                    <button
                      onClick={() => handlebook(offer)}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg 
                               transform transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50
                               active:scale-95 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        Book Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      </div>

      <section className="py-16 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
            <i className="fa-solid fa-fire text-4xl text-white"></i>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Personal Training Package
            </h2>
            <i className="fa-solid fa-fire text-4xl text-white"></i>
          </div>
          <p className="text-white/90 mt-4 text-lg font-semibold">
            Exclusive one-on-one training with professional coaches
          </p>
        </div>

        {/* PT Card - Horizontal Layout */}
        <div className="w-full max-w-5xl mx-auto">
          {ptPackage ? (
            <div 
              className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-4 border-red-600/0 group-hover:border-red-600/50 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Horizontal Flex Container */}
                <div className="flex items-center justify-between gap-8">
                  
                  {/* Icon + Duration */}
                  <div className="flex items-center gap-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-2xl shadow-red-600/50 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                      <i className="fa-solid fa-dumbbell text-3xl text-white"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-red-600">
                      {ptPackage.duration}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="text-center flex-shrink-0">
                    {ptPackage.price_discount && parseFloat(ptPackage.price_discount) > 0 ? (
                      <div>
                        <span className="text-xl line-through text-gray-400 block">
                          {ptPackage.price} EGP
                        </span>
                        <div className="text-5xl font-bold text-red-600">
                          {ptPackage.price_discount} <span className="text-2xl">EGP</span>
                        </div>
                        <div className="inline-block mt-2 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
                          Save {parseFloat(ptPackage.price) - parseFloat(ptPackage.price_discount)} EGP
                        </div>
                      </div>
                    ) : (
                      <div className="text-5xl font-bold text-red-600">
                        {ptPackage.price} <span className="text-2xl">EGP</span>
                      </div>
                    )}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handlePTBook(ptPackage)}
                    className="py-4 px-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl font-bold text-xl 
                             transform transition-all duration-300 hover:from-red-700 hover:to-red-900 hover:shadow-2xl hover:shadow-red-600/50
                             active:scale-95 relative overflow-hidden group/btn flex-shrink-0"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
                      <i className="fa-brands fa-whatsapp text-2xl"></i>
                      Book Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </button>

                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="text-6xl text-white fa-solid fa-spinner fa-spin" />
              <p className="text-white mt-6 text-xl">Loading PT Package...</p>
            </div>
          )}
        </div>
      </div>
    </section>

      {/* Motivational Banner */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-bold text-white/10 mx-8">
                  # ONE MORE REP
                </span>
              ))}
            </div>
            <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-bold text-white/10 mx-8">
                  # ONE MORE REP
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <Coaches />

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}