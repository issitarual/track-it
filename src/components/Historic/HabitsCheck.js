import styled from 'styled-components';
import { CheckmarkOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'

export default function HabitsCheck ({habitName, done}){
    return(
        <>
        <Done state = {done}>
            <h3>{habitName}</h3>
            <p>{done? "Hábito concluído!": "Hábito não concluído :("}</p>
        </Done>
        <Check>
            {done? 
            <CheckmarkOutline
                color={'#00000'} 
                height="250px"
                width="250px"
            />:
            <CloseOutline
                color={'#00000'} 
                height="250px"
                width="250px"
            />
            }
        </Check>
        <Div/>
        </>
    )
}

const Done = styled.div`
    margin-top: 0px!important;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: ${props => props.state? "green": "red"};
        margin: 5px;
    }
    h3{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #126BA5; 
    }
`;

const Check = styled.div`

`
const Div = styled.div`
    height: 110px;
`;
