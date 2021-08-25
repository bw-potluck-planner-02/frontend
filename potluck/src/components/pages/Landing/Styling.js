import styled from 'styled-components';

const StyledRegistration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
    margin: 20px;
    height: 80vh;
    width: 95%;
    
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
    }

    .form {
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 10px;
        width: 50%;
    }

    .registration {
        height: 500px;
        display: flex;
        flex-direction: column;
    }
    .input-box {
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

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