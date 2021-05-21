import Header from '../Header';
import styled from 'styled-components';
import Footer from '../Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react'
import UserContext from '../../contexts/UserContexts';
import axios from 'axios';
import CalendarClick from './CalendarClick';


export default function Historic () {
    const [date, setDate] = useState(new Date());
    const { user }= useContext(UserContext);
    const [items, setItems] = useState([]);
    const now = dayjs().format('DD/MM/YYYY');
    const days = items.map((d, i) => d.day);
    const [state, setstate] = useState(false);
    const [information, setInformation] = useState("");

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config);

		request.then(resposta => {
			setItems(resposta.data);
		});

        request.catch(error => alert("Erro! Tente novamente :/"))
	}, []);

    const mark = items.map((d, i) => d.day)
    console.log(mark);

    console.log(items);
    
    console.log(now)
    return(
        <>
        <Header />
        <HabitsDiv>
            <h2>Histórico</h2>
        </HabitsDiv>
            <Calendar 
                onChange={setDate}
                value={date}
                className="calendar" 
                locale="pt-br" 
                calendarType="US" 
                onClickDay={(value, event) => {
                    if(days.find(x => x === dayjs(value).format('DD/MM/YYYY'))){
                    setstate(true)
                    let chosen = [];
                    chosen = items.find((item,i) => item.day === dayjs(value).format('DD/MM/YYYY'))
                    let habitChosen = [];
                    for(let i = 0; i < chosen.habits.length; i++){
                        chosen.habits[i].done? habitChosen += `-${chosen.habits[i].name}: Feito! \n`: habitChosen +=`- ${chosen.habits[i].name}: Faltou :(\n`
                    }
                    setInformation([dayjs(value).format('DD/MM/YYYY'), habitChosen])}
                }}
                tileClassName={({ date, view }) => {
                    let habit = [];
                    let doneHabit = [];
                    if(days.find(x => x === dayjs(date).format('DD/MM/YYYY'))){       
                        if(dayjs(date).format('DD/MM/YYYY') === now){
                            return 'today';
                        }
                        else{
                            for(let i = 0; i < items.length; i++){
                                if(items[i].day === dayjs(date).format('DD/MM/YYYY'))
                                habit = items[i].habits;
                                for (let j = 0; j < habit.length; j++){
                                    doneHabit.push(habit[i].done)                                    
                                }  
                            }
                            return `${doneHabit.reduce((acc, item) => acc && item, true)}`
                        }
                    }
                }}
            />      
            <CalendarClick state = {state} setstate = {setstate} information = {information}/> 
        <Footer />
        </>
    )
    function clickWeekday (array){
        for(let i = 0; i < array.length; i++){
            console.log(array[i].done)
        }
    }
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
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        color: #126BA5;
    }
`;
