import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from '../../test1/Component/city';
import WeatherResult from '../../test1/Component/WeatherResult';
import Test from "./component/Test";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<City />} />
    //     <Route path="/details" element={<WeatherResult />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <Test/>
    </>
  );
}

export default App;

