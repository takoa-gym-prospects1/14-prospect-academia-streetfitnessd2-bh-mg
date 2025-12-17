import React from 'react';
import styled from 'styled-components';
import { FaSnowflake, FaWifi, FaParking, FaShower, FaCheckCircle } from 'react-icons/fa';
import { Content } from '../../content/Content';

const StripContainer = styled.div`
    width: 100%;
    background: #0f0f0f;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 50px 0; /* AJUSTE AQUI A ALTURA DA FAIXA (padding vertical) */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    overflow: hidden;

    /* Gradiente esfumaçado nas bordas (esquerda e direita) */
    /* AJUSTE AQUI O GRADIENTE: Mude as porcentagens (ex: 20% e 80%) para controlar o tamanho do esfumaçado. Quanto maior o primeiro número e menor o segundo, maior o gradiente. */
    mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);

    /* Hide on Mobile/Tablet - Desktop Only as requested */
    @media (max-width: 991px) {
        display: none;
    }
`;

const MarqueeTrack = styled.div`
    display: flex;
    align-items: center;
    gap: 80px; /* Espaçamento entre os itens */
    width: max-content;
    animation: scroll 60s linear infinite; /* Aumentei o tempo para compensar a lista maior */

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } 
    }
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap; 
    opacity: 0.6; /* Opacidade base do conteúdo */
    transition: opacity 0.3s ease;
    
    svg {
        color: var(--primary-color);
        font-size: 20px;
    }

    /* Leve destaque ao passar o mouse */
    &:hover {
        opacity: 1;
        color: #fff;
        svg {
            transform: scale(1.1);
            transition: transform 0.3s ease;
        }
    }
`;

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'snowflake': return <FaSnowflake />;
        case 'wifi': return <FaWifi />;
        case 'parking': return <FaParking />;
        case 'shower': return <FaShower />;
        default: return <FaCheckCircle />;
    }
};

const FeatureStrip: React.FC = () => {
    // If not enabled or no items, don't render
    const config = (Content as any).featuresStrip;
    if (!config?.enabled || !config?.items) return null;

    // Gerar uma lista MUITO GRANDE para evitar buracos em monitores ultrawide ou resolução alta
    // O keyframe translateX(-50%) assume que a segunda metade é idêntica à primeira.
    // Então criamos 2 blocos gigantes idênticos.
    const baseList = [...config.items, ...config.items, ...config.items, ...config.items]; // 4x o conteúdo original
    const items = [...baseList, ...baseList]; // Duplicamos esse bloco gigante (Total 8x o original)

    return (
        <StripContainer>
            <MarqueeTrack>
                {items.map((item: any, index: number) => (
                    <FeatureItem key={`item-${index}`}>
                        {getIcon(item.icon)}
                        <span>{item.text}</span>
                    </FeatureItem>
                ))}
            </MarqueeTrack>
        </StripContainer>
    );
};

export default FeatureStrip;
