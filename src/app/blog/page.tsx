// "use client";
// import { useSearchParams } from "next/navigation"; // add this import at top
// import React, { useState } from "react"; // ✅ FIXED
// import Header from "@/components/layout/Header";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const blogData = [
//   {
//     category: "OPINION",
//     articles: [
//       {
//         title: "Pondering the Perils & Pitfalls of a Portfolio",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "From Madrid & Lisbon to Chennai, two catastrophic episodes and their domino effect force us to rethink our investing habits",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Why gaga over 100 days?",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "From Franklin Roosevelt to Donald Trump, the 100 days of Presidency bit off more than they could chew.",
//         slug: "why-gaga-over-100-days",
//         link: "#",
//       },
//     ],
//   },
//   // Add other sections...
//   {
//     category: "GET THE BASICS RIGHT",
//     articles: [
//       {
//         title: "What is India VIX?",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "What if there is a devil/divine device that captures the collective mood of the market and measures the pulse of all traders in one shot! What if there is one magical number that senses the collective anxiety/fear of every trader or every investor in the securities market. Read on…",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title:
//           "Futures and Options: Beware! These are Weapons of Mass Destruction",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "Agreed. Knowledge is Power, armed with this power, let’s decode and defuse the Derivatives time bomb. How much ever knowledgeable or expert we all might be in defusing the bombs, accidents could happen, and bombs could explode. ",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Short selling – a different ball game not everyone can play",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "Can you sell anything in this world without owning them or without having possession of them? What if I told you that it’s possible? Read on…",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Ignorance about PEDs could cost you a claim",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "Can one hide his/her minor ailment and get away with a health insurance claim just because he/she has paid hefty premiums year over year? Read on…",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Who is an NRI?",
//         date: "2025-06-27",
//         author: "RajV",
//         excerpt:
//           "Are you an NRI if you are touring the world for 180 days? Are you an NRI if you have gone to the U.S. on deputation? What if you are staying with your son and daughter abroad? Read on to know who you are according to Income Tax Act, 1961",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "All about NRE & NRO accounts",
//         date: "2025-06-27",
//         author: "RajV",
//         excerpt:
//           "As per the FEMA guidelines, an NRI cannot hold a savings account in India. If anyone continues to use his/her savings account in India, then he/she must pay hefty penalties. Read on to know more...",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "An insight into Exchange Traded Funds (ETFs)",
//         date: "2025-06-26",
//         author: "RajV",
//         excerpt:
//           "In just a single click, you can gain investment exposure into a group of stocks or even commodities through Exchange Traded Funds. Let’s get into the nitty gritty of the mini market tool",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "₹2.69 lakh crore bumper lottery",
//         date: "2025-06-27",
//         author: "RajV",
//         excerpt:
//           "Recently, RBI transferred ₹2.69 lakh crore (approximately) as surplus to the Central Government. But where did the money come from? Why are such transfers made? Let’s dive into the details…",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Should you buy home insurance or home-loan insurance?",
//         date: "2025-06-24",
//         author: "RajV",
//         excerpt:
//           "Both home insurance and home-loan insurance are not mandatory. However, both have several advantages for home buyers, if claims are made as per the terms and conditions of the policy",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "All about bond-laddering!",
//         date: "2025-06-24",
//         author: "RajV",
//         excerpt:
//           "Discover how the bond-laddering strategy could help you in gaining access to a regular/predictable income stream from bonds and how this could build a financial staircase for you to climb at the time of retirement",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Building a well-balanced bond portfolio",
//         date: "2025-06-17",
//         author: "RajV",
//         excerpt:
//           "It’s not a rocket science; still, building a well-balanced bond portfolio needs a careful step-by-step approach so as to avoid falling prey to financial mismanagement",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//     ],
//   },
//   {
//     category: "INFO-GRAPHICS",
//     articles: [
//       {
//         title: "Global Indicators That Impact Stock Price",
//         date: "2025-06-22",
//         author: "RajV",
//         excerpt: "A visual guide to the global factors affecting stock prices.",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//     ],
//   },
//   {
//     category: "BIZ BULLETIN",
//     articles: [
//       {
//         title: "Why is Jane Street in a jam?",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "Market buffs say there exists only a thin line between arbitrage and market manipulation and that the confusion has, forever, remained one of the grey areas in financial markets. SEBI’s action against Jane Street has once again stirred up the boundary dispute. Read on…",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Loan closure: No foreclosure charges from 2026",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "Taking a major leap, RBI bans banks and NBFCs from levying foreclosure charges for floating interest rate loans availed by individuals and MSEs, so as to enhance transparency and borrower flexibility",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Are bank lockers safe? What RBI says in its new rules?",
//         date: "2025-06-30",
//         author: "RajV",
//         excerpt:
//           "What would happen if a customer lost his valuables such as jewellery, silver ornaments and other property documents, which he has ‘safely’ kept inside a bank locker? ",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "Inside the financial vaults of RBI",
//         date: "2025-06-29",
//         author: "RajV",
//         excerpt:
//           "Recently, the Reserve Bank of India released its annual report 2024-25, announcing that the size of its balance sheet increased 8.20% compared to last year. ",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "RBI’s golden rules on collateral loans",
//         date: "2025-06-28",
//         author: "RajV",
//         excerpt:
//           "Not just gold, even silver can be a saviour during bad times. With RBI’s draft proposal on gold loans, silver jewellery, silver ornaments and specified silver coins would also be accepted as collateral for availing loans",
//         slug: "pondering-perils-pitfalls-portfolio",
//         link: "#",
//       },
//       {
//         title: "RBI softens blow that rattled AIFs/cage",
//         date: "2025-06-24",
//         author: "RajV",
//         excerpt:
//           "Reserve Bank of India has toned down its ‘December 2023’ stricter norms for investing in Alternative Investment Funds by Regulated Entities, lessening its original punch. ",
//         slug: "RBI-softens-blow-that-rattled-AIFs",
//         link: "#",
//       },
//     ],
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.5 },
//   }),
// };

// export default function BlogPage() {
//  const searchParams = useSearchParams();
//  const categoryParam = searchParams.get("category");
//  const [selectedCategory, setSelectedCategory] = useState(
//    categoryParam || "All Posts"
//  );

//   const categories = ["All Posts", ...blogData.map((s) => s.category)];

//   return (
//     <div className="relative w-full overflow-hidden bg-white text-black">
//       <div className="relative z-10">
//         <Header />

//         {/* Header section with background image */}
//         <section
//           className="w-full py-20"
//           style={{
//             backgroundImage: "url(/about/aboutbg.png)",
//             backgroundPosition: "center top",
//             backgroundSize: "cover",
//           }}
//         >
//           <h1 className="text-[rgb(247,247,247)] font-secondary xl:text-[3.5rem] text-[3rem] uppercase mb-1 text-center">
//             Blog
//           </h1>
//         </section>

//         {/* Category filter buttons */}
//         <div className="max-w-6xl mx-auto px-4 pt-8 flex flex-wrap gap-2 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 const query =
//                   category === "All Posts"
//                     ? ""
//                     : `?category=${encodeURIComponent(category)}`;
//                 window.history.pushState({}, "", `/blog${query}`);
//               }}
//               className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
//                 selectedCategory === category
//                   ? "bg-black text-white"
//                   : "bg-white text-black hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Blog Sections */}
//         <div className="bg-white">
//           {blogData
//             .filter(
//               (section) =>
//                 selectedCategory === "All Posts" ||
//                 section.category === selectedCategory
//             )
//             .map((section, sectionIdx) => {
//               const scrollerId = `scroller-${section.category.replace(
//                 /\s+/g,
//                 "-"
//               )}`;
//               return (
//                 <motion.section
//                   key={section.category}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className="py-6 relative"
//                 >
//                   <motion.div
//                     variants={fadeInUp}
//                     custom={sectionIdx}
//                     className="max-w-6xl mx-auto px-4 relative"
//                   >
//                     <motion.h2
//                       variants={fadeInUp}
//                       custom={sectionIdx + 0.5}
//                       className="text-2xl font-secondary text-[#FE667C] mb-4 border-l-4 border-[#FBAD00] pl-4"
//                     >
//                       {section.category}
//                     </motion.h2>

//                     {/* Left Scroll Button */}
//                     <motion.button
//                       whileTap={{ scale: 0.9 }}
//                       aria-label="Scroll Left"
//                       onClick={() => {
//                         const scroller = document.getElementById(scrollerId);
//                         scroller?.scrollBy({ left: -300, behavior: "smooth" });
//                       }}
//                       className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 border shadow w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
//                     >
//                       <Image
//                         src="/leftarrow.png"
//                         alt="Scroll Left"
//                         width={20}
//                         height={20}
//                       />
//                     </motion.button>

//                     {/* Article Scroller */}
//                     <div
//                       id={scrollerId}
//                       className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-12 scroll-smooth no-scrollbar"
//                     >
//                       {section.articles.map((article, idx) => (
//                         <motion.article
//                           key={article.slug}
//                           variants={fadeInUp}
//                           custom={idx}
//                           className="min-w-[260px] max-w-[260px] snap-start rounded-xl shadow p-5 bg-white hover:shadow-lg hover:-translate-y-1 transform transition duration-300 flex flex-col"
//                         >
//                           <h3 className="text-base font-dm font-semibold mb-1 text-[#2B3640] leading-tight">
//                             {article.title}
//                           </h3>
//                           <p className="text-xs text-gray-500 mb-1">
//                             {article.date} • {article.author}
//                           </p>
//                           <p className="text-sm text-gray-600 mb-3 flex-grow">
//                             {article.excerpt}
//                           </p>
//                           <Link
//                             href={`/blog/${article.slug}`}
//                             className="relative group"
//                           >
//                             <span className="absolute inset-0 bg-[#FF5A52] rotate-6 rounded-full z-0 w-32 transition-all group-hover:rotate-0"></span>
//                             <span className="relative inline-block bg-[#3B82F6] text-white px-4 py-1.5 rounded-full text-sm font-semibold z-10 group-hover:bg-[#2558b0] transition-all">
//                               READ MORE ➜
//                             </span>
//                           </Link>
//                         </motion.article>
//                       ))}
//                     </div>

//                     {/* Right Scroll Button */}
//                     <motion.button
//                       whileTap={{ scale: 0.9 }}
//                       aria-label="Scroll Right"
//                       onClick={() => {
//                         const scroller = document.getElementById(scrollerId);
//                         scroller?.scrollBy({ left: 300, behavior: "smooth" });
//                       }}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 border shadow w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
//                     >
//                       <Image
//                         src="/rightarrow.png"
//                         alt="Scroll Right"
//                         width={20}
//                         height={20}
//                       />
//                     </motion.button>
//                   </motion.div>
//                 </motion.section>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";

interface Article {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  link: string;
}

interface BlogSection {
  category: string;
  articles: Article[];
}

const blogData: BlogSection[] = [
  {
    category: "OPINION",
    articles: [
      {
        title: "Pondering the Perils & Pitfalls of a Portfolio",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "From Madrid & Lisbon to Chennai, two catastrophic episodes and their domino effect force us to rethink our investing habits",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Why gaga over 100 days?",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "From Franklin Roosevelt to Donald Trump, the 100 days of Presidency bit off more than they could chew.",
        slug: "why-gaga-over-100-days",
        link: "#",
      },
    ],
  },
  // Add other sections...
  {
    category: "GET THE BASICS RIGHT",
    articles: [
      {
        title: "What is India VIX?",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "What if there is a devil/divine device that captures the collective mood of the market and measures the pulse of all traders in one shot! What if there is one magical number that senses the collective anxiety/fear of every trader or every investor in the securities market. Read on…",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title:
          "Futures and Options: Beware! These are Weapons of Mass Destruction",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "Agreed. Knowledge is Power, armed with this power, let’s decode and defuse the Derivatives time bomb. How much ever knowledgeable or expert we all might be in defusing the bombs, accidents could happen, and bombs could explode. ",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Short selling – a different ball game not everyone can play",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "Can you sell anything in this world without owning them or without having possession of them? What if I told you that it’s possible? Read on…",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Ignorance about PEDs could cost you a claim",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "Can one hide his/her minor ailment and get away with a health insurance claim just because he/she has paid hefty premiums year over year? Read on…",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Who is an NRI?",
        date: "2025-06-27",
        author: "RajV",
        excerpt:
          "Are you an NRI if you are touring the world for 180 days? Are you an NRI if you have gone to the U.S. on deputation? What if you are staying with your son and daughter abroad? Read on to know who you are according to Income Tax Act, 1961",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "All about NRE & NRO accounts",
        date: "2025-06-27",
        author: "RajV",
        excerpt:
          "As per the FEMA guidelines, an NRI cannot hold a savings account in India. If anyone continues to use his/her savings account in India, then he/she must pay hefty penalties. Read on to know more...",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "An insight into Exchange Traded Funds (ETFs)",
        date: "2025-06-26",
        author: "RajV",
        excerpt:
          "In just a single click, you can gain investment exposure into a group of stocks or even commodities through Exchange Traded Funds. Let’s get into the nitty gritty of the mini market tool",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "₹2.69 lakh crore bumper lottery",
        date: "2025-06-27",
        author: "RajV",
        excerpt:
          "Recently, RBI transferred ₹2.69 lakh crore (approximately) as surplus to the Central Government. But where did the money come from? Why are such transfers made? Let’s dive into the details…",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Should you buy home insurance or home-loan insurance?",
        date: "2025-06-24",
        author: "RajV",
        excerpt:
          "Both home insurance and home-loan insurance are not mandatory. However, both have several advantages for home buyers, if claims are made as per the terms and conditions of the policy",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "All about bond-laddering!",
        date: "2025-06-24",
        author: "RajV",
        excerpt:
          "Discover how the bond-laddering strategy could help you in gaining access to a regular/predictable income stream from bonds and how this could build a financial staircase for you to climb at the time of retirement",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Building a well-balanced bond portfolio",
        date: "2025-06-17",
        author: "RajV",
        excerpt:
          "It’s not a rocket science; still, building a well-balanced bond portfolio needs a careful step-by-step approach so as to avoid falling prey to financial mismanagement",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
    ],
  },
  {
    category: "INFO-GRAPHICS",
    articles: [
      {
        title: "Global Indicators That Impact Stock Price",
        date: "2025-06-22",
        author: "RajV",
        excerpt: "A visual guide to the global factors affecting stock prices.",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
    ],
  },
  {
    category: "BIZ BULLETIN",
    articles: [
      {
        title: "Why is Jane Street in a jam?",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "Market buffs say there exists only a thin line between arbitrage and market manipulation and that the confusion has, forever, remained one of the grey areas in financial markets. SEBI’s action against Jane Street has once again stirred up the boundary dispute. Read on…",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Loan closure: No foreclosure charges from 2026",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "Taking a major leap, RBI bans banks and NBFCs from levying foreclosure charges for floating interest rate loans availed by individuals and MSEs, so as to enhance transparency and borrower flexibility",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Are bank lockers safe? What RBI says in its new rules?",
        date: "2025-06-30",
        author: "RajV",
        excerpt:
          "What would happen if a customer lost his valuables such as jewellery, silver ornaments and other property documents, which he has ‘safely’ kept inside a bank locker? ",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "Inside the financial vaults of RBI",
        date: "2025-06-29",
        author: "RajV",
        excerpt:
          "Recently, the Reserve Bank of India released its annual report 2024-25, announcing that the size of its balance sheet increased 8.20% compared to last year. ",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "RBI’s golden rules on collateral loans",
        date: "2025-06-28",
        author: "RajV",
        excerpt:
          "Not just gold, even silver can be a saviour during bad times. With RBI’s draft proposal on gold loans, silver jewellery, silver ornaments and specified silver coins would also be accepted as collateral for availing loans",
        slug: "pondering-perils-pitfalls-portfolio",
        link: "#",
      },
      {
        title: "RBI softens blow that rattled AIFs/cage",
        date: "2025-06-24",
        author: "RajV",
        excerpt:
          "Reserve Bank of India has toned down its ‘December 2023’ stricter norms for investing in Alternative Investment Funds by Regulated Entities, lessening its original punch. ",
        slug: "RBI-softens-blow-that-rattled-AIFs",
        link: "#",
      },
    ],
  },
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  useEffect(() => {
    const categoryParam = searchParams?.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = ["All Posts", ...blogData.map((s) => s.category)];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const query =
      category === "All Posts"
        ? ""
        : `?category=${encodeURIComponent(category)}`;
    window.history.pushState({}, "", `/blog${query}`);
  };

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Banner */}
      <section
        className="w-full py-20 text-center"
        style={{
          backgroundImage: "url(/about/aboutbg.png)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white text-5xl xl:text-6xl font-secondary uppercase">
          Blog
        </h1>
      </section>

      {/* Category Filter */}
      <nav className="max-w-6xl mx-auto px-4 pt-8 flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-xl font-secondary border ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Blog Sections */}
      {blogData
        .filter(
          (section) =>
            selectedCategory === "All Posts" ||
            section.category.toUpperCase() === selectedCategory.toUpperCase()
        )
        .map((section) => (
          <section
            key={section.category}
            className="py-10 px-4 max-w-6xl mx-auto"
          >
            <Link
              href={`?category=${encodeURIComponent(section.category)}`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(section.category);
              }}
              className="text-4xl font-secondary text-[#FE667C] mb-6 border-l-4 border-[#FBAD00] pl-4 block hover:text-blue-600 transition-colors duration-200"
            >
              {section.category}
            </Link>

            <div className="space-y-6">
              {section.articles.map((article, idx) => (
                <article
                  key={`${article.slug}-${idx}`}
                  className="border rounded-xl p-6 shadow-sm hover:shadow transition bg-white"
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xl font-semibold text-[#2B3640] hover:text-blue-600 transition-colors duration-200 block mb-2"
                  >
                    {article.title}
                  </Link>

                  <p className="text-sm text-gray-500 mb-2">
                    {article.date} • {article.author}
                  </p>
                  <p className="text-base text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-block text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}