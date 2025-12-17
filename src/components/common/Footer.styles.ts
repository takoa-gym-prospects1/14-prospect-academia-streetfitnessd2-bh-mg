import styled from 'styled-components';

export const Section = styled.footer`
    background-color: #050505;
    color: #a0a0a0;
    font-size: 16px;
`;

export const FooterTop = styled.div`
    padding: 80px 0;
    border-bottom: 1px solid #222;
`;

export const FooterBottom = styled.div`
    padding: 30px 0;

    @media (max-width: 768px) {
        .row {
            text-align: center;
        }
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Col = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
         flex: 0 0 50%;
         max-width: 50%;
         margin-bottom: 30px;
    }

    @media (max-width: 576px) {
         flex: 0 0 100%;
         max-width: 100%;
    }
`;

export const Widget = styled.div`
    margin-bottom: 30px;
    padding-right: 20px;
`;

export const Logo = styled.div`
    margin-bottom: 20px;

    h2 {
        color: var(--primary-color);
        text-transform: uppercase;
        font-style: italic;
        font-weight: 900;
        margin: 0;
        font-size: 30px;
        line-height: 1;
    }

    span {
        color: #fff;
    }
`;

export const AboutText = styled.p`
    margin-bottom: 20px;
    line-height: 1.6;
`;

export const WidgetTitle = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

export const Links = styled.ul`
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 12px;
    }

    a {
        color: #a0a0a0;
        transition: color 0.3s;
    }

    a:hover {
        color: var(--primary-color);
    }
`;

export const Social = styled.div`
    display: flex;
    gap: 15px;
    justify-content: flex-end;

    a {
        color: #fff;
        font-size: 16px;
        width: 35px;
        height: 35px;
        background: #222;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s;

        &:hover {
            background: var(--primary-color);
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
        margin-top: 20px;
    }
`;

export const Copyright = styled.p`
    margin: 0;

    a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;
        font-weight: 700;

        &:hover {
            color: var(--primary-color);
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
    }
`;

export const ContactInfo = styled.ul`
    list-style: none;
    padding: 0;

    li {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        align-items: center;

        svg {
            color: var(--primary-color);
            font-size: 18px;
            flex-shrink: 0;
        }

        p, a {
            margin: 0;
            color: #a0a0a0;
            text-decoration: none;
            transition: color 0.3s;
        }

        a:hover {
            color: var(--primary-color);
        }
    }
`;
