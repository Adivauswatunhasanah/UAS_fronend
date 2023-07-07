import styled from "styled-components";

const StyledNavbar = styled.nav`

  
    background-color: #06D6A0;
    padding: 1rem;
    text-align: start;
    
    li{
        list-style: none;
        /* margin-left: 2rem;
        margin-right: 3rem;
        margin-top: 0.5rem; */
        color: white;
        padding: 5px;
    }

    .link {
        text-decoration: none;
        color: #fff;
        font-weight: 700;
    }

    h1{
        margin-left: 2rem;
        color: white;
    }
    
    @media(min-width: 768px) {
        ul{
            display: flex;
            width: 30%;
            justify-content: space-between;
        }
       
        display: flex;
        justify-content: space-between;
        background-color: #06D6A0;
        align-items: center;
        
    }
    
`;


export default StyledNavbar;