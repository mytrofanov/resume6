import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Bottom} from "./components/bottom/Bottom";
import {About} from "./components/about/About";
import {Home} from "./components/Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, HashRouter, withRouter
} from "react-router-dom";
import {ContactInfoAndForm} from "./components/contacts/ContactInfoAndForm";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {SkillPage} from "./components/SkillPage";




export default function App() {

    return (
        <HashRouter>
            <withRouter>
        <Router>
            <ScopedCssBaseline>
                <div className="container">

                    <Navbar/>

                    <div className="right_column" id="right_column">

                        <Header/>
                        <div className="infoBlock">
                            <Switch>


                                <Route path='/home' component={Home}/>

                                <Route path='/portfolio'>
                                    <Portfolio />
                                    <ContactInfoAndForm/>
                                </Route>

                                <Route path='/about' component={About}/>

                                <Route path='/education' >
                                <Education/>
                                <ContactInfoAndForm/>
                                </Route>

                              <Route path='/experience' >
                                <Experience/>
                                <ContactInfoAndForm/>
                                </Route>

                                <Route path='/skills' >
                                <SkillPage/>
                                <ContactInfoAndForm/>
                                </Route>



                            </Switch>
                        </div>
                        <Route path='/contact' component={ContactInfoAndForm }/>
                        <Route  path='/' render={() => <Redirect to={'/home'}/>}/>

                        <div className="BottomOfBottom">
                            <Bottom/>
                        </div>
                    </div>


                </div>
            </ScopedCssBaseline>
        </Router>
            </withRouter>
        </HashRouter>
    )
}


