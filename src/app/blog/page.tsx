

"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <main className="bg-gradient-to-br from-gray-50 to-white text-black">
      <Header />

      {/* Enhanced Banner */}
      <section
        className="w-full py-16 text-center relative overflow-hidden"
        style={{
          backgroundImage: "url(/about/aboutbg.png)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-white text-5xl xl:text-6xl font-secondary uppercase mb-2 drop-shadow-lg">
            Blog
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto px-4">
            Expert insights on markets, investments, and financial strategies
          </p>
        </div>
      </section>

      {/* Enhanced Category Filter */}
      <nav className="max-w-6xl mx-auto px-4 pt-6 pb-4 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-lg font-secondary border-2 transition-all duration-200 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-[#FE667C] text-white border-[#FE667C] shadow-lg"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-[#FE667C]/50"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Enhanced Blog Sections */}
      {blogData
        .filter(
          (section) =>
            selectedCategory === "All Posts" ||
            section.category.toUpperCase() === selectedCategory.toUpperCase()
        )
        .map((section) => (
          <section
            key={section.category}
            className="py-8 px-4 max-w-6xl mx-auto"
          >
            <Link
              href={`?category=${encodeURIComponent(section.category)}`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(section.category);
              }}
              className="text-3xl font-secondary text-[#FE667C] mb-6 border-l-4 border-[#FC9A1C] pl-4 block hover:text-[#0023FF] transition-colors duration-200 flex items-center gap-3"
            >
              {section.category}
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#FE667C] to-[#FC9A1C] rounded-full"></div>
            </Link>

            <div className="space-y-4">
              {section.articles.map((article, idx) => (
                <article
                  key={`${article.slug}-${idx}`}
                  className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-[#FE667C]/30 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-xl font-semibold text-[#2B3640] hover:text-[#FE667C] transition-colors duration-200 block mb-2 group-hover:text-[#FE667C]"
                      >
                        {article.title}
                      </Link>

                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="font-medium text-[#FE667C] flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {article.author}
                        </span>
                      </div>
                      
                      <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-[#FE667C] font-semibold hover:text-[#0023FF] transition-colors duration-200 group-hover:gap-3"
                      >
                        Read More
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#FE667C]/10 to-[#FC9A1C]/10 text-[#FE667C] text-xs font-medium rounded-full border border-[#FE667C]/20">
                        {section.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}