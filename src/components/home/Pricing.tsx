import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section`
    background-color: #0b0b0b;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        padding: 50px 0;
    }
`;

const BgShape = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, #1a1a1a 0%, transparent 70%);
    opacity: 0.5;
    z-index: 1;
    pointer-events: none;
`;

const Container = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1480px; /* Aumentado para acomodar 4 cards lado a lado */
    margin: 0 auto;
    padding: 0 15px;
`;

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: 50px;

    div { 
        h2 {
            font-size: 28px;
            font-weight: 700;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 20px;
        }

        span {
            color: var(--primary-color);
        }

        p {
            color: #fff; /* Texto branco */
            font-size: 18px;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 50px;
    justify-content: center; /* Centraliza o grid */
    justify-items: center; /* Centraliza os cards no grid */

    @media (max-width: 1280px) { /* Breakpoint ajustado para tablets grandes/laptops pequenos */
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px; /* Limita largura para ficar centralizado e bonito em 2 colunas */
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px; /* Gap normal no mobile */
    }
`;

const PricingBtn = styled.a`
    width: 100%;
    background: #141414; /* Fundo da cor do card (transparente/escuro) */
    border: 2px solid #fff; /* Bordas brancas */
    color: #fff; /* Texto branco */
    padding: 12px 30px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    font-family: var(--font-barlow);
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;

    &:hover {
        background: #128C7E; /* Verde escuro no hover */
        border-color: #128C7E;
        color: #fff;
    }
`;

const Card = styled(motion.div) <{ $active?: boolean }>`
    background: #141414;
    padding: 40px 30px; /* Largura aumentada */
    text-align: center;
    border: 1px solid #222;
    transition: all 0.3s ease;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 290px; /* Largura mínima ajustada para caber 4 na tela */
    width: 100%; /* Ocupa toda a largura da célula do grid */

    /* Active/Popular styles */
    ${props => props.$active && `
        border-color: var(--primary-color);
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(255, 51, 102, 0.1);
        
        ${PricingBtn} {
            background: #189e49ff; /* Verde WhatsApp sólido para card popular */
            border-color: #189e49ff;
            color: #fff;
            
            &:hover {
                background: #128C7E; /* Verde escuro no hover */
                border-color: #128C7E;
            }
        }
    `}

    &:hover {
        border-color: var(--primary-color);
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(255, 51, 102, 0.1);
    }

    @media (max-width: 768px) {
        min-width: auto; /* Remove largura mínima no mobile */
        width: 100%; /* Ocupa 100% da largura disponível */
        max-width: 100%; /* Garante que não ultrapassa a tela */
    }
`;

const CardHeader = styled.div`
    h3 {
        font-size: 20px;
        color: #fff; /* Texto branco */
        margin-bottom: 20px;
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            display: block;
            width: 40px;
            height: 2px;
            background: var(--primary-color);
            margin: 10px auto 0;
        }
    }
`;

const Price = styled.div`
    font-family: var(--font-barlow);
    color: #fff; /* Preço branco */
    margin-bottom: 30px;

    sup {
        font-size: 24px;
        position: relative;
        top: -1em;
        color: #fff;
    }

    span {
        font-size: 60px;
        font-weight: 700;
        line-height: 1;
        color: #fff;
    }

    sub {
        font-size: 16px;
        color: #fff; /* Sub branco também */
        position: relative;
        bottom: 0;
    }
`;

const Features = styled.ul`
    margin-bottom: 30px;
    flex-grow: 1;

    li {
        font-size: 16px;
        color: #fff; /* Texto branco */
        margin-bottom: 12px;
        list-style: none;
    }
`;

const Badge = styled.div`
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: #fff;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    white-space: nowrap;
`;

const DiscountText = styled.p`
    color: #4cd137;
    font-size: 16px;
    font-weight: 600;
    margin: -20px 0 20px;
    text-transform: uppercase;
`;

const Pricing: React.FC = () => {
    const { title, subtitle, plans } = Content.pricing;
    const { contact } = Content;

    const getWhatsappLink = (planName: string) => {
        const msg = `Olá! Vim pelo site e tenho interesse no plano ${planName}`;
        return `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    };

    return (
        <Section id="pricing">
            <BgShape />
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <HeaderWrapper style={{ maxWidth: '800px', width: '100%' }}>
                        <div>
                            <h2>{title.line1} <span>{title.highlight}</span></h2>
                            <p>{subtitle}</p>
                        </div>
                    </HeaderWrapper>
                </div>

                <Grid>
                    {plans.map((plan: any, index: number) => (
                        <Card key={index} $active={plan.isPopular}>
                            {/* Badge só aparece se isPopular === true */}
                            {plan.isPopular && plan.badgeText && <Badge>{plan.badgeText}</Badge>}

                            <CardHeader>
                                <h3>{plan.name}</h3>
                            </CardHeader>
                            <Price>
                                <sup>{plan.currency}</sup>
                                <span>{plan.price}</span>
                                <sub>{plan.period}</sub>
                            </Price>

                            {plan.discountText && <DiscountText>{plan.discountText}</DiscountText>}

                            <Features>
                                {plan.features.map((feature: string, i: number) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </Features>
                            <PricingBtn
                                href={getWhatsappLink(plan.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {plan.buttonText}
                            </PricingBtn>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Pricing;
