import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    overflow-y: hidden;

    .movieList-wrapper{
        height: 100vh;
        margin: 2.4rem 8rem;
        padding-right: 2rem;
        overflow-y: scroll;
    
         &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px gray;
        border-radius: 10px;
        }

/* Handle */
        &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        }
    }

    .margin-style{
        margin-top: 15rem;
    }
`

 export const Nav = styled.div`
    margin: 2.4rem 8rem;
    display: flex;
    justify-content: space-between;

    > h1 {
        font-size: 3.2rem;
        line-height: 4.2rem;
    }

    > button {
        width: 20.7rem;
    }
 `
