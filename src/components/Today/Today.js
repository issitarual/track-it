import Header from '../Header'
import styled from 'styled-components';
import Footer from '../Footer';
import dayjs from 'dayjs';
import { CheckmarkOutline } from 'react-ionicons';



export default function Today (){
    const now = dayjs().format('DD/MM/YYYY');
    const weekday = dayjs().day();
    const weekdayName = [
        {name: "Domingo", id: 0},
        {name: "Segunda", id: 1},
        {name: "Terça", id: 2},
        {name: "Quarta", id: 3},
        {name: "Quinta", id: 4},
        {name: "Sexta", id: 5},
        {name: "Sábado", id: 6}
    ];
    const found = weekdayName.find( e => e.id === weekday);

    return(
        <>
            <Header />
            <HabitsDiv>
                <MyHabits>
                   {found.name}, {now}
                </MyHabits>
            </HabitsDiv>
            <Text value = {true}>{true? "Nenhum hábito concluído ainda": "x% dos hábitos concluídos"}</Text>
            <Habits>
                <Task>
                    <h1>Tarefa!</h1>
                    <p>Sequência atual: <span>x dias</span></p>
                    <p>Seu recorde: <span>y dias</span></p>
                </Task>
                <Checkmark>
                    <CheckmarkOutline
                    color={'#fff'} 
                    height="60px"
                    width="60px"
                    />
                </Checkmark>
            </Habits>
            < Footer />
        </>
    )
}

const HabitsDiv = styled.div`
    margin-top: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyHabits = styled.h2`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126BA5;
`;

const Text = styled.p`
    margin: 20px auto;
    width: 90%;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: ${props => props.value? "#666": "#8FC549"};
`;

const Habits = styled.div`
    width: 90%;
    margin: auto;
    padding: 13px 13px 17px 15px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Checkmark = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`

const Task = styled.div`
        color: #666;
        font-family: 'Lexend Deca', sans-serif;

    h1{
        margin-bottom: 7px;
        font-size: 20px;
    }
    span, p{
        font-size: 13px;
        margin-bottom: 5px;
    }
`