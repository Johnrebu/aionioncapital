import Header from "@/components/layout/Header";
import React from "react";

const BondDetails = () => {
  const bankDetail = [
    {
      name: "Aionion Capital Market Services Private Limited - USCNBA",
      bname: "ICICI BANK LIMITED",
      accNo: "000905036661",
      ifsc: "ICIC0000009 ",
      branch: "Nungambakkam, Chennai",
    },
    {
      name: "Aionion Capital Market Services Private Limited - USCNBA",
      bname: "AXIS BANK LIMITED",
      accNo: "924020068024292",
      ifsc: "UTIB0003334",
      branch: "Ashock Nagar,Chennai.",
    },
    {
      name: "Aionion Capital Market Services (P) Ltd- USCNB A/c",
      bname: "HDFC BANK LIMITED",
      accNo: "57500001595542",
      ifsc: "HDFC0000004",
      branch: " Anna Salai,Chennai.",
    },
  ];
  const tablelist = [
    {
      title: "Below 2 Lakhs",
      bName: "Indian Clearing Corporation Limited",
      accNo: "57500001086245",
      ifsc: "HDFC0000060 ",
      bankN: "HDFC Bank Ltd, Fort Branch",
      mode: "NEFT only",
    },
    {
      title: "2 Lakhs and Above",
      bName: "Indian Clearing Corporation Limited",
      accNo: "57500001086245",
      ifsc: "ICLL0000001",
      bankN: "RBI-Fort",
      mode: "335800EV4FPEFRWNVX08",
    },
  ];
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="bg-[#F5F5F5] flex justify-center">
        <div>
          <div className="md:w-[800px]">
            <div className="bg-[#E9E9E9] text-center px-10 py-5">
              <h2 className="text-[#484848] font-semibold text-[3rem] font-secondary">
                BOND DETAILS
              </h2>
            </div>
            <div className="px-10 pt-5 pb-10 bg-[#ffff]">
              <h2 className="text-[#484848] font-bold text-[2rem] font-secondary text-center">
                EQUITY ACCOUNT DETAILS
              </h2>

              <p className="mt-3 text-black2">
                Please strictly follow the instructions provided on the Trade
                app and Trade website. Do NOT transfer funds directly to the
                equity accounts listed below.
              </p>
              <h2
                className="text-[#484848] font-semibold text-[1.3rem] mt-3 text-center"
                id="bank-details"
              >
                CLIENT BANK ACCOUNT DETAILS
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 mt-3">
                {bankDetail.map((item, i) => (
                  <div key={i} className="mt-4">
                    <div className="text-black1">
                      {" "}
                      <span className="underline">
                        Company Name:
                        <br />
                      </span>
                      <span className="font-bold text-black1">
                        {item?.name}
                      </span>
                    </div>
                    <div className="text-black1">
                      Bank Name:<span>{item?.bname}</span>
                    </div>
                    <div className="text-black1">
                      {" "}
                      Account No:<span>{item?.accNo}</span>
                    </div>
                    <div className="text-black1">
                      IFSC Code:<span>{item?.ifsc}</span>
                    </div>
                    <div className="text-black1">
                      Branch:<span>{item?.branch}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-[800px] bg-[#ffff] mt-5 px-10 py-10">
            <div className="bg-[#ffff] mb-5">
              <h2 className="text-[#484848] font-bold text-[2rem] font-secondary text-center">
                BOND DETAILS
              </h2>
            </div>
            <div className="flex justify-center">
              <div>
                {tablelist.map((e, i) => (
                  <div key={i} className="mb-10">
                    <p className="text-black1 mb-4 text-[14px]">{e.title}</p>
                    <table className="bg-[#FFFFFF] border-collapse border border-[#BFBFBF] ">
                      <thead>
                        <tr className="text-center">
                          <th className="border border-gray-300 text-black1 p-2 text-[12px] bg-[#F5F5F5]">
                            Account Number
                          </th>
                          <th className="border border-gray-300 text-black1 p-2 text-[12px] bg-[#F5F5F5]">
                            Beneficiary Name
                          </th>
                          <th className="border border-gray-300 text-black1 p-2 text-[12px] bg-[#F5F5F5]">
                            IFSC Code
                          </th>
                          <th className="border border-gray-300 text-black1 p-2 text-[12px] bg-[#F5F5F5]">
                            Bank Name
                          </th>
                          <th className="border border-gray-300 text-black1 p-2 text-[12px] bg-[#F5F5F5]">
                            Mode of Transfer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 py-4 px-3 text-black2 text-[12px]">
                            {e.accNo}
                          </td>
                          <td className="border border-gray-300 py-4 px-3 text-black2 text-[12px]">
                            {e.bName}
                          </td>
                          <td className="border border-gray-300 py-4 px-3 text-black2 text-[12px]">
                            {e.ifsc}
                          </td>
                          <td className="border border-gray-300 py-4 px-3 text-black2 text-[12px] ">
                            {e.bankN}
                          </td>
                          <td className="border border-gray-300 py-4 px-3 text-black2 text-[12px]">
                            {e.mode}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-bold text-black1 underline">
              Important Information on Bond Payments
            </div>
            <p className=" text-black2 text-[14px] mt-4">
              All bond payments must be made only to the two accounts mentioned
              below, based on the payment amount. Please proceed with the
              payment only after receiving confirmation from your Relationship
              Manager.{" "}
            </p>
            <p className=" text-black2 mt-4 text-[13px]">
              Note: Payments made to any account other than the designated ones
              will not be accepted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondDetails;
