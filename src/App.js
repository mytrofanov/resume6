import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Bottom} from "./components/bottom/Bottom";
import {Home} from "./components/Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, BrowserRouter
} from "react-router-dom";
import {ContactInfoAndForm} from "./components/contacts/ContactInfoAndForm";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {SkillPage} from "./components/SkillPage";
import {useState} from "react";

export const Context = React.createContext('English');

export default function App() {
    const [language, setLanguage] = useState('English')

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Context.Provider value={language}>
            <Router>
                <ScopedCssBaseline>
                    <div className="container">
                           <Navbar language={language}/>
                            <div className="right_column" id="right_column">
                                <Header setLanguage={setLanguage} language={language}/>
                                <div className="infoBlock">
                                    <Switch>
                                        <Route path='/home' component={Home}/>
                                        <Route path='/portfolio'>
                                            <Portfolio/>
                                            <ContactInfoAndForm/>
                                        </Route>
                                        {/*<Route path='/about' component={About}/>*/}
                                        <Route path='/education'>
                                            <Education/>
                                            <ContactInfoAndForm/>
                                        </Route>
                                        <Route path='/experience'>
                                            <Experience/>
                                            <ContactInfoAndForm/>
                                        </Route>

                                        <Route path='/skills'>
                                            <SkillPage/>
                                            <ContactInfoAndForm/>
                                        </Route>
                                    </Switch>
                                </div>
                                <Route path='/contact' component={ContactInfoAndForm}/>
                                <Route path='/' render={() => <Redirect to={'/skills'}/>}/>

                                <div className="BottomOfBottom">
                                    <Bottom/>
                                </div>
                            </div>
                    </div>
                </ScopedCssBaseline>
            </Router>
            </Context.Provider>

        </BrowserRouter>
    )
}


