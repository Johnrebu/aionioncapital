import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[url('/home/BG.png')] min-h-[500px] lg:max-h-[530px] flex justify-center  bg-cover bg-center bg-no-repeat h-auto xl:h-[70vh] lg:h-[70vh] relative pb-5">
      {/* images */}
      <div className="h-full flex-col lg:flex-row flex justify-center xl:items-end xl:mb-4 lg:items-end lg:mb-4">
        <div className="flex relative z-50  items-end px-3 xl:px-0 lg:px-0">
          <div className="relative -right-8 z-10">
            <Image
              src="/home/Empower.png"
              width={480}
              height={520}
              className="xl:w-[356px] xl:h-[487px] w-[200px] h-[280px] lg:w-[356px] lg:h-[487px] xl:ml-5"
              alt="logo"
            />
          </div>
          <div className="z-50 xl:-mr-16  relative -left-3 lg:-left-14 lg:xl:-mr-16">
            <Image
              src="/home/homeMobile.png"
              width={331}
              height={324}
              alt="mobile"
              className="h-[200px] w-[250px] mb-4 lg:w-[400px] lg:h-[350px] lg:mb-0"
            />
          </div>
        </div>
        {/* content sections */}
        <div className="relative z-10 mb-10 ">
          <div className="">
            <h2 className="font-medium text-center xl:text-start lg:text-start pt-2 font-secondary text-[#5D5D10] text-[5rem] leading-[4.5rem] p-0 h-[80px] mt-4 ">
              Empowering
            </h2>
            <div className="flex xl:flex-col xl:items-start xl:justify-start items-center justify-center lg:flex-col lg:items-start lg:justify-start leading-[3rem]">
              <h3 className="font-secondary font-medium pb-1 text-white h-full text-[4rem] xl:mt-3 lg:mt-3 tracking-normal">
                Investors
              </h3>
              <h3 className="mt-3 ml-3 xl:ml-0 lg:ml-0 font-medium font-secondary h-full px-4 text-[#ffff] inline-block pr-[10px] pl-[10px] text-[2rem] bg-[#8F8F32]">
                Enabling Access
              </h3>
            </div>
            <p className="text-1xl text-center xl:text-start lg:text-start pt-3 text-[#272727] mt-3">
              Explore stockbroking made simple with
              <br /> <span className="font-bold">Aionion Capital.</span>
              <br />
              Seamlessly navigate opportunities with tools and
              <br className="none xl:block lg:block" /> support designed for
              every investor.
            </p>
          </div>
          <div className="lg:mt-7 mt-10 mb-3 flex flex-col items-center xl:block lg:block">
            <div className="reletive z-10 xl:mb-[2.2rem] lg:mb-[2.2rem]">
              <div className="font-bold mb-2 text-center xl:text-start lg:text-start text-[#434343]">
                Invest now with &quot;Aionion&quot;
              </div>
              <div className="flex justify-center xl:justify-start lg:justify-start">
                <button className="font-bold bg-[#2B3640] text-[#FFFFFF] px-3 py-1 rounded-full text-[13px]">
                  <a
                    href="https://trade.aionioncapital.com/#/login/client"
                    target="_"
                  >
                    LOGIN
                  </a>
                </button>
                <button className="font-bold text-[#ffff] ml-4 bg-[#FE667C] px-3 py-1 rounded-full text-[13px]">
                  <a
                    href="https://ekyc.aionioncapital.com/aionion/individual1"
                    target="_"
                  >
                    SIGN UP
                  </a>
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF] z-[-4] bg-opacity-20 absolute xl:bottom-0  lg:bottom-0 -bottom-6 xl:-left-[250px] lg:-left-[250px] h-[120px] inline-block p-[20px] w-[80vw] xl:w-[640px] lg:w-[540px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
