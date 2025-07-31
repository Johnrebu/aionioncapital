import Header from "@/components/layout/Header";
import Image from "next/image";
export default function About() {
  const Details: React.FC<{ heder: string; value: string }> = ({
    heder,
    value,
  }) => {
    return (
      <div className="my-5">
        <p className="text-black1">{heder}</p>
        <p className="text-black mt-2 font-bold">{value}</p>
      </div>
    );
  };

  return (
    <div className="items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* 1st section */}
      <Header data={"about"} />
      <div className="bg-[url('/about/aboutbg.png')] relative bg-cover bg-center bg-no-repeat xl:h-[63vh] lg:h-[55vh] md:h-[49vh] h-[45vh]">
        <div className="flex absolute bottom-0 right-12 justify-end  pr-48">
          <div className="p-5 w-[550px] opacity-[0.87] bg-[#FFFFFF] hidden xl:block">
            <div className="font-medium text-[#505050] leading-[3rem] text-[3rem] font-secondary">
              {" "}
              <span className="text-[#FE667C] font-secondary">Aionion </span>
              Capital
            </div>{" "}
            <div className="font-medium font-secondary text-[#4B4B4B] text-[24px]">
              Capital Market Services Private Limited
            </div>
            <p className="mt-2 text-[#000000]">
              We are a new-age stockbroking company from Chennai, here to
              simplify your investment journey. With a steadfast commitment to
              empowering investors, we focus on creating informed investment
              communities and facilitating seamless access to financial markets.
              As a trusted partner, we aim to bridge the gap between individuals
              and the opportunities within the capital markets.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:p-10 md:p-10 p-5 bg-[#FFFFFF] text-center xl:hidden">
        <div className="font-medium text-[#505050] leading-[4rem] text-[3.5rem] font-secondary">
          {" "}
          <span className="text-[#FE667C] font-secondary">Aionion </span>
          Capital
        </div>{" "}
        <div className="font-medium font-secondary text-[#4B4B4B] text-[2.5rem] leading-[3rem] ">
          Capital Market <br />
          Services Private Limited
        </div>
        <p className="mt-2 text-[#000000]">
          We are a new-age stockbroking company from Chennai, here to simplify
          your investment journey. With a steadfast commitment to empowering
          investors, we focus on creating informed investment communities and
          facilitating seamless access to financial markets. As a trusted
          partner, we aim to bridge the gap between individuals and the
          opportunities within the capital markets.
        </p>
      </div>
      {/* 2nd section */}
      <div className="p-10 xl:h-[250px] lg:h-[250px] text-center xl:bg-[#F5F5F5] bg-[#E8E8E8]">
        <div className="font-medium uppercase text-[#0023FF] font-secondary text-[2.5rem]">
          <span className="text-black2">our</span> approach
        </div>
        {/* <p className="text-[#000000]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br className="hidden xl:block" /> Ut enim ad minim veniam, quis
          nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          <br className="hidden xl:block" /> incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
        </p> */}
      </div>
      {/* 3rd section */}
      <div className="p-10 xl:bg-[#FFFFFF]  lg:bg-[#FFFFFF] bg-[#E8E8E8] flex justify-center gap-5 sm:gap-0 xl:gap-0 ">
        <div className="flex justify-center gap-10 xl:flex-row lg:flex-row flex-col xl:-mt-36 lg:-mt-36">
          {[
            {
              title: "Transparency",
              url: "/about/png1.png",
              description:
                "We ensure open and clear communication at every step. Integrity: Upholding the highest standards of trust and ethics. Accessibility: Breaking barriers to make financial markets available to all. Excellence: Continuously innovating to deliver the best stockbroking experiences.",
            },
            {
              title: "Empowering Investors, Enabling Access",
              url: "/about/png2.png",
              description:
                "Our mission is to foster a community of informed investors by equipping them with the tools, knowledge, and access necessary to navigate financial markets with confidence and make decisions aligned with their long-term goal.",
            },
            {
              title: "A world of accessible opportunities",
              url: "/about/png3.png",
              description:
                "We envision a future where everyone, regardless of their background, has the ability to participate in financial markets, everaging knowledge and access to achieve their investment aspirations.",
            },
          ].map((e, index) => (
            <div
              key={index}
              className="text-center flex justify-center items-center flex-col max-w-[330px] lg:max-w-[330px] md:max-w-[530px]"
            >
              <div className="text-center rounded-[50%] border border-[#BFBFBF] bg-[#FFFFFF] h-[200px] w-[200px]  flex items-center justify-center">
                <Image alt="png" src={e.url} width={100} height={100} />
              </div>
              <div className="font-bold uppercase mt-3 text-[#484848] text-[18px]">
                {e.title}
              </div>
              <div className="text-[#484848] mt-3">{e.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 4th section */}
      <div
        className="p-10 text-center xl:bg-[#F5F5F5] bg-[#FFFFFF] md:bg-[#F5F5F5] lg:bg-[#F5F5F5]"
        id="key-managerial-persons"
      >
        <div className="font-medium uppercase font-secondary leading-[3rem] text-[2.5rem] text-[#505050]">
          {" "}
          <span className="text-[#FE667C] xl:inline block">
            Meet the People
          </span>{" "}
          Behind Aionion Capital
        </div>{" "}
        <div className="text-[#000000] mt-5 lg:px-40 md:px-20">
          Details of Key Managerial Personnel (KMPs) Including Compliance
          Officer
          <br /> Detailed list of individuals authorized to act on behalf of
          Aionion Capital Market Services Private Limited, including their
          contact details.
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-5 xl:px-32  lg:px-32  md:px-16">
          {[
            {
              name: "Srinivasan Anand",
              destination: "Additional Director",
              phone: "044-46895225",
            },
            {
              name: "Anish Gupta",
              destination: "Director",
              email: "anish@aionioncapital.com",
              content: `Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.`,
              phone: "044-46895225",
            },
            {
              name: "Dileep Keerthi Kumar",
              destination: "Director",
              email: "dileep.k@aionioncapital.com",
              content: `Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.`,
              phone: "044-46895225",
            },
            {
              name: "Gnanasundaram Vinodhkumar",
              destination: "Director",
              email: "vinodhkumar.g@aionioncapital.com",
              content: `Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.`,
              phone: "044-46895225",
            },
            {
              name: "Ariyapadi Srinivasan Rajasekaran",
              destination: "Director",
              email: "rajasekaran.s@aionioncapital.com",
              content: `Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.`,
              phone: "044-46895225",
            },
            {
              name: "Swati Keshari",
              destination: "Company Secretary and Compliance Officer",
              email: "swati.k@aionioncapital.com",
              content: `Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.`,
              phone: "044-46895225",
            },
          ].map((e, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-5 flex gap-5 items-center md:flex-row flex-col justify-center md:justify-start"
            >
              {/* <div className="border rounded-[50%] border-[#BFBFBF] bg-[#ECECEC] inline-block xl:w-[200px] xl:h-[100px] w-[100px] h-[100px]"></div> */}

              <div className="md:text-left  text-center">
                <h2 className="font-medium text-[#505050] font-secondary xl:text-[2rem] text-[2.5rem] md:text-[1.6rem]">
                  {e.name}
                </h2>
                <h3 className="font-medium text-[#848484] xl:text-[1rem] text-[1rem] md:text-[1rem] font-secondary">
                  {e.destination}
                </h3>
                <p className="text-[#000000] xl:px-0">
                  <a className="text-blue-500 underline  hover:text-blue-700">
                    {e.email}
                  </a>
                </p>
                <p className="font-medium text-[#848484]  text-[1rem] mt-2">
                  {e.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6th section */}
      <div className="p-10 bg-[#FFFFFF] px-5 hidden xl:block">
        <div className="text-center font-secondary uppercase text-[#505050] font-medium h-[71px] text-[2.5rem]">
          Basic Details
        </div>
        <div className="flex justify-center gap-3 ">
          <div className="max-w-[432px]">
            <Details
              heder="Name"
              value="M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED"
            />
            <Details heder="SEBI Registration Number" value="INZ000318532" />
            <Details heder="TAN" value="CHEA37281G" />
            <Details heder="AMFI Registration Number" value="ARN-296313" />
            <Details heder="NSDL DPID" value="IN304772" />
          </div>
          <div className="max-w-[432px]">
            <Details
              heder="Address"
              value="3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah, Chennai - 600 014"
            />
            <Details heder="GST Registration Number" value="33ABACA2285K1ZR" />
            <Details heder="BSE Member Code" value="6878" />
            <Details heder="Mail id" value="compliance@aionioncapital.com" />
            <Details
              heder="Research Analyst SEBI Registration Number"
              value="INH000020138"
            />
          </div>
          <div className="max-w-[432px]">
            <Details heder="Company PAN" value="ABACA2285K" />
            <Details heder="CIN" value="U66120TN2024PTC167864" />
            <Details heder="NSE Member Code" value="90405" />
            <Details heder="CDSL DPID" value="12100800" />
          </div>
        </div>
        {/* OUR BRANCHES section */}
        <div className="flex justify-center bg-[#F5F5F5] p-10">
          <div className="lg:px-40 mt-5">
            <div className="font-medium uppercase font-secondary leading-[3.3rem] text-[2.5rem] text-[#FE667C] text-center">
              <span className="text-[#FE667C]">OUR </span> BRANCHES
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 xl:px-3 lg:px-5 gap-5">
              {[
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
              ].map((item, i) => (
                <div className="bg-[#FFFFFF] p-5 min-h-[170px]" key={i}>
                  <div className="text-black1 font-bold mb-2">
                    {item.header}
                  </div>
                  {item.para.split("\n").map((line, idx) => (
                    <div className="text-black1 text-[14px]" key={idx}>
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Moved: GET STARTED WITH DEMAT ACCOUNT section */}
      <div className="hidden xl:block bg-[url('/about/tool.png')] h-[550px] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-2">
          <div className=" bg-cover bg-center bg-no-repeat h-[500px]"></div>
          <div className="h-[550px] text-left flex  justify-start items-center">
            <div className="bg-[#1c3443] w-[500px] p-10">
              <h1 className="text-[#FFFFFF] font-secondary font-medium text-[30px]">
                GET STARTED WITH
              </h1>
              <h2 className="text-[#6BC761] font-medium font-secondary text-[3rem] uppercase">
                Demat account
              </h2>
              <p className="text-[#FFFFFF]">
                Our platform offers a robust suite of investor-focused features,
                helping you make data-driven decisions effortlessly.
              </p>
              <div className="mt-2">
                <a href="/demataccount">
                  <button className="bg-[#fb464b] rounded-full px-6 text-[#FFFFFF] text-[15px] uppercase py-1 mt-3 font-semibold">
                    KNOW MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
