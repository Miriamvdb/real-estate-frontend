import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { AboutUs, Homepage, Listings, ViewingSchedule } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/viewingschedule" element={<ViewingSchedule />} />
        <Route path="/aboutus/:language" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
