import * as React from 'react';
import './App.css';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import portrait from "./images/portrait_cr.jpg"

export default function App() {
    return (
        <ScopedCssBaseline>
            <div className="container">

                <div className="navbar">
                    <img alt="Mytrofanov Maxym" src={portrait} id="portrait"/>

                    <div id="navi_list">
                        <li id="Home">Home</li>
                        <li id="About">About me</li>
                        <li id="Education">Education</li>
                        <li id="Experience">Work Experience</li>
                        <li id="Skills">Skills</li>
                        <li id="Portfolio">Portfolio</li>
                        <li id="Contacts">Contacts</li>

                    </div>
                </div>

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


