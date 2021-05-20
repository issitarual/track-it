import Header from '../Header';
import styled from 'styled-components';
import Footer from '../Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function Historic () {
    return(
        <>
        <Header />
        <HabitsDiv>
            <MyHabits>
                Histórico
            </MyHabits>
        </HabitsDiv>
        <CalendarDiv>
            <Calendar className="calendar" locale="pt-br" calendarType="US" onClickDay={(value, event) => alert('Clicked', value)}/>
        </CalendarDiv>
        
        <Footer />
        </>
    )
}

const Text = styled.p`
    margin: 20px auto;
    width: 90%;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: #666;
`;

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

const CalendarDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 11px;
`