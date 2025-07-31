import Header from "@/components/layout/Header";
import React from "react";

const Refund = () => {
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="bg-[#F5F5F5] flex justify-center">
        <div className="w-[800px]">
          <div className="bg-[#E9E9E9] text-center px-10 py-5">
            <h2 className="text-[#484848] font-semibold text-[3rem] font-secondary">
              REFUND CANCELLATION
            </h2>
          </div>
          <div className="px-10 pt-5 pb-10 bg-[#ffff]">
            <h2 className="text-[#484848] font-bold text-[2rem] font-secondary text-center">
              REFUND & CANCELLATION POLICY
            </h2>
            <h3 className="text-black1 font-bold mt-5">
              Non-Refundable Charges{" "}
            </h3>
            <p className="mt-2 text-black2">
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

            <h3 className="text-black1 font-bold mt-5">
              {" "}
              Non-Refundable Charges
            </h3>
            <p className="mt-2 text-black2">
              The collection of documents required for the account opening
              process is subject to the availability of representatives at the
              specific time and location agreed upon
            </p>
            <h3 className="text-black1 font-bold mt-5">Duplicate Payments</h3>
            <p className="mt-2 text-black2">
              If payments related to account opening have been made multiple
              times in error, clients are advised to write to
              clientcare@aionioncapital.com. Upon verification, Aionion Capital
              will initiate the necessary process to refund the excess amount.
            </p>
            <h3 className="text-black1 font-bold mt-5">Refund Processing</h3>
            <p className="mt-2 text-black2">
              Any refund process, where applicable, is subject to the procedures
              and timelines of third-party entities, such as banks and payment
              gateways, involved in the transaction. Completion of the refund
              process depends on these external agencies.
            </p>
            <p className="mt-3 text-black2">
              Note: While Aionion Capital will make every effort to process
              refunds promptly, delays caused by banks, payment gateways, or
              other third-party agencies are beyond our control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
