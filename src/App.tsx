import Router from "./Routes.js";
import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App