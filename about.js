console.log("hello world");

let info = document.createElement('p')



let me = {
	name: 'Justin',
	age: 23,
	location: 'Cave Creek, AZ',
}

let showBtn = document.querySelector('.my-btn');


function showInfo() {
	info.textContent = (me.name + "  |  " + me.age + "  |  " +  me.location)
	document.body.appendChild(info);
	info.classList.add('my-info')

}



showBtn.addEventListener('click', showInfo);



