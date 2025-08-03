
"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Added
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
        <h5 className="text-white md:text-[14px] font-semibold mb-1">
          {header}
        </h5>
      )}
      <ul className="space-y-2 mt-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-gray-400 hover:text-white text-[13px] transition duration-300"
              href={link.url}
            >
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
    <footer className="bg-[#1a1a1a] text-white text-sm px-4 md:px-10 pt-10">
      {/* Logo and App Links */}
      <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center lg:justify-between max-w-[1350px] mx-auto px-6 py-2">
        <Image
          className="brightness-0 invert"
          src="/footericon/logo.svg"
          alt="white logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center mt-5 lg:mt-0 flex-col md:flex-row">
          {/* App Store Buttons */}
          <div className="flex gap-4 items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.intellectsoftwares.aionioncaptial"
              className="inline-block"
            >
              <div className="flex justify-between gap-2 items-center bg-[#ffff] px-6 py-0 rounded-3xl">
                <Image
                  src="/footericon/play.svg"
                  alt="google icon"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="text-black2 text-[8px] font-bold">
                    GET IT ON
                  </h3>
                  <h2 className="text-black1 text-[12px] font-bold">
                    Google Play
                  </h2>
                </div>
              </div>
            </a>
            <a
              href="https://apps.apple.com/us/app/aionion-capital/id6740156959"
              className="inline-block"
            >
              <div className="flex justify-between gap-2 items-center bg-[#ffff] px-6 py-0 rounded-3xl">
                <AppleIcon
                  className="text-black2 w-[20px] h-[20px]"
                  fontSize="medium"
                />
                <div>
                  <h3 className="text-black2 text-[8px] font-bold">
                    Download on the
                  </h3>
                  <h2 className="text-black1 text-[12px] font-bold">
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
              >
                <Image
                  src={`/footericon/${item.img}.svg`}
                  alt={`${item.img} logo`}
                  width={32}
                  height={32}
                  className="rounded-lg w-8 h-8"
                  priority
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 pb-6 border-b border-gray-700"></div>
      {/* Link Columns */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-6 max-w-[1350px] mx-auto px-6 py-6 md:py-10">
        {[
          {
            header: "Site map",
            links: [
              { name: "About us", url: "/about" },
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
            header: "",
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
            header: "",
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 pb-1 border-b border-gray-700"></div>
      {/* Company Details */}
      <div className="text-gray-400 text-[13px] max-w-[1150px] mx-auto py-6 border-b border-gray-700">
        <div className="text-center font-semibold text-white mb-2">
          M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED
        </div>
        <div className="text-center">
          3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai
          – 600 014
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-1 mt-4"> 
          <span>Company PAN: ABACA2285K</span>
          <span>SEBI: INZ000318532</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-1">
          <span>GST: 33ABACA2285K1ZR</span>
          <span>CIN: U66120TN2024PTC167864</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-1">
          <span>TAN: CHEA37821G</span>
          <span>AMFI Registration Number: ARN-296313</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-1">
          <span>BSE Member Code: 6878</span>
          <span>NSE Member Code: 90405</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-1">
          <span>CDSL DP ID: 12100800</span>
          <span>NSDL DP ID: IN304772</span>
        </div>
        <div className="text-center mt-1">
          CDSL/NSDL SEBI Registration Number: IN-DP-790-2024
        </div>
        <div className="text-center mt-1">
          Research Analyst SEBI Registration Number: INH000020138
        </div>
      </div>
      {/* Compliance Officer */}
      <div className="max-w-[1150px] mx-auto py-4 text-sm">
        <div className="text-center font-semibold uppercase text-white mb-1">
          Compliance Officer Details
        </div>
        <p className="text-center text-gray-400">
          Ms. Swati Keshari | Email:{" "}
          <a
            href="mailto:compliance@aionioncapital.com"
            className="text-blue-400"
          >
            compliance@aionioncapital.com
          </a>
          <br />
          For investor grievances:{" "}
          <a
            href="mailto:grievances@aionioncapital.com"
            className="text-blue-400"
          >
            grievances@aionioncapital.com
          </a>
        </p>
        {/* Add this line below */}
        <div className="border-b border-gray-700 mt-4" />
      </div>
      {/* Attention Investors */}
      <div className="max-w-[1150px] mx-auto py-4 text-sm text-gray-400 border-b border-gray-700">
        <p className="text-center font-semibold uppercase text-white mb-1">
          Attention Investors
        </p>

        <li>
          Stock brokers can accept securities as margin only by way of pledge in
          the depository system w.e.f. 1 Sep 2020.
        </li>
        <li>
          Update your email ID and mobile number with your stock
          broker/depository participant to receive an OTP directly from the
          depository when creating a pledge.
        </li>
        <li>
          Check your securities/MF/bonds in the consolidated account statement
          issued by NSDL/CDSL every month.
        </li>
        <li>
          Prevent unauthorised transactions → update your mobile numbers/email
          IDs with your stock brokers and receive end-of-day transaction alerts
          from the exchange. Issued in the interest of investors.
        </li>
      </div>
      {/* Disclaimer Bottom */}
      <div className="text-center text-gray-500 text-xs py-4 px-2">
        The Stock Exchanges are not in any manner answerable, responsible or
        liable to any person or persons for any acts of omission or commission,
        errors, mistakes and/or violation, actual or perceived, by us or our
        partners, agents, associates, etc., of any of the Rules, Regulations,
        Bye-laws of the Stock Exchanges, SEBI Act or any other laws in force
        from time to time. The Stock Exchanges are not answerable, responsible
        or liable for any information on this Website or for any services
        rendered by us, our employees, and our servants.{" "}
        <Link href="#" className="underline">
          CDSL Website
        </Link>
        .
        <br />
      </div>
      <div className="text-center font-medium text-white mb-1">
        The comprehensive details of Depository Participants is displayed on
        CDSL website at following link:
        https://www.cdslindia.com/eservices/DP/DPDatabase
      </div>{" "}
      <br />
      <div className="text-center font-medium text-white mb-1">
        Investments in securities market are subject to market risks, read all
        the related documents carefully before investing.
      </div>
      <br />
      {/* Copyright Section */}
      <div className="bg-black text-center py-5 px-0">
        <p className="text-gray-400 text-sm">
          Copyright ©2025 Aionion Capital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
