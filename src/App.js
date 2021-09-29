import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";

export default function App() {
    return (
        <ScopedCssBaseline>
            <div className="container">

                <Navbar/>

                <div className="right_column" id="right_column">

                    <Header/>

                    <div className="portfolio_block" id="portfolio_block">
                        <span className="portfolio_block_span">Portfolio</span>
                        <div className="portfolio_inner_block">
                            portfolio_inner_block
                        </div>
                    </div>

                </div>

            </div>
        </ScopedCssBaseline>
    )
}


