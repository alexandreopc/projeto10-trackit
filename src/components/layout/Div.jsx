import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 68px 36px;

    background-color: #FFF;
        img{
            width: 180px;
            height: 180px;
        }
        
        input{
            width: 303px;
            height: 45px;
            margin-bottom: 6px;
            padding: 0 10px;

            font-size: 20px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;

            ::placeholder{
            color: #DBDBDB;
            }
        }

        button{
            width: 303px;
            height: 45px;
            margin-bottom: 25px;

            color: #FFF;
            font-size: 21px;
            background: #52B6FF;
            border-radius: 5px;
            border: none;
        }
`;
export default Div;
