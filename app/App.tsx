import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';


function App() {
  const baseURL = process.env.NODE_ENV === 'development' ? '/RetailStore' : '';

  return (
    <ThemeProvider>
      <Authenticator.Provider>
     
        <Router basename={baseURL}>
        
          <Routes>
            <Route path="/"   />
            <Route path="/gallery/ " />
            <Route path="/upload/" />
             <Route path="/contact/" />
          </Routes>
       
        </Router>
         </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default App;
