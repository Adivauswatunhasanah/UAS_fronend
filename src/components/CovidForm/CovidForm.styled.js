import styled from "styled-components";

const StyledCovidForm = styled.div`
    margin: 3rem;
    
    label{
        margin-top: 1rem;
    }

    .kanan{
        
        margin: 20px auto;
        width: 100%;
    }
    .kiri {
        margin: 10px auto;
        width: 100%;
        display: flex;
        justify-content: center;

    }
    
    
    h3{
        color: #06D6A0;
        margin-top: 0;
        margin-bottom: 2rem;
        font-size: 1.953rem;
        text-align: center;
    }

    p{
        margin-bottom: 3rem;
        color: #64748B;
        font-size: 1.2rem;
    }

    button{
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #06D6A0;
        color: white;
        width: 100%;
        margin-top: 3rem;
    }
    
    img{
        border-radius: 2rem;
        max-width: 100%;
        
        /* margin-left: 3rem; */
    }
    
    .form{
        padding: 1rem 0.5rem;
        width: 100%;
        border: 1px solid black;
    }
    
    span{
        color: red;
    }

    label {
        margin-bottom: 2rem;
    }

    input {
        border: 1px solid black;
    }
    @media(min-width: 768px) {
        
        .kiri{
            flex-basis: 40%;
            margin: 20px auto;
            
        }
        .kanan {
            max-width: 70%;
        }
        img{
            border-radius: 2rem;
            margin-left: 3rem;
        }
    }
    @media(min-width: 982px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        .kanan{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 3rem;
            flex-basis: 50%;
        }
        
        .kiri {
            flex-basis: 60%;

        }
        
    }
    @media(min-width: 1200px) {

    }
`;

export default StyledCovidForm;