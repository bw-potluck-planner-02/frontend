import styled from 'styled-components';

const StyledRegistration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: center;
    margin: 20px;
    height: 80vh;

    .introduction {
        border: 1px solid black;
        padding: 10px;
    }

    .form {
        border: 1px solid black;
        padding: 10px;
    }

    .registration {
        border: 1px red solid;
        display: flex;
        flex-direction: column;
        height: 500px;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .input-box {
        border: 1px solid purple;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 300px;
        
    }
    
`
export default StyledRegistration;