import * as React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {AppHeader} from "./components/Header";


export default function App() {
    return (
        <ScopedCssBaseline>
            <div>
                <AppHeader/>
            </div>
        </ScopedCssBaseline>
    )
}


