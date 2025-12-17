import React from 'react';
import styled from 'styled-components';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.div`
    padding: 50px 0;
    background-color: var(--primary-color);
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const Slider = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const BrandItem = styled.div`
    opacity: 0.7;
    transition: opacity 0.3s;
    filter: brightness(0) invert(1);
    /* Make logos white */
    max-width: 150px;
    margin: 10px; /* added margin for mobile fallback */

    &:hover {
        opacity: 1;
    }

    img {
        max-width: 100%;
        display: block;
    }
`;

const Brand: React.FC = () => {
    return (
        <Section>
            <Container>
                <Slider>
                    {Content.brands.items.map((brandUrl, index) => (
                        <BrandItem key={index}>
                            <img src={brandUrl} alt={`Brand ${index + 1}`} />
                        </BrandItem>
                    ))}
                </Slider>
            </Container>
        </Section>
    );
};

export default Brand;
