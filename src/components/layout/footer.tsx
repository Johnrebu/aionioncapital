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

// FooterStyle remains unchanged
interface FooterProps {
  header: string;
  links: { name: string; url: string }[];
}

const FooterStyle: React.FC<FooterProps> = ({ header, links }) => (
  <div className="xl:mx-3 lg:mx-3 md:mx-0 text-left">
    <h5 className="text-white md:text-[14px] font-semibold mb-5">{header}</h5>
    <ul className="space-y-2 mt-4">
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
      {/* Logo & App Store & Social Icons */}
      <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center lg:justify-between max-w-[1350px] mx-auto px-6 py-8">
        <Image
          className="brightness-0 invert"
          src="/footericon/logo.svg"
          alt="white logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center mt-5 lg:mt-0 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            {/* Play Store */}
            <a href="https://play.google.com/store/apps/details?id=com.intellectsoftwares.aionioncaptial">
              <div className="flex gap-2 items-center bg-white px-6 py-1 rounded-3xl">
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
            {/* App Store */}
            <a href="https://apps.apple.com/us/app/aionion-capital/id6740156959">
              <div className="flex gap-2 items-center bg-white px-6 py-1 rounded-3xl">
                <AppleIcon className="text-black2 w-[20px] h-[20px]" />
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

          {/* Social Media */}
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
              <a href={item.link} key={i}>
                <Image
                  src={`/footericon/${item.img}.svg`}
                  alt={`${item.img} logo`}
                  width={32}
                  height={32}
                  className="rounded-lg w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Grid Links */}
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

      {/* NEW SECTION: Legal + Compliance + Advisory + Disclaimer */}
      <div className="border-gray-700 text-gray-400 px-6 py-10 text-sm space-y-8">
        {/* Company Details */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-bold text-white">
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

          <div className="space-y-1 text-end text-sm leading-relaxed">
            <p>SEBI: INZ000318532</p>
            <p>CIN: U66120TN2024PTC167864</p>
            <p>AMFI Registration Number: ARN-296313</p>
            <p>NSE Member Code: 90405</p>
            <p>NSDL DP ID: IN304772</p>
            <p>Research Analyst SEBI Registration Number: INH000020138</p>
          </div>
        </div>

        {/* Compliance Officer */}
        <div className="border-t border-gray-700 pt-6">
          <h3 className="font-bold text-white mb-1 text-center">
            Compliance Officer Details
          </h3>
          <p className="text-center">
            Ms. Swati Keshari | Email:{" "}
            <a
              href="mailto:compliance@aionioncapital.com"
              className="underline"
            >
              compliance@aionioncapital.com
            </a>
            <br />
            For investor grievances:{" "}
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
          <h3 className="font-bold mb-2 text-white text-center">
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
        <div className="text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>
            The Stock Exchanges are not in any manner answerable, responsible or
            liable to any person or persons for any acts of omission or
            commission, errors, mistakes and/or violation, actual or perceived,
            by us or our partners, agents, associates, etc., of any of the
            Rules, Regulations, Bye-laws of the Stock Exchanges, SEBI Act or any
            other laws in force from time to time. The Stock Exchanges are not
            answerable, responsible or liable for any information on this
            Website or for any services rendered by us, our employees, and our
            servants.
            <a
              href="https://www.cdslindia.com/eservices/DP/DPDatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              CDSL Website
            </a>
            .
          </p>
          <p className="text-center mt-4">
            ©2025 Aionion Capital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
