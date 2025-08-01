// import Image from "next/image";
// import AppleIcon from "@mui/icons-material/Apple";

// interface FooterProps {
//   header: string;
//   links: { name: string; url: string }[];
// }

// // FooterStyle as a separate component
// const FooterStyle: React.FC<FooterProps> = ({ header, links }) => {
//   return (
//     <div className="xl:mx-3 lg:mx-3 md:mx-0 text-left">
//       <h5 className="text-white md:text-[14px] font-semibold mb-5">{header}</h5>
//       <ul className="space-y-2 mt-4">
//         {links.map((link, index) => (
//           <li key={index}>
//             <a
//               className="text-gray-400 hover:text-white text-[13px] transition duration-300"
//               href={link.url}
//             >
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black1 w-full text-white">
//       {/* Logo & Social Icons */}
//       <div className="flex flex-wrap flex-col lg:flex-row  justify-center items-center lg:justify-between max-w-[1350px] mx-auto px-6 py-8">
//         <Image
//           className="brightness-0 invert"
//           src="/footericon/logo.svg"
//           alt="white logo"
//           width={180}
//           height={38}
//           priority
//         />

//         {/* Social Icons */}
//         <div className="flex gap-4 items-center mt-5 lg:mt-0 flex-col md:flex-row">
//           <div className="flex gap-4 items-center">
//             <a
//               href="https://play.google.com/store/apps/details?id=com.intellectsoftwares.aionioncaptial"
//               className="inline-block"
//             >
//               <div className="flex justify-between gap-2 items-center bg-[#ffff] px-6 py-1 rounded-3xl">
//                 <Image
//                   src="/footericon/play.svg"
//                   alt="google icon"
//                   width={24}
//                   height={24}
//                 />
//                 <div>
//                   <h3 className="text-black2 text-[8px] font-bold">
//                     GET IT ON
//                   </h3>
//                   <h2 className="text-black1  text-[12px] font-bold">
//                     Google Play
//                   </h2>
//                 </div>
//               </div>
//             </a>
//             <a
//               href="https://apps.apple.com/us/app/aionion-capital/id6740156959"
//               className="inline-block"
//             >
//               <div className="flex justify-between gap-2 items-center bg-[#ffff] px-6 py-1 rounded-3xl">
//                 <AppleIcon
//                   className="text-black2 w-[20px] h-[20px]"
//                   fontSize="medium"
//                 />
//                 <div className="">
//                   <h3 className="text-black2  text-[8px] font-bold">
//                     Download on the
//                   </h3>
//                   <h2 className="text-black1  text-[12px] font-bold">
//                     App Store
//                   </h2>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div className="flex gap-4 items-center">
//             {[
//               { img: "fb", link: "https://www.facebook.com/aionioncapital" },
//               { img: "twitter", link: "https://x.com/aionioncapital" },
//               {
//                 img: "linkedin",
//                 link: "https://www.linkedin.com/company/aionioncapital",
//               },
//               {
//                 img: "instragram",
//                 link: "https://www.instagram.com/aionioncapital",
//               },
//               {
//                 img: "youtube",
//                 link: "https://www.youtube.com/@AionionCapital",
//               },
//             ].map((item, i) => (
//               <a href={item?.link} key={i}>
//                 <Image
//                   key={item?.img}
//                   className={"rounded-lg w-8 h-8"}
//                   src={`/footericon/${item?.img}.svg`}
//                   alt={`${item?.img} logo`}
//                   width={32}
//                   height={32}
//                   priority
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* <div className="px-5 py-10 text-center">
//         <h3 className="text-white font-semibold">Important Links</h3>
//         <div className="mt-3">
//           {[
//             { name: "NSE", url: "https://www.nseindia.com/" },
//             {
//               name: " BSE",
//               url: "https://www.bseindia.com/static/investors/cac_tm.aspx?expandable=2",
//             },
//             { name: "SEBI", url: "https://www.sebi.gov.in/" },
//             { name: "CDSL", url: "https://www.cdslindia.com/" },
//             { name: "NSDL", url: "https://www.cdslindia.com/" },
//           ].map((item, i) => (
//             <a
//               href={item?.url}
//               className="text-blue-300 hover:text-blue-400"
//               key={i}
//             >
//               {item?.name} {i === 4 ? " " : "|"}{" "}
//             </a>
//           ))}
//         </div>
//         <div className="px-5 mt-2 text-gray-400">
//           The Stock Exchanges are not in any manner answerable, responsible or
//           liable to any person or persons for any acts of omission or
//           commission, errors, mistakes and/or violation, actual or perceived, by
//           us or our partners, agents, associates, etc., of any of the Rules,
//           Regulations, Bye-laws of the Stock Exchanges, SEBI Act or any other
//           laws in force from time to time. The Stock Exchanges are not
//           answerable, responsible or liable for any information on this Website
//           or for any services rendered by us, our employees, and our servants.
//         </div>
//       </div> */}
//       {/* Links Section - Uses Grid for Responsive Layout */}
//       <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-1  gap-6 max-w-[1350px] mx-auto px-6 py-6 md:py-10">
//         {[
//           {
//             header: "Site map",
//             links: [
//               { name: "About us", url: "/about" },
//               { name: "Contact Us", url: "/contact" },
//               {
//                 name: "Key Managerial Persons",
//                 url: "/about#key-managerial-persons",
//               },
//               {
//                 name: "How to file a complaint",
//                 url: "/resources#find-complaint",
//               },
//               {
//                 name: "Find the status of a complaint",
//                 url: "/resources#find-complaint",
//               },
//             ],
//           },
//           {
//             header: "",
//             links: [
//               {
//                 name: "Excalation Matrix",
//                 url: "/resources#excalation-matrix",
//               },
//               { name: "Bank Details", url: "/bonddetails#bank-details" },
//               { name: "Investor Support Center", url: "/resources" },
//               { name: "Application Form", url: "/resources" },
//               { name: "Investor Advisory Section", url: "/investor" },
//             ],
//           },
//           {
//             header: "",
//             links: [
//               { name: "Privacy Policy", url: "/privacypolicy" },
//               { name: "Disclaimer", url: "/disclaimer" },
//               { name: "Refund Cancellations", url: "/refundcancellation" },
//               { name: "Terms and Conditions", url: "/termsconditions" },
//             ],
//           },
//           {
//             header: "Important Links",
//             links: [
//               { name: "NSE", url: "https://www.nseindia.com/" },
//               {
//                 name: " BSE",
//                 url: "https://www.bseindia.com/static/investors/cac_tm.aspx?expandable=2",
//               },
//               { name: "SEBI", url: "https://www.sebi.gov.in/" },
//               { name: "CDSL", url: "https://www.cdslindia.com/" },
//               { name: "NSDL", url: "https://www.cdslindia.com/" },
//             ],
//           },
//         ].map((item, i) => (
//           <FooterStyle key={i} header={item?.header} links={item.links} />
//         ))}
//       </div>

//       {/* Copyright Section */}
//       <div className="bg-black text-center py-5 px-6">
//         <p className="text-gray-400 text-sm">
//           Copyright ©2025 Aionion Capital. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ...existing imports
import Image from "next/image";
import AppleIcon from "@mui/icons-material/Apple";

interface FooterProps {
  header: string;
  links: { name: string; url: string }[];
}

const FooterStyle: React.FC<FooterProps> = ({ header, links }) => (
  <div className="min-w-[180px]">
    {header && (
      <h5 className="text-white text-[14px] font-semibold mb-4">{header}</h5>
    )}
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="text-gray-400 hover:text-white text-[13px] transition duration-300"
            href={link.url}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black1 w-full text-white text-sm">
      {/* Top Row: Logo + Store Badges + Social Icons */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1350px] mx-auto px-6 py-10 gap-8 border-b border-gray-800">
        <Image
          className="brightness-0 invert"
          src="/footericon/logo.svg"
          alt="white logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          {/* Store Badges */}
          <div className="flex gap-4">
            {/* Play Store */}
            <a href="https://play.google.com/store/apps/details?id=com.intellectsoftwares.aionioncaptial">
              <div className="flex items-center bg-white px-4 py-1.5 rounded-2xl">
                <Image
                  src="/footericon/play.svg"
                  alt="google icon"
                  width={24}
                  height={24}
                />
                <div className="ml-2">
                  <p className="text-black2 text-[9px] font-medium">
                    GET IT ON
                  </p>
                  <p className="text-black1 text-[13px] font-bold">
                    Google Play
                  </p>
                </div>
              </div>
            </a>
            {/* App Store */}
            <a href="https://apps.apple.com/us/app/aionion-capital/id6740156959">
              <div className="flex items-center bg-white px-4 py-1.5 rounded-2xl">
                <AppleIcon className="text-black2 w-[20px] h-[20px]" />
                <div className="ml-2">
                  <p className="text-black2 text-[9px] font-medium">
                    Download on the
                  </p>
                  <p className="text-black1 text-[13px] font-bold">App Store</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
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
              <a href={item.link} key={i}>
                <Image
                  src={`/footericon/${item.img}.svg`}
                  alt={`${item.img} logo`}
                  width={28}
                  height={28}
                  className="rounded-lg hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1350px] mx-auto px-6 py-12">
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
                name: "Excalation Matrix",
                url: "/resources#excalation-matrix",
              },
              { name: "Bank Details", url: "/bonddetails#bank-details" },
              { name: "Investor Support Center", url: "/resources" },
              { name: "Application Form", url: "/resources" },
              { name: "Investor Advisory Section", url: "/investor" },
              { name: "SMART ODR", url: "/smartodr" },
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
              { name: "CDSL e-voting", url: "https://www.cdslindia.com/" },
              { name: "NSDL e-voting", url: "https://www.cdslindia.com/" },
            ],
          },
        ].map((item, i) => (
          <FooterStyle key={i} header={item.header} links={item.links} />
        ))}
      </div>

      {/* Legal, Compliance & Notices */}
      <div className="border-t border-gray-800 text-gray-400 px-6 py-10 max-w-[1350px] mx-auto space-y-10 text-sm leading-relaxed">
        {/* Company Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-semibold text-white">
              M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED
            </h2>
            <p>
              3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
              Chennai - 600 014
            </p>
            <p>PAN: ABACA2285K</p>
            <p>GST: 33ABACA2285K1ZR</p>
            <p>TAN: CHEA37281G</p>
            <p>BSE Member Code: 6878</p>
            <p>CDSL DP ID: 12100800</p>
            <p>CDSL/NSDL SEBI Reg. No.: IN-DP-790-2024</p>
          </div>

          <div className="space-y-1 text-end">
            <p>SEBI: INZ000318532</p>
            <p>CIN: U66120TN2024PTC167864</p>
            <p>AMFI Registration Number: ARN-296313</p>
            <p>NSE Member Code: 90405</p>
            <p>NSDL DP ID: IN304772</p>
            <p>Research Analyst SEBI Registration Number: INH000020138</p>
          </div>
        </div>

        {/* Compliance Officer */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p>
            <span className="text-white font-semibold">
              Compliance Officer:
            </span>{" "}
            Ms. Swati Keshari
            <br />
            <a
              href="mailto:compliance@aionioncapital.com"
              className="underline"
            >
              compliance@aionioncapital.com
            </a>{" "}
            |{" "}
            <a
              href="mailto:grievances@aionioncapital.com"
              className="underline"
            >
              grievances@aionioncapital.com
            </a>
          </p>
        </div>

        {/* Attention Investors */}
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-white font-semibold text-center mb-2">
            Attention Investors
          </h3>
          <ul className="list-decimal list-inside space-y-1">
            <li>
              Stock brokers can accept securities as margin only by way of
              pledge in the depository system w.e.f. 1 Sep 2020.
            </li>
            <li>
              Update your email ID and mobile number with your stock broker to
              receive OTPs from the depository.
            </li>
            <li>
              Check your securities in the NSDL/CDSL consolidated account
              statement every month.
            </li>
            <li>
              Prevent unauthorized transactions by updating your mobile/email
              with your stock broker and enabling end-of-day alerts.
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="text-sm border-t border-gray-700 pt-6">
          <p>
            The Stock Exchanges are not in any manner answerable or liable for
            any acts of omission or commission by us or our partners, agents,
            associates, etc., of any of the Rules, Regulations, SEBI Act or any
            other laws. We are solely responsible for all content on this
            website.
          </p>
          <p className="mt-3">
            Depository Participants info:{" "}
            <a
              href="https://www.cdslindia.com/eservices/DP/DPDatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              https://www.cdslindia.com/eservices/DP/DPDatabase
            </a>
          </p>
          <p className="mt-3">
            Investments in securities market are subject to market risks, read
            all related documents carefully before investing.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          ©2025 Aionion Capital. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

