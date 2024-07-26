import "./App.css";
import ChaiandCode from "./Components/ChaiandCode";
import ManageBundle from "./Components/ManageBundle";
import Otppage from "./Components/Otppage";
import Batches from "./Components/Batches";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Otppage />} />

        <Route path='/course-list' element={<ManageBundle />} />
        <Route path='/batches' element={<Batches />} />
      </Routes>
    </Router>
  );
}

export default App;
