import React from 'react';
import './App.css';
import LangTest from './Lang/LangTest';
import {IntlProvider} from 'react-intl'
import { FormattedMessage } from "react-intl";
import English from './Languages/en-US.json'
import German from './Languages/du-DU.json'
import Italian from './Languages/it-IT.json'
import AuthTesting from './Auth/AuthTesting';

const locale =navigator.language



function App() {

  return (
    <div className="App">
  
  <IntlProvider locale={locale} messages={German}>
     {/* <LangTest/>     */}
     <AuthTesting/>  
  </IntlProvider>
    
    </div>
  );
}

export default App;
