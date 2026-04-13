import HelloWorld from './ExeOne.jsx';
import ClickA from './ExeTwo.jsx';




export default function Main({active}){

	const components = {
		// home:<div> Welcome to Exercise </div>,
		exercise1:HelloWorld,
		exercise2:ClickA

	}

	const Components = components[active]

	return(

		<Components/>

		)



}


