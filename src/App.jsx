import React from "react";
import FormEvent from "./Forme/FormEvent";
import FormFonction from "./Forme/FormFonction";
import FormeClass from "./Forme/FormeClass";


const villes=["fes","agadir","ouarzazate","rabat"];
function App() {
  return (
    <div className="App">
    <FormFonction vl={villes}/>
    <FormeClass vl={villes}/>
    <FormEvent />
    
  
    </div>
  );
}
export default App;
