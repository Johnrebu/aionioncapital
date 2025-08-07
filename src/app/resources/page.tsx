"use client";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Resources() {
  const downloadLinks = [
    // {
    //   name: "CLIENT REGISTRATION ADDITIONAL DOCUMENTS",
    //   content: ``,
    //   link: "",
    // },
    {
      name: "CLIENT REGISTRATION DOCUMENTS (RIGHTS & OBLIGATIONS, RISK DISCLOSURE DOCUMENT, DO'S & DON'T'S) IN VERNACULAR LANGUAGE",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "FINANCIAL DETAILS UPDATION FORM",
      link: "./pdfile/FinancialDetailsUpdation.pdf",
    },
    {
      name: "GRIEVANCES REDRESSAL PROCEDURE",
      link: "./pdfile/GrievancesRedressalProcedure.pdf",
    },
    {
      name: "INVESTORS ATTENTION",
      link: "./pdfile/Investorsattention.pdf",
    },
    {
      name: "MODIFICATION FORM",
      link: "./pdfile/Modification form.pdf",
    },
    {
      name: "NOMINATION FORM",
      link: "./pdfile/NominationForm.pdf",
    },
    {
      name: "RIGHTS AND OBLIGATIONS OF STOCK BROKERS",
      link: "./pdfile/RIGHTSANDOBLIGATIONSOFSTOCKBROKERS.pdf",
    },
    {
      name: "TRADING ACCOUNT CLOSURE FORM",
      link: "./pdfile/TradingAccountClosureform.pdf",
    },
    {
      name: "CLIENT CODE MODIFICATION AND ERROR CODE POLICY",
      link: "./pdffile/clientCodeModification.pdf",
    },
    {
      name: "FREEZE AND GTT",
      link: "./pdfile/FreezeGTT.pdf",
    },
    {
      name: "INTERNAL POLICY",
      link: "./pdfile/InternalPolicy.pdf",
    },
    {
      name: "INVESTOR AWARNESS AND ADVISIORY",
      link: "./pdfile/InvestorAwarnessAdvisiory.pdf",
    },
    {
      name: "INVESTOR CHARTER - STOCK BROKER",
      link: "./pdfile/InvestorCharterStockBroker.pdf",
    },
    {
      name: "POLICY FOR EMP SCREENING AND TRAININGT",
      link: "./pdfile/PolicyforEmpScreeningTraining.pdf",
    },
    {
      name: "PREFUNDED INSTRUMENT POLICY",
      link: "./pdfile/PrefundedInstrumentPolicy.pdf",
    },
    {
      name: "PREVENTION OF MONEYLAUNDERING POLICY",
      link: "./pdfile/PreventionMoneylaunderingPolicy.pdf",
    },
    {
      name: "SYSTEMS & PROCEDURES",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "SYSTEMS & PROCEDURES",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "SURVEILLANCE POLICY STOCK BROKER",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "TREATMENT OF INACTIVE ACCOUNT/DORMANT ACCOUNT POLICY",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "WHISTLEBLOWER POLICY - STOCK BROKER",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "RISK DISCLOSURE DOCUMENT FOR CAPITAL MARKET AND DERIVATIVES SEGMENTS",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "DO’S AND DON’TS FOR TRADING ON THE EXCHANGE(S) FOR INVESTORS BEFORE YOU BEGIN TO TRADE",
      link: "./pdfile/SystemsProcedures.pdf",
    },
    {
      name: "INTERNET & WIRELESS TECHNOLOGY BASED TRADING FACILITY PROVIDED BY MEMBERS TO CLIENT",
      link: "./pdfile/SystemsProcedures.pdf",
    },
  ];
  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  const list = [
    {
      detail: "Client Care",
      contactPerson: "Client Care Department",
      address:
        "3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai - 600 014",
      contact: "8939800027 Mon-Fri (9 AM to 6 PM, IST)",
      email: "clientcare@aionioncapital.com",
    },
    {
      detail: "Grievance Redressal Officer/Compliance Officer",
      contactPerson: "Ms Swati Keshari",
      address:
        "3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai - 600 014",
      contact: "7305088516 Mon-Fri (9 AM to 6 PM, IST)",
      email: "grievances@aionioncapital.com",
    },
    {
      detail: "Head of Operations",
      contactPerson: "Mr Kumar Mahlingam Iyer",
      address:
        "3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai - 600 014",
      contact: "8925808627 Mon-Fri (9 AM to 6 PM, IST)",
      email: "kumarmahlingam.iyer@aionioncapital.com",
    },
    {
      detail: "Director",
      contactPerson: "Mr Anish Gupta",
      address:
        "3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai - 600 014",
      contact: "8925808630 Mon-Fri (9 AM to 6 PM, IST)",
      email: "compliance@aionioncapital.com",
    },
  ];
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[url('/about/aboutbg.png')] bg-cover bg-center bg-no-repeat">
        <Header data={"resources"} />
        <div className="bg-[#FFFFFF] flex md:flex-row flex-col justify-center gap-5 p-10 items-center">
          <div className="w-[200px] text-center">
            <a className="bg-[#90AF61]  py-2 rounded-3xl font-bold cursor-pointer  inline-block w-[200px] md:w-full">
              Application Form Individual
            </a>
          </div>
          <div className="w-[200px] text-center">
            <a className="bg-[#90AF61]  py-2 rounded-3xl font-bold cursor-pointer inline-block w-[200px] md:w-full">
              ReKYC
            </a>
          </div>
          <div className="w-[200px] text-center">
            <a className="bg-[#90AF61]  py-2 rounded-3xl font-bold cursor-pointer  inline-block w-[200px] md:w-full">
              Back Office
            </a>
          </div>
          <div className="w-[200px] text-center">
            <a className="bg-[#90AF61]  py-2 rounded-3xl font-bold cursor-pointer  inline-block w-[200px] md:w-full">
              Account Closure
            </a>
          </div>
          <div className="w-[200px] text-center">
            <a className="bg-[#90AF61]  py-2 rounded-3xl font-bold cursor-pointer  inline-block w-[200px] md:w-full">
              Non-Individual Application Form
            </a>
          </div>
        </div>
        {/* 1st section */}
        <div className="p-10 xl:bg-[#F5F5F5] bg-[#E8E8E8] flex justify-center">
          <div className="text-center">
            <div className="font-medium uppercase font-secondary leading-[3.3rem] text-[3rem] text-[#505050]">
              {" "}
              <span className="text-[#FE667C]">Links</span> To{" "}
              <br className="xl:hidden lg:hidden md:hidden" /> Download forms
            </div>{" "}
            {/* <div className="text-[#000000] mt-4 md:px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br className="hidden xl:block lg:block" /> Ut enim ad minim
              veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
              amet
            </div> */}
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-10 xl:px-50 grid-cols-1">
              {downloadLinks.map((e, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleDownload(e.link, e.name + ".pdf");
                  }}
                  className="bg-[#FFFFFF] p-5 flex justify-between gap-5 xl:flex-row flex-col cursor-pointer"
                >
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-[#484848] uppercase">
                      {e.name}
                    </h3>
                    {/* <p className="text-[#000000] lowercase">{e.content}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2nd section - Redesigned for better clarity */}
        <div
          className="py-10 xl:pl-0 px-0 xl:px-10 bg-[#FBFDFC]"
          id="find-complaint"
        >
          <div className="text-center xl:px-0 px-10">
            <div className="text-[#484848] font-bold uppercase xl:text-[3rem] text-[2.5rem] font-secondary  text-center">
              Procedure for filing a complaint on designated email ID and
              <br className="hidden xl:block lg:block" /> finding out the status
              of the complaint
            </div>
          </div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 mt-4 gap-4">
            {/* Left side - Image */}
            <div className="flex justify-center">
              <Image
                className="xl:w-[800px] lg:h-[420px] xl:h-[430px] "
                src="/resources/resourcebg.png"
                alt="Complaint process illustration"
                width={800}
                height={600}
              />
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-1 -ml-12 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/resources/one.svg"
                    alt="Step 1"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    STEP 1
                  </h2>
                  <p className="text-gray-700 text-xs">
                    If you have any complaints or concerns, please email{" "}
                    <span className="text-blue-600">
                      grievances@aloniocognital.com
                    </span>
                    . Kindly provide a detailed description of the issue,
                    including the date, time, persons contacted, actions taken,
                    and any supporting documentation related to the matter.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-1 -ml-12 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/resources/two.svg"
                    alt="Step 2"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    STEP 2
                  </h2>
                  <p className="text-gray-700 text-xs">
                    Upon receiving your email, you will automatically receive a
                    reply with a Ticket ID/Complaint Reference Number. Our team
                    aims to respond within 36 hours. Please note that the
                    response time may vary based on the nature of your
                    complaint. You can check the status of your complaint at any
                    time by sending an email with your Ticket ID/Complaint
                    Reference Number.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-1 -ml-12 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/resources/three.svg"
                    alt="Step 3"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    STEP 3
                  </h2>
                  <p className="text-gray-700 text-xs">
                    If you are not satisfied with the resolution, you can lodge
                    a complaint with SEBI through their SCORES portal at{" "}
                    <a
                      href="https://scores.sebi.gov.in/fmain-content"
                      className="text-blue-600 hover:underline"
                    >
                      https://scores.sebi.gov.in/fmain-content
                    </a>{" "}
                    or with the Exchange via{" "}
                    <a
                      href="https://investorhelpline.neehrida.com/NICEPLUS"
                      className="text-blue-600 hover:underline"
                    >
                      https://investorhelpline.neehrida.com/NICEPLUS
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://bseers.beehrida.com/ecomplaint/firminvestorHome.aspx"
                      className="text-blue-600 hover:underline"
                    >
                      https://bseers.beehrida.com/ecomplaint/firminvestorHome.aspx
                    </a>
                    . When submitting your complaint, please include your
                    Service Ticket/Complaint Reference Number.
                  </p>
                  <p className="mt-3 text-gray-700 text-xs">
                    You may also access the SMART Online Resolution of Dispute
                    Portal at{" "}
                    <a
                      href="https://smartlogin.login"
                      className="text-blue-600 hover:underline"
                    >
                      https://smartlogin.login
                    </a>
                    . For further information, you can review the SEBI ODR
                    circular at SEBI ODR Circular.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex bg-[#EEEEEE] p-10 justify-center"
          id="excalation-matrix"
        >
          <div>
            <section className="bg-white text-black py-10 px-4 md:px-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
                {/* Left Box */}
                <div className=" bg-gray-100 rounded-sm shadow p-6">
                  <h2 className="text-3xl text-[#0023ff] font-secondary uppercase mb-4">
                    Procedure to file a complaint on SEBI SCORES - Easy & Quick
                  </h2>
                  <p>
                    Register on SEBI SCORES 2.0 (
                    <a href="#" className="text-blue-600 underline">
                      link
                    </a>
                    ).
                  </p>
                  <p className="mt-2">
                    <strong>
                      Mandatory details for filing complaints on SCORES:
                    </strong>{" "}
                    Name, PAN, Address, Mobile Number, E-mail ID.
                  </p>
                  <p className="mt-2">
                    <strong>Benefits:</strong> Effective Communication, Speedy
                    redressal of the grievances.
                  </p>
                  <p className="mt-2">
                    Click on the provided (
                    <a href="#" className="text-blue-600 underline">
                      link
                    </a>
                    ) to learn about the process for submitting a complaint on
                    the ODR platform for resolving investor grievances.
                  </p>
                </div>

                {/* Right Box */}
                <div className="w-full md:w-1/2 bg-gray-100 rounded-sm shadow p-6">
                  <h2 className="text-3xl text-[#fe667c] font-secondary uppercase mb-4">
                    Investor Complaint Data
                  </h2>

                  {/* Example inside your right box */}
                  <p className="font-semibold">Stock Broker</p>
                  <ul className="mb-4 text-blue-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <span>📄</span>
                      <a href="#">Monthly Compliance June 2025</a>
                    </li>
                  </ul>

                  <p className="font-semibold">Depository</p>
                  <ul className="mb-4 text-blue-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <span>📄</span>
                      <a href="#">Monthly Compliance June 2025</a>
                    </li>
                  </ul>

                  <p className="font-semibold">Research Analyst</p>
                  <ul className="text-blue-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <span>📄</span>
                      <a href="#">Monthly Compliance June 2025</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="text-[#484848] font-bold uppercase xl:text-[3rem] text-[2.5rem] font-secondary mt-5  text-center">
              ESCALATION MATRIX
            </div>
            <div className="px-22 mt-5">
              <table className="bg-[#FFFFFF] border-collapse border border-[#BFBFBF]">
                <thead>
                  <tr>
                    <th className="border border-gray-300 text-black1 p-4">
                      Details of
                    </th>
                    <th className="border border-gray-300 text-black1 p-4">
                      Contact Person
                    </th>
                    <th className="border border-gray-300 text-black1 p-4">
                      Address
                    </th>
                    <th className="border border-gray-300 text-black1 p-4">
                      Contact No
                    </th>
                    <th className="border border-gray-300 text-black1 p-4">
                      Email Id
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((e, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 py-4 px-3 text-black2 text-[14px]">
                        {e.detail}
                      </td>
                      <td className="border border-gray-300 py-4 px-3 text-black2 text-[14px]">
                        {e.contactPerson}
                      </td>
                      <td className="border border-gray-300 py-4 px-3 text-black2 text-[14px] w-[400px]">
                        {e.address}
                      </td>
                      <td className="border border-gray-300 py-4 px-3 text-black2 text-[14px] ">
                        {e.contact}
                      </td>
                      <td className="border border-gray-300 py-4 px-3 text-black2 text-[14px] underline text-blue-400 cursor-pointer">
                        {e.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12 px-4">
          <div className="max-w-7xl mx-auto bg-white p-10 rounded shadow-xl text-black text-center">
            <h1 className="text-center font-secondary uppercase text-[#FE667C] font-medium text-[2.5rem] mb-3">
              BANK DETAILS
            </h1>

            <h2 className="text-[#00b7c2] font-bold text-[2rem] font-secondary text-center mb-3">
              EQUITY ACCOUNT DETAILS
            </h2>
            <p className="text-base text-center mb-5">
              Kindly ensure you strictly follow the instructions provided on the
              Trade app and website before proceeding with your fund transfer.
            </p>
            <p className="text-xs text-center max-w-4xl mx-auto mb-8">
              Investors are requested to note that Stock broker, Aionion Capital
              Market Services Private Limited, is permitted to receive/pay money
              from/to investor through designated banks accounts only named as
              client bank accounts. Stock broker, Aionion Capital Market
              Services Private Limited, is also required to disclose these
              client bank accounts to the Stock Exchange. Hence, you are
              requested to use following client bank accounts only for the
              purpose of dealings in your trading account with us. The details
              of these client bank accounts are also displayed by Stock
              Exchanges on their website under “Bank Details”.
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-8 text-left mb-3">
              {[
                {
                  logo: "/bank-logos/favicon.png",
                  logoWidth: 32,
                  logoHeight: 32,
                  company:
                    "Aionion Capital Market Services Private Limited - USCNBA",
                  bank: "ICICI BANK LIMITED",
                  accNo: "0009005036661",
                  ifsc: "ICIC0000009",
                  branch: "Nungambakkam, Chennai",
                },
                {
                  logo: "/bank-logos/axis.png",
                  logoWidth: 37,
                  logoHeight: 37,
                  company:
                    "Aionion Capital Market Services Private Limited - USCNBA",
                  bank: "AXIS BANK LIMITED",
                  accNo: "924020068024292",
                  ifsc: "UTIB0000334",
                  branch: "Ashok Nagar, Chennai",
                },
                {
                  logo: "/bank-logos/hdfc1.png",
                  logoWidth: 36,
                  logoHeight: 36,
                  company:
                    "Aionion Capital Market Services (P) Ltd. - USCNB A/c",
                  bank: "HDFC BANK LIMITED",
                  accNo: "57500019595452",
                  ifsc: "HDFC0000004",
                  branch: "Anna Salai, Chennai",
                },
                {
                  logo: "/bank-logos/hdfc1.png",
                  logoWidth: 36,
                  logoHeight: 36,
                  company:
                    "Aionion Capital Market Services Private Limited - USCNBA",
                  bank: "STATE BANK OF INDIA",
                  accNo: "5020010473102",
                  ifsc: "SBIN0000004",
                  branch: "Anna Salai, Chennai",
                },
              ].map((acc, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white rounded-lg p-6 relative text-sm border border-gray-200"
                >
                  {/* Logo Instead of Number */}
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow flex items-center justify-center"
                    style={{
                      width: acc.logoWidth + 16,
                      height: acc.logoHeight + 16,
                    }}
                  >
                    <Image
                      src={acc.logo}
                      alt={`${acc.bank} Logo`}
                      width={acc.logoWidth}
                      height={acc.logoHeight}
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-10">
                    <p className="font-semibold text-gray-700 mb-1 text-[13px]">
                      Company Name:
                    </p>
                    <p className="mb-2 text-gray-600 text-[13px]">
                      {acc.company}
                    </p>
                    <p className="font-semibold text-gray-700 text-[13px]">
                      Bank Name:
                    </p>
                    <p className="text-gray-600 mb-1 text-[13px]">{acc.bank}</p>
                    <p className="font-semibold text-gray-700 text-[13px]">
                      Account No:
                    </p>
                    <p className="text-gray-600 mb-1 text-[13px]">
                      {acc.accNo}
                    </p>
                    <p className="font-semibold text-gray-700 text-[13px]">
                      IFSC Code:
                    </p>
                    <p className="text-gray-600 mb-1 text-[13px]">{acc.ifsc}</p>
                    <p className="font-semibold text-gray-700 text-[13px]">
                      Branch:
                    </p>
                    <p className="text-gray-600 text-[13px]">{acc.branch}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 md:px-10 py-1 bg-white">
              {/* Bond Details */}
              <h2 className="text-center font-secondary uppercase text-[#FE667C] font-medium text-[2.5rem] mb-3">
                BOND DETAILS
              </h2>
              <p className="font-secondary uppercase text-[#FC9A1C] font-medium text-[1.5rem] text-center">
                Important Information on Bond Payments
              </p>
              <p className="text-sm text-center mb-4 max-w-3xl mx-auto">
                All bond payments must be made only to the two accounts
                mentioned below, based on the payment amount. Please proceed
                with the payment only after receiving confirmation from your
                Relationship Manager.
              </p>
              <p className="text-sm mb-12 text-red-500 text-center font-medium">
                Note: Payments made to any account other than the designated
                ones will not be accepted.
              </p>

              {/* Below 2 Lakhs */}
              <div className="relative border-gray-200 mb-10 p-1">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/bond.png"
                    alt="Bond Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-2 text-center text-[#0023FF] text-lg">
                    Below 2 Lakhs
                  </h3>
                  <table className="w-10/12 ml-20 border border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="border py-1.5 font-bold">
                          Account Number
                        </th>
                        <th className="border py-1.5 font-bold">
                          Beneficiary Name
                        </th>
                        <th className="border py-1.5 font-bold">IFSC Code</th>
                        <th className="border py-1.5 font-bold">Bank Name</th>
                        <th className="border py-1.5 font-bold">
                          Mode of Transfer
                        </th>
                        <th className="border py-1.5 font-bold">
                          ICCL LEI Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="border py-2">57500001086245</td>
                        <td className="border py-2">
                          Indian Clearing Corporation Limited
                        </td>
                        <td className="border py-2">HDFC0000060</td>
                        <td className="border py-2">
                          HDFC Bank Ltd, Fort Branch
                        </td>
                        <td className="border py-2">NEFT only</td>
                        <td className="border py-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2 Lakhs and Above */}
              <div className="relative border-gray-200 mb-10 p-1">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/bond.png"
                    alt="Bond Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-2 text-center text-[#0023FF] text-lg">
                    2 Lakhs and Above
                  </h3>
                  <table className="w-10/12 ml-20 border border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="border py-1.5 font-bold">
                          Account Number
                        </th>
                        <th className="border py-1.5 font-bold">
                          Beneficiary Name
                        </th>
                        <th className="border py-1.5 font-bold">IFSC Code</th>
                        <th className="border py-1.5 font-bold">Bank Name</th>
                        <th className="border py-1.5 font-bold">
                          Mode of Transfer
                        </th>
                        <th className="border py-1.5 font-bold">
                          ICCL LEI Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="border py-2">8715962</td>
                        <td className="border py-2">
                          Indian Clearing Corporation Limited
                        </td>
                        <td className="border py-2">ICIC0000001</td>
                        <td className="border py-2">RBI-Fort</td>
                        <td className="border py-2">RTGS only</td>
                        <td className="border py-2">335800EV4PEFRMWNX08</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Freeze Section */}
            <div className="bg-gray-100 py-5 px-4">
              <div className="max-w-4xl mx-auto bg-white p-10 rounded text-black text-center relative">
                {/* Styled Title */}
                <h2 className="font-secondary uppercase text-[2rem] md:text-[2.5rem] font-bold text-gray-800 mb-8">
                  PROCESS AND MODES TO{" "}
                  <span className="text-[#00b7c2]">FREEZE/UNFREEZE</span> THE
                  ACCOUNT
                </h2>

                {/* Step layout like DEMAT ACCOUNT */}
                <div className="flex flex-col md:flex-row justify-between gap-8 text-left items-start md:items-stretch">
                  {/* Step 1 */}
                  <div className="flex-1 relative bg-white border rounded-lg shadow-sm p-6">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b2e46] text-white flex items-center justify-center font-bold text-lg shadow">
                      1
                    </div>
                    <div className="mt-6">
                      <h3 className="text-center font-semibold text-gray-800 mb-2">
                        Open the App
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        Clients can easily request to freeze or unfreeze their
                        account through the Aionion Capital app.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex-1 relative bg-white border rounded-lg shadow-sm p-6">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#fba028] text-white flex items-center justify-center font-bold text-lg shadow">
                      2
                    </div>
                    <div className="mt-6">
                      <h3 className="text-center font-semibold text-gray-800 mb-2">
                        Navigate to Settings
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        Go to:{" "}
                        <strong>
                          Account &gt; Settings &gt; Freeze Account
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex-1 relative bg-white border rounded-lg shadow-sm p-6">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#006d83] text-white flex items-center justify-center font-bold text-lg shadow">
                      3
                    </div>
                    <div className="mt-6">
                      <h3 className="text-center font-semibold text-gray-800 mb-2">
                        Select Action
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        From this section, choose to freeze your account
                        temporarily or unfreeze it whenever needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex bg-[#EEEEEE] p-5 justify-center">
          <Calclator />
        </div> */}
      </div>
    </div>
  );
}
