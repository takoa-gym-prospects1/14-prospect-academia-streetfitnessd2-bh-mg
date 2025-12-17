// ==================================================================================
// CENTRAL DE IMAGENS DO SITE
// Organize aqui todas as imagens utilizadas no projeto.
// As imagens devem estar na pasta 'public/images'.
// ==================================================================================
const AssetImages = {
    hero: {
        background: {
            src: "/images/hero-desktop.webp",
            mobileSrc: "/images/hero-mobile.webp",
            dim: "1920x1080 (Desktop) / 1080x1920 (Mobile) - Imagem de impacto, alta qualidade"
        }
    },
    services: {
        musculacao: {
            src: "/images/musculacao.webp",
            dim: "600x800"
        },
        hidro: {
            src: "/images/hidro.webp",
            dim: "600x800"
        },
        funcional: {
            src: "/images/funcional.webp",
            dim: "600x800"
        },
        alongamento: {
            src: "/images/alongamento.webp",
            dim: "600x800"
        },
        natacao: {
            src: "/images/natacao.webp",
            dim: "600x800"
        },
        ciclismo: {
            src: "/images/ciclismo.webp",
            dim: "600x800"
        },
        ritbox: {
            src: "/images/ritbox.webp",
            dim: "600x800"
        },
        abdominal: {
            src: "/images/abdominal.webp",
            dim: "600x800"
        }
    },
    health: {
        before: {
            src: "/images/before.webp",
            dim: "600x800 - Foto de 'Antes', vertical"
        },
        after: {
            src: "/images/after.webp",
            dim: "600x800 - Foto de 'Depois', vertical"
        }
    },
    schedule: {
        background: {
            src: "/images/schedule-bg.webp",
            dim: "1920x1080 - Imagem de fundo suave/escurecida"
        }
    },
    bmi: {
        background: {
            src: "/images/bmi-bg.webp",
            dim: "1920x1080 (Ou recorte lateral) - Foco no lado direito"
        },
        mobileBackground: {
            src: "/images/bmi-bg-mobile.webp",
            dim: "750x1600+ (Retrato Longo) - A seção é muito alta no mobile, use uma imagem alongada."
        }
    },

    testimonials: {
        background: {
            src: "/images/testimonials-bg.webp",
            dim: "1920x1080 - Fundo para seção de depoimentos"
        },
        person1: { src: "/images/testimonial1.webp", dim: "150x150 - Foto de perfil (Rosto)" },
        person2: { src: "/images/testimonial2.webp", dim: "150x150 - Foto de perfil (Rosto)" },
        person3: { src: "/images/testimonial3.webp", dim: "150x150 - Foto de perfil (Rosto)" }
    },
    brands: {
        brand1: { src: "/images/brand-1.webp", dim: "150x50 - Logo de parceiro" },
        brand2: { src: "/images/brand-2.webp", dim: "150x50 - Logo de parceiro" },
        brand3: { src: "/images/brand-3.webp", dim: "150x50 - Logo de parceiro" },
        brand4: { src: "/images/brand-4.webp", dim: "150x50 - Logo de parceiro" },
        brand5: { src: "/images/brand-5.webp", dim: "150x50 - Logo de parceiro" }
    },
    seo: {
        preview: {
            src: "/images/preview.webp",
            dim: "1200x630 - Imagem de compartilhamento (Facebook/WhatsApp)"
        }
    }
};

export const Content = {
    // ==================================================================================
    // CONFIGURAÇÕES GERAIS, TEMA E MÓDULOS
    // ==================================================================================
    theme: {
        colors: {
            primary: "#E73237", // Cor principal (botões, destaques, ícones) - Ex: Rosa vibrante
            secondary: "#1a1a1a", // Cor secundária
            background: "#0b0b0b", // Cor de fundo principal (Dark mode)
            cardBackground: "#141414", // Cor de fundo de cartões/seções
            text: "#ffffff", // Cor do texto principal
            textMuted: "#a0a0a0", // Cor do texto secundário/parágrafos
        },
        fonts: {
            main: "'Barlow', sans-serif", // Fonte principal importada no CSS
        }
    },

    seo: {
        title: "Street Fitness Academia - Sua melhor forma em 2026",
        description: "Academia completa em BH com musculação, aulas coletivas e acompanhamento personalizado. Comece sua transformação hoje!",
        keywords: "academia, fitness, musculação, crossfit, yoga, saúde, emagrecimento, belo horizonte, BH",
        language: "pt-br",
        image: AssetImages.seo.preview.src
    },

    contact: {
        address: "Av. Dr. Cristiano Guimarães, 1670 - Planalto, Belo Horizonte - MG",
        mapsLink: "https://maps.app.goo.gl/3t2r9AZSRWeVrGBj7",
        phone: "(31) 3427-4769",
        whatsapp: "(31) 98364-8359",
        whatsappRaw: "553183648359",
        whatsappMessage: "Olá! Vim pelo site e gostaria de me matricular na academia.",
        email: "contato@streetfitness.com.br"
    },

    // ==================================================================================
    // BARRA DE NAVEGAÇÃO
    // ==================================================================================
    navbar: {
        logo: {
            text: "STREET ",
            highlight: "FITNESS",
            img: ""
        },
        links: [
            { name: 'Home', href: '#home', sectionKey: 'hero' },
            { name: 'Modalidades', href: '#services', sectionKey: 'services' },
            { name: 'Sobre Nós', href: '#health', sectionKey: 'health' },
            { name: 'Horários', href: '#schedule', sectionKey: 'schedule' },
            { name: 'Planos', href: '#pricing', sectionKey: 'pricing' },
            { name: 'Calcular meu IMC', href: '#bmi', sectionKey: 'bmi' },
        ],
        actions: {
            loginText: "Login",
            joinText: "MATRICULE-SE",
            joinMessage: "Olá! Vim pelo site e gostaria de me matricular na academia."
        }
    },

    // ==================================================================================
    // SEÇÕES (MÓDULOS)
    // ==================================================================================

    hero: {
        enabled: true,
        backgroundImage: AssetImages.hero.background.src,
        mobileBackgroundImage: AssetImages.hero.background.mobileSrc,
        title: {
            line1: "Comece 2026 Em Forma:",
            highlight: "Garanta Sua Matrícula Com Desconto"
        },
        subtitle: "Equipamentos modernos, professores com CREF e ambiente climatizado. Do iniciante ao avançado, temos o treino ideal pra você.",
        microText: ["✓ Sem taxa de matrícula", "✓ Cancele quando quiser"],
        buttonText: "QUERO CONHECER A ACADEMIA"
    },

    featuresStrip: {
        enabled: true,
        items: [
            { icon: "snowflake", text: "Ambiente Climatizado" },
            { icon: "wifi", text: "Wi-Fi Grátis" },
            { icon: "parking", text: "Estacionamento Próprio" },
            { icon: "shower", text: "Vestiários Completos" }
        ]
    },

    services: {
        enabled: true,
        // (Modalidades)
        items: [
            {
                id: 1,
                title: 'MUSCULAÇÃO',
                description: 'Força, definição e resistência com treinos completos e acompanhamento profissional.',
                image: AssetImages.services.musculacao.src,
                iconType: 'muscle' // 💪
            },
            {
                id: 2,
                title: 'HIDROGINÁSTICA',
                description: 'Exercícios de baixo impacto para melhorar condicionamento, mobilidade e saúde.',
                image: AssetImages.services.hidro.src,
                iconType: 'water' // 💧
            },
            {
                id: 3,
                title: 'FUNCIONAL',
                description: 'Treinos dinâmicos que aumentam agilidade, resistência e força no dia a dia.',
                image: AssetImages.services.funcional.src,
                iconType: 'fire' // 🔥
            },
            {
                id: 4,
                title: 'ALONGAMENTO',
                description: 'Mais flexibilidade, menos tensões musculares e melhor mobilidade corporal.',
                image: AssetImages.services.alongamento.src,
                iconType: 'yoga' // 🧘
            },
            {
                id: 5,
                title: 'NATAÇÃO INFANTIL',
                description: 'Desenvolvimento motor, segurança aquática e diversão para crianças.',
                image: AssetImages.services.natacao.src,
                iconType: 'swim' // 🏊
            },
            {
                id: 6,
                title: 'CICLISMO INDOOR',
                description: 'Alta queima calórica e condicionamento cardiovascular em aulas intensas.',
                image: AssetImages.services.ciclismo.src,
                iconType: 'bike' // 🚴
            },
            {
                id: 7,
                title: 'RITBOX',
                description: 'Treino animado que combina ritmo, cardio e força em aulas envolventes.',
                image: AssetImages.services.ritbox.src,
                iconType: 'music' // 🎵
            },
            {
                id: 8,
                title: 'ABDOMINAL',
                description: 'Fortalecimento do core para mais estabilidade, postura e desempenho físico.',
                image: AssetImages.services.abdominal.src,
                iconType: 'core' // ⚡
            }

        ]
    },

    health: {
        enabled: true,
        // (Sobre Nós / Por que Treinar)
        watermarkText: "STREET FITNESS",
        title: {
            line1: "Por Que Treinar na",
            highlight: "Street Fitness?"
        },
        // O texto original foi substituído por cards de benefícios abaixo.
        // Vou manter 'description' como fallback ou intro se necessário, mas o foco são os cards.
        description: "Mais do que uma academia, somos seu parceiro na busca por saúde e bem-estar.",

        cards: [
            {
                title: "EQUIPAMENTOS MODERNOS",
                text: "Mais de 50 aparelhos de musculação, esteiras, bicicletas e área de funcional completa. Manutenção semanal para sua segurança.",
                icon: "dumbbell"
            },
            {
                title: "PROFESSORES CERTIFICADOS",
                text: "Equipe de educadores físicos com CREF ativo, especializados em treino personalizado e acompanhamento individualizado.",
                icon: "certificate"
            },
            {
                title: "AMBIENTE CLIMATIZADO",
                text: "Ar-condicionado em todas as áreas, vestiários com chuveiro, armários rotativos e Wi-Fi gratuito para você treinar com conforto.",
                icon: "snowflake"
            }
        ],

        buttonText: "Quero Conhecer a Academia",
        images: {
            before: AssetImages.health.before.src,
            after: AssetImages.health.after.src
        }
    },

    schedule: {
        enabled: true,
        backgroundImage: AssetImages.schedule.background.src,
        title: {
            line1: "Horários das",
            highlight: "Aulas"
        },
        subtitle: "Aulas em grupo todos os dias. Escolha o melhor horário para sua rotina!",
        days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        // Adicione ou remova horários aqui. Se um horário não existir neste array, ele não aparecerá no site.
        table: [
            {
                time: "06:25",
                classes: {
                    "Segunda": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Terça": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quarta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quinta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Sexta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "07:00",
                classes: {
                    "Segunda": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Terça": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Quarta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Quinta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Sexta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" }
                }
            },
            // Workaround para duas aulas no mesmo horário: Linha duplicada visualmente
            {
                time: "07:00", // Segunda linha para 07:00
                classes: {
                    "Segunda": { name: "Funcional", category: "Funcional", instructor: "Instrutor" },
                    "Quarta": { name: "Funcional", category: "Funcional", instructor: "Instrutor" },
                    "Sexta": { name: "Funcional", category: "Funcional", instructor: "Instrutor" }
                }
            },
            {
                time: "07:30",
                classes: {
                    "Segunda": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Terça": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quarta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quinta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Sexta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "08:00",
                classes: {
                    "Segunda": { name: "Abdominal & Along.", category: "Abdominal", instructor: "Instrutor" }, // Agrupado para caber
                    "Quarta": { name: "Abdominal & Along.", category: "Abdominal", instructor: "Instrutor" },
                    "Sexta": { name: "Abdominal & Along.", category: "Abdominal", instructor: "Instrutor" }
                }
            },
            {
                time: "09:00",
                classes: {
                    "Segunda": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Terça": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Quarta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Quinta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Sexta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Sábado": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "10:20",
                classes: {
                    "Terça": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Quinta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" }
                }
            },
            {
                time: "14:15",
                classes: {
                    "Segunda": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quarta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Sexta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "16:15",
                classes: {
                    "Segunda": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Terça": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Quarta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Quinta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" },
                    "Sexta": { name: "Hidroginástica", category: "Hidro", instructor: "Instrutor" }
                }
            },
            {
                time: "18:15",
                classes: {
                    "Segunda": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Terça": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Quarta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Quinta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" },
                    "Sexta": { name: "Natação Infantil", category: "Natação", instructor: "Instrutor" }
                }
            },
            {
                time: "18:20",
                classes: {
                    "Terça": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quinta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "18:30",
                classes: {
                    "Segunda": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" },
                    "Quarta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            {
                time: "19:15",
                classes: {
                    "Segunda": { name: "Ritbox", category: "Ritbox", instructor: "Instrutor" },
                    "Terça": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }, // E Funcional tb? "terça e quinta feira as 19h15" (Funcional) + "terça e quinta feira (horários: 18h20 e 19h15)" (Ciclismo). Conflito. 
                    "Quarta": { name: "Ritbox", category: "Ritbox", instructor: "Instrutor" },
                    "Quinta": { name: "Ciclismo Indoor", category: "Ciclismo", instructor: "Instrutor" }
                }
            },
            // Linha extra para o conflito das 19:15 (Funcional)
            {
                time: "19:15",
                classes: {
                    "Terça": { name: "Funcional", category: "Funcional", instructor: "Instrutor" },
                    "Quinta": { name: "Funcional", category: "Funcional", instructor: "Instrutor" }
                }
            }
        ]
    },

    pricing: {
        enabled: true,
        title: {
            line1: "Escolha Seu",
            highlight: "Plano"
        },
        subtitle: "Sem taxa de matrícula. Cancele quando quiser.",
        plans: [
            {
                name: 'Anual',
                price: '89,99',
                period: '/mês',
                features: [
                    'Musculação + Aulas (Hidroginástica, Funcional, Ritbox, Abdominal & Alongamento)',
                    'Menor preço garantido',
                    '12x no cartão',
                    'Fidelidade de 12 meses'
                ],
                isPopular: true,
                badgeText: "MAIS ESCOLHIDO",
                buttonText: "Quero o Anual"
            },
            {
                name: 'Semestral',
                price: '99,99',
                period: '/mês',
                features: [
                    'Musculação + Aulas completas',
                    'Ótimo custo-benefício',
                    '6x no cartão',
                    'Fidelidade de 6 meses'
                ],
                isPopular: false,
                badgeText: "MAIS VANTAGEM",
                buttonText: "Quero o Semestral"
            },
            {
                name: 'Trimestral',
                price: '109,99',
                period: '/mês',
                features: [
                    'Musculação + Aulas completas',
                    'Economia no curto prazo',
                    '3x no cartão',
                    'Fidelidade de 3 meses'
                ],
                isPopular: false,
                badgeText: "IDEAL PARA COMEÇAR",
                buttonText: "Quero o Trimestral"
            },
            {
                name: 'Mensal',
                price: '149,99',
                period: '/mês',
                features: [
                    'Musculação + Aulas completas',
                    'Sem fidelidade',
                    'Renovação mensal',
                    'Pagamento flexível'
                ],
                isPopular: false,
                badgeText: "SEM COMPROMISSO",
                buttonText: "Quero o Mensal"
            }
        ]
    },

    bmi: {
        enabled: true,
        backgroundImage: AssetImages.bmi.background.src,
        mobileBackgroundImage: AssetImages.bmi.mobileBackground.src, // Altere para a imagem mobile desejada
        tableTitle: {
            line1: "Tabela",
            highlight: "IMC"
        },
        formTitle: {
            line1: "Calcule Seu ",
            highlight: "IMC"
        },
        description: "Insira seus dados abaixo e veja como está seu Índice de Massa Corporal.",
        resultTitle: "RECOMENDAÇÃO:",
        resultText: "Baseado no seu IMC, recomendamos o Plano Anual com foco em Musculação 3x/semana e Funcional 2x/semana.",
        buttonText: "Agendar Avaliação Física Gratuita"
    },



    testimonials: {
        enabled: true,
        backgroundImage: AssetImages.testimonials.background.src,
        items: [
            {
                id: 1,
                text: "Comecei há 6 meses e já perdi 8kg! Os professores acompanham cada treino e ajustam conforme minha evolução. Melhor decisão que tomei!",
                name: "Josué Costa",
                role: "Analista de TI, 34 anos",
                image: AssetImages.testimonials.person1.src
            },
            {
                id: 2,
                text: "Academia completa, limpa e com equipamentos sempre funcionando. O ambiente é motivador e nunca fica lotada. Recomendo!",
                name: "Carlos Eduardo",
                role: "Marceneiro, 56 anos",
                image: AssetImages.testimonials.person2.src
            },
            {
                id: 3,
                text: "As aulas de Zumba são incríveis! Parece que nem estou malhando de tão divertido. Emagreci 8kg em 4 meses dançando!",
                name: "Juliana Mendes",
                role: "Professora, 23 anos",
                image: AssetImages.testimonials.person3.src
            }
        ]
    },

    brands: {
        enabled: false,
        items: [
            AssetImages.brands.brand1.src,
            AssetImages.brands.brand2.src,
            AssetImages.brands.brand3.src,
            AssetImages.brands.brand4.src,
            AssetImages.brands.brand5.src
        ]
    },

    footer: {
        enabled: true,
        title: "STREET FITNESS",
        description: "Academia completa especializada em musculação. Equipamentos modernos e professores certificados para você alcançar seus objetivos com segurança.",

        logo: {
            text: "STREET ",
            highlight: "FITNESS"
        },

        hours: [
            "Seg-Sex: 5h30-22h",
            "Sab: 8h-13h",
            "Dom: 9h-12h"
        ],

        socials: {
            instagram: "https://instagram.com/academiastreetfitness",
            facebook: "https://facebook.com/academiastreetfitness",
            youtube: "https://youtube.com/academiastreetfitness"
        },

        copyright: "Copyright © 2025 Street Fitness. Todos os direitos reservados.",
        developerName: "TAKOA",
        developerUrl: "https://takoadigital.com.br"
    }
};
