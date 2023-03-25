import React, { useState, useEffect } from 'react';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/main');
			// const response = await fetch('http://localhost:7071/api/main');

			const json = await response.json();
			setData(json);
			console.log(response.headers);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>My Azure Function Data:</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
