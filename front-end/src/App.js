import Allroutes from './Component/Allroutes';
// import Homepage from './Component/Homepage';
import { Ftr } from './Component/Ftr';
import {Navbar} from './Component/Navbar';
import ShowContextProvider from "./Context/ShowContext";



function App() {
  return (
    <div className="App">
    <ShowContextProvider>
    <Navbar/>
    </ShowContextProvider>
    <Allroutes/>

    {/* <Homepage /> */}
      <Ftr/>
    </div>
  );
}

export default App;
