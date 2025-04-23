 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css'; // Your global CSS styles
import App from './App.jsx'; // Your App component
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome icons
import { Provider } from 'react-redux'; // Redux Provider to pass the store to the app
import store from './store'; // Import your Redux store
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

const rootElement = document.getElementById('root'); // Get the root element in the HTML
const root = createRoot(rootElement); // Create the root for React rendering

// Render the App wrapped with Redux Provider and BrowserRouter for routing
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>   
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

