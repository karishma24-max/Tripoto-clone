

import Allroutes from './Component/Allroutes';
import { useEffect, useState } from 'react';
import { Ftr } from './Component/Ftr';
import { Navbar } from './Component/Navbar';
import HamburgerMenu from './Component/MobileNavbar';
import ShowContextProvider from "./Context/ShowContext";

function App() {
  const [ham, setHam] = useState(false);
  const changeNav = () => {
    if (window.innerWidth < 600) {
      setHam(true);
    } else {
      setHam(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize",changeNav)

    // return window.removeEventListener("resize",changeNav)
  }, []);
  return (
    <div className="App">
    <ShowContextProvider>
    {ham ? <HamburgerMenu /> : <Navbar />}
    </ShowContextProvider>
    <Allroutes/>

    {/* <Homepage /> */}
      <Ftr/>
    </div>
  );
}

export default App;
