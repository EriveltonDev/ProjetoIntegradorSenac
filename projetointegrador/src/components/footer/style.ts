import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 75px;
    background-color: rgb(0, 103, 187);

    a div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 5px;
    font-weight: bold;
    }

    a {
    text-decoration:none;
    cursor: pointer;
    }

    a span {
    color: white;
    font-size: 1.8rem;
    }
`