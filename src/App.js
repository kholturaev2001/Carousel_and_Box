import React from "react";
import Boxes from "./components/Boxes/Boxes";
import "./style.css";
// import StudyYear from "./eDonish/StudyYear/StudyYear";
// import Languages from "./eDonish/Languages/Languages";
// import LeftSchool from "./eDonish/LeftSchool/LeftSchool";
// import NationalTeam from "./eDonish/NationalTeam/NationalTeam";
// import Graduates from "./eDonish/Graduates/Graduates";
import Slider from "./components/Slider/Slider";
import { sliderData } from "./components/Slider/sliderData";

function App() {
  return (
    <div>
      {/* <StudyYear />
      <Languages />
      <LeftSchool />
      <NationalTeam />
      <Graduates /> */}
      <Slider sliderData={sliderData} />
    </div>
  );
}

export default App;
