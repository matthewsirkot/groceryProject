import navBar from "./navBar";
import cartHeader from "./cartHeader";
import {Fragment} from "react";

const App = () => {
 return (
     <div>
         {navBar()}
         {cartHeader}
     </div>

 );
}

export default App;
