import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section<{ $bgImage: string }>`
    padding: 100px 0;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;

    @media (max-width: 768px) {
        background-attachment: scroll;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 1;
`;

const Container = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const SliderWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const QuoteIcon = styled(FaQuoteLeft)`
    font-size: 40px;
    color: var(--primary-color);
    margin-bottom: 20px;
`;

const Text = styled.p`
    font-size: 16px;
    font-style: italic;
    color: #ddd;
    margin-bottom: 30px;
    line-height: 1.6;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const ProfileThumb = styled.div`
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--primary-color);
    }
`;

const ProfileInfo = styled.div`
    h3 {
        font-size: 18px;
        color: #fff;
        margin-bottom: 5px;
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
        color: var(--primary-color);
        margin: 0;
    }
`;

const Item = styled(motion.div)`
    background: #1a1a1a;
    padding: 40px;
    border-radius: 4px;
    text-align: center;
    position: relative;
    margin: 10px;
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

const Dot = styled.button<{ $active: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: ${props => props.$active ? 'var(--primary-color)' : '#555'};
    cursor: pointer;
    transition: background 0.3s;
`;

const Testimonial: React.FC = () => {
    // Simple auto-rotating slider state
    const [activeIndex, setActiveIndex] = useState(0);
    const { backgroundImage, items: testimonials } = Content.testimonials;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <Section $bgImage={backgroundImage}>
            <Overlay />
            <Container>
                <SliderWrapper>
                    <AnimatePresence mode="wait">
                        <Item
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <QuoteIcon />
                            <Text>"{testimonials[activeIndex].text}"</Text>

                            <Profile>
                                <ProfileThumb>
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        draggable="false"
                                        onContextMenu={(e) => e.preventDefault()}
                                        style={{ userSelect: 'none', pointerEvents: 'none' }}
                                    />
                                </ProfileThumb>
                                <ProfileInfo>
                                    <h3>{testimonials[activeIndex].name}</h3>
                                    <p>{testimonials[activeIndex].role}</p>
                                </ProfileInfo>
                            </Profile>
                        </Item>
                    </AnimatePresence>

                    {/* Dots indicators */}
                    <DotsContainer>
                        {testimonials.map((_, index) => (
                            <Dot
                                key={index}
                                $active={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </DotsContainer>
                </SliderWrapper>
            </Container>
        </Section>
    );
};

export default Testimonial;
