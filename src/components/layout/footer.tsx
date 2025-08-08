
"use client";

import Image from "next/image";
import Link from "next/link";
import AppleIcon from "@mui/icons-material/Apple";
import React from "react";

interface FooterProps {
  header: string;
  links: { name: string; url: string }[];
}

const FooterStyle: React.FC<FooterProps> = ({ header, links }) => {
  return (
    <div className="xl:mx-3 lg:mx-3 md:mx-0 text-left">
      {header && (
        <h5 className="text-white text-[16px] font-bold mb-4 border-b border-[#FE667C]/30 pb-2">
          {header}
        </h5>
      )}
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-gray-300 hover:text-[#FE667C] text-[14px] transition duration-200 flex items-center gap-2 group"
              href={link.url}
            >
              <span className="w-1 h-1 bg-[#FE667C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Top Section - Logo, Apps, Social */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                className="brightness-0 invert hover:opacity-80 transition-opacity duration-200"
                src="/footericon/logo.svg"
                alt="Aionion Capital Logo"
                width={200}
                height={42}
                priority
              />
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4 items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.intellectsoftwares.aionioncaptial"
                className="inline-block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-between gap-3 items-center bg-white px-5 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                  <Image
                    src="/footericon/play.svg"
                    alt="Google Play"
                    width={28}
                    height={28}
                  />
                  <div>
                    <h3 className="text-gray-600 text-[10px] font-bold">
                      GET IT ON
                    </h3>
                    <h2 className="text-gray-900 text-[14px] font-bold">
                      Google Play
                    </h2>
                  </div>
                </div>
              </a>
              <a
                href="https://apps.apple.com/us/app/aionion-capital/id6740156959"
                className="inline-block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-between gap-3 items-center bg-white px-5 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                  <AppleIcon className="text-gray-900 w-7 h-7" />
                  <div>
                    <h3 className="text-gray-600 text-[10px] font-bold">
                      Download on the
                    </h3>
                    <h2 className="text-gray-900 text-[14px] font-bold">
                      App Store
                    </h2>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              {[
                { img: "fb", link: "https://www.facebook.com/aionioncapital" },
                { img: "twitter", link: "https://x.com/aionioncapital" },
                {
                  img: "linkedin",
                  link: "https://www.linkedin.com/company/aionioncapital",
                },
                {
                  img: "instragram",
                  link: "https://www.instagram.com/aionioncapital",
                },
                {
                  img: "youtube",
                  link: "https://www.youtube.com/@AionionCapital",
                },
              ].map((item, i) => (
                <a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-10 h-10 bg-gray-700 hover:bg-[#FE667C] rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                    <Image
                      src={`/footericon/${item.img}.svg`}
                      alt={`${item.img} logo`}
                      width={20}
                      height={20}
                      className="text-white"
                      priority
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              header: "Quick Links",
              links: [
                { name: "About Us", url: "/about" },
                { name: "Contact Us", url: "/contact" },
                {
                  name: "Key Managerial Persons",
                  url: "/about#key-managerial-persons",
                },
                {
                  name: "How to file a complaint",
                  url: "/resources#find-complaint",
                },
                {
                  name: "Find the status of a complaint",
                  url: "/resources#find-complaint",
                },
              ],
            },
            {
              header: "Services",
              links: [
                {
                  name: "Escalation Matrix",
                  url: "/resources#escalation-matrix",
                },
                { name: "Bank Details", url: "/bonddetails#bank-details" },
                { name: "Investor Support Center", url: "/resources" },
                { name: "Application Form", url: "/resources" },
                { name: "Investor Advisory Section", url: "/investor" },
                { name: "SMART ODR", url: "/smart-odr" },
                { name: "SCORES", url: "/scores" },
              ],
            },
            {
              header: "Legal",
              links: [
                { name: "Privacy Policy", url: "/privacypolicy" },
                { name: "Disclaimer", url: "/disclaimer" },
                { name: "Refund Cancellations", url: "/refundcancellation" },
                { name: "Terms and Conditions", url: "/termsconditions" },
              ],
            },
            {
              header: "Important Links",
              links: [
                { name: "NSE", url: "https://www.nseindia.com/" },
                {
                  name: "BSE",
                  url: "https://www.bseindia.com/static/investors/cac_tm.aspx?expandable=2",
                },
                { name: "SEBI", url: "https://www.sebi.gov.in/" },
                { name: "CDSL", url: "https://www.cdslindia.com/" },
                { name: "NSDL", url: "https://www.cdslindia.com/" },
                { name: "CDSL e-voting", url: "https://www.evoting.cdsl.com/" },
                { name: "NSDL e-voting", url: "https://eservices.nsdl.com/" },
              ],
            },
          ].map((section, i) => (
            <FooterStyle key={i} header={section.header} links={section.links} />
          ))}
        </div>

        {/* Company Details */}
        <div className="bg-gray-800/30 rounded-xl p-8 mb-8">
          <h3 className="text-white text-xl font-bold mb-6 text-center border-b border-[#FE667C]/30 pb-3">
            M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED
          </h3>
          <p className="text-gray-300 text-center mb-6 text-[15px]">
            3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai – 600 014
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[13px] text-gray-400">
            <div className="flex justify-between">
              <span className="font-medium">Company PAN:</span>
              <span>ABACA2285K</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">SEBI:</span>
              <span>INZ000318532</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">GST:</span>
              <span>33ABACA2285K1ZR</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">CIN:</span>
              <span>U66120TN2024PTC167864</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">TAN:</span>
              <span>CHEA37821G</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">AMFI:</span>
              <span>ARN-296313</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">BSE Member Code:</span>
              <span>6878</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">NSE Member Code:</span>
              <span>90405</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">CDSL DP ID:</span>
              <span>12100800</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">NSDL DP ID:</span>
              <span>IN304772</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-[13px] text-gray-400">
            <p>CDSL/NSDL SEBI Registration Number: IN-DP-790-2024</p>
            <p className="mt-1">Research Analyst SEBI Registration Number: INH000020138</p>
          </div>
        </div>

        {/* Compliance Officer */}
        <div className="bg-gray-800/30 rounded-xl p-6 mb-8">
          <h3 className="text-white text-lg font-bold mb-4 text-center">
            Compliance Officer Details
          </h3>
          <div className="text-center text-gray-300">
            <p className="mb-2">
              <strong>Ms. Swati Keshari</strong>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:compliance@aionioncapital.com"
                className="text-[#FE667C] hover:text-white transition-colors duration-200"
              >
                compliance@aionioncapital.com
              </a>
            </p>
            <p>
              For investor grievances:{" "}
              <a
                href="mailto:grievances@aionioncapital.com"
                className="text-[#FE667C] hover:text-white transition-colors duration-200"
              >
                grievances@aionioncapital.com
              </a>
            </p>
          </div>
        </div>

        {/* Attention Investors */}
        <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-8">
          <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
            ⚠️ Attention Investors
          </h3>
          <ul className="space-y-3 text-gray-300 text-[14px]">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Stock brokers can accept securities as margin only by way of pledge in the depository system w.e.f. 1 Sep 2020.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Update your email ID and mobile number with your stock broker/depository participant to receive an OTP directly from the depository when creating a pledge.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Check your securities/MF/bonds in the consolidated account statement issued by NSDL/CDSL every month.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Prevent unauthorised transactions → update your mobile numbers/email IDs with your stock brokers and receive end-of-day transaction alerts from the exchange. Issued in the interest of investors.</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-6 mb-8">
          <h3 className="text-red-400 text-lg font-bold mb-4 text-center">
            Important Disclaimer
          </h3>
          <div className="text-gray-300 text-[13px] leading-relaxed space-y-3">
            <p>
              The Stock Exchanges are not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates, etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchanges, SEBI Act or any other laws in force from time to time.
            </p>
            <p>
              The Stock Exchanges are not answerable, responsible or liable for any information on this Website or for any services rendered by us, our employees, and our servants.
            </p>
            <p className="text-center">
              <Link href="#" className="text-[#FE667C] hover:text-white transition-colors duration-200 underline">
                CDSL Website
              </Link>
            </p>
            <p className="text-center font-medium">
              The comprehensive details of Depository Participants is displayed on CDSL website at:{" "}
              <a href="https://www.cdslindia.com/eservices/DP/DPDatabase" className="text-[#FE667C] hover:text-white transition-colors duration-200">
                https://www.cdslindia.com/eservices/DP/DPDatabase
              </a>
            </p>
            <p className="text-center font-medium text-yellow-400">
              ⚠️ Investments in securities market are subject to market risks, read all the related documents carefully before investing.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-[14px]">
              Copyright ©2025 Aionion Capital. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
