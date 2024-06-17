import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
const App = () => {
  const [category,setCategory] = useState("general");
  const [country,setCountry] = useState("in");
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <NewsBoard country={country} category={category} />
    </div>
  )
}
export default App;