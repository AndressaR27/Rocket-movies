import styled from 'styled-components';
import backgroundImg from "../../assets/BackgroundImg.svg"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form `
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        color:${({theme}) => theme.COLORS.GRAY_100} ;
    }

    > button {
        margin-top: 1.6rem;
        
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(35%);
    
`