import styled from 'styled-components'

export const Header = styled.header`

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 50px;
    background-color: white;
    box-shadow: 0px 4px 10px 0px rgb(139, 139, 139);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    @media (max-width: 422px) {
         padding:0 10px;
    }

    a {
        text-decoration:none;
        margin-top: 6px;

        span {
            color: rgb(0, 168, 98);
            font-size: 1.8rem;
        }
    }

    div {
        width: 100%;
        padding-right: 110px;
        position: relative;

        @media (max-width: 422px) {
            padding-right: 60px;
        }

        input {
            width: 100%;
            margin-left: 10px;
            height: 32px;
            border-radius: 6px;
            padding: 0 20px;
            border: 1px solid #b7b7b7;
            background-color: transparent;

            @media (max-width: 422px) {
                padding-right: 0;
            }
        }

        p {
            position: absolute;
            right: 20px;
            top: 6px;
            font-weight: bold;
            color: rgb(0, 168, 98);
            cursor: pointer;

            @media (max-width: 422px) {
                right: -3px;
                font-size: 13px;
                top: 9px;
            }
        }
    }
`

export const Pesquisa = styled.div`
        background-color: white;
        position: fixed;
        top: 50px;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 200;
        padding-top: 20px;
        border-top: 1px solid rgb(0, 168, 98);

        a {
            text-decoration: none;
        }

        ul {
            list-style: none;

            li {
                max-width: 300px;
                margin: 0 auto;
                display: flex;
                gap: 8px;
                justify-content: start;
                color: black;
                display: flex;

                span {
                    opacity: 0;
                    color: #b7b7b7;
                    margin-right: 5px;
                    font-size: 20px;
                }
            }
        }

            p {
                max-width: 300px;
                margin: 0 auto;
                display: flex;
                gap: 8px;
                justify-content: start;
                color: #b7b7b7;
                display: flex;

                span {
                    color: #b7b7b7;
                    margin-right: 5px;
                    font-size: 20px;
                }
            }
`