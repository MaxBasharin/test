let namebox = document.getElementById('NameBox')
let insBtn = document.getElementById('Insbtn')
let selBtn = document.getElementById('Selbtn')
let updBtn = document.getElementById('Updbtn')
let delBtn = document.getElementById('Delbtn')

function InsertData(){
	setInterval(ref)
}

async function getResponse() { 
	let response = await fetch('https://memony-base-default-rtdb.firebaseio.com/posts.json')
	let content = await response.json()


	let list = document.querySelector('.posts')
	let key;
	for (key in content) {

		list.innerHTML += `
		<li class="post">
		<h4>${content[key].title}</h4>
	</li>
		`
	}
 }

 getResponse()
