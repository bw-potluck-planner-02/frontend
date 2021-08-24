import styled from 'styled-components';

const StyledRegistration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: center;
    margin: 20px;
    height: 80vh;
    border: 1px solid purple;
    

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
        margin-right: 50px;
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