import Header from "@/components/layout/Header";
import React from "react";

const Conditions = () => {
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="bg-[#F5F5F5] flex justify-center">
        <div className="w-[800px] p-10">
          <div className="bg-[#E9E9E9] text-center px-10 py-5">
            <h2 className="text-[#484848] font-semibold text-[3rem] font-secondary">
              TERMS AND CONDITIONS
            </h2>
          </div>
          <div className="pt-5 px-10 pb-10 bg-[#ffff]">
            <p className="mt-3 text-black2">
              Before using the online trading services, the Client must complete
              the registration process as specified and follow the instructions
              provided on the website to register as a client with Aionion
              Capital Market Services Private Limited (&quot;Aionion
              Capital&quot;).
            </p>
            <p className="mt-3 text-black2">
              The Client acknowledges that all investment and disinvestment
              decisions are based solely on their own assessment of financial
              circumstances and investment goals. Aionion Capital, along with
              its officers, employees, agents, subsidiaries, affiliates, or
              business associates, shall not be held liable for any trading
              losses, costs, or damages incurred due to reliance on any
              information, research, opinions, or advice provided through its
              website, platform, brochures, or other materials. Clients are
              strongly advised to seek independent professional advice to
              determine the suitability of their investment decisions.
            </p>
            <p className="mt-3 text-black2">
              Furthermore, the Client agrees not to hold Aionion Capital or its
              affiliates responsible for any losses or damages arising from
              reliance on information, opinions, or materials disseminated
              through its platform or promotional communications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
