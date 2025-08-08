"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavLink {
  name: string;
  url: string;
  new?: boolean;
}

interface HeaderProps {
  links: NavLink[];
  isNotFocused?: boolean;
}

const HeaderLinks: React.FC<HeaderProps> = ({
  links,
  isNotFocused = false,
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pathName = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openBlogDropdown, setOpenBlogDropdown] = useState(false);
  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        blogDropdownRef.current &&
        !blogDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenBlogDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkHover = (url: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setHoveredLink(url);

    // Navigate after a very short delay (Tesla-like instant feel)
    hoverTimeoutRef.current = setTimeout(() => {
      if (url !== pathName) {
        router.push(url);
      }
    }, 150); // Very fast navigation
  };

  const handleLinkLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredLink(null);
  };

  // Updated categories to exactly match your blogData
  const blogCategories = [
    { label: "All Posts", url: "/blog", category: "All POSTS" },
    { label: "Opinion", url: "/blog?category=OPINION", category: "OPINION" },
    {
      label: "Get the Basics Right",
      url: "/blog?category=GET%20THE%20BASICS%20RIGHT",
      category: "GET THE BASICS RIGHT",
    },
    {
      label: "Info-Graphics",
      url: "/blog?category=INFO-GRAPHICS",
      category: "INFO-GRAPHICS",
    },
    {
      label: "Biz Bulletin",
      url: "/blog?category=BIZ%20BULLETIN",
      category: "BIZ BULLETIN",
    },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center leading-[0rem] h-[3.5rem] relative">
      {links.map((link) => (
        <li
          key={link.url}
          className={`px-4 py-4 h-full relative flex items-center group transition-all duration-200 ${
            pathName === link.url && link.url !== "/" && !isNotFocused
              ? "bg-[#fe667c] text-white z-50"
              : hoveredLink === link.url
              ? "bg-[#fe667c]/10 text-[#fe667c]"
              : "hover:bg-[#fe667c]/5"
          }`}
          onMouseEnter={() => handleLinkHover(link.url)}
          onMouseLeave={handleLinkLeave}
        >
          {link.name === "Blog" ? (
            <div className="relative" ref={blogDropdownRef}>
              <button
                onClick={() => setOpenBlogDropdown(!openBlogDropdown)}
                className={`block py-2 px-4 rounded cursor-pointer lg:bg-transparent lg:p-0 transition-colors duration-200 ${
                  pathName === link.url && !isNotFocused
                    ? "text-white"
                    : hoveredLink === link.url
                    ? "text-[#fe667c]"
                    : "text-[#202020] hover:text-[#fe667c]"
                } text-[14px] z-10 relative font-medium`}
                aria-expanded={openBlogDropdown}
                aria-haspopup="true"
              >
                Blog
              </button>
              {isHydrated && openBlogDropdown && (
                <div className="absolute left-0 top-full mt-1 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl min-w-max backdrop-blur-sm">
                    <ul className="py-2 text-sm text-gray-700">
                      {blogCategories.map((item) => (
                        <li key={item.url}>
                          <Link
                            href={item.url}
                            className="block px-4 py-2 hover:bg-[#fe667c]/10 hover:text-[#fe667c] transition-colors duration-150"
                            onClick={() => setOpenBlogDropdown(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={link.url}
              target={link.new ? "_blank" : "_self"}
              rel={link.new ? "noopener noreferrer" : undefined}
              className={`block py-2 px-4 rounded cursor-pointer lg:bg-transparent lg:p-0 transition-all duration-200 ${
                link.name.toUpperCase() === "OPEN ACCOUNT"
                  ? "bg-[#0023ff] hover:bg-[#0023ff]/90 rounded-full text-[12px] px-3 py-3 font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                  : link.name.toUpperCase() === "LOGIN"
                  ? "bg-[#2b3640] hover:bg-[#2b3640]/90 rounded-full text-[12px] px-3 py-3 font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                  : `block py-2 px-4 rounded lg:bg-transparent lg:p-0 ${
                      pathName === link.url && link.url !== "/" && !isNotFocused
                        ? "text-white"
                        : hoveredLink === link.url
                        ? "text-[#fe667c]"
                        : "text-[#202020] hover:text-[#fe667c]"
                    } text-[14px] z-10 font-medium`
              }`}
            >
              {link.name}
            </Link>
          )}

          {pathName === link.url && link.url !== "/" && !isNotFocused && (
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#fe667c] rotate-45 animate-in slide-in-from-bottom-1 duration-200"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

const PopUpLinks = () => {
  const popups = [
    { name: "Disclaimer", url: "/disclaimer" },
    { name: "Refund Cancellation", url: "/refundcancellation" },
    { name: "Terms and Conditions", url: "/termsconditions" },
    { name: "Bond Details", url: "/bonddetails" },
  ];

  return (
    <>
      {popups.map((item) => (
        <Link
          href={item.url}
          key={item.url}
          className="text-[13px] text-black2 hover:text-[#fe667c] hover:font-semibold block transition-all duration-150"
        >
          <div className="hover:bg-[#fe667c]/10 px-4 py-[0.7rem] rounded-md transition-colors duration-150">
            {item.name}
          </div>
        </Link>
      ))}
    </>
  );
};

const Header: React.FC<{ data?: string }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openMobilePopUp, setOpenMobilePopUp] = useState(false);
  const pathName = usePathname();
  const popUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target as Node)
      ) {
        setOpenPopUp(false);
      }
    }

    if (openPopUp) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openPopUp]);

  const newPages = [
    "/disclaimer",
    "/refundcancellation",
    "/termsconditions",
    "/bonddetails",
  ];

  const mainLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Investor Support", url: "/resources" },
    { name: "Contact Us", url: "/contact" },
    { name: "Privacy Policy", url: "/privacypolicy" },
    { name: "Blog", url: "/blog" },
  ];

  const actionLinks = [
    { name: "OPEN ACCOUNT", url: "/demataccount" },
    {
      name: "LOGIN",
      new: true,
      url: "https://trade.aionioncapital.com",
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-100 shadow-sm">
      <nav
        className={`${
          props?.data === "home" ? "bg-[#D1B09D]/95" : "bg-white/95"
        } px-4 lg:px-6 transition-all duration-300`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-12">
          <Link href="/" className="flex items-center group" title="Go to Home">
            <Image
              className="mr-3 h-6 sm:h-9 transition-transform duration-200 group-hover:scale-105"
              src="/footericon/logo.svg"
              alt="Aionion Capital Home Logo"
              width={180}
              height={38}
              priority
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="block xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon className="text-black2" fontSize="large" />
            ) : (
              <MenuIcon className="text-black2" fontSize="large" />
            )}
          </button>

          {/* Desktop right-side actions */}
          <div className="hidden xl:flex items-center lg:order-2 space-x-4">
            {actionLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target={link.new ? "_blank" : "_self"}
                rel={link.new ? "noopener noreferrer" : undefined}
                className={`${
                  link.name.toUpperCase() === "OPEN ACCOUNT"
                    ? "bg-[#0023ff] hover:bg-[#0023ff] rounded-full text-[12px] px-4 py-1 font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    : link.name.toUpperCase() === "LOGIN"
                    ? "bg-[#2b3640] hover:bg-[#2b3640]/90 rounded-full text-[12px] px-4 py-1 font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full z-[80] shadow-[10px_0_20px_rgba(0,0,0,0.3)] w-64 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } xl:hidden`}
          >
            <button
              className="absolute z-[82] top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
              title="Close menu"
            >
              <CloseIcon className="text-black" fontSize="medium" />
            </button>
            <div className="bg-white/95 backdrop-blur-md px-5 py-5">
              <ul>
                {mainLinks.map((link) => (
                  <li className="text-black mt-2 p-1 text-left" key={link.url}>
                    {link.name === "Blog" ? (
                      <div>
                        <button
                          onClick={() => setOpenMobilePopUp(!openMobilePopUp)}
                          className="text-left hover:text-[#fe667c] transition-colors duration-150"
                        >
                          Blog
                        </button>
                        {openMobilePopUp && (
                          <div className="ml-4 mt-1 space-y-1">
                            {[
                              { label: "All Posts", url: "/blog" },
                              {
                                label: "Opinion",
                                url: "/blog?category=OPINION",
                              },
                              {
                                label: "Get the Basics Right",
                                url: "/blog?category=GET%20THE%20BASICS%20RIGHT",
                              },
                              {
                                label: "Info-Graphics",
                                url: "/blog?category=INFO-GRAPHICS",
                              },
                              {
                                label: "Biz Bulletin",
                                url: "/blog?category=BIZ%20BULLETIN",
                              },
                            ].map((item) => (
                              <div key={item.url} className="py-1">
                                <Link
                                  href={item.url}
                                  onClick={() => setIsOpen(false)}
                                  className="hover:text-[#fe667c] transition-colors duration-150"
                                >
                                  {item.label}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#fe667c] transition-colors duration-150"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div>
                <button
                  className="text-black p-1 mt-2 cursor-pointer text-left hover:text-[#fe667c] transition-colors duration-150"
                  onClick={() => setOpenMobilePopUp(!openMobilePopUp)}
                >
                  More
                </button>
                {openMobilePopUp && (
                  <div className="ml-4">
                    <PopUpLinks />
                  </div>
                )}
              </div>

              <ul>
                {actionLinks.map((link) => (
                  <li className="text-black p-1 mt-2 text-left" key={link.url}>
                    <Link
                      href={link.url}
                      className="capitalize hover:text-[#fe667c] transition-colors duration-150"
                      target={link.new ? "_blank" : "_self"}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop navigation links and "More" dropdown */}
          <div className="hidden xl:flex h-6 items-center space-x-8 lg:order-1">
            <HeaderLinks links={mainLinks} />
            <div className="relative inline-block">
              <div
                className={`px-4 py-4 h-full relative flex items-center transition-all duration-200 ${
                  newPages.includes(pathName) || openPopUp
                    ? "bg-[#fe667c] text-white z-50"
                    : "hover:bg-[#fe667c]/10"
                }`}
              >
                <button
                  onClick={() => setOpenPopUp(!openPopUp)}
                  className={`block py-2 px-4 rounded cursor-pointer lg:bg-transparent lg:p-0 transition-colors duration-200 ${
                    newPages.includes(pathName) || openPopUp
                      ? "text-white"
                      : "text-black hover:text-[#fe667c]"
                  } text-[14px] z-10 font-medium`}
                >
                  More
                </button>
              </div>
              {(newPages.includes(pathName) || openPopUp) && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#fe667c] rotate-45 animate-in slide-in-from-bottom-1 duration-200"></span>
              )}
              {openPopUp && (
                <div
                  ref={popUpRef}
                  className="absolute top-full left-0 mt-[0.20rem] w-[250px] bg-white/95 backdrop-blur-md border border-gray-200 z-30 rounded-lg shadow-xl animate-in slide-in-from-top-2 duration-200"
                >
                  <PopUpLinks />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
