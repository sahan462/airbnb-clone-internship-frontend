import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8 px-20 py-12">
      <div className="flex justify-between gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">AirCover</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Anti-discrimination</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Disability support</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation options</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Report neighborhood concern</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Hosting</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Airbnb your home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">AirCover for Hosts</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Hosting resources</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Community forum</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Hosting responsibly</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Airbnb-friendly apartments</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Join a free Hosting class</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Airbnb</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Newsroom</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">New features</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Investors</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Gift cards</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            &copy; 2024 Airbnb, Inc. &middot; <a href="#" className="hover:underline">Terms</a> &middot; <a href="#" className="hover:underline">Sitemap</a> &middot; <a href="#" className="hover:underline">Privacy</a> &middot; Your Privacy Choices
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">English (US)</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">LKR</a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

