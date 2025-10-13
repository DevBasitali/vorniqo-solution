import React from 'react';
import Link from 'next/link';

function navbar() {
  return (
    <header className="bg-black">
      {/* ... your logo */}
      <nav className="hidden md:flex items-center gap-8 text-gray-300">
        <Link href="/#home" className="hover:text-white transition-colors">Home</Link>
        <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
        {/* The design has "About Us" but the section is "Why Us". Match the ID. */}
        <Link href="/#why-us" className="hover:text-white transition-colors">About Us</Link>
        <Link href="/#why-us" className="hover:text-white transition-colors">Why Us</Link>
      </nav>
      {/* ... your buttons */}
    </header>
  );
}

export default navbar;
