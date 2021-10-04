import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Portfolio} from "./components/portfolio/Portfolio";
import {MyWorks} from "./components/portfolio/data";
import FeedbackForm from "./components/feedback/FeedbackForm";
import {ContactInfo} from "./components/contacts/ContactInfo";
import {Bottom} from "./components/bottom/Bottom";
import {About} from "./components/about/About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <ScopedCssBaseline>
                <div className="container">

                    <Navbar/>

                    <div className="right_column" id="right_column">

                        <Header/>
                        <div className="infoBlock">
                            <Switch>
                                <Route exact path='/' render={()=> <Redirect to={"/about"}/>}/>

                                <Route path="/portfolio">
                                    <Portfolio MyWorks={MyWorks}/>
                                </Route>
                                <Route path="/about">

                                    <About/>

                                </Route>


                            </Switch>
                        </div>

                        <div className="HomePageBottom">
                            <div className="feedback">
                                <FeedbackForm/>
                            </div>
                            <div className="contact">
                                <ContactInfo/>
                            </div>

                        </div>
                        <div className="BottomOfBottom">
                            <Bottom/>
                        </div>
                    </div>


                </div>
            </ScopedCssBaseline>
        </Router>
    )
}


