import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Portfolio} from "./components/portfolio/Portfolio";
import {MyWorks} from "./components/portfolio/data";

export default function App() {
    return (
        <ScopedCssBaseline>
            <div className="container">

                <Navbar/>

                <div className="right_column" id="right_column">

                    <Header/>
                    <div className="infoBlock">
                        <Portfolio MyWorks={MyWorks}/>
                    </div>
                </div>

            </div>
        </ScopedCssBaseline>
    )
}


