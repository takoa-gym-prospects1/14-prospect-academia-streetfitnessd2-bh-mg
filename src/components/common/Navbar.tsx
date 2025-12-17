import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes, FaDumbbell, FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { Content } from '../../content/Content';

import {
    Header, TopBarWrapper, TopBar, TopBarContent, ContactInfo, SocialInfo, SocialIcons,
    NavbarMainWrapper, NavbarContainer, NavbarLogoSkew, LogoContainer, BrandNameWrapper,
    NavbarBrandText, IconWrapper, LogoSubtitle, NavSpacer, DesktopNav, NavLink,
    NavActions, SkewBtnWrapper, MobileToggle, MobileMenu, MobileNavList
} from './Navbar.styles';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { logo, links, actions } = Content.navbar;
    const { contact } = Content;

    const whatsappLink = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(actions.joinMessage)}`;

    const visibleLinks = links.filter((link: any) => {
        if (!link.sectionKey) return true;
        const section = (Content as any)[link.sectionKey];
        return section ? section.enabled : true;
    });

    return (
        <Header
            $isScrolled={isScrolled}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                visibility: 'visible',
                opacity: 1,
                display: 'block'
            }}
        >
            <TopBarWrapper>
                <div className="container">
                    <TopBar>
                        <TopBarContent>
                            <ContactInfo>
                                <FaMapMarkerAlt />
                                <a href={contact.mapsLink} target="_blank" rel="noopener noreferrer">
                                    {contact.address}
                                </a>
                            </ContactInfo>
                            <SocialInfo>
                                <span>Siga-nos:</span>
                                <SocialIcons>
                                    <a href={Content.footer.socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                    <a href={Content.footer.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    <a href={Content.footer.socials.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                </SocialIcons>
                            </SocialInfo>
                        </TopBarContent>
                    </TopBar>
                </div>
            </TopBarWrapper>

            <NavbarMainWrapper>
                <NavbarLogoSkew>
                    <LogoContainer>
                        <IconWrapper href="#home">
                            {logo.img ? (
                                <img src={logo.img} alt="Logo" />
                            ) : (
                                <FaDumbbell />
                            )}
                        </IconWrapper>
                        <BrandNameWrapper>
                            <NavbarBrandText>
                                {logo.text}<span>{logo.highlight}</span>
                            </NavbarBrandText>
                            <LogoSubtitle>ACADEMIA</LogoSubtitle>
                        </BrandNameWrapper>
                    </LogoContainer>
                </NavbarLogoSkew>

                <div className="container">
                    <NavbarContainer>
                        <NavSpacer />

                        <DesktopNav>
                            {visibleLinks.map((link) => (
                                <NavLink key={link.name} href={link.href}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </DesktopNav>

                        <NavActions>
                            <SkewBtnWrapper $white>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{actions.joinText} <FaWhatsapp /></a>
                            </SkewBtnWrapper>
                        </NavActions>
                    </NavbarContainer>
                </div>

                {/* MobileToggle movido para fora do .container para posicionamento absoluto correto */}
                <MobileToggle onClick={() => {
                    console.log('Menu toggle clicked, current state:', mobileMenuOpen);
                    setMobileMenuOpen(!mobileMenuOpen);
                }}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </MobileToggle>
            </NavbarMainWrapper>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            /* Debug inline styles */
                            position: 'fixed',
                            top: '60px',
                            left: 0,
                            right: 0,
                            zIndex: 9998,
                            backgroundColor: '#141414',
                            minHeight: '200px'
                        }}
                    >
                        <MobileNavList>
                            {visibleLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li style={{ marginTop: '20px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '10px',
                                        color: '#25D366' /* WhatsApp Green */
                                    }}
                                >
                                    <FaWhatsapp />
                                    {actions.joinText}
                                </a>
                            </li>
                        </MobileNavList>
                    </MobileMenu>
                )}
            </AnimatePresence>
        </Header>
    );
};

export default Navbar;
