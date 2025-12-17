import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section<{ $bgImage: string; $mobileBgImage?: string }>`
    position: relative;
    height: 100vh;
    min-height: 700px;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center top; 
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: var(--font-barlow);
    overflow: hidden;
    padding-top: 130px;

    @media (max-width: 991px) {
        min-height: auto;
        ${props => props.$mobileBgImage && `background-image: url(${props.$mobileBgImage});`}
        background-position: center center;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    /* REGULE O OVERLAY DO DESKTOP AQUI */
    /* Ajuste o último número (0.5) para mudar a opacidade (0.0 a 1.0) */
    background: rgba(0, 0, 0, 0.7);
    
    z-index: 1;

    @media (max-width: 991px) {
        /* REGULE O OVERLAY DO MOBILE AQUI */
        /* Ajuste o último número (0.7) para mudar a opacidade */
        background: rgba(0, 0, 0, 0.7);
    }
`;



export const ContentWrapper = styled.div`
    max-width: 900px; /* Aumentei um pouco para caber melhor centralizado */
    position: relative;
    z-index: 3;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const HeroTitle = styled(motion.h2)`
    font-size: 80px;
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 30px;
    text-transform: capitalize;

    span {
        color: var(--primary-color);
        font-weight: 900;
    }

    @media (max-width: 991px) {
        font-size: 60px;
        color: #fff;
    }

    @media (max-width: 768px) {
        font-size: 45px;
        opacity: 1 !important;
        transform: none !important;
    }
`;

export const HeroButton = styled(motion.a)`
    padding: 15px 40px;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        opacity: 1 !important;
        transform: none !important;
    }
`;


export const HeroSubtitle = styled(motion.p)`
    font-size: 20px;
    color: #e0e0e0;
    margin-bottom: 30px;
    line-height: 1.6;
    max-width: 700px; /* Largura um pouco maior para o subtitulo */
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 16px;
        opacity: 1 !important;
        transform: none !important;
    }
`;

export const MicroTextWrapper = styled(motion.div)`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center; /* Centraliza os itens */

    span {
        color: #ddd;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    @media (max-width: 768px) {
        opacity: 1 !important;
        transform: none !important;
    }
`;
