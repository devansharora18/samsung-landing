"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product & Service",
      links: ["Smartphones", "Tablets", "Audio Sound", "Watches", "Smart Switch", "Mobile Accessories", "TVs", "Sound Devices", "Refrigerators", "Laundry", "Air Solutions", "Cooking Appliances", "Monitors", "Memory Storage"],
    },
    {
      title: "Shop",
      links: ["FAQs", "Contact Us", "Welcome Voucher", "Samsung Referral Advantage", "Samsung Student Advantage", "Defence Purchase Program", "Corporate Employee Program", "Corporate Bulk Purchase", "Samsung Experience Store", "Store Locator", "Smart Club", "Terms of Use", "Order Grievance Redressal", "Explore"],
    },
    {
      title: "Support",
      links: ["WhatsApp Us", "Sign Language", "Email Us", "Call Us", "Email the CEO", "Community", "Product Registration", "Track Repair", "Service Centre", "Share Your Opinion", "Chat with us", "Samsung Members", "Samsung Care+", "Samsung Care+ for Business", "Samsung Care+ for Education", "Samsung Care+ for Enterprise", "Samsung Care+ for Government" ],
    },
    {
      title: "Account & Community",
      links: ["My Page", "My Products", "Orders", "Wishlist", "Vouchers", "My Referrals", "Service", "Community", "Purchase History", "Profile", "Logout", "Sign In"],
    },
    {
      title: "Sustainability",
      links: ["Environment", "Security & Privacy", "Accessibility", "Diversity · Equity · Inclusion", "Corporate Citizenship", "Corporate Sustainability", "Supply Chain", "Sustainability Report", "Sustainability Management", "Sustainability News", "Sustainability Policy", "Sustainability Strategy", "Sustainability Technology" ],
    },
    {
      title: "About Us",
      links: ["Company Info", "Business Area", "Brand Identity", "Careers", "Investor Relations", "Newsroom", "Ethics", "Samsung Design", "Samsung Innovation", "Samsung Research", "Samsung Strategy", "Samsung Technology", "Samsung Vision", "Samsung Way", "Samsung Worldwide" ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col justify-end">
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.05, color: "#60A5FA" }}
                    className="cursor-pointer transition-all duration-200"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>Designed and Developed by <a className="text-blue-400 hover:text-blue-500" href="https://devansharora.in">devansharora.in</a></p> 
          <div className="flex space-x-4">
            <span className="hover:text-blue-400 cursor-pointer">Facebook</span>
            <span className="hover:text-blue-400 cursor-pointer">Twitter</span>
            <span className="hover:text-blue-400 cursor-pointer">Instagram</span>
            <span className="hover:text-blue-400 cursor-pointer">YouTube</span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
