
import { createRoot } from 'react-dom/client'
// import App1 from './projects/Project1_React_Router/App1'
import "./App.css"
import { App7 } from './Redux/App7'
import "./Redux/store"
import { Provider } from "react-redux";
import { store } from './Redux/store';


// import { App2 } from './Axios/App2'


createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App7/>
</Provider>
 
)
