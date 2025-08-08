//   const listArr = [
//     { img: "/demat/Wallet.svg", title: "Zero Maintenance Charges" },
//     { img: "/demat/Cash.svg", title: "Fast and Paperless" },
//     { img: "/demat/Lock.svg", title: "Secure & Reliable" },
//     {
//       img: "/demat/Checkmark.svg",
//       title: "Access to Multiple Investment Options",
//     },
//     {
//       img: "/demat/Development.svg",
//       title: "Expert Research & Recommendations",
//     },
//   ];
//   return (
//     <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
//       <Header />
//       {/* 1st section */}
//       <div className=" bg-[#F5F5F5] flex justify-center md:flex-row flex-col pt-5">
//         <div className=" lg:bg-[#F5F5F5] md:bg-[#F5F5F5] flex justify-center">
//           <Image
//             src="/demat/phone2.png"
//             className=""
//             alt="demat"
//             width={400}
//             height={540}
//           />
//         </div>
//         <div className="mt-8 mb-2 text-center lg:text-left md:py-0 py-10">
//           <h2 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary h-[50px]">
//             Open Your
//           </h2>
//           <h1 className="text-[#FE667C] min-w-[310px] uppercase font-medium text-[4rem] font-secondary h-[75px]">
//             Account
//           </h1>
//           <h3 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary">
//             Today with Aionion Capital!
//           </h3>
//           {/* <p className="text-black mt-2">
//             Lorem ipsum dolor sit amet, consectetur
//             <br /> adipiscing elit, sed do eiusmod tempor incididunt
//           </p> */}
//           <button className="bg-[#2B3640] text-white py-2 px-4 mt-3 rounded-full uppercase font-medium lg:mb-4">
//             <a
//               href="https://ekyc.aionioncapital.com/aionion/individual1"
//               target="_"
//             >
//               Open free demat account
//             </a>
//           </button>
//         </div>
//       </div>
//       {/* 2nd section */}
//       <div className="bg-[url('/demat/anionbg.png')] bg-cover bg-center bg-no-repeat p-10 md:h-[400px] h-[300px]">
//         <div className="md:grid md:grid-cols-2">
//           <div className="lg:pr-[5.5rem] md:pr-[2rem] hidden md:block">
//             {listArr.map((item, i) => (
//               <div
//                 key={i}
//                 className={`flex justify-end items-center gap-4 ${
//                   i == 0 ? "mt-0" : "mt-3"
//                 }`}
//               >
//                 <div className="text-[#131313] xl:text-[16px] lg:text-[16px] text-[14px]">
//                   {item?.title}
//                 </div>
//                 <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center">
//                   <Image src={item?.img} height={40} width={40} alt="icon" />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-start mt-22 md:mt-0">
//             <div className="text-center ml-16">
//               {" "}
//               <h1 className="text-[#463E32] text-[2rem] font-semibold uppercase font-secondary leading-[3.6rem] ">
//                 WHY YOU CHOOSE
//               </h1>
//               <h1 className="text-[#FC9A1C] text-[4.5rem] font-bold uppercase font-secondary leading-[3.6rem]">
//                 AIONION?
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="md:hidden bg-[#f2e1b4] p-10">
//         <div className="">
//           {listArr.map((item, i) => (
//             <div
//               key={i}
//               className={`flex justify-start items-center gap-4 ${
//                 i == 0 ? "mt-0" : "mt-3"
//               }`}
//             >
//               <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center">
//                 <Image src={item?.img} height={40} width={40} alt="icon" />
//               </div>
//               <div className="text-[#131313] xl:text-[16px] lg:text-[16px] text-[14px]">
//                 {item?.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* 3nd section */}

//       <div className="bg-[#F5F5F5] p-10 pb-20">
//         <div className="uppercase font-medium font-secondary text-[#484848] text-[3rem] text-center xl:leading-[0rem] leading-[3rem] xl:mt-5">
//           How to Open a <br className="xl:hidden" />
//           <span className="text-[#2ABDC0]">Demat Account</span>
//         </div>
//         {/* <p className="text-black text-center mt-4 xl:mt-10">

//         </p> */}
//         <div className="flex justify-center md:flex-row flex-col mt-20 mb-20 p-5 relative">
//           <div className="bg-[#A5A5A5] xl:w-[1000px] md:h-[1px] lg:w-[850px] md:w-[700px] h-[830px] w-[1px] md:ml-0 ml-12"></div>
//           <div className="flex justify-between flex-col  md:flex-row xl:gap-5 lg:gap-20 gap-20 md:gap-12 absolute lg:-top-9 md:-top-7 xl:w-[1000px] -top-2 items-center ">
//             <div className="bg-[#A5A5A5] w-[30px] h-[30px] rounded-[50%]  md:mb-24  -ml-[7rem] md:ml-0"></div>
//             {[
//               {
//                 value: 1,
//                 discription:
//                   "Download the AIONION app or visit the AIONION website",
//               },
//               {
//                 value: 2,
//                 discription: "Enter your Mobile Number and verify with an OTP",
//               },
//               {
//                 value: 3,
//                 discription: "Verify KYC and bank details",
//               },
//               {
//                 value: 4,
//                 discription: "eSign your form and documents",
//               },
//             ].map((e, index) => (
//               <div
//                 key={index}
//                 className="flex gap-3 items-center justify-center md:block"
//               >
//                 <div
//                   className={
//                     e.value === 1
//                       ? "bg-[#03233A] w-[100px] h-[100px]  lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] rounded-[50%] text-white text-[4rem] lg:text-[4rem] md:text-[3rem] font-bold text-center"
//                       : e.value === 2
//                       ? "bg-[#FC9A1C] w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] rounded-[50%] text-white text-[4rem] lg:text-[4rem] md:text-[3rem] font-bold  text-center"
//                       : e.value === 3
//                       ? "bg-[#196D85] w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] rounded-[50%] text-white text-[4rem] lg:text-[4rem] md:text-[3rem] font-bold  text-center"
//                       : "bg-[#2ABDC0] w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] rounded-[50%] text-white text-[4rem] lg:text-[4rem] md:text-[3rem] font-bold  text-center"
//                   }
//                 >
//                   {e.value}
//                 </div>
//                 <p className="text-black text-[12px] w-[100px] md:min-h-[100px] text-center mt-2">
//                   {e.discription}
//                 </p>
//               </div>
//             ))}
//             <div className="bg-[#A5A5A5] w-[30px] h-[30px] rounded-[50%] mb-24 -ml-[7rem] md:ml-0"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import Header from "@/components/layout/Header";
// import Image from "next/image";

// export default function DematAccount() {
//   const listArr = [
//     { img: "/demat/Wallet.svg", title: "Zero Maintenance Charges" },
//     { img: "/demat/Cash.svg", title: "Fast and Paperless" },
//     { img: "/demat/Lock.svg", title: "Secure & Reliable" },
//     {
//       img: "/demat/Checkmark.svg",
//       title: "Access to Multiple Investment Options",
//     },
//     {
//       img: "/demat/Development.svg",
//       title: "Expert Research & Recommendations",
//     },
//   ];

//   return (
//     <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
//       <Header />

//       {/* Section 1: Hero */}
//       <div className="bg-[#F5F5F5] flex justify-center md:flex-row flex-col pt-5">
//         <div className="flex justify-center">
//           <Image src="/demat/phone2.png" alt="demat" width={400} height={540} />
//         </div>
//         <div className="mt-8 mb-2 text-center lg:text-left md:py-0 py-10">
//           <h2 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary">
//             Open Your
//           </h2>
//           <h1 className="text-[#FE667C] uppercase font-medium text-[4rem] font-secondary">
//             Account
//           </h1>
//           <h3 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary">
//             Today with Aionion Capital!
//           </h3>
//           <button className="bg-[#2B3640] text-white py-2 px-4 mt-3 rounded-full uppercase font-medium lg:mb-4">
//             <a
//               href="https://ekyc.aionioncapital.com/aionion/individual1"
//               target="_"
//             >
//               Open free demat account
//             </a>
//           </button>
//         </div>
//       </div>

//       {/* Section 2: Why Aionion */}
//       <div className="bg-[url('/demat/anionbg.png')] bg-cover bg-center bg-no-repeat p-10 md:h-[400px] h-[300px]">
//         <div className="md:grid md:grid-cols-2">
//           <div className="lg:pr-[5.5rem] md:pr-[2rem] hidden md:block">
//             {listArr.map((item, i) => (
//               <div
//                 key={i}
//                 className={`flex justify-end items-center gap-4 ${
//                   i == 0 ? "mt-0" : "mt-3"
//                 }`}
//               >
//                 <div className="text-[#131313] text-[14px] lg:text-[16px]">
//                   {item?.title}
//                 </div>
//                 <div className="w-[40px] h-[40px] flex justify-center items-center">
//                   <Image src={item?.img} height={40} width={40} alt="icon" />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-start mt-22 md:mt-0">
//             <div className="text-center ml-16">
//               <h1 className="text-[#463E32] text-[2rem] font-semibold uppercase font-secondary leading-[3.6rem]">
//                 WHY YOU CHOOSE
//               </h1>
//               <h1 className="text-[#FC9A1C] text-[4.5rem] font-bold uppercase font-secondary leading-[3.6rem]">
//                 AIONION?
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2: Mobile view for Why Aionion */}
//       <div className="md:hidden bg-[#f2e1b4] p-10">
//         <div>
//           {listArr.map((item, i) => (
//             <div
//               key={i}
//               className={`flex justify-start items-center gap-4 ${
//                 i == 0 ? "mt-0" : "mt-3"
//               }`}
//             >
//               <div className="w-[40px] h-[40px] flex justify-center items-center">
//                 <Image src={item?.img} height={40} width={40} alt="icon" />
//               </div>
//               <div className="text-[#131313] text-[14px] lg:text-[16px]">
//                 {item?.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Section 3: How to Open */}
//       <div className="bg-[#F5F5F5] p-10 pb-20">
//         <div className="uppercase font-medium font-secondary text-[#484848] text-[3rem] text-center xl:leading-[0rem] leading-[3rem] xl:mt-5">
//           How to Open a <br className="xl:hidden" />
//           <span className="text-[#2ABDC0]">Demat Account</span>
//         </div>
//         <div className="flex justify-center md:flex-row flex-col mt-20 mb-20 p-5 relative">
//           <div className="bg-[#A5A5A5] xl:w-[1000px] md:h-[1px] lg:w-[850px] md:w-[700px] h-[830px] w-[1px] md:ml-0 ml-12"></div>
//           <div className="flex justify-between flex-col md:flex-row xl:gap-5 lg:gap-20 gap-20 md:gap-12 absolute lg:-top-9 md:-top-7 xl:w-[1000px] -top-2 items-center">
//             <div className="bg-[#A5A5A5] w-[20px] h-[20px] rounded-[50%] md:mb-20 -ml-[7rem] md:ml-0"></div>
//             {[1, 2, 3, 4].map((step, i) => (
//               <div
//                 key={i}
//                 className="flex gap-3 items-center justify-center md:block"
//               >
//                 <div
//                   className={`${
//                     step === 1
//                       ? "bg-[#03233A]"
//                       : step === 2
//                       ? "bg-[#FC9A1C]"
//                       : step === 3
//                       ? "bg-[#196D85]"
//                       : "bg-[#2ABDC0]"
//                   } w-[100px] h-[100px] rounded-[50%] text-white text-[4rem] font-bold text-center`}
//                 >
//                   {step}
//                 </div>
//                 <p className="text-black text-[12px] w-[100px] text-center mt-2">
//                   {step === 1
//                     ? "Download the AIONION app or visit the AIONION website"
//                     : step === 2
//                     ? "Enter your Mobile Number and verify with an OTP"
//                     : step === 3
//                     ? "Verify KYC and bank details"
//                     : "eSign your form and documents"}
//                 </p>
//               </div>
//             ))}
//             <div className="bg-[#A5A5A5] w-[20px] h-[20px] rounded-[50%] mb-20 -ml-[7rem] md:ml-0"></div>
//           </div>
//         </div>
//       </div>

//       {/* Section 4: KYC Steps Image + Approval Text */}
//       <div className="bg-white py-16 px-4">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-[3rem] uppercase font-medium font-secondary text-[#484848] mb-6">
//             KYC STEPS
//           </h2>
//           <Image
//             src="/kycsteps.png"
//             alt="KYC Steps"
//             width={1200}
//             height={200}
//             className="w-full max-w-6xl mx-auto mb-8"
//           />

//           <h2 className="text-[2.5rem] font-secondary uppercase text-[#505050] mb-8 font-medium">
//             KYC APPROVAL TIME
//           </h2>
//           <p className="text-black2 text-[14px] leading-6">
//             Your account with Aionion Capital Market Services Private Limited
//             (ACMSPL) will typically be activated within 72 hours—provided your
//             KYC is verified and all submitted documents are in order.
//           </p>
//           <p className="text-black2 text-[14px] leading-6 mt-4">
//             If you are opening an ACMSPL account for the first time or updating
//             your KYC details during the process, the information needs to be
//             verified by the KYC Registration Agency (KRA) in line with SEBI
//             guidelines. This verification by the KRA can take up to 72 hours,
//             which may slightly delay the account activation.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function DematAccount() {
  const listArr = [
    { img: "/demat/Wallet.svg", title: "Zero Maintenance Charges" },
    { img: "/demat/Cash.svg", title: "Fast and Paperless" },
    { img: "/demat/Lock.svg", title: "Secure & Reliable" },
    {
      img: "/demat/Checkmark.svg",
      title: "Access to Multiple Investment Options",
    },
    {
      img: "/demat/Development.svg",
      title: "Expert Research & Recommendations",
    },
  ];

  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />

      {/* Section 1: Hero */}
      <div className="bg-[#F5F5F5] flex justify-center md:flex-row flex-col pt-5">
        <div className="flex justify-center">
          <Image src="/demat/phone2.png" alt="demat" width={400} height={540} />
        </div>
        <div className="mt-8 mb-2 text-center lg:text-left md:py-0 py-10">
          <h2 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary h-[50px]">
            Open Your
          </h2>
          <h1 className="text-[#FE667C] uppercase font-medium text-[4rem] font-secondary h-[75px]">
            Account
          </h1>
          <h3 className="text-[#484848] uppercase font-medium text-[3rem] font-secondary h-[65px]">
            Today with Aionion Capital!
          </h3>
          <button className="bg-[#2B3640] text-white py-2 px-4 mt-3 rounded-full uppercase font-medium lg:mb-4">
            <a
              href="https://ekyc.aionioncapital.com/aionion/individual1"
              target="_"
            >
              Open your account today
            </a>
          </button>
        </div>
      </div>

      {/* Section 2: Why Aionion */}
      <div className="bg-[url('/demat/anionbg.png')] bg-cover bg-center bg-no-repeat p-10 md:h-[400px] h-[300px]">
        <div className="md:grid md:grid-cols-2">
          <div className="lg:pr-[5.5rem] md:pr-[2rem] hidden md:block">
            {listArr.map((item, i) => (
              <div
                key={i}
                className={`flex justify-end items-center gap-4 ${
                  i == 0 ? "mt-0" : "mt-3"
                }`}
              >
                <div className="text-[#131313] text-[14px] lg:text-[16px]">
                  {item?.title}
                </div>
                <div className="w-[40px] h-[40px] flex justify-center items-center">
                  <Image src={item?.img} height={40} width={40} alt="icon" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-22 md:mt-0">
            <div className="text-center ml-16">
              <h1 className="text-[#463E32] text-[2rem] font-semibold uppercase font-secondary leading-[3.6rem]">
                WHY YOU CHOOSE
              </h1>
              <h1 className="text-[#FC9A1C] text-[4.5rem] font-bold uppercase font-secondary leading-[3.6rem]">
                AIONION?
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Mobile view for Why Aionion */}
      <div className="md:hidden bg-[#f2e1b4] p-10">
        <div>
          {listArr.map((item, i) => (
            <div
              key={i}
              className={`flex justify-start items-center gap-4 ${
                i == 0 ? "mt-0" : "mt-3"
              }`}
            >
              <div className="w-[40px] h-[40px] flex justify-center items-center">
                <Image src={item?.img} height={40} width={40} alt="icon" />
              </div>
              <div className="text-[#131313] text-[14px] lg:text-[16px]">
                {item?.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: How to Open */}
      <div className="bg-[#F5F5F5] p-10 pb-20">
        <div className="uppercase font-medium font-secondary text-[#484848] text-[3rem] text-center xl:leading-[0rem] leading-[3rem] xl:mt-5">
          How to Open a <br className="xl:hidden" />
          <span className="text-[#2ABDC0]">Demat Account</span>
        </div>
        <div className="flex justify-center md:flex-row flex-col mt-20 mb-20 p-5 relative">
          <div className="bg-[#A5A5A5] xl:w-[1000px] md:h-[1px] lg:w-[850px] md:w-[700px] h-[830px] w-[1px] md:ml-0 ml-12"></div>
          <div className="flex justify-between flex-col md:flex-row xl:gap-5 lg:gap-20 gap-20 md:gap-12 absolute lg:-top-9 md:-top-7 xl:w-[1000px] -top-2 items-center">
            <div className="bg-[#A5A5A5] w-[20px] h-[20px] rounded-[50%] md:mb-20 -ml-[7rem] md:ml-0"></div>
            {[1, 2, 3, 4].map((step, i) => (
              <div
                key={i}
                className="flex gap-3 items-center justify-center md:block"
              >
                <div
                  className={`${
                    step === 1
                      ? "bg-[#03233A]"
                      : step === 2
                      ? "bg-[#FC9A1C]"
                      : step === 3
                      ? "bg-[#196D85]"
                      : "bg-[#2ABDC0]"
                  } w-[100px] h-[100px] rounded-[50%] text-white text-[4rem] font-bold text-center`}
                >
                  {step}
                </div>
                <p className="text-black text-[12px] w-[100px] text-center mt-2">
                  {step === 1
                    ? "Download the AIONION app or visit the AIONION website"
                    : step === 2
                    ? "Enter your Mobile Number and verify with an OTP"
                    : step === 3
                    ? "Verify KYC and bank details"
                    : "eSign your form and documents"}
                </p>
              </div>
            ))}
            <div className="bg-[#A5A5A5] w-[20px] h-[20px] rounded-[50%] mb-20 -ml-[7rem] md:ml-0"></div>
          </div>
        </div>
      </div>

      {/* Section 4: KYC Steps & Approval Time */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* KYC Steps Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-secondary text-gray-800 mb-4">
              KYC <span className="text-[#FE667C]">STEPS</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Complete your KYC process in simple steps to activate your demat
              account
            </p>

            {/* KYC Steps Progress */}
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gray-200 rounded-full">
                <div className="w-4/7 h-full bg-gradient-to-r from-[#FE667C] to-[#0023FF] rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 relative">
                {[
                  {
                    step: "1",
                    title: "Contact Details",
                    description: "Basic contact information",
                    icon: "📱",
                    status: "completed",
                  },
                  {
                    step: "2",
                    title: "Demat Details",
                    description: "Account preferences",
                    icon: "📊",
                    status: "completed",
                  },
                  {
                    step: "3",
                    title: "Personal Details",
                    description: "Identity verification",
                    icon: "👤",
                    status: "completed",
                  },
                  {
                    step: "4",
                    title: "Bank Details",
                    description: "Account verification",
                    icon: "🏦",
                    status: "completed",
                  },
                  {
                    step: "5",
                    title: "Application Details",
                    description: "Form submission",
                    icon: "📝",
                    status: "current",
                  },
                  {
                    step: "6",
                    title: "E-Sign Details",
                    description: "Digital signature",
                    icon: "✍️",
                    status: "pending",
                  },
                  {
                    step: "7",
                    title: "KYC Complete",
                    description: "KYC verified",
                    icon: "✅",
                    status: "pending",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Step Circle */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 relative z-10 transition-all duration-300 ${
                        item.status === "completed"
                          ? "bg-gradient-to-br from-[#FE667C] to-[#FC9A1C] text-white shadow-lg"
                          : item.status === "current"
                          ? "bg-gradient-to-br from-[#0023FF] to-[#00b7c2] text-white shadow-lg animate-pulse"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </div>

                    {/* Step Number */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                        item.status === "completed"
                          ? "bg-[#FE667C] text-white"
                          : item.status === "current"
                          ? "bg-[#0023FF] text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {item.step}
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`font-semibold text-sm text-center mb-1 ${
                        item.status === "completed"
                          ? "text-[#FE667C]"
                          : item.status === "current"
                          ? "text-[#0023FF]"
                          : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-gray-500 text-center leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KYC Approval Time Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
                KYC <span className="text-[#FE667C]">APPROVAL TIME</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FE667C] to-[#FC9A1C] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Main Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-[#0023FF]">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    ⚡ Quick Activation
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your account with{" "}
                    <strong>
                      Aionion Capital Market Services Private Limited
                    </strong>{" "}
                    will typically be activated within{" "}
                    <span className="text-[#FE667C] font-bold text-lg">
                      72 hours
                    </span>
                    —provided your KYC is verified and all submitted documents
                    are in order.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    📋 Document Verification
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We ensure all your documents are properly verified according
                    to SEBI guidelines for your security and compliance.
                  </p>
                </div>
              </div>

              {/* Right Side - Important Notice */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Important Notice
                  </h4>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    If you are opening an ACMSPL account for the first time or
                    updating your KYC details, the information needs to be
                    verified by the{" "}
                    <strong className="text-[#0023FF]">
                      KYC Registration Agency (KRA)
                    </strong>{" "}
                    in line with SEBI guidelines.
                  </p>

                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <p className="text-sm">
                      <strong className="text-orange-600">
                        ⏱️ KRA Verification Time:
                      </strong>{" "}
                      This verification can take up to{" "}
                      <span className="font-bold text-[#FE667C]">72 hours</span>
                      , which may slightly delay the account activation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
