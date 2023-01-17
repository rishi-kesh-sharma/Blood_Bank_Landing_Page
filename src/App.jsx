import React from "react";
import { Cards, Footer, Home, Navbar } from "./components";
import BloodBanks from "./components/BloodBanks";
// import BloodBank from "./BloodBank.jsx";
const App = () => {
  // return <BloodBank />;
  return (
    <div className="h-[56vw] min-h-[100vh] relative bg-no-repeat bg-cover bg-[url(./assets/images/homebackground.png)]">
      <div className="overlay absolute bg-black top-0 left-0 right-0 min-h-[100vh] h-[56vw] opacity-75"></div>
      <Navbar />

      <Home />
      <BloodBanks />
      <Footer />
    </div>
  );
};

export default App;
