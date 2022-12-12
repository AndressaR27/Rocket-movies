import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    > header{
        width: 100%;
        height: 14.4rem;
        background: ${({theme}) => theme.COLORS.PINK_LIGHT};
        display: flex;
        align-items: center;

        .back {
            color:${({theme}) => theme.COLORS.PINK} ;
            margin-left: 14.4rem;
            height:40px;
        }
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -8rem auto 0;
    display: flex;
    justify-content: center;

    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    > label {
        position: absolute;
        bottom: 1rem;
        right: 60rem;

        width: 48px;
        height: 48px;

        background-color:${({theme})=> theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;

            color: ${({theme})=> theme.COLORS.BACKGROUND_700} ;
        }
    }
`

export const Form = styled.div`
    max-width: 340px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    > div:nth-child(3){
        margin-top: 2rem;
    }

    > button:nth-child(5){
        margin-top: 2rem;
    }

    
`