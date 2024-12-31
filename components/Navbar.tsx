'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur-md z-50 flexBetween max-container padding-container py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <Image
            src={isOpen ? '/close.svg' : '/menu.svg'}
            alt={isOpen ? 'close' : 'menu'}
            width={32}
            height={32}
            className="inline-block cursor-pointer filter invert"
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-0 w-full bg-neutral-900/60 backdrop-blur-md p-4 rounded-xl md:w-auto overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white flexCenter cursor-pointer transition-all hover:font-bold"
              onClick={() => setIsOpen(false)} // Close menu after clicking a link
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="mt-4 flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
