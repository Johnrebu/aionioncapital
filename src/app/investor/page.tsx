import Header from "@/components/layout/Header";
import React from "react";

const Investor = () => {
  const details = [
    {
      list: `Beware of fixed/guaranteed/regular returns/ capital protection schemes. Brokers or their authorized persons or any of their associates are not authorized to offer fixed/guaranteed/regular returns/ capital protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you.\n
        Please note that in case of default of a member claim for funds or securities given to the broker under any arrangement/ agreement of indicative return will not be accepted by the relevant Committee of the Exchange as per the approved norms. Do not keep funds idle with the Stock Broker. Please note that your stock broker has to return the credit balance lying with them, within three working days in case you have not done any transaction within last 30 calendar days.\n
        Please note that in case of default of a Member, claim for funds and securities, without any transaction on theexchange will not be accepted by the relevant Committee of the Exchange as per the approved norms. Check the frequency of accounts settlement opted for. If you have opted for running account, please ensure that your broker settles your account and, in any case, not later than once in 90 days (or 30 days if you have opted for 30 days settlement). In case of declaration of trading member as defaulter, the claims of clients against such defaulter member would be subject to norms for eligibility of claims for compensation from IPF to the clients of the defaulter member. These norms are available on Exchange website at \n
        following link:\n 
        www.nseindia.com/invest/about-defaulter-section
        www.bseindia.com/static/investors/Claim Against Defaulter\n
        Brokers are not permitted to accept transfer of securities as margin. Securitiesoffered as margin/ collateral MUST remain in the account of the client and can be pledged to the broker only by way of ‘margin pledge’, created in the Depository system. Clients are not permitted to place any securities with the broker or associate of the broker or authorized person of the broker for any reason. Broker can take securities belonging to clients only for settlement of securities sold by the client.\n
        Always keep your contact details viz. Mobile number/Email ID updated with the stock broker. Email and mobile number is mandatory and you must provide the same to your broker for updation in Exchange records. You must immediately take up the matter with Stock Broker/Exchange if you are not receiving the messages from Exchange/Depositories regularly. Don't ignore any emails/SMSs received from the Exchange for trades done by you. Verify the same with the Contract notes/Statement of accounts received from your broker and report discrepancy, if any, to your broker in writing immediately and if the Stock Broker does not respond, please take this up with the Exchange/Depositories forthwith. \n
        Check messages sent by Exchanges on a weekly basis regarding funds and securities balances reported by the trading member, compare it with the weekly statement of account sent by broker and immediately raise a concern to the exchange if you notice a discrepancy. Please do not transfer funds, for the purposes of trading to anyone, including an authorized person or an associate of the broker, other than a SEBI registered entity.`,
    },
  ];
  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header data={"contact"} />
      <div className="bg-[#F5F5F5] flex justify-center">
        <div className="w-[800px]">
          <div className="bg-[#E9E9E9] text-center px-10 py-7">
            <h2 className="text-[#484848] font-semibold text-[3rem] font-secondary">
              INVESTOR AWARNESS AND ADVISIORY
            </h2>
          </div>
          <div className="px-10 pt-5 pb-10 bg-[#ffff]">
            {details.map((e, i) => (
              <div key={i}>
                {" "}
                {e.list?.split("\n").map((line, index) => (
                  <p key={index} className="mt-3 text-black2">
                    {line}
                  </p>
                ))}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
