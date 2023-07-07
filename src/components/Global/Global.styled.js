import styled from "styled-components";

const StyledGlobal = styled.div`
    /* margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem; */

    h1{
        color:  #06D6A0;
        margin-bottom: 0;
        font-size: 30px;
        text-align: center;
    }

    h3{
        color: #118AB2;
        margin-top: 0;
        margin-bottom: 4rem;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    }
    
    .kotak{
        width: 300px;
        height: 300px;
        background-color: #fff;
        border-radius: 2rem;
        border: 1px solid #118AB2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.4);
        margin: 0 auto;
        margin-bottom: 20px;
        
    }
    
    h4{
        font-size: 2rem;
    }

    h2{
        font-size: 2.5rem;
        color: black;
    }

    h2, h4{
        margin: 0;
    }


    
    .container{
        margin: 0 auto;
    }

     .kotak:nth-of-type(1) h4 {
         color: #118AB2;
    }
    .kotak:nth-of-type(2) h4 {
        color: green;
    }
    .kotak:nth-of-type(3) h4 {
        color: red;
    }

    /* h4 {
        color: red;
    } */
    
    @media(min-width: 768px) {
        margin-top: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 5rem;
        
        .kotak{
            margin: 20px;
        }
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            
            
            
        }
        h3{
            font-size: 20px;
        }
        h1 {
            font-size {
                font-size: 3.052rem;
            }
        }
    }
    @media(min-width: 982px) {
    }
`;

export default StyledGlobal;