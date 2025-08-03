

"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Contact() {
  const [detail, setDetail] = useState<{
    fullName: string;
    emailId: string;
    contactNum: string;
    message: string;
  }>({
    fullName: "",
    emailId: "",
    contactNum: "",
    message: "",
  });

  const { fullName, emailId, contactNum, message } = detail;

  const handleOnchange = (value: string, fieldName: string) => {
    setDetail((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const onsubmitList = () => {
    setDetail(() => ({
      fullName: "",
      emailId: "",
      contactNum: "",
      message: "",
    }));
  };

  const listArr = [
    {
      header: "HEAD OFFICE",
      para: `"Reg. Office: 3rd Floor, Meerlan Towers,\n No. 33 Hanumantha Road, Royapettah,\n Chennai - 600 014\n contactus@aionioncapital.com | www.aionioncapital.com`,
    },
    {
      header: "COIMBATORE",
      para: `741, 2nd Building,\n TSJ Complex, 2nd Floor,\n Avinashi Road, Coimbatore - 641 018`,
    },
    {
      header: "TRICHY",
      para: `24, Old Karur Road, Opposite to \n Balaji Avenue, Melachinthamani,\n Trichy - 620 002.`,
    },
    {
      header: "PORUR",
      para: `a2B, 2nd Floor, Kamakshi Maitri,\n No.113, Devdoss Street,\n Madanandhapuram, Porur,\n Chennai - 600 116.`,
    },
    {
      header: "MADURAI",
      para: `No: 70, Navalar Nagar 3rd street,\n Sakthi Velammal Nagar,\n S.S Colony, Madurai - 625016`,
    },
    {
      header: "BANGALORE",
      para: `Novel Tech Park, 46/4, 2nd Floor,\n Hosur Rd, Kudlu Gate,\n Krishna Reddy Industrial Area,\n S.S H.S.R Extension, Bengaluru - 560068`,
    },
  ];

  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="flex justify-center bg-[#FFFFFF] p-10">
        <div className="text-center">
          <h2 className="text-[#0023FF] font-secondary xl:text-[3.5rem] text-[3rem] uppercase">
            Contact Us
          </h2>
          <div className="block mt-2 text-black">We are here to help you!</div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 mt-10 xl:px-40 lg:px-5">
            {/* Form Section */}
            <div className="text-center">
              <div className="mt-4 text-left">
                <div className="text-black mb-2">Full Name</div>
                <input
                  placeholder="Enter Full Name"
                  className="w-full p-3 border border-gray-300 focus:outline-none h-15 resize-none text-black bg-[#F7F7F7]"
                  value={fullName}
                  onChange={(e) => handleOnchange(e.target.value, "fullName")}
                />
              </div>
              <div className="mt-4 text-left">
                <div className="text-black mb-2">Email ID</div>
                <input
                  className="w-full p-3 border border-gray-300 focus:outline-none h-15 resize-none text-black bg-[#F7F7F7]"
                  placeholder="Enter Email ID"
                  value={emailId}
                  onChange={(e) => handleOnchange(e.target.value, "emailId")}
                />
              </div>
              <div className="mt-4 text-left">
                <div className="text-black mb-2">Contact Number</div>
                <input
                  className="w-full p-3 border border-gray-300 focus:outline-none h-15 resize-none text-black bg-[#F7F7F7]"
                  placeholder="Enter Contact Number"
                  value={contactNum}
                  onChange={(e) => handleOnchange(e.target.value, "contactNum")}
                />
              </div>
              <div className="mt-4 text-left">
                <div className="text-black mb-2">Message</div>
                <textarea
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-300 focus:outline-none h-32 resize-none text-black bg-[#F7F7F7]"
                  value={message}
                  onChange={(e) => handleOnchange(e.target.value, "message")}
                ></textarea>
              </div>
              <div className="xl:text-left lg:text-left text-center mt-5">
                <button
                  className="bg-[#FE667C] text-white py-2 px-8 rounded-full text-[16px] font-semibold"
                  onClick={onsubmitList}
                >
                  SEND
                </button>
              </div>
            </div>

            {/* Contact Icons */}
            <div className="mt-10 xl:pl-10 lg:pl-10">
              <div className="flext justify-center border-gray-300 border rounded-full xl:w-[450px] px-5 xl:py-2 py-3 bg-[#F7F7F7]">
                <p className="flex justify-start items-center gap-5">
                  <Image
                    src="/contact/contact.png"
                    alt="contact"
                    height={40}
                    width={40}
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span className="text-[#484848] font-bold text-[14px] xl:text-[16px]">
                    (+91) 89398 00027 <br className="xl:hidden" /> (9 AM - 06
                    PM, IST)
                  </span>
                </p>
              </div>
              <div className="flext justify-center border-gray-300 border rounded-full xl:w-[450px] px-5 py-3 xl:py-2 mt-6 bg-[#F7F7F7]">
                <p className="flex justify-start items-center gap-5">
                  <Image
                    src="/contact/email.png"
                    alt="email"
                    height={40}
                    width={40}
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span className="text-[#484848] font-bold text-[14px] xl:text-[16px]">
                    clientcare@aionioncapital.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESCALATION MATRIX SECTION */}
      <div className="px-4 xl:px-40 bg-[#FFFFFF] py-10">
        <h2 className="text-[#484848] font-bold uppercase xl:text-[3rem] text-[2.5rem] font-secondary text-center">
          ESCALATION MATRIX
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 text-left">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="border p-3">Details of</th>
                <th className="border p-3">Contact Person</th>
                <th className="border p-3">Address</th>
                <th className="border p-3">Contact No</th>
                <th className="border p-3">Email Id</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="border p-3">Client Care</td>
                <td className="border p-3">Client Care Department</td>
                <td className="border p-3">
                  3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
                  Chennai – 600 014
                </td>
                <td className="border p-3">
                  8939800027 Mon-Fri (9 AM to 6 PM, IST)
                </td>
                <td className="border p-3 text-blue-600 underline">
                  <a href="mailto:clientcare@aionioncapital.com">
                    clientcare@aionioncapital.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Grievance Redressal Officer/Compliance Officer
                </td>
                <td className="border p-3">Ms Swati Keshari</td>
                <td className="border p-3">
                  3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
                  Chennai – 600 014
                </td>
                <td className="border p-3">
                  7305088516 Mon-Fri (9 AM to 6 PM, IST)
                </td>
                <td className="border p-3 text-blue-600 underline">
                  <a href="mailto:grievances@aionioncapital.com">
                    grievances@aionioncapital.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-3">Head of Operations</td>
                <td className="border p-3">Mr Kumar Mahlingam Iyer</td>
                <td className="border p-3">
                  3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
                  Chennai – 600 014
                </td>
                <td className="border p-3">
                  8925808627 Mon-Fri (9 AM to 6 PM, IST)
                </td>
                <td className="border p-3 text-blue-600 underline">
                  <a href="mailto:kumarmahlingam.iyer@aionioncapital.com">
                    kumarmahlingam.iyer@aionioncapital.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border p-3">Director</td>
                <td className="border p-3">Mr Anish Gupta</td>
                <td className="border p-3">
                  3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
                  Chennai – 600 014
                </td>
                <td className="border p-3">
                  8925808630 Mon-Fri (9 AM to 6 PM, IST)
                </td>
                <td className="border p-3 text-blue-600 underline">
                  <a href="mailto:compliance@aionioncapital.com">
                    compliance@aionioncapital.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AIONION ADDRESS SECTION */}
      <div className="flex justify-center bg-[#F5F5F5] p-10">
        <div className="lg:px-40 mt-5">
          <div className="font-medium uppercase font-secondary leading-[3.3rem] text-[2.5rem] text-[#505050] text-center">
            <span className="text-[#FE667C]">AIONION </span> ADDRESS
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 xl:px-3 lg:px-5 gap-5">
            {listArr.map((item, i) => (
              <div className="bg-[#FFFFFF] p-5 min-h-[170px]" key={i}>
                <div className="text-black1 font-bold mb-2">{item?.header}</div>
                {item.para?.split("\n").map((line, index) => (
                  <div className="text-black1 text-[14px]" key={index}>
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
