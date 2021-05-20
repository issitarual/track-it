import Header from '../Header';
import styled from 'styled-components';
import Footer from '../Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { useState } from 'react'

export default function Historic () {
    const [date, setDate] = useState(new Date());
    return(
        <>
        <Header />
        <HabitsDiv>
            <MyHabits>
                Histórico
            </MyHabits>
        </HabitsDiv>
            <Calendar 
                onChange={setDate}
                value={date}
                className="calendar" 
                locale="pt-br" 
                calendarType="US" 
                onClickDay={(value, event) => alert('Clicked', value)}
            />      
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
    margin: auto;
    margin-top: 100px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyHabits = styled.h2`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126BA5;
`;