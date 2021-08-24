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
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
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