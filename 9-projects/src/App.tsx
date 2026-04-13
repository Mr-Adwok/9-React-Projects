import {useState} from 'react'



// import HelloWorld from "./components/ExeOne.jsx"
// import ClikedA from "./components/ExeTwo.jsx"

import Main from "./components/main2.jsx"
import NavBar from "./components/navBar.jsx"


export default function App(){

  const [active,setActive] = useState("exercise1")

  return (
    <>
      <NavBar setActive ={setActive}/>
      <Main active = {active}  />

    </>
    )


}






// export default function App(){

//   return(
//     <>
//       <HelloWorld/>
//       <ClikedA/>

//     </>

//     )


// }