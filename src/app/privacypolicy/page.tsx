// import Header from "@/components/layout/Header";

// export default function privacy() {
//   const privacyPolicy = [
//     {
//       heading: "Introduction",
//       description: `At Aionion Capital, we are committed to protecting your personal data and ensuring that your privacy is respected. This Privacy Policy is designed to inform you about the personal data we collect, how we use it, and the measures we take to protect your information in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable laws in India. \n \n By using our Website, you consent to the collection, use, and sharing of your personal data as described in this Privacy Policy. You have the right to withdraw your consent at any time, but please note that this may impact your ability to access some of our services.`,
//     },
//     {
//       heading: "Importance of Your Information",
//       description: `We value your personal data as one of our most important assets. We collect, process, store, and safeguard your information with the utmost care, following the principles of purpose limitation, data minimization, and accuracy, as required by the DPDPA, 2023. \n \n We take appropriate physical, technical, and administrative measures to ensure the security and confidentiality of your personal data and prevent unauthorized access, disclosure, alteration, or destruction.`,
//     },
//     {
//       heading: "Collection of Personal Data",
//       description: `Under the Digital Personal Data Protection Act, 2023, we are obligated to inform you about the types of personal data we collect. This may include the following categories:`,
//       personalInformation: `
//         Name, gender, date of birth, residential address, contact details (phone number, email address), and marital status. \n
//         Identification Details: \n PAN, Aadhar (where applicable), KYC status, signature, and photograph. \n
//         Financial Information: \n Bank account details, payment information, and other financial data. \n
//         Service-Related Information: \n Data required to provide the services you request, including trading preferences, service usage, and feedback.
//       `,
//     },
//     {
//       heading: "Purpose of Data Collection",
//       description: `Your personal data is used primarily for: \n
//          Processing your service requests and transactions. \n
//          Fulfilling our legal and regulatory obligations. \n
//         Communicating relevant updates, product information, and offers.`,
//     },
//     {
//       heading: "Consent for Data Collection",
//       description: `By providing your personal data, you consent to its collection, processing, and storage in accordance with this Privacy Policy. You may withdraw your consent at any time by contacting us, although this may limit your access to our services.`,
//     },
//     {
//       heading: "Data Retention",
//       description: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Once your data is no longer needed, we will securely delete or anonymize it.`,
//     },
//     {
//       heading: "Data Sharing and Disclosure",
//       description: `We will not share your personal data with third parties except under the following circumstances: 
//         Service Providers: \n We may share your personal data with trusted third-party service providers who assist us in delivering services to you (e.g., payment processing, IT support). These third parties are contractually obligated to maintain the confidentiality and security of your data.  \n
//          Legal Requirements: \n We may disclose your personal data if required by law, regulation, or a court order. This includes compliance with governmental or regulatory authorities, including tax and audit requirements. \n
//          With Your Consent: \n We may share your personal data with third parties only when you explicitly consent to such sharing. In all cases, we ensure that any third-party service providers comply with the DPDPA, 2023, and maintain strict confidentiality standards.`,
//     },
//     {
//       heading: "Rights of Data Subject",
//       description: `Under the Digital Personal Data Protection Act, 2023, you have the following rights concerning your personal data:`,
//       rights: `
//         Right to Access: \n You have the right to access the personal data we hold about you.\n
//         Right to Correction: \n If your personal data is inaccurate or incomplete, you have the right to request that we correct or update it. \n
//         Right to Erasure: \n You may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected or when you withdraw consent. \n
//         Right to Data Portability: \n You have the right to request that your personal data be provided in a structured, commonly used, and machine-readable format. \n
//         Right to Object: \n You have the right to object to the processing of your personal data for specific purposes, such as direct marketing.  If you wish to exercise any of these rights, please contact us at contactus@aionioncapital.com. \n
//       `,
//     },
//     {
//       heading: "Cookies and Tracking Technology",
//       description: `Our Website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze site usage, provide personalized content, and improve functionality. `,
//       typesOfCookies: `
//         Necessary Cookies: Essential for the functioning of the Website. \n
//         Performance Cookies: Help us analyze user behavior and improve the Website. \n
//         Functional Cookies: Remember your preferences to provide a personalized experience. \n
//         Targeting Cookies: Used for advertising and tracking. \n You can control cookie settings via your browser settings. However, disabling cookies may affect your ability to use certain features of the Website.,
//       `,
//     },
//     {
//       heading: "Security of Personal Data",
//       description: `We implement industry-standard security practices to protect your personal data. These include physical security measures, encryption, firewalls, and access control mechanisms. We conduct regular security audits and reviews to ensure the continued protection of your information. However, please note that no data transmission over the internet can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal data, we cannot ensure or warrant its absolute security. `,
//     },
//     {
//       heading: "Links to Third-Party Websites",
//       description: `Our Website may contain links to third-party websites that are not operated by us. We have no control over the privacy practices or content of these websites. We encourage you to read their privacy policies before providing them with any personal data.`,
//     },
//     {
//       heading: "Changes to the Privacy Policy",
//       description: `Aionion Capital reserves the right to update or modify this Privacy Policy from time to time. Any changes will be posted on this page, and the **Effective Date** will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data. `,
//     },
//     {
//       heading: "Contact Us",
//       description: ` If you have any questions or concerns about this Privacy Policy or our data protection practices, or if you wish to exercise your rights, please contact us at:`,
//       address: ` 3rd Floor, \n Meerlan Towers, No.33, \n Hanumantha Road, Royapettah, Chennai - 600014,India \n Email: contactus@aionioncapital.com.`,
//     },
//   ];

//   return (
//     <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
//       <Header />
//       <div className="bg-[url('/privacy/privacybg.png')] bg-cover bg-center bg-no-repeat xl:h-[55vh] h-[45vh]  w-100"></div>
//       <div className="bg-[#FFFFFF] xl:px-60 lg:px-40 md:px-40 px-10 py-10">
//         <div className="bg-[#F5F5F5] xl:px-20 px-6 pt-5 pb-10 relative -top-[25vh]">
//           <h2 className="text-[#FC9A1C] font-secondary font-medium text-[3rem] uppercase text-center">
//             PRIVACY POLICY
//           </h2>
//           <p className="text-black text-[13px] mb-10">
//             Website: www.aionioncapital.com (http://www.aionioncapital.com)
//             (hereinafter referred to as the “Website”) is owned and operated by
//             Aionion Capital Market Services Private Limited, a company
//             incorporated under the Companies Act, 1956, with its registered
//             office located at 3rd Floor, Meerlan Towers, No.33, Hanumantha Road,
//             Royapettah, Chennai - 600014 (hereinafter referred to as
//             &quot;Aionion Capital&quot;) <br></br>
//             <br></br> For the purposes of this Privacy Policy, wherever the
//             context requires, the term “You” or “User” refers to any natural or
//             legal person, including online and offline clients, and the terms
//             “We,” “Us,” or “Our” refer to Aionion Capital.
//           </p>
//           {privacyPolicy.map((e, i) => (
//             <div key={i} className="mb-5">
//               <h2 className="text-black text-[16px] font-bold">
//                 {i + 1}
//                 {"."}
//                 {e.heading}
//               </h2>
//               {e.description?.split("\n").map((line, index) => (
//                 <p
//                   key={index}
//                   className={`text-black text-[14px] ${
//                     index == 0 ? "mt-1" : ""
//                   }`}
//                 >
//                   {line}
//                 </p>
//               ))}
//               {e.typesOfCookies && (
//                 <h4 className="text-black text-[16px] font-semibold">
//                   Types Of Cookies:
//                 </h4>
//               )}
//               {e.typesOfCookies?.split("\n").map((line, index) => (
//                 <p
//                   key={index}
//                   className={`text-black text-[14px] ${
//                     index == 0 ? "mt-2" : ""
//                   }`}
//                 >
//                   {line}
//                 </p>
//               ))}
//               {e.personalInformation && (
//                 <h4 className="text-black text-[16px] font-semibold">
//                   Persional Information:
//                 </h4>
//               )}
//               {e.personalInformation?.split("\n").map((line, index) => (
//                 <p
//                   key={index}
//                   className={`text-black text-[14px] ${
//                     index == 0 ? "mt-2" : ""
//                   }`}
//                 >
//                   {line}
//                 </p>
//               ))}{" "}
//               {e.address && (
//                 <h4 className="text-black mt-5 text-[16px] font-semibold">
//                   Aionion Capital Market Services Private Limited:
//                 </h4>
//               )}
//               {e.address?.split("\n").map((line, index) => (
//                 <p key={index} className={`text-black text-[14px]`}>
//                   {line}
//                 </p>
//               ))}{" "}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import Header from "@/components/layout/Header";

const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function Privacy() {
  const privacyPolicy = [
    {
      heading: "Introduction",
      description: `At Aionion Capital, we are committed to protecting your personal data and ensuring that your privacy is respected. This Privacy Policy is designed to inform you about the personal data we collect, how we use it, and the measures we take to protect your information in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable laws in India.\nBy using our website, you consent to the collection, use, and sharing of your personal data as described in this Privacy Policy. You have the right to withdraw your consent at any time, but please note this may impact your ability to access some of our services.`,
    },
    {
      heading: "Importance of Your Information",
      description: `We value your personal data as one of our most important assets. We collect, process, store, and safeguard your information with the utmost care, following the principles of purpose limitation, data minimization, and accuracy, as required by the DPDPA, 2023.\nWe take appropriate physical, technical, and administrative measures to ensure the security and confidentiality of your personal data and prevent unauthorized access, disclosure, alteration, or destruction.`,
    },
    {
      heading: "Collection of Personal Data",
      description: `Under the Digital Personal Data Protection Act, 2023, we are obligated to inform you about the types of personal data we collect. This may include the following categories:`,
      personalInformation: `
      Name, gender, date of birth, residential address, contact details (phone number, email address), and marital status.
Identification Details:
PAN, Aadhar (where applicable), KYC status, signature, and photograph.
Financial Information:
Bank account details, payment information, and other financial data.
Service-Related Information:
Data required to provide the services you request, including trading preferences, service usage, and feedback.
      `,
    },
    {
      heading: "Purpose of Data Collection",
      description: `Your personal data is used primarily for:\n- Processing your service requests and transactions.\n- Fulfilling our legal and regulatory obligations.\n- Communicating relevant updates, product information, and offers.`,
    },
    {
      heading: "Consent for Data Collection",
      description: `By providing your personal data, you consent to its collection, processing, and storage in accordance with this Privacy Policy. You may withdraw your consent at any time by contacting us, although this may limit your access to our services.`,
    },
    {
      heading: "Data Retention",
      description: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Once your data is no longer needed, we will securely delete or anonymize it.`,
    },
    {
      heading: "Data Sharing and Disclosure",
      description: `We will not share your personal data with third parties except under the following circumstances:\n\n**Service Providers:** We may share your personal data with trusted third-party service providers who assist us in delivering services to you (e.g. payment processing, IT support). These third parties are contractually obligated to maintain the confidentiality and security of your data.\n\n**Legal Requirements:** We may disclose your personal data if required by law, regulation, or a court order. This includes compliance with governmental or regulatory authorities, including tax and audit requirements.\n\n**With Your Consent:** We may share your personal data with third parties only when you explicitly consent to such sharing. In all cases, we ensure that any third-party service providers comply with the DPDPA, 2023, and maintain strict confidentiality standards.`,
    },
    {
      heading: "Rights of Data Subject",
      rights: [
        "Right to Access: You have the right to access the personal data we hold about you.",
        "Right to Correction: If your personal data is inaccurate or incomplete, you have the right to request that we correct or update it.",
        "Right to Erasure: You may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected or when you withdraw consent.",
        "Right to Data Portability: You have the right to request that your personal data be provided in a structured, commonly used, and machine-readable format.",
        "Right to Object: You have the right to object to the processing of your personal data for specific purposes, such as direct marketing.",
        "To exercise any of these rights, please contact us at contactus@aionioncapital.com.",
      ],
    },
    {
      heading: "Cookies and Tracking Technology",
      description:
        "Our Website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze site usage, provide personalized content, and improve functionality.",
      typesOfCookies: [
        {
          title: "Necessary Cookies",
          content: "Essential for the functioning of the Website.",
        },
        {
          title: "Performance Cookies",
          content: "Help us analyze user behavior and improve the Website.",
        },
        {
          title: "Functional Cookies",
          content:
            "Remember your preferences to provide a personalized experience.",
        },
        {
          title: "Targeting Cookies",
          content: "Used for advertising and tracking.",
        },
        {
          content: `You can control cookie settings via your browser settings. However, disabling cookies may affect your ability to use certain features of the Website.,`,
        },
      ],
    },
    {
      heading: "Security of Personal Data",
      description: `We implement industry-standard security practices to protect your personal data. These include physical security measures, encryption, firewalls, and access control mechanisms. We conduct regular security audits and reviews to ensure the continued protection of your information. However, please note that no data transmission over the internet can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal data, we cannot ensure or warrant its absolute security.`,
    },
    {
      heading: "Links to Third-Party Websites",
      description: `Our Website may contain links to third-party websites that are not operated by us. We have no control over the privacy practices or content of these websites. We encourage you to read their privacy policies before providing them with any personal data.`,
    },
    {
      heading: "Changes to the Privacy Policy",
      description: `Aionion Capital reserves the right to update or modify this Privacy Policy from time to time. Any changes will be posted on this page, and the “Effective Date” will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data.`,
    },
    {
      heading: "Contact Us",
      contact: {
        officer: {
          name: "If you have any questions or concerns about this Privacy Policy or our data protection practices, or if you wish to exercise your rights, please contact us at:",
          email: "contactus@aionioncapital.com",
        },
        address: [
          "3rd Floor, Meerlan Towers,",
          "No. 33, Hanumantha Road,",
          "Royapettah, Chennai - 600014",
        ],
      },
    },
  ];

  const sections = privacyPolicy.map((s) => ({
    id: toSlug(s.heading),
    label: s.heading,
  }));

  return (
    <div id="top" className="font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div className="bg-[url('/privacy/privacybg.png')] bg-cover bg-center bg-no-repeat xl:h-[55vh] h-[45vh] w-full" />

      <div className="bg-white py-10 px-4 sm:px-8 md:px-16 xl:px-60">
        <div className="max-w-[1200px] mx-auto -mt-32">
          {/* Mobile quick nav */}
          <div className="lg:hidden mb-4 overflow-x-auto">
            <div className="flex gap-3 whitespace-nowrap">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[13px] px-3 py-2 rounded-full border bg-white shadow-sm text-black hover:text-[#FE667C]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* TOC */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-6 bg-white border rounded-lg shadow-sm p-4">
                <div className="text-black font-semibold mb-2">On this page</div>
                <nav>
                  <ul className="space-y-2 text-[14px]">
                    {sections.map((s, idx) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="text-black hover:text-[#FE667C]"
                        >
                          {idx + 1}. {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="lg:col-span-9">
              <div className="bg-[#f5f5f5] shadow-md px-6 sm:px-10 pt-5 pb-10">
                <h1 className="text-[#FC9A1C] font-secondary font-medium text-[2.2rem] sm:text-[3rem] uppercase text-center mb-1">
                  Privacy Policy
                </h1>
                <p className="text-center text-[12px] text-[#6b7280] mb-4">Last updated: August 2025</p>

                <p className="text-black text-[13px] mb-5 leading-relaxed">
                  Website: www.aionioncapital.com (http://www.aionioncapital.com)
                  (hereinafter referred to as the “Website”) is owned and operated by
                  Aionion Capital Market Services Private Limited, a company
                  incorporated under the Companies Act, 1956, with its registered
                  office located at 3rd Floor, Meerlan Towers, No.33, Hanumantha Road,
                  Royapettah, Chennai - 600014 (hereinafter referred to as "Aionion
                  Capital") <br />
                  <br />
                  For the purposes of this Privacy Policy, wherever the context
                  requires, the term “You” or “User” refers to any natural or legal
                  person, including online and offline clients, and the terms “We,”
                  “Us,” or “Our” refer to Aionion Capital.
                </p>

                {privacyPolicy.map((e, i) => {
                  const sectionId = toSlug(e.heading);
                  const cookieCards = Array.isArray(e.typesOfCookies)
                    ? e.typesOfCookies.filter((c: any) => c.title)
                    : [];
                  const cookieFootnote = Array.isArray(e.typesOfCookies)
                    ? e.typesOfCookies.find((c: any) => !c.title)?.content
                    : undefined;

                  return (
                    <section key={i} id={sectionId} className="mb-7 scroll-mt-24">
                      <div className="border-l-4 border-[#FC9A1C] pl-4 mb-3">
                        <h2 className="text-black text-[16px] font-bold">
                          {i + 1}. {e.heading}
                        </h2>
                      </div>

                      {/* Rights Section */}
                      {e.rights && (
                        <ul className="text-[14px] text-black list-disc pl-5 space-y-2">
                          {e.rights.map((right: string, j: number) => (
                            <li key={j}>{right}</li>
                          ))}
                        </ul>
                      )}

                      {/* Contact Section */}
                      {e.contact && (
                        <div className="grid sm:grid-cols-2 gap-4 text-[14px] text-black">
                          <div className="border p-4 rounded-md bg-white shadow-sm">
                            <h4 className="font-semibold text-[#FC9A1C] mb-2">
                              Compliance Officer
                            </h4>
                            <p>{e.contact.officer.name}</p>
                            <p>
                              Email:{" "}
                              <a
                                href={`mailto:${e.contact.officer.email}`}
                                className="text-blue-600"
                              >
                                {e.contact.officer.email}
                              </a>
                            </p>
                          </div>

                          <div className="border p-4 rounded-md bg-white shadow-sm">
                            <h4 className="font-semibold text-[#FC9A1C] mb-2">
                              Registered Office
                            </h4>
                            {e.contact.address.map((line: string, index: number) => (
                              <p key={index}>{line}</p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description Text */}
                      {e.description && !e.typesOfCookies && (
                        <div>
                          {e.description.split("\n").map((line: string, index: number) => (
                            <p
                              key={index}
                              className={`text-black text-[14px] leading-relaxed ${
                                index === 0 ? "mt-1" : "mt-2"
                              }`}
                            >
                              {line.trim()}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Personal Info */}
                      {e.personalInformation && (
                        <div>
                          <h4 className="text-black text-[16px] font-semibold mt-5 mb-1">
                            Personal Information:
                          </h4>
                          <ul className="pl-5 list-disc text-black text-[14px] space-y-1">
                            {e.personalInformation
                              .split("\n")
                              .map((line: string, index: number) => (
                                <li key={index}>{line.trim()}</li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {/* Cookies Section */}
                      {Array.isArray(e.typesOfCookies) && (
                        <div className="mt-4">
                          <p className="text-black text-[14px] mb-4">{e.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black text-[14px]">
                            {cookieCards.map((cookie: any, index: number) => (
                              <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-3 bg-white shadow-sm h-full"
                              >
                                {cookie.title && (
                                  <h4 className="font-semibold text-[#FC9A1C] mb-1">
                                    {cookie.title}
                                  </h4>
                                )}
                                <p>{cookie.content}</p>
                              </div>
                            ))}
                          </div>
                          {cookieFootnote && (
                            <p className="text-black text-[13px] mt-3 italic">
                              {cookieFootnote}
                            </p>
                          )}
                        </div>
                      )}
                    </section>
                  );
                })}

                <div className="mt-8 text-right">
                  <a href="#top" className="text-[13px] text-[#FE667C] underline">
                    Back to top
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
