async function getResponse() {
	let response = await fetch('https://634ae3fd33bb42dca40d4375.mockapi.io/list')
	let content = await response.json()
	console.log(content)
} 
getResponse()