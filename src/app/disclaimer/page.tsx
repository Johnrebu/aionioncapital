import Header from "@/components/layout/Header";
import React from "react";

const Disclaimer = () => {
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="bg-[#F5F5F5] flex justify-center">
        <div className="w-[800px]">
          <div className="bg-[#E9E9E9] text-center  px-10 py-5">
            <h2 className="text-[#484848] font-semibold text-[3rem] font-secondary">
              DISCLAIMER
            </h2>
          </div>
          <div className="pt-5 pb-10 bg-[#ffff] px-10">
            <p className="mt-3 text-black2">
              There are risks associated with investing in securities. Investing
              in stocks, bonds, exchange traded funds, mutual funds, and money
              market funds involve risk of loss. Loss of principal is possible.
              Some high risk investments may use leverage, which will accentuate
              gains and losses. Foreign investing involves special risks,
              including a greater volatility and political, economic and
              currency risks and differences in accounting methods. A security’s
              or a firm’s past investment is not a guarantee or predictor of
              future investment performance.
            </p>
            <p className="mt-3 text-black2">
              Insurance is a subject matter of solicitation. The information
              provided here cannot substitute for the advice of a licensed
              professional. The information and data provided here is of a
              general nature and strictly for informational purposes.
            </p>
            <p className="mt-3 text-black2">
              This email and any files transmitted with it are confidential and
              intended solely for the use of the individual or entity to whom
              they are addressed. If you have received this email in error
              please notify the system manager. This message contains
              confidential information and is intended only for the individual
              named. If you are not the named addressee you should not
              disseminate, distribute or copy this email. Please notify the
              sender immediately by email if you have received this email by
              mistake and delete this email from your system. If you are not the
              intended recipient you are notified that disclosing, copying,
              distributing or taking any action in reliance on the contents of
              this information is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
