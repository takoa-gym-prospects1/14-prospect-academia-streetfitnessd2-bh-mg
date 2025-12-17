import React from 'react';

import { Content } from '../../content/Content';
import {
    Section, Overlay, ContentWrapper,
    HeroTitle, HeroSubtitle, MicroTextWrapper, HeroButton
} from './Hero.styles';

const Hero: React.FC = () => {
    const { backgroundImage, mobileBackgroundImage, title, buttonText, subtitle, microText } = Content.hero;

    return (
        <Section $bgImage={backgroundImage} $mobileBgImage={mobileBackgroundImage} id="home">
            <Overlay />


            <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ContentWrapper>
                    <HeroTitle
                        initial={{ opacity: 0, y: 30 }} /* Mudado para Y (subir) ja que é centralizado */
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {title.line1} <br />
                        <span>{title.highlight}</span>
                    </HeroTitle>

                    {subtitle && (
                        <HeroSubtitle
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {subtitle}
                        </HeroSubtitle>
                    )}

                    <HeroButton
                        href="#pricing"
                        className="btn btn-primary"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {buttonText} { /* Removed Icon strictly, but can add back if needed */}
                    </HeroButton>

                    {microText && (
                        <MicroTextWrapper
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {microText.map((text: string, index: number) => (
                                <span key={index}>{text}</span>
                            ))}
                        </MicroTextWrapper>
                    )}
                </ContentWrapper>
            </div>
        </Section>
    );
};

export default Hero;
