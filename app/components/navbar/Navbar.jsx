'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/assests/logo-23.png'
import navItems from '../../contents/navItem.js'

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isFixed, setIsFixed] = useState(false);


  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const headerStyle = {
    position: isFixed ? 'fixed' : 'fixed',
    top: isFixed ? '0px' : '40px',
    transition:"0.1s",
    left: 0,
    width: '100%',
    color: '#fff',
    backdropFilter: isFixed ? 'blur(12px)' : 'none',
    zIndex: isFixed ? 100 : 'auto', 

  };


  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <div id="mainHeader" style={headerStyle} className="mx-auto  flex w-full max-w-screen-2xl justify-around px-1 py-1 text-sm header__middle">
      <section className=" items-center gap-8">
        <div>
        <Link href='/'>  <Image
            src={logo}
            alt="logo"
            width={300}
            height={80}
            priority={true}
            className="logo"
          /></Link>
        </div>
      </section>
      <section className="flex items-center gap-10">
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      <div id="mainNav" className="flex items-center gap-4 transition-all">
        {navItems.map((d, i) => (
          <div
            key={i}
            className="relative group px-2 py-3"
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={d.link}>
            <p className="flex cursor-pointer tracking-wider font-semibold text-sm items-center gap-2 text-slate-300 group-hover:text-white">
              <span>{d.label}</span>
              {d.children && (
                <span className="rotate-180  items-center  justify-center text-xs hidden">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              )}
            </p>
            </Link>
            {d.children && hoveredItem === i && (
              <div id="navItem" className="absolute right-0 bg-slate font-semibold top-10 w-auto flex-col gap-1 py-3 transition-all">
                {d.children.map((ch, j) => (
                  <Link
                    key={j}
                    href={ch.link ?? "#"}
                    className="flex cursor-pointer font-semibold text-sm items-center py-3 pl-4 pr-8 text-neutral-300 hover:text-white"
                  >
                    <span className="whitespace-nowrap pl-3">{ch.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      <span onClick={openSideMenu} className="cursor-pointer text-white text-4xl md:hidden"><FontAwesomeIcon icon={faBars} /></span>
    </div>
  );
}





function MobileNav({ closeSideMenu }) {
  return (
    <div id="mobileNav" className="fixed left-0 top-0 flex h-full  min-h-screen w-full border-dashed justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end text-black">
          <button onClick={closeSideMenu} className="cursor-pointer text-4xl">&times;</button>
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
     
      </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <a
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{d.label}</span>
        {d.children && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`h-4 w-4 transition-all ${isItemOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            />
          </svg>
        )}
      </p>

      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <a
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </a>
          ))}
        </div>
      )}
    </a>
  );
}
