import Header from "@/components/layout/Header";

export default function privacy() {
  const privacyPolicy = [
    {
      heading: "Introduction",
      description: `At Aionion Capital, we are committed to protecting your personal data and ensuring that your privacy is respected. This Privacy Policy is designed to inform you about the personal data we collect, how we use it, and the measures we take to protect your information in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable laws in India. \n \n By using our Website, you consent to the collection, use, and sharing of your personal data as described in this Privacy Policy. You have the right to withdraw your consent at any time, but please note that this may impact your ability to access some of our services.`,
    },
    {
      heading: "Importance of Your Information",
      description: `We value your personal data as one of our most important assets. We collect, process, store, and safeguard your information with the utmost care, following the principles of purpose limitation, data minimization, and accuracy, as required by the DPDPA, 2023. \n \n We take appropriate physical, technical, and administrative measures to ensure the security and confidentiality of your personal data and prevent unauthorized access, disclosure, alteration, or destruction.`,
    },
    {
      heading: "Collection of Personal Data",
      description: `Under the Digital Personal Data Protection Act, 2023, we are obligated to inform you about the types of personal data we collect. This may include the following categories:`,
      personalInformation: `
        Name, gender, date of birth, residential address, contact details (phone number, email address), and marital status. \n
        Identification Details: \n PAN, Aadhar (where applicable), KYC status, signature, and photograph. \n
        Financial Information: \n Bank account details, payment information, and other financial data. \n
        Service-Related Information: \n Data required to provide the services you request, including trading preferences, service usage, and feedback.
      `,
    },
    {
      heading: "Purpose of Data Collection",
      description: `Your personal data is used primarily for: \n
         Processing your service requests and transactions. \n
         Fulfilling our legal and regulatory obligations. \n
        Communicating relevant updates, product information, and offers.`,
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
      description: `We will not share your personal data with third parties except under the following circumstances: 
        Service Providers: \n We may share your personal data with trusted third-party service providers who assist us in delivering services to you (e.g., payment processing, IT support). These third parties are contractually obligated to maintain the confidentiality and security of your data.  \n
         Legal Requirements: \n We may disclose your personal data if required by law, regulation, or a court order. This includes compliance with governmental or regulatory authorities, including tax and audit requirements. \n
         With Your Consent: \n We may share your personal data with third parties only when you explicitly consent to such sharing. In all cases, we ensure that any third-party service providers comply with the DPDPA, 2023, and maintain strict confidentiality standards.`,
    },
    {
      heading: "Rights of Data Subject",
      description: `Under the Digital Personal Data Protection Act, 2023, you have the following rights concerning your personal data:`,
      rights: `
        Right to Access: \n You have the right to access the personal data we hold about you.\n
        Right to Correction: \n If your personal data is inaccurate or incomplete, you have the right to request that we correct or update it. \n
        Right to Erasure: \n You may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected or when you withdraw consent. \n
        Right to Data Portability: \n You have the right to request that your personal data be provided in a structured, commonly used, and machine-readable format. \n
        Right to Object: \n You have the right to object to the processing of your personal data for specific purposes, such as direct marketing.  If you wish to exercise any of these rights, please contact us at contactus@aionioncapital.com. \n
      `,
    },
    {
      heading: "Cookies and Tracking Technology",
      description: `Our Website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze site usage, provide personalized content, and improve functionality. `,
      typesOfCookies: `
        Necessary Cookies: Essential for the functioning of the Website. \n
        Performance Cookies: Help us analyze user behavior and improve the Website. \n
        Functional Cookies: Remember your preferences to provide a personalized experience. \n
        Targeting Cookies: Used for advertising and tracking. \n You can control cookie settings via your browser settings. However, disabling cookies may affect your ability to use certain features of the Website.,
      `,
    },
    {
      heading: "Security of Personal Data",
      description: `We implement industry-standard security practices to protect your personal data. These include physical security measures, encryption, firewalls, and access control mechanisms. We conduct regular security audits and reviews to ensure the continued protection of your information. However, please note that no data transmission over the internet can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal data, we cannot ensure or warrant its absolute security. `,
    },
    {
      heading: "Links to Third-Party Websites",
      description: `Our Website may contain links to third-party websites that are not operated by us. We have no control over the privacy practices or content of these websites. We encourage you to read their privacy policies before providing them with any personal data.`,
    },
    {
      heading: "Changes to the Privacy Policy",
      description: `Aionion Capital reserves the right to update or modify this Privacy Policy from time to time. Any changes will be posted on this page, and the **Effective Date** will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data. `,
    },
    {
      heading: "Contact Us",
      description: ` If you have any questions or concerns about this Privacy Policy or our data protection practices, or if you wish to exercise your rights, please contact us at:`,
      address: ` 3rd Floor, \n Meerlan Towers, No.33, \n Hanumantha Road, Royapettah, Chennai - 600014,India \n Email: contactus@aionioncapital.com.`,
    },
  ];

  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="bg-[url('/privacy/privacybg.png')] bg-cover bg-center bg-no-repeat xl:h-[55vh] h-[45vh]  w-100"></div>
      <div className="bg-[#FFFFFF] xl:px-60 lg:px-40 md:px-40 px-10 py-10">
        <div className="bg-[#F5F5F5] xl:px-20 px-6 pt-5 pb-10 relative -top-[25vh]">
          <h2 className="text-[#FC9A1C] font-secondary font-medium text-[3rem] uppercase text-center">
            PRIVACY POLICY
          </h2>
          <p className="text-black text-[13px] mb-10">
            Website: www.aionioncapital.com (http://www.aionioncapital.com)
            (hereinafter referred to as the “Website”) is owned and operated by
            Aionion Capital Market Services Private Limited, a company
            incorporated under the Companies Act, 1956, with its registered
            office located at 3rd Floor, Meerlan Towers, No.33, Hanumantha Road,
            Royapettah, Chennai - 600014 (hereinafter referred to as
            &quot;Aionion Capital&quot;) <br></br>
            <br></br> For the purposes of this Privacy Policy, wherever the
            context requires, the term “You” or “User” refers to any natural or
            legal person, including online and offline clients, and the terms
            “We,” “Us,” or “Our” refer to Aionion Capital.
          </p>
          {privacyPolicy.map((e, i) => (
            <div key={i} className="mb-5">
              <h2 className="text-black text-[16px] font-bold">
                {i + 1}
                {"."}
                {e.heading}
              </h2>
              {e.description?.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={`text-black text-[14px] ${
                    index == 0 ? "mt-1" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
              {e.typesOfCookies && (
                <h4 className="text-black text-[16px] font-semibold">
                  Types Of Cookies:
                </h4>
              )}
              {e.typesOfCookies?.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={`text-black text-[14px] ${
                    index == 0 ? "mt-2" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
              {e.personalInformation && (
                <h4 className="text-black text-[16px] font-semibold">
                  Persional Information:
                </h4>
              )}
              {e.personalInformation?.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={`text-black text-[14px] ${
                    index == 0 ? "mt-2" : ""
                  }`}
                >
                  {line}
                </p>
              ))}{" "}
              {e.address && (
                <h4 className="text-black mt-5 text-[16px] font-semibold">
                  Aionion Capital Market Services Private Limited:
                </h4>
              )}
              {e.address?.split("\n").map((line, index) => (
                <p key={index} className={`text-black text-[14px]`}>
                  {line}
                </p>
              ))}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
