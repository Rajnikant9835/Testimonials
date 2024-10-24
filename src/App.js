import "./App.css"; // Ensure this doesn't conflict with Tailwind
import data from "./data";
import Cards from "./Component/Cards";
import { useState } from "react";
import Increment from "./Component/Increment";

function App() {
  const [Id, setId] = useState(0);

  // const id = data[Id].id;
  // const image = data[Id].Image;
  // const name = data[Id].name;
  // const domain = data[Id].domain;
  // const about = data[Id].about;

  // Destructuring data based on the current Id
  const { id, Image: image, name, domain, about } = data[Id];

  return (
    <div>
      <div className=" flex items-center justify-center bg-slate-600 h-screen w-screen border-red-950 border-8">
        <Cards
          name={name}
          image={image}
          domain={domain}
          about={about}
          id={id}
          Id={Id}
        />
        
        <Increment Id={Id} setId={setId}/>
      </div>
    </div>
  );
}

export default App;
