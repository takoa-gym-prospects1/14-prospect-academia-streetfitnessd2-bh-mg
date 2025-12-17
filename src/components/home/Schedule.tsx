import React, { useState } from 'react';
import { FaClock, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Content } from '../../content/Content';
import { motion, AnimatePresence } from 'framer-motion';

// --- Styled Components ---

const Section = styled.section<{ $bgImage: string }>`
    padding: 100px 0;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;

    @media (max-width: 768px) {
        background-attachment: scroll;
        padding: 50px 0;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
`;

const Container = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1480px; /* AJUSTE: Largura igualada à seção Health/Pricing para padronização */
    margin: 0 auto;
    padding: 0 15px;
`;

const HeadingWrapper = styled.div`
    text-align: center;
    margin-bottom: 50px;
    
    h2 {
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 28px;
    }

    span {
        color: var(--primary-color);
    }

    p {
        color: var(--text-muted);
        font-size: 18px;
    }
`;

// --- DESKTOP TABLE STYLES ---

// --- DESKTOP TABLE STYLES ---

const CarouselContainer = styled.div`
    position: relative;
    min-height: 850px; /* Altura fixa baseada na maior tabela (Manhã) para alinhar eixo */
    padding: 0 80px; /* Espaço lateral para as setas */
    display: flex;
    align-items: center; /* Centraliza a tabela verticalmente no container */
    justify-content: center;

    /* Esconder no mobile */
    @media (max-width: 991px) {
        display: none;
    }
`;

const NavButton = styled.button<{ $left?: boolean }>`
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    
    ${props => props.$left ? 'left: 0;' : 'right: 0;'}

    &:hover {
        background: var(--primary-color);
        transform: scale(1.1);
    }
`;

const TableResponsive = styled.div`
    overflow-x: auto;
    background: #1a1a1a;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    /* Altura automática para ajustar ao conteúdo, o CarouselContainer garante o espaço das setas */
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: #fff;
    height: 100%;

    th, td {
        border: 1px solid #333;
        text-align: center;
        padding: 15px;
        vertical-align: top; /* Alinhamento ao topo para células com várias aulas */
        height: 100%; /* Força as células a ocuparem a altura disponível */
    }

    thead th {
        background-color: #000;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 16px;
        padding: 20px;
        height: auto;
    }

    tbody th {
        background-color: #111;
        color: var(--primary-color);
        font-weight: 700;
        font-size: 18px;
        vertical-align: middle; /* Alinha o título do período ao meio */
    }
`;

const ClassInfo = styled(motion.div) <{ $borderColor?: string }>`
    padding: 10px;
    border-radius: 4px;
    background-color: #1e1e1e;
    border-left: 3px solid ${props => props.$borderColor || 'var(--primary-color)'};
    text-align: left;
    margin-bottom: 8px; /* Espaço entre aulas empilhadas */

    &:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }

    h3 {
        font-size: 12px;
        color: #aaa;
        margin-bottom: 3px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h4 {
        font-size: 15px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 3px;
    }

    span {
        font-size: 13px;
        color: var(--primary-color);
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

// --- MOBILE TABS/LIST STYLES ---

const MobileContainer = styled.div`
    display: none;

    /* Mostrar apenas no mobile/tablet */
    @media (max-width: 991px) {
        display: block;
    }
`;

const DaySelector = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    -webkit-overflow-scrolling: touch;
    
    /* Scrollbar oculta */
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`;

const DayTab = styled.button<{ $active: boolean }>`
    background: ${props => props.$active ? 'var(--primary-color)' : '#1a1a1a'};
    color: ${props => props.$active ? '#fff' : '#aaa'};
    border: 1px solid ${props => props.$active ? 'var(--primary-color)' : '#333'};
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background: ${props => props.$active ? 'var(--primary-color)' : '#252525'};
    }
`;

const MobileClassList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const AccordionItem = styled.div`
    margin-bottom: 10px;
`;

const AccordionHeader = styled.button<{ $active: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #1a1a1a;
    border: 1px solid ${props => props.$active ? 'var(--primary-color)' : '#333'};
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #252525;
    }

    svg {
        transform: ${props => props.$active ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.3s ease;
        color: var(--primary-color);
    }
`;

const AccordionContent = styled(motion.div)`
    overflow: hidden;
`;

const MobileClassItem = styled.div<{ $borderColor?: string }>`
    background: #151515; /* Um pouco mais escuro que o header */
    border-radius: 8px;
    padding: 15px;
    border-left: 4px solid ${props => props.$borderColor || 'var(--primary-color)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const TimeBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    border-right: 1px solid #333;
    min-width: 60px;

    span {
        font-size: 16px;
        font-weight: 700;
        color: #fff;
    }

    small {
        color: #666;
        font-size: 10px;
    }
`;

const InfoBlock = styled.div`
    padding-left: 15px;
    flex-grow: 1;

    h4 {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    
    p {
        color: #aaa;
        font-size: 12px;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--primary-color);
        font-size: 12px;
        font-weight: 500;
    }
`;

// --- HELPER FUNCTIONS ---

const getCategoryColor = (category: string) => {
    // Retorna cores baseadas na modalidade/categoria
    const lower = category?.toLowerCase();

    // Musculação (Vermelho/Laranja Forte - Força)
    if (lower?.includes('musculação') || lower?.includes('força')) return '#ff4757';

    // Hidroginástica (Azul Claro - Água)
    if (lower?.includes('hidro') || lower?.includes('hidroginástica')) return '#5dd4ffff';

    // Natação (Azul Profundo - Água)
    if (lower?.includes('natação') || lower?.includes('swim')) return '#0008ffff';

    // Funcional (Laranja/Amarelo - Energia/Metabólico)
    if (lower?.includes('funcional')) return '#ffa801';

    // Ciclismo/Spinning (Ciano/Neon - Velocidade)
    if (lower?.includes('ciclismo') || lower?.includes('bike') || lower?.includes('spinning')) return '#43d300ff';

    // Ritbox/Zumba (Roxo/Rosa - Dança/Ritmo)
    if (lower?.includes('ritbox') || lower?.includes('dança') || lower?.includes('zumba')) return '#bb00ffff';

    // Alongamento/Yoga (Verde - Relaxamento/Saúde)
    if (lower?.includes('alongamento') || lower?.includes('yoga') || lower?.includes('flex')) return '#ff00d4ff';

    // Abdominal/Core (Amarelo/Gold - Foco central)
    if (lower?.includes('abdominal') || lower?.includes('core')) return '#ff0000ff';

    return 'var(--primary-color)'; // Padrão
};

const Schedule: React.FC = () => {
    // Casting 'any' para acessar a nova estrutura caso o TS reclame antes da atualização completa da tipagem
    const config = (Content as any).schedule;
    const { backgroundImage, title, subtitle, days, table } = config;

    // Lógica para selecionar o dia atual automaticamente
    const [activeDay, setActiveDay] = useState(() => {
        const today = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ...
        // Mapeia o índice do JS para o nome do dia correspondente no array 'days'
        // Domingo (0) -> cai no default "Segunda" (ou poderíamos mapear explicitamente)
        const dayMap: { [key: number]: string } = {
            1: "Segunda",
            2: "Terça",
            3: "Quarta",
            4: "Quinta",
            5: "Sexta",
            6: "Sábado"
        };
        // Se for Domingo (0) ou undefined, retorna "Segunda"
        return dayMap[today] || "Segunda";
    });

    const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0); // Estado para o carrossel de Desktop
    const [isPaused, setIsPaused] = useState(false); // Estado para pausar o carrossel

    // Estado para o Accordion Mobile (nome do período expandido ou null)
    // Default: null para começar tudo fechado a pedido do usuário.
    const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

    // --- LÓGICA DE AGRUPAMENTO (Desktop & Mobile) ---
    const periods = [
        { name: "Manhã", start: "06:00", end: "11:59" },
        { name: "Tarde", start: "12:00", end: "17:59" },
        { name: "Noite", start: "18:00", end: "23:00" }
    ];

    const currentPeriod = periods[currentPeriodIndex];

    const handleNext = () => {
        setCurrentPeriodIndex((prev) => (prev + 1) % periods.length);
    };

    const handlePrev = () => {
        setCurrentPeriodIndex((prev) => (prev - 1 + periods.length) % periods.length);
    };

    // Auto-rotate effect
    React.useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 5 segundos
        return () => clearInterval(interval);
    }, [isPaused, currentPeriodIndex]);

    const getClassesForPeriodAndDay = (periodStart: string, periodEnd: string, day: string) => {
        const classes: any[] = [];
        table.forEach((row: any) => {
            if (row.time >= periodStart && row.time <= periodEnd && row.classes[day]) {
                classes.push({
                    time: row.time,
                    ...row.classes[day]
                });
            }
        });
        return classes.sort((a, b) => a.time.localeCompare(b.time));
    };

    const toggleAccordion = (periodName: string) => {
        setExpandedPeriod(prev => prev === periodName ? null : periodName);
    };

    return (
        <Section $bgImage={backgroundImage} id="schedule">
            <Overlay />
            <Container>
                <HeadingWrapper>
                    <h2>{title.line1} <span>{title.highlight}</span></h2>
                    <p>{subtitle}</p>
                </HeadingWrapper>

                {/* --- DESKTOP VIEW (CAROUSEL TABLE) --- */}
                <CarouselContainer
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <NavButton $left onClick={handlePrev} aria-label="Período anterior">
                        <FaChevronLeft />
                    </NavButton>

                    <TableResponsive>
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}><FaClock size={20} /></th>
                                    {days.map((day: string) => (
                                        <th key={day}>{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mostra APENAS o período ativo com animação nas células */}
                                <tr key={currentPeriod.name}>
                                    <th scope="row" style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
                                        {currentPeriod.name}
                                        <div style={{ fontSize: '11px', color: '#666', marginTop: '5px', fontWeight: 'normal' }}>
                                            {currentPeriod.start} - {currentPeriod.end}
                                        </div>
                                    </th>
                                    {days.map((day: string) => {
                                        const classes = getClassesForPeriodAndDay(currentPeriod.start, currentPeriod.end, day);
                                        return (
                                            <td key={day}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    {classes.length > 0 ? (
                                                        classes.map((cls, idx) => (
                                                            <ClassInfo
                                                                key={`${cls.time}-${idx}`}
                                                                $borderColor={getCategoryColor(cls.category)}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                            >
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                                                                    <span style={{ fontSize: '12px', color: '#fff', background: '#333', padding: '2px 4px', borderRadius: '3px' }}>{cls.time}</span>
                                                                </div>
                                                                <h4 style={{ fontSize: '13px', margin: '4px 0 2px' }}>{cls.name}</h4>
                                                                <span style={{ fontSize: '11px', opacity: 0.7 }}><FaUser size={8} /> {cls.instructor}</span>
                                                            </ClassInfo>
                                                        ))
                                                    ) : (
                                                        <span style={{ color: '#333', fontSize: '20px' }}>-</span>
                                                    )}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            </tbody>
                        </Table>
                    </TableResponsive>

                    <NavButton onClick={handleNext} aria-label="Próximo período">
                        <FaChevronRight />
                    </NavButton>
                </CarouselContainer>

                {/* --- MOBILE VIEW (ACCORDION LIST) --- */}
                <MobileContainer>
                    <DaySelector>
                        {days.map((day: string) => (
                            <DayTab
                                key={day}
                                $active={activeDay === day}
                                onClick={() => setActiveDay(day)}
                            >
                                {day}
                            </DayTab>
                        ))}
                    </DaySelector>

                    <MobileClassList>
                        {periods.map((period) => {
                            const classes = getClassesForPeriodAndDay(period.start, period.end, activeDay);
                            const isActive = expandedPeriod === period.name;

                            // Se não houver aulas neste período, não renderiza o acordeão (economia de espaço)
                            if (classes.length === 0) return null;

                            return (
                                <AccordionItem key={period.name}>
                                    <AccordionHeader
                                        $active={isActive}
                                        onClick={() => toggleAccordion(period.name)}
                                    >
                                        <span>{period.name}</span>
                                        <FaChevronLeft style={{ transform: isActive ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                                    </AccordionHeader>

                                    <AnimatePresence>
                                        {isActive && (
                                            <AccordionContent
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {classes.map((item, index) => (
                                                    <MobileClassItem key={index} $borderColor={getCategoryColor(item.category)}>
                                                        <TimeBlock>
                                                            <span>{item.time}</span>
                                                            <small>Início</small>
                                                        </TimeBlock>
                                                        <InfoBlock>
                                                            <p>{item.category}</p>
                                                            <h4>{item.name}</h4>
                                                            <div>
                                                                <FaUser size={10} /> {item.instructor}
                                                            </div>
                                                        </InfoBlock>
                                                    </MobileClassItem>
                                                ))}
                                            </AccordionContent>
                                        )}
                                    </AnimatePresence>
                                </AccordionItem>
                            );
                        })}

                        {/* Mensagem se não houver NENHUMA aula no dia inteiro */}
                        {periods.every(p => getClassesForPeriodAndDay(p.start, p.end, activeDay).length === 0) && (
                            <div style={{ textAlign: 'center', color: '#666', padding: '30px' }}>
                                <p>Nenhuma aula programada para {activeDay}.</p>
                            </div>
                        )}
                    </MobileClassList>
                </MobileContainer>

            </Container>
        </Section>
    );
};

export default Schedule;
