import Home from "./components/Home/Home";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element= {<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
