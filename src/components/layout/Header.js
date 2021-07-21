import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        TANMU
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Projects
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact Us
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
