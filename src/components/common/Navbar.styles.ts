import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled.header<{ $isScrolled: boolean }>`
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 9999 !important;
    
    /* CRÍTICO: GPU acceleration sem permitir movimento */
    transform: translateZ(0) !important;
    -webkit-transform: translateZ(0) !important;
    will-change: auto !important;
    
    /* Prevenir comportamentos de scroll do navegador Chrome */
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
    
    transition: background 0.3s ease, box-shadow 0.3s ease;
    background: ${props => props.$isScrolled ? 'rgba(20, 20, 20, 0.98)' : 'transparent'};
    box-shadow: ${props => props.$isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'};
    font-family: var(--font-barlow);
    
    /* Garante visibilidade */
    visibility: visible !important;
    opacity: 1 !important;
    display: block !important;
`;

export const TopBarWrapper = styled.div`
    background: #1a1a1a;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.05);

    @media (max-width: 991px) {
        display: block;
        
        & > .container {
            padding-left: 4px !important;
            padding-right: 4px !important;
        }
    }
`;

export const TopBar = styled.div`
    padding: 10px 0;
    font-size: 16px;
    color: #ccc;
    @media (max-width: 991px) {
        padding: 5px 0;
        /* ALTERE AQUI: Tamanho da fonte do endereço no mobile */
        font-size: 12px; 
        white-space: nowrap;
    }
`;

export const TopBarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 991px) {
        justify-content: center;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    /* Push address to the right on desktop to accommodate the larger logo skew */
    @media (min-width: 992px) {
        /* AJUSTE AQUI: Aumente este valor para empurrar o endereço para a DIREITA */
        margin-left: 380px; 
    }

    @media (max-width: 991px) {
        width: 100%;
        justify-content: center;
        text-align: center;
        gap: 4px;
    }

    svg {
        font-size: 16px;
        color: var(--text-muted);
    }

    a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
            color: var(--primary-color);
        }
    }
`;

export const SocialInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    /* AJUSTE AQUI: Controle a posição horizontal dos ícones sociais */
    /* Aumente este valor para empurrar os ícones para a ESQUERDA */
    padding-right: 75px;

    @media (max-width: 991px) {
        display: none;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 15px;

    a:hover {
        color: var(--primary-color);
    }
`;

export const NavbarMainWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: stretch;
    
    /* Garante visibilidade */
    visibility: visible !important;
    opacity: 1 !important;
    
    /* CRÍTICO: Overflow hidden APENAS no mobile */
    @media (max-width: 991px) {
        overflow: hidden !important;
        overflow-x: clip !important;
        height: 60px;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* MUDADO: permite que filhos ocupem toda a altura */
    height: 100%;
    position: relative;
    z-index: 50; /* AUMENTADO: maior que NavbarLogoSkew para ficar acima no mobile */
    width: 100%;
`;

export const NavbarLogoSkew = styled.div`
    position: absolute;
    top: -40px; 
    right: 50%; /* Anchor right edge relative to center */
    margin-right: 350px; /* Position the right edge exactly where user wants it (approx 350px left of center) */
    width: 3000px; /* Massive width to cover left side infinitely */
    height: 100px; 
    background: var(--primary-color); /* Solid primary color for the long tail */
    transform: skewX(-20deg);
    transform-origin: top right; /* Skew relative to the fixed right edge */
    padding-left: 0;
    z-index: 20; 
    display: flex;
    align-items: center;
    box-shadow: 5px 0 15px rgba(0,0,0,0.3);

    /* Gradient overlay for the right side (Logo area) */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 600px; /* Length of the gradient section */
        height: 100%;
        background: var(--primary-color);
        z-index: -1; /* Behind content */
    }

    @media (max-width: 991px) {
        /* MOBILE: Mantém o efeito skew e degradê */
        top: 0;
        left: 0; 
        right: auto;
        margin-right: 0;
        width: 250px; /* ALTERE AQUI para ajustar largura do container inclinado no mobile - REDUZIDO para não cobrir o botão hambúrguer */
        height: 100%;
        transform: skewX(-15deg); /* Ângulo um pouco menor para mobile */
        padding-left: 0;
        background: var(--primary-color); /* Mantém cor sólida de fundo */
        box-shadow: 3px 0 10px rgba(0,0,0,0.3);
        position: absolute;
        z-index: 10;
        display: flex;
        align-items: center;

        &::after {
            content: '';
            display: block; /* Mantém o degradê no mobile */
            position: absolute;
            top: 0;
            right: 0;
            width: 100px; /* ALTERE AQUI para ajustar comprimento do degradê no mobile - REDUZIDO proporcionalmente */
            height: 100%;
            background: var(--primary-color);
            z-index: -1;
        }
    }
`;

export const LogoContainer = styled.div`
    transform: skewX(20deg);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Align to right */
    padding-right: 50px; /* Spacing from edge - increased to push away from skew */
    width: 100%;

    @media (max-width: 991px) {
        transform: skewX(15deg); /* Compensar o skew do container mobile */
        padding-right: 15px;
        padding-left: 15px;
        justify-content: flex-start;
    }
`;

export const BrandNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1;
`;

export const NavbarBrandText = styled.div`
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
    font-style: italic;
    color: #fff;
    white-space: nowrap; /* Prevent breaking */

    span {
        color: #fff;
    }

    @media (max-width: 991px) {
        /* ============================================ */
        /* AJUSTE DE FONTE DO NOME DA ACADEMIA (MOBILE) */
        /* Diminua este valor se o logo ficar achatado */
        /* ============================================ */
        font-size: 20px;
        
        span {
            color: var(--white-color);
        }
    }
`;

export const IconWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
    color: var(--primary-color);
    font-size: 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const LogoSubtitle = styled.span`
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 600;
    opacity: 0.8;
    color: #fff !important; 
    /* Force white even on mobile override for subtitle if desired, or let it inherit */
`;

export const NavSpacer = styled.div`
    width: 280px;
    flex-shrink: 0;

    @media (max-width: 1100px) {
        width: 250px;
    }

    @media (max-width: 991px) {
        display: none;
    }
`;

export const DesktopNav = styled.nav`
    display: flex;
    align-items: center; /* Mantém os links centralizados verticalmente */
    gap: 30px;
    margin-left: auto;
    margin-right: 30px;

    @media (max-width: 1100px) {
        gap: 15px;
    }

    @media (max-width: 991px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    letter-spacing: 0.5px;
    opacity: 0.8;
    transition: opacity 0.3s;

    &:hover {
        color: #fff;
        opacity: 1;
    }
`;

export const NavActions = styled.div`
    display: flex;
    height: 100%;
    align-items: stretch; /* Garante que filhos ocupem toda a altura */

    @media (max-width: 991px) {
        display: none;
    }
`;

export const SkewBtnWrapper = styled.div<{ $white?: boolean }>`
    height: 100%; /* Ocupa 100% da altura do NavbarMainWrapper (60px) */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px; /* Apenas padding horizontal */
    transform: skewX(-20deg);
    transition: all 0.3s ease;
    cursor: pointer;
    background: #fff; 
    /* border-left removed to fix hover color break */

    a {
        transform: skewX(20deg);
        color: #000; 
        font-weight: 800;
        text-transform: uppercase;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 8px; 
        transition: all 0.3s ease;
    }

    svg {
        color: #000; 
        font-size: 18px;
        transition: all 0.3s ease;
    }

    &:hover {
        background: linear-gradient(to right, #25D366, #128C7E); 
        box-shadow: 0 0 15px rgba(37, 211, 102, 0.5); 

        a {
            color: #fff; 
        }
        
        svg {
            color: #fff; 
        }
    }
`;

export const MobileToggle = styled.button`
    display: none;
    background: none;
    border: none;
    color: #fff !important;
    font-size: 24px;
    cursor: pointer;
    
    /* Posicionamento absoluto à direita da tela */
    position: absolute;
    right: 20px; /* Distância da borda direita da tela */
    top: 50%;
    transform: translateY(-50%); /* Centraliza verticalmente na navbar */
    z-index: 200 !important;
    pointer-events: all !important;

    @media (max-width: 991px) {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
`;

export const MobileMenu = styled(motion.div)`
    position: fixed !important; /* Mudado de absolute para fixed para não ser cortado pelo overflow hidden do Header */
    top: 120px; /* TopBar (40px aprox) + NavbarMainWrapper (60px) = 100px + margem */
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    background: var(--bg-card) !important;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 2px solid var(--primary-color);
    overflow: hidden;
    z-index: 9998 !important; /* Apenas abaixo do Header (9999) */
    
    /* Garantir visibilidade */
    display: block !important;
    visibility: visible !important;
    pointer-events: all !important;
    
    @media (max-width: 991px) {
        /* Ajuste este valor se a altura da barra superior mudar (TopBar + NavbarMainWrapper) */
        top: 90px !important; 
    }
`;

export const MobileNavList = styled.ul`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    li a {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        display: block;
    }
`;
