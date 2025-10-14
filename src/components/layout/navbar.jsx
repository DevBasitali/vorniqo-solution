// src/components/layout/navbar.jsx
import React from 'react';
import Link from 'next/link';

function Navbar() {
  const NAV_WIDTH = 1120; // fixed width
  const NAV_HEIGHT = 72;

  // Shapes
const navClipPath =
  'path("M 0 0 L 1120 0 L 1120 54 Q 1117 58 1114 60 L 1086 72 L 34 72 L 6 60 Q 3 58 0 54 Z")';
  const hexClipPath =
    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  // Colors
  const NAV_BG = '#09183E';
  const CYAN = '#00FFCC';
  const TEXT_SOFT = '#E6EDF7';
  const CONTACT_START = '#00C2FF';
  const CONTACT_END = '#01F1D6';
  const GET_START = '#01FFFF';
  const GET_END = '#00C2FF';

  return (
    <header className="relative flex justify-center py-10 select-none">
      <div className="relative" style={{ width: NAV_WIDTH }}>
        {/* Centered HEXAGON OVERLAY (not clipped by the bar) */}
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <div
            className="relative"
            style={{
              width: 100,
              height: 115.47,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.45))',
            }}
          >
            {/* Outer hex = border */}
            <div
              className="absolute inset-0"
              style={{ background: CYAN, clipPath: hexClipPath, borderRadius: 2 }}
            />
            {/* Inner hex = fill */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                top: 2,
                right: 2,
                bottom: 2,
                left: 2,
                background: NAV_BG,
                clipPath: hexClipPath,
                borderRadius: 2,
              }}
            >
              {/* Use a public path here */}
              <img
                src="/Images/logo.png"  // public/Images/logo.png
                alt="Logo"
                className="max-w-[70%] max-h-[70%] object-contain"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* NAV BAR */}
        <div
          className="relative"
          style={{
            height: NAV_HEIGHT,
            backgroundColor: NAV_BG,
            clipPath: navClipPath,
            boxShadow: 'inset 0 0 0 1px rgba(0, 255, 204, 0.35)',
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.25))',
          }}
        >
          <div className="relative z-10 flex h-full items-center justify-between px-8">
            {/* Left links */}
            <nav>
              <ul
                className="flex items-center gap-10 text-[14px] font-medium"
                style={{ color: TEXT_SOFT }}
              >
                <li><Link href="#home" className="transition-colors hover:text-[#01FFFF]">Home</Link></li>
                <li><Link href="#services" className="transition-colors hover:text-[#01FFFF]">Services</Link></li>
                <li><Link href="#about-us" className="transition-colors hover:text-[#01FFFF]">About Us</Link></li>
              </ul>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <Link
                href="#why-us"
                className="text-[14px] font-medium transition-colors hover:text-[#01FFFF]"
                style={{ color: TEXT_SOFT }}
              >
                Why Us
              </Link>

              {/* Contact Us */}
              <button
                type="button"
                className="group grade relative h-9 rounded-full px-3 text-sm font-semibold text-[#061A36] transition-all hover:brightness-[1.06] bg-gradient-to-r from-[#00C2FF] to-[#01F1D6]"
                style={{
              
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)',
                }}
              >
                <span className="align-middle">Contact Us</span>
                <span
                  className="ml-3 inline-flex h-6 w-6 items-center justify-center transition-all"
                  
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="black" strokeWidth="3" />
                  </svg>
                </span>
              </button>

              {/* Get Started */}
              <button
                type="button"
                className="relative h-10 rounded-full px-6 text-sm font-semibold transition-all hover:brightness-[1.06]"
                style={{ color: '#051426', backgroundImage: `linear-gradient(90deg, ${GET_START}, ${GET_END})` }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;