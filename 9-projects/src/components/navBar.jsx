




export default function NavBar({setActive}){

		

		return(
		<ul>

			<li>
				<button onClick = {() => setActive("exercise1")}> exercise1 </button>
			</li>
			<li>
				<button onClick = {() => setActive("exercise2")}> exercise2 </button>
			</li>


		</ul>)




}





