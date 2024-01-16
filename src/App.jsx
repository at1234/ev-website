import { useState } from "react"
import Background  from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

export const App = () => {
  let heroData = [
    { text1:"Dive Into" , text2 : "What you love"},
    { text1:"Indulge" , text2 : "your passions"},
    { text1:"give into" , text2 : "your passions"},
  ]

   const[heroCount,setHeroCount] = useState(2);
   const[playStatus,setplayStatus] = useState(false);


  return (
    <div>
       <Background playStatus ={playStatus} heroCount ={heroCount} />
       <Navbar/>
       <Hero setplayStatus ={setplayStatus} 
       heroData = {heroData[heroCount]} 
       heroCount ={heroCount}
       setHeroCount ={setHeroCount}
       playStatus ={playStatus}
       />
    </div>
  )
}

export default App