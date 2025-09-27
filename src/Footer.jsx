import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          
          
          <div className="">
            <h2 className="text-xl font-bold mb-6">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">About Us</span></li>
              <li><span className="text-gray-400 text-sm">Our Mission</span></li>
              <li><span className="text-gray-400 text-sm">Contact Sales</span></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Products & Services</span></li>
              <li><span className="text-gray-400 text-sm">Customer Stories</span></li>
              <li><span className="text-gray-400 text-sm">Download Apps</span></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Privacy Policy</span></li>
              <li><span className="text-gray-400 text-sm">Terms & Conditions</span></li>
              <li><span className="text-gray-400 text-sm">Join Us</span></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="text-gray-400 text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-gray-400 text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-gray-400 text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
                <span className="text-gray-400 text-sm">support@cst.com</span>
              </li>
            </ul>
          </div>

        </div>

        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;