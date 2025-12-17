import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import { Content } from '../../content/Content';

import {
    Section, FooterTop, FooterBottom, Container, Row, Col, Widget,
    Logo, AboutText, WidgetTitle, Links, Social, Copyright, ContactInfo
} from './Footer.styles';


const Footer: React.FC = () => {
    // Use 'as any' to avoid TS errors until interfaces are updated globally
    const { logo, description, hours, socials, copyright, developerName, developerUrl } = Content.footer;
    const { contact } = Content;

    return (
        <Section id="footer">
            <FooterTop>
                <Container>
                    <Row>
                        {/* ... (Columns 1 and 2 unchanged) ... */}

                        {/* Column 1: About */}
                        <Col>
                            <Widget>
                                <Logo>
                                    <h2>
                                        {logo.text}<span>{logo.highlight}</span>
                                    </h2>
                                </Logo>
                                <AboutText>{description}</AboutText>
                            </Widget>
                        </Col>

                        {/* Column 2: Quick Links */}
                        <Col>
                            <Widget>
                                <WidgetTitle>Links Rápidos</WidgetTitle>
                                <Links>
                                    {Content.navbar.links.slice(0, 5).map((link: any, i: number) => (
                                        <li key={i}><a href={link.href}>{link.name}</a></li>
                                    ))}
                                    <li><a href="#">Privacidade</a></li>
                                    <li><a href="#">Termos</a></li>
                                </Links>
                            </Widget>
                        </Col>

                        {/* Column 3: Contact & Hours */}
                        <Col>
                            <Widget>
                                <WidgetTitle>Contato</WidgetTitle>
                                <ContactInfo>
                                    <li>
                                        <FaMapMarkerAlt />
                                        <a href={contact.mapsLink} target="_blank" rel="noopener noreferrer">
                                            {contact.address}
                                        </a>
                                    </li>
                                    <li>
                                        <FaPhoneAlt />
                                        <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
                                            {contact.phone}
                                        </a>
                                    </li>
                                    <li>
                                        <FaWhatsapp style={{ color: '#25D366', fontSize: '20px' }} /> {/* WhatsApp Green */}
                                        <a
                                            href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.whatsapp}
                                        </a>
                                    </li>
                                </ContactInfo>

                                <WidgetTitle style={{ fontSize: '16px', marginTop: '20px', marginBottom: '15px' }}>Horários</WidgetTitle>
                                <ContactInfo>
                                    {hours.map((h: string, i: number) => (
                                        <li key={i} style={{ marginBottom: '5px' }}>
                                            <p style={{ fontSize: '16px', color: '#888' }}>{h}</p>
                                        </li>
                                    ))}
                                </ContactInfo>
                            </Widget>
                        </Col>

                        {/* Column 4: Socials Only */}
                        <Col>
                            <Widget>
                                <WidgetTitle>Redes Sociais</WidgetTitle>
                                <Social style={{ justifyContent: 'flex-start' }}>
                                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    <a href={socials.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                </Social>
                            </Widget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>

            <FooterBottom>
                <Container>
                    <Row style={{ justifyContent: 'center' }}>
                        <Copyright>
                            {copyright} Desenvolvido por <a href={developerUrl} target="_blank" rel="noopener noreferrer">{developerName}</a>
                        </Copyright>
                    </Row>
                </Container>
            </FooterBottom>
        </Section>
    );
};

export default Footer;
