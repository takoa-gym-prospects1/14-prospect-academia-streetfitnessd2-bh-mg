import React, { useState } from 'react';
import styled from 'styled-components';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section<{ $bgImage: string; $mobileBgImage?: string }>`
    padding: 100px 0;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background-attachment: fixed;

    @media (max-width: 768px) {
        background-attachment: scroll;
        background-image: ${props => props.$mobileBgImage ? `url(${props.$mobileBgImage})` : `url(${props.$bgImage})`};
        background-position: center top;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 
     * AJUSTE DO OVERLAY (Camada escura sobre a imagem de fundo)
     * 
     * Para ajustar a intensidade do escurecimento, altere o último número do rgba:
     * - rgba(0, 0, 0, 0.8) = 80% opaco (mais escuro)
     * - rgba(0, 0, 0, 0.5) = 50% opaco (meio termo)
     * - rgba(0, 0, 0, 0.3) = 30% opaco (mais claro, imagem mais visível)
     * 
     * O valor vai de 0.0 (transparente/sem escurecimento) até 1.0 (preto sólido)
     */
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
`;

const Container = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 991px) {
        flex-direction: column;
        gap: 50px;
    }
`;

const Column = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 991px) {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0;
    }
`;

const Header = styled.div`
    margin-bottom: 0; /* AJUSTE AQUI: Espaço abaixo dos títulos (Tabela IMC / Calcule Seu IMC) */
    
    h2 {
        font-size: 28px;
        margin-bottom: 20px; /* AJUSTE AQUI: Espaço abaixo das headlines */
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        
        @media (max-width: 768px) {
            text-align: center; /* Centraliza headline no mobile */
        }
    }

    span {
        color: var(--primary-color);
    }
    
    p {
        color: #aaa;
        margin-bottom: 20px; /* AJUSTE AQUI: Espaço entre subheadline e formulário */
        font-size: 18px;
        
        @media (max-width: 768px) {
            text-align: center; /* Centraliza subheadline no mobile */
        }
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: transparent;
    color: #fff;
    margin-bottom: 30px;

    caption {
        caption-side: top;
        text-align: left;
        color: #aaa;
        margin-bottom: 25px; /* AJUSTE AQUI: Espaço entre caption (subheadline) e tabela - deve ser igual ao p do Header */
        font-size: 18px;
        
        @media (max-width: 768px) {
            text-align: center; /* Centraliza caption no mobile */
        }
    }

    th, td {
        border: 1px solid #444;
        padding: 15px;
        text-align: left;
    }

    th {
        font-weight: 700;
        color: var(--primary-color);
        text-transform: uppercase;
    }
`;

const Form = styled.form`
    background: #141414;
    padding: 30px;
    border-radius: 4px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const InputLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    background: #0b0b0b;
    border: 1px solid #333;
    color: #fff;
    border-radius: 4px;
    font-size: 16px; /* Previne zoom no iOS */

    &:focus {
        border-color: var(--primary-color);
        outline: none;
    }
`;

const Row = styled.div`
    display: flex;
    margin: 0 -10px;
`;

const ColHalf = styled.div`
    width: 50%;
    padding: 0 10px;
`;

const RadioGroup = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 40px; /* AJUSTE AQUI: altura/espaçamento dos seletores de gênero */

    @media (max-width: 768px) {
        flex-direction: column; /* Empilha verticalmente no mobile */
        gap: 15px; /* Reduz espaço entre os itens */
        margin-top: 20px; /* Reduz margem superior no mobile */
    }
`;

const RadioItem = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    cursor: pointer;

    input {
        accent-color: var(--primary-color);
    }
`;

const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    background-color: var(--primary-color);
    color: #fff;
    padding: 12px 30px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    font-family: var(--font-barlow);
    transition: all 0.3s ease;

    &:hover {
        background-color: #fff;
        color: var(--primary-color);
    }
`;

const Result = styled.div`
    margin-top: 20px;
    padding: 15px;
    background: #ffceceff; /* Fundo branco */
    color: var(--primary-color); /* Texto na cor primária */
    border-radius: 4px;
    font-weight: 700;
    text-align: center; /* Centralizado */
`;

const Recommendation = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #1a1a1a;
    border-left: 4px solid var(--primary-color);
    color: #fff;
    border-radius: 4px;
    line-height: 1.6;
`;

const EvaluationButton = styled.a`
    margin-top: 20px;
    width: 100%;
    display: inline-block;
    text-align: center;
    background: #189e49ff; /* Verde WhatsApp */
    color: #fff;
    padding: 15px 30px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    font-family: var(--font-barlow);
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        background: #128C7E; /* Verde escuro */
    }
`;

const BMI: React.FC = () => {
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [bmiResult, setBmiResult] = useState<string | null>(null);
    const [status, setStatus] = useState<string>('');

    const { contact } = Content;
    const { backgroundImage, mobileBackgroundImage, tableTitle, formTitle, description, resultTitle, resultText, buttonText } = Content.bmi;

    const calculateBMI = (e: React.FormEvent) => {
        e.preventDefault();
        if (height && weight) {
            const h = parseFloat(height) / 100; // convert cm to m
            const w = parseFloat(weight);
            const bmi = (w / (h * h)).toFixed(1);
            setBmiResult(bmi);

            const bmiVal = parseFloat(bmi);
            if (bmiVal < 18.5) setStatus('Abaixo do peso');
            else if (bmiVal < 24.9) setStatus('Saudável');
            else if (bmiVal < 29.9) setStatus('Sobrepeso');
            else setStatus('Obeso');
        }
    };

    const getWhatsappLink = () => {
        const message = `Olá! Acabei de calcular meu IMC (${bmiResult} - ${status}) no site e gostaria de agendar uma avaliação física gratuita.`;
        return `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
    };

    return (
        <Section $bgImage={backgroundImage} $mobileBgImage={mobileBackgroundImage} id="bmi">
            <Overlay />
            <Container>
                <ContentWrapper>

                    {/* Table Column */}
                    <Column>
                        <Header>
                            <h2>{tableTitle.line1} <span>{tableTitle.highlight}</span></h2>
                        </Header>
                        <div className="table-responsive">
                            <Table>
                                <caption>Taxa Metabólica Basal / gasto energético por unidade de tempo</caption>
                                <thead>
                                    <tr>
                                        <th>IMC</th>
                                        <th>STATUS DE PESO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Abaixo de 18.5</td>
                                        <td>Abaixo do peso</td>
                                    </tr>
                                    <tr>
                                        <td>18.5 - 24.9</td>
                                        <td>Saudável</td>
                                    </tr>
                                    <tr>
                                        <td>25.0 - 29.9</td>
                                        <td>Sobrepeso</td>
                                    </tr>
                                    <tr>
                                        <td>30 e Acima</td>
                                        <td>Obeso</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Column>

                    {/* Form Column */}
                    <Column>
                        <Header>
                            <h2>{formTitle.line1} <span>{formTitle.highlight}</span></h2>
                            <p>
                                {description}
                            </p>
                        </Header>

                        <Form onSubmit={calculateBMI}>
                            <Row>
                                <ColHalf>
                                    <FormGroup>
                                        <InputLabel htmlFor="height">Altura / cm</InputLabel>
                                        <Input
                                            type="number"
                                            id="height"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                </ColHalf>
                                <ColHalf>
                                    <FormGroup>
                                        <InputLabel htmlFor="weight">Peso / kg</InputLabel>
                                        <Input
                                            type="number"
                                            id="weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                </ColHalf>
                            </Row>

                            <Row>
                                <ColHalf>
                                    <FormGroup>
                                        <InputLabel htmlFor="age">Idade</InputLabel>
                                        <Input type="number" id="age" />
                                    </FormGroup>
                                </ColHalf>
                                <ColHalf>
                                    <RadioGroup>
                                        <RadioItem>
                                            <input type="radio" name="sex" defaultChecked /> Masculino
                                        </RadioItem>
                                        <RadioItem>
                                            <input type="radio" name="sex" /> Feminino
                                        </RadioItem>
                                    </RadioGroup>
                                </ColHalf>
                            </Row>

                            <Button type="submit">Calcular</Button>

                            {bmiResult && (
                                <>
                                    <Result>
                                        Seu IMC é: {bmiResult} - {status}
                                    </Result>

                                    <Recommendation>
                                        <strong>{resultTitle}</strong><br />
                                        {resultText}
                                    </Recommendation>

                                    <EvaluationButton
                                        href={getWhatsappLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {buttonText}
                                    </EvaluationButton>
                                </>
                            )}
                        </Form>
                    </Column>

                </ContentWrapper>
            </Container>
        </Section>
    );
};

export default BMI;
