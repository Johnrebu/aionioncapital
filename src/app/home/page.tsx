"use client";
import Header from "@/components/layout/Header";
import Slider from "@/components/common/slider";
import HeroSection from "@/components/sections/home/heroSection";
import Image from "next/image";
import SliderRun from "@/components/common/sliderRun";

export default function HomePage() {
  const listArry = [
    {
      icon: "/home/user.svg",
      title: "All-in-One Financial Hub",
      discription:
        "Manage your Equity, Bonds, Mutual Funds, and IPOseffortlessly—all in one place. Simplify your investments with a unified platform",
    },
    {
      icon: "/home/list.svg",
      title: "  Curated Recommendations",
      discription:
        "Get expert insights tailored to your financial goals. Make smarter investment decisions with curated advice you can trust.",
    },
    {
      icon: "/home/flexible.svg",
      title: "   Flexible Investment Options",
      discription:
        " Choose how you invest—buy in bulk or start with SIPs.Flexibility that fits your financial strategy and lifestyle.",
    },
    {
      icon: "/home/service.svg",
      title: " Personalized Service",
      discription:
        " Experience dedicated support designed for every investor. Frombeginners to experts, we’re here to guide you every step of the way.",
    },
    {
      icon: "/home/plus.svg",
      title: " User-Friendly Experience",
      discription:
        " Navigate our platform with ease. A simple, seamless, and intuitive design ensures a hassle-free investing experience.",
    },
  ];
  const sliderArray = [
    {
      img: "/home/enquite.png",
      title: "Equity",
      discription:
        "Invest in leading stocks and grow your portfolio. Trade seamlessly with expert insights and 24/7 accessibility on our platform.",
    },
    {
      img: "/home/megaphone.png",
      title: "IPO",
      discription:
        "Be the first to invest in promising companies. Access IPOs and benefit from early growth potential with ease.",
    },

    {
      img: "/home/bond.png",
      title: "Mutual Funds",
      discription:
        "Grow wealth through professionally managed mutual funds and SIPs. Start small, invest smart, and let compounding work for you.",
    },
    {
      img: "/home/coin.png",
      title: "Bonds",
      discription:
        "Secure your investments with low-risk bonds. Enjoy consistent returns and diversify your portfolio effortlessly.",
    },   
  ];

  return (
    <>
      {/* Promo Banner */}

      <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <Header data={"home"} />

        {/* Hero Section */}
        <HeroSection />
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#C8C8C8] py-10 px-8 md:px-16">
          {/* Left side smaller 📢 image */}
          <div className="w-full md:w-1/2 flex justify-center mb-7 md:mb-0">
            <div className="relative w-[150px] md:w-[200px] lg:w-[220px] h-[150px] md:h-[200px] lg:h-[220px]">
              <Image
                src="/Announcement.png"
                alt="Announcement"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side: same as before */}
          <div className="bg-white shadow-lg px-7 py-10 w-full md:w-1/2 md:ml-1 mr-2">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl lg:text-4xl font-secondary text-blue-700 mb-4">
                  WE HAVE UPDATED OUR CONTACT DETAILS!
                </h2>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-yellow-400 mr-0 mt-1 rounded" />
                    <p className="text-gray-800 mt-1 pl-2 text-black text-sm lg:text-base border-l-4 border-[#FBAD00]">
                      We want to make it even easier for you to reach us.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-yellow-400 mr-0 mt-1 rounded" />
                    <p className="text-gray-800 font-medium mt-2 pl-3 text-black text-sm lg:text-base border-l-4 border-[#FBAD00]">
                      Please note our new phone numbers and email address.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-yellow-400 mr-0 mt-1 rounded" />
                    <p className="text-gray-800 mt-2 pl-3 text-black text-sm lg:text-base border-l-4 border-[#FBAD00]">
                      Kindly use these updated details whenever you need our
                      assistance or support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl lg:text-4xl font-secondary text-[#FE667C] mb-4">
                  HOW TO REACH US
                </h2>
                <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-1">
                  <p>
                    <span className="font-bold">Call Us:</span>{" "}
                    <a
                      href="tel:8939800027"
                      className="text-blue-600 hover:underline font-mono"
                    >
                      8939800027
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">WhatsApp:</span>{" "}
                    <a
                      href="https://wa.me/9797979818"
                      className="text-blue-600 hover:underline font-mono"
                    >
                      9797979818
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">
                      If you receive a call from us, it will show as:
                    </span>{" "}
                    <span className="font-mono">1600418814</span>
                  </p>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    <a
                      href="mailto:clientcare@aionioncapital.com"
                      className="text-blue-600 hover:underline font-mono"
                    >
                      clientcare@aionioncapital.com
                    </a>
                  </p>
                </div>

                <p className="mt-4 text-gray-800">
                  We’re always here to help you.
                </p>
                <p className="font-bold text-gray-900">
                  Thank you for staying connected with Aionion Capital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div className="p-10 bg-[#E9E9E9]">
          <div className="text-center">
            <div className="uppercase text-[#505050] text-[3rem] font-secondary">
              Services <span className="text-[#FE667C]">We offer</span>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <Slider>
              {sliderArray.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-md w-[206px] h-[308px] bg-[#FFFFFF]"
                >
                  <div className="flex justify-center flex-col items-center">
                    <div className="bg-[#F3F3F3] h-[70px] w-[70px] rounded-full flex justify-center items-center">
                      <Image
                        src={item?.img}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="text-[#757575] font-bold mt-2">
                      {item?.title}
                    </div>
                  </div>
                  <div className="text-[#000000] mt-3">{item?.discription}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Growth & Innovation Section */}
        <div className="bg-[url('/home/App.png')] bg-cover bg-center bg-no-repeat p-10 bg-[#E9E9E9] hidden xl:block lg:block">
          <div className="flex justify-center w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <div className="p-5 bg-white xl:w-[600px] lg:w-[500px]">
                <div className="capitalize font-medium text-2xl text-[#848484] font-secondary leading-[3rem]">
                  Experience
                </div>
                <div className="font-medium text-[#505050] text-5xl font-secondary leading-[3rem]">
                  <span className="text-[#FE667C] tracking-wide">Growth</span> &
                  Innovation
                </div>
                <div className="font-medium text-[#848484] text-2xl font-secondary mb-2">
                  With Our &quot;investor-Friendly&quot; Platform
                </div>
                <p className="mt-2 pl-3 text-black text-base border-l-4 border-[#FBAD00]">
                  Our platform offers a robust suite of investor-focused
                  features, helping you make data-driven decisions effortlessly.
                </p>
                <p className="text-black text-base border-l-4 border-[#FBAD00] mt-4 pl-3">
                  With seamless navigation and comprehensive insights, you can
                  confidently optimize your portfolio and realize lasting
                  returns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Section (Mobile) */}
        <div className="bg-[url('/home/smlab.jpeg')] bg-cover bg-center bg-no-repeat p-10 bg-[#E9E9E9] h-[400px] md:h-[550px] lg:hidden xl:hidden"></div>
        <div className="p-10 bg-[#E9E9E9] xl:hidden lg:hidden">
          <div className="p-5 bg-white">
            <div className="capitalize font-medium text-[2.5rem] text-[#848484] font-secondary text-center">
              Experience
            </div>
            <div className="font-medium text-[#505050] text-[3rem] font-secondary text-center leading-[2rem]">
              <span className="text-[#FE667C] tracking-wide">Growth</span> &
              Innovation
            </div>
            <div className="font-medium text-[#848484] text-[2.5rem] font-secondary mb-2 text-center leading-[3rem]">
              With Our <br /> &quot;investor-Friendly&quot; Platform
            </div>
            <p className="mt-2 pl-3 text-black text-base border-l-4 border-[#FBAD00]">
              Our platform offers a robust suite of investor-focused features,
              helping you make data-driven decisions effortlessly.
            </p>
            <p className="text-black text-base border-l-4 border-[#FBAD00] mt-4 pl-3">
              With seamless navigation and comprehensive insights, you can
              confidently optimize your portfolio and realize lasting returns.
            </p>
          </div>
        </div>

        {/* Simple & Accessible Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
          <div className="text-center xl:text-right lg:text-right p-10 xl:bg-[#E9E9E9] lg:bg-[#E9E9E9] bg-white flex flex-col items-center xl:items-end lg:items-end">
            <div className="uppercase font-medium text-[#7F7F7F] text-2xl font-secondary">
              Investing Made
            </div>
            <div className="mt-2 uppercase font-medium px-3 py-1 text-3xl text-white bg-[#0023FF] font-secondary">
              Simple
            </div>
            <div className="uppercase font-medium mt-3 text-[#7F7F7F] text-2xl font-secondary">
              and
            </div>
            <div className="uppercase font-medium mt-2 px-3 py-1 bg-[#FE667C] text-3xl font-secondary text-white">
              Accessible
            </div>
            <p className="mt-3 text-black max-w-[96vw] w-[400px] text-base">
              At Aionion Capital, we make investing easy for everyone. With a
              user-friendly platform and expert guidance, you can take charge of
              your financial future—anytime, anywhere.
            </p>
          </div>
          <div className="flex xl:px-10 xl:py-10 bg-white py-5 pl-10">
            <div className="w-[1px] h-[512px] bg-[#C4C3C3] ml-5 mt-7 xl:mt-0"></div>
            <div className="flex flex-col justify-between gap-6 -ml-8 z-20">
              {listArry.map((item, i) => (
                <div className="flex gap-4 justify-start items-center" key={i}>
                  <div className="bg-[#EEEEEE] px-6 py-5 rounded-full flex justify-center items-center">
                    <Image
                      src={item?.icon}
                      alt="icon"
                      className="w-[50px] h-[40px]"
                      width={41}
                      height={35}
                    />
                  </div>
                  <div className="max-w-[600px]">
                    <h2 className="font-semibold text-[#5B5B5B] text-lg">
                      {item?.title}
                    </h2>
                    <p className="text-black text-sm pr-3">
                      {item?.discription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investor Attention Ticker */}
        <div className="grid grid-cols-3">
          <div className="bg-[#C8C8C8] p-5 flex md:justify-end justify-center items-center col-span-3 md:col-span-1">
            <div className="text-[#FF0000] text-base md:text-right text-center font-semibold">
              Investor <br />
              <span className="text-[27px] leading-[1.5rem]">Attention</span>
            </div>
          </div>
          <div className="md:col-span-2 col-span-3 bg-[#FFE9E9] p-5 text-black text-sm">
            <SliderRun />
          </div>
        </div>
      </div>
    </>
  );
}
