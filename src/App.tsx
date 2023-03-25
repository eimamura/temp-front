import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// const response = await fetch('/api/main');
			// const response = await fetch('http://localhost:7071/api/main');
			// const response = await fetch('https://temp-back.azurewebsites.net/api/main');

			const response = await axios.get('https://temp-back.azurewebsites.net/api/main', {
				withCredentials: true,
			});

			const json = await response.data();
			setData(json);
			console.log(response.headers);
		}
		fetchData();
	}, []);

	return (
		<>
			<h1>My Azure Function Data:</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default App;
