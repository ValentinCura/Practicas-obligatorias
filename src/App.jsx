import './App.css'
import React from 'react'
import titlesArray from './components/watchList/WatchList';


function App() {
	return (

		<div>
			<h1>Peliculas de Nolan con imdRating mayor a 8</h1>

			{titlesArray.map((movie, i) => (
				<ul key={i}>
					{movie}
				</ul>))}
		</div>
	);
}
export default App