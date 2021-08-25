import styled from 'styled-components';

const StyledRegistration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
    margin: 20px;
    height: 80vh;
    width: 95%;
    border: 1px solid black;
    
    img {
        width: 400px;
        height: 300px;
        margin-top: 20px;
    }

    .introduction {
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 45px;
        width: 50%;
        border: 1px solid red;
    }

    .form {
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        width: 50%;
        border: 3px solid green;
    }
    .input-box {
        height: 60vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: 2px solid pink;
    }
    input {
        text-align: center;
    }

    /* media queries */
    @media (max-width: 900px){
        img {
            height: 250px;
            width: 300px;
        }
    }

    @media (max-width: 650px){
        img {
            height: 200px;
            width: 250px;
        }
    }

    @media (max-width: 500px) {
        img{
            height: 150px;
            width: 200px;
        }
    }
    
`
export default StyledRegistration;