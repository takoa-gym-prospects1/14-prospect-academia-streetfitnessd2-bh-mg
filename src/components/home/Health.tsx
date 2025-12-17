import React, { useState, useRef, useEffect } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import { FaPlus, FaArrowsAltH, FaDumbbell, FaCertificate, FaSnowflake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section`
    background-color: var(--bg-dark);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
`;

const Watermark = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    font-size: 15rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.02);
    z-index: 0;
    pointer-events: none;
    text-transform: uppercase;
`;

const HealthContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center; /* Voltar para center para alinhar verticalmente o box de imagem */
    position: relative;
    z-index: 1;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
    }
`;

const HandleCircle = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px; /* Garante que não encolha */
    min-height: 40px;
    flex-shrink: 0; /* Impede deformação */
    background: var(--primary-color);
    border: 3px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const HealthText = styled(motion.div)`
    /* Removed paragraph styling constraint here as cards handle it */
    @media (max-width: 991px) {
        text-align: center;
        margin-bottom: 50px;
    }
`;

const BenefitCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-left: 4px solid var(--primary-color);
    margin-bottom: 20px;
    border-radius: 4px;
    text-align: left; /* Ensure left align even on mobile center wrapper */
    
    h4 {
        color: #fff;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
    }

    svg {
        color: var(--primary-color);
        font-size: 20px;
    }

    p {
        font-size: 16px;
        margin-bottom: 0;
        color: #ddd;
        line-height: 1.5;
    }
`;

const SectionHeadingWrapper = styled.div`
    margin-bottom: 30px;

    h2 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 20px;
    }

    span {
        color: var(--primary-color);
    }
`;

// Before/After Slider Styled Components
const SliderWrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    cursor: ew-resize;
    user-select: none;

    @media (max-width: 991px) {
        margin: 0 auto;
    }
`;

const ComparisonImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: 1; /* Default for 'after' bg image */
`;

const BeforeImageWrapper = styled.div<{ $width: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 2;
    overflow: hidden;
    width: ${props => props.$width}%;
    border-right: 3px solid #fff;
`;

const Handle = styled.div<{ $left: number }>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.$left}%;
    width: 3px;
    background: #fff;
    z-index: 3;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Health: React.FC = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [containerWidth, setContainerWidth] = useState(600); // Default fallback
    const containerRef = useRef<HTMLDivElement>(null);
    // Destructure cards as well
    const { watermarkText, title, description, buttonText, images, cards } = Content.health;

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        // Initial update
        updateWidth();

        // Event listener
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const width = rect.width;
            let percent = (x / width) * 100;
            percent = Math.max(0, Math.min(100, percent));
            setSliderPosition(percent);
        }
    };

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        handleMove(e.touches[0].clientX);
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'dumbbell': return <FaDumbbell />;
            case 'certificate': return <FaCertificate />;
            case 'snowflake': return <FaSnowflake />;
            default: return <FaCertificate />;
        }
    };

    return (
        <Section id="health">
            <Watermark>{watermarkText}</Watermark>
            <div className="container">
                <HealthContent>
                    <HealthText
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeadingWrapper>
                            <h2>{title.line1}<br /><span>{title.highlight}</span></h2>
                        </SectionHeadingWrapper>

                        {/* Render Cards instead of just description */}
                        {cards && cards.map((card: any, index: number) => (
                            <BenefitCard key={index}>
                                <h4>{getIcon(card.icon)} {card.title}</h4>
                                <p>{card.text}</p>
                            </BenefitCard>
                        ))}

                        {/* Optional description fallback if cards empty, or just spacing */}
                        {!cards && <p>{description}</p>}

                        <a href="#pricing" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px' }}>
                            {buttonText} <FaPlus />
                        </a>
                    </HealthText>

                    <SliderWrapper
                        ref={containerRef}
                        onMouseMove={onMouseMove}
                        onTouchMove={onTouchMove}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <ComparisonImage
                            src={images.after}
                            alt="After"
                            loading="lazy"
                        />
                        <BeforeImageWrapper $width={sliderPosition}>
                            <img
                                src={images.before}
                                alt="Before"
                                loading="lazy"
                                style={{
                                    width: `${containerWidth}px`, // Use synced width
                                    height: '100%',
                                    objectFit: 'cover',
                                    maxWidth: 'none'
                                }}
                            />
                        </BeforeImageWrapper>
                        <Handle $left={sliderPosition}>
                            <HandleCircle>
                                <FaArrowsAltH color="#fff" />
                            </HandleCircle>
                        </Handle>
                    </SliderWrapper>
                </HealthContent>
            </div>
        </Section>
    );
};

export default Health;
