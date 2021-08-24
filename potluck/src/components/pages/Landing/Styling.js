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
        border: 1px solid green;
    }

    .form {
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 10px;
        width: 50%;
        border: 1px solid red;
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
    
`
export default StyledRegistration;