import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './components/Root';
import { FormContextProvider } from './context/FormContext';
import { GlobalStyles } from './styles/globalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <GlobalStyles/>
        <Root />
      </FormContextProvider>
      </React.StrictMode>
);

