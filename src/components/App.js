import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserContext from '../contexts/UserContexts';
import ProgressContext from '../contexts/ProgressContexts';
import Home from './Home/Home';
import Register from './Register/Register';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import Historic from './Historic/Historic';
import '../css/reset.css';
import '../css/style.css';

export default function App(){
    const [user, setUser] = useState("");
    const [progress, setProgress] = useState(0);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <ProgressContext.Provider value = {{progress, setProgress}}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/cadastro" exact>
                            <Register />
                        </Route>
                        <Route path="/habitos" exact>
                            <Habits />
                        </Route>
                        <Route path="/hoje" exact>
                            <Today />
                        </Route>
                        <Route path="/historico" exact>
                            <Historic />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ProgressContext.Provider>
        </UserContext.Provider>
    )
}