import styled from "styled-components";

const StyledHero = styled.div`
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem; */
    text-align: center;
    
    .kiri{
        margin: 0 auto;
    }

    .kanan {
        margin: 0 auto;
    }
    
    h1{
        color:  #06D6A0;
        margin-bottom: 0;
        font-size: 3.052rem;
    }

    h3{
        color: #118AB2;
        margin-top: 0;
        margin-bottom: 2rem;
        font-size: 15px;
    }
    
    p{
        margin-bottom: 3rem;
        padding: 1rem;
        color: #64748B;
        font-size: 1.2rem;
    }

    button{
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #06D6A0;
        color: white;
        margin-bottom: 1rem;
    }

    img{
        border-radius: 2rem;
        max-width: 100%;
    }
    @media(min-width: 768px) {
    }
    @media(min-width: 982px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 3rem;
        text-align: left;
        .kiri{
            margin-left: 3rem;
            flex-basis: 40%;
        }
        h3{
            color: #118AB2;
            margin-top: 0;
            margin-bottom: 2rem;
            font-size: 1.953rem
        }
        p {
            padding: 0;
        }
       
    }
    `;

export default StyledHero;
