
import { createRoot } from 'react-dom/client'
// import App1 from './projects/Project1_React_Router/App1'
import "./App.css"

import "./Redux/store"
import { Provider } from "react-redux";
import { store } from '../src/Redux_Toolkit/store';
import { App8 } from './Redux_Toolkit/App8';


// import { App2 } from './Axios/App2'


createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App8/>
</Provider>
 
)
