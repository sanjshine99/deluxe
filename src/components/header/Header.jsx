import React, { useState } from 'react';
import './Header.css'; 
import '../../App.css';
import logo from '../../assets/Logo.png'

const Header = () => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const handleMenuHover = (menu) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [menu]: true,
    }));
  };

  const handleMenuLeave = (menu) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [menu]: false,
    }));
  };

  return (
    <header className="header">
  <div className="header-logo"><img src={logo} alt="" height={50}/></div>
  <nav className="header-nav">
    <div className="header-menu" onMouseEnter={() => handleMenuHover('ourRange')} onMouseLeave={() => handleMenuLeave('ourRange')}>
      Our Range
    </div>
    <div className="header-menu" onMouseEnter={() => handleMenuHover('Resources')} onMouseLeave={() => handleMenuLeave('Resources')}>
      Resources
    </div>
    <div className="header-menu" onMouseEnter={() => handleMenuHover('Discover')} onMouseLeave={() => handleMenuLeave('Discover')}>
    Discover
    </div>
    <div className="header-menu">Contact</div>
  </nav>

  {expandedMenus['ourRange'] && (
    <div className={`sub-menu ${expandedMenus['ourRange'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('ourRange')} onMouseLeave={() => handleMenuLeave('ourRange')}>
      <div>Product 1</div>
      <div>Product 2</div>
      <div>Product 3</div>
    </div>
  )}

  {expandedMenus['Resources'] && (
    <div className={`sub-menu ${expandedMenus['Resources'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('Resources')} onMouseLeave={() => handleMenuLeave('Resources')}>
      <div>About us</div>
      <div>Blog</div>
      <div>Warranty Policy</div>
    </div>
  )}

   {expandedMenus['Discover'] && (
    <div className={`sub-menu ${expandedMenus['Discover'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('Discover')} onMouseLeave={() => handleMenuLeave('Discover')}>
      <div>social 1</div>
      <div>social 2</div>
      <div>social 3</div>
      <div>social 4</div>
      <div>social 5</div>
      <div>social 6</div>
    </div>
  )}
</header>

  );
  
};

export default Header;
