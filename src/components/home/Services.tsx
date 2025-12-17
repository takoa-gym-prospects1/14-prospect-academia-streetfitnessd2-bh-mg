import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaFire, FaWater, FaSwimmer, FaBicycle, FaMusic, FaBolt } from 'react-icons/fa';
import { GiMuscleUp, GiMeditation } from 'react-icons/gi';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section`
    width: 100%;
    padding: 0;
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        grid-template-columns: unset;
        width: 100%;
        padding-bottom: 20px; /* Espaço para scrollbar se houver, ou apenas respiro */
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
        }
    }
`;

const ServiceImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1); /* Começa com zoom IN para fazer zoom OUT no hover */
    transition: transform 0.6s ease;
`;

const ServiceOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    padding: 40px;
    transition: all 0.4s ease;
`;

const ServiceIcon = styled.div`
    font-size: 50px; /* Tamanho ideal para ícones react-icons */
    color: var(--primary-color);
    margin-bottom: 20px;
    opacity: 0; /* Escondido inicialmente */
    transform: translateY(20px);
    transition: all 0.4s ease 0.1s;
    text-align: center;
    line-height: 1;
`;

const ServiceContent = styled.div`
    text-align: center; /* Centraliza texto */
    
    h3 {
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 10px;
        color: #fff;
        transform: translateY(0);
        transition: all 0.4s ease;
        opacity: 1; /* Título sempre visível */
    }

    p {
        color: #ddd;
        font-size: 16px;
        margin-bottom: 20px;
        opacity: 0; /* Escondido inicialmente */
        transform: translateY(20px);
        transition: all 0.4s ease 0.2s;
        height: 0;
        overflow: hidden;
    }
`;

const ServiceBtn = styled.a`
    color: var(--primary-color);
    font-size: 20px;
    opacity: 0; /* Escondido inicialmente */
    transform: translateX(-20px);
    transition: all 0.4s ease 0.3s;
    
    /* Background ao redor da seta */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid transparent;
    
    /* Hover effect no background */
    &:hover {
        background: rgba(255, 51, 102, 0.2);
        border-color: var(--primary-color);
        transform: translateX(5px);
    }
`;

// Helper para estilos ativos (reutilizando lógica de hover)
const activeStyles = css`
    ${ServiceImg} {
        transform: scale(1);
    }
    ${ServiceIcon} {
        opacity: 1;
        transform: translateY(0);
    }
    ${ServiceContent} p {
        opacity: 1;
        transform: translateY(0);
        height: auto;
    }
    ${ServiceBtn} {
        opacity: 1;
        transform: translateX(0);
    }
`;

const ServiceItem = styled(motion.div) <{ $isActive?: boolean }>`
    position: relative;
    height: 400px;
    overflow: hidden;
    cursor: pointer;

    /* Zoom OUT no hover (1.1 -> 1) */
    &:hover ${ServiceImg} {
        transform: scale(1);
    }

    /* Mostrar ícone no hover */
    &:hover ${ServiceIcon} {
        opacity: 1;
        transform: translateY(0);
    }

    /* Mostrar descrição no hover */
    &:hover ${ServiceContent} p {
        opacity: 1;
        transform: translateY(0);
        height: auto;
    }

    /* Mostrar botão no hover */
    &:hover ${ServiceBtn} {
        opacity: 1;
        transform: translateX(0);
    }

    /* Aplicar estilos ativos automaticamente se a prop for verdadeira (Mobile) */
    ${props => props.$isActive && activeStyles}

    @media (max-width: 767px) {
        /* No mobile, cada item ocupa quase a largura toda para centralizar */
        min-width: 90vw;
        margin: 0 5vw; /* Margem lateral para centralizar e ver ponta dos vizinhos */
        scroll-snap-align: center;
    }
`;

const Services: React.FC = () => {
    // Mapeamento de iconType para react-icons correspondentes aos emojis
    const getIcon = (type?: string) => {
        switch (type) {
            case 'muscle': return <GiMuscleUp />; // Musculação
            case 'water': return <FaWater />; // Hidroginástica
            case 'fire': return <FaFire />; // Funcional
            case 'yoga': return <GiMeditation />; // Alongamento
            case 'swim': return <FaSwimmer />; // Natação
            case 'bike': return <FaBicycle />; // Ciclismo
            case 'music': return <FaMusic />; // Ritbox
            case 'core': return <FaBolt />; // Abdominal
            default: return <GiMuscleUp />;
        }
    };

    // Variantes de animação para o container (Grid)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2 // Delay de 0.2s entre cada card
            }
        }
    };

    // Variantes de animação para cada card individual
    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -100 // Começa 100px à esquerda
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    // --- Lógica Mobile (Auto Scroll + Interação) ---
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Detectar Mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 767);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Detectar qual card está no centro (Active Index)
    const handleScroll = () => {
        if (!scrollRef.current || !isMobile) return;

        const container = scrollRef.current;
        const center = container.scrollLeft + (container.clientWidth / 2);

        // Assumindo que todos cards tem a mesma largura
        // ACHAR o elemento filho mais próximo do centro
        const items = Array.from(container.children);
        let closestIndex = 0;
        let closestDist = Infinity;

        items.forEach((item, index) => {
            const htmlItem = item as HTMLElement;
            // Centro do item relativo ao container
            const itemCenter = htmlItem.offsetLeft + (htmlItem.clientWidth / 2);
            const dist = Math.abs(center - itemCenter);

            if (dist < closestDist) {
                closestDist = dist;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    // Auto Scroll Logic
    useEffect(() => {
        if (!isMobile || isPaused) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const nextIndex = (activeIndex + 1) % Content.services.items.length;
                // Scrollar para o próximo item
                const item = scrollRef.current.children[nextIndex] as HTMLElement;
                if (item) {
                    // Calcular posição para centralizar
                    const container = scrollRef.current;
                    const scrollLeft = item.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2);

                    container.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }, 3000); // Mudar a cada 3 segundos (ajustável)

        return () => clearInterval(interval);
    }, [isMobile, isPaused, activeIndex]);

    // Handlers de Interação Manual
    const handleTouchStart = () => {
        if (!isMobile) return;
        setIsPaused(true);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };

    const handleTouchEnd = () => {
        if (!isMobile) return;
        // Reiniciar timer de 5s
        resumeTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 5000);
    };


    return (
        <Section id="services">
            <div className="container-fluid p-0" style={{ width: '100%' }}>
                <Grid
                    ref={scrollRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Anima quando 20% da seção está visível, apenas uma vez

                    // Eventos para Mobile
                    onScroll={handleScroll}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    // Mouse events para desktop/teste em desktop com touch simulator
                    onMouseEnter={() => isMobile && setIsPaused(true)}
                    onMouseLeave={() => isMobile && handleTouchEnd()}
                >
                    {Content.services.items.map((service, index) => (
                        <ServiceItem
                            key={service.id}
                            variants={itemVariants}
                            $isActive={isMobile && index === activeIndex} // Ativa estilo no mobile se for o index atual
                        >
                            <ServiceImg src={service.image} alt={service.title} loading="lazy" />
                            <ServiceOverlay>
                                <ServiceIcon>
                                    {getIcon(service.iconType)}
                                </ServiceIcon>
                                <ServiceContent>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ServiceBtn href="#pricing">
                                        <FaArrowRight />
                                    </ServiceBtn>
                                </ServiceContent>
                            </ServiceOverlay>
                        </ServiceItem>
                    ))}
                </Grid>
            </div>
        </Section>
    );
};

export default Services;
