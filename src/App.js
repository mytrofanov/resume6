import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import {Navbar} from "./components/navbar/Navbar";

export default function App() {
    return (
        <ScopedCssBaseline>
            <div className="container">

                <Navbar/>

                <div className="right_column" id="right_column">
                    <div className="header" id="header">
                        <div id="header_title">
                            Lets Make Something Great
                            <div className="header_annotation" id="header_annotation">
                                I’m an UI designer that prides ourself on being strategic brand partners and awesome
                                product providers
                            </div>
                        </div>

                    </div>
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


