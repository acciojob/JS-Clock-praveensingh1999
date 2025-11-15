function updateClock(){
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const secondhand = document.querySelector(".second-hand");
	const minutehand = document.querySelector(".min-hand");
	const hourhand = document.querySelector(".hour-hand");

	const seconddegree = ((seconds/60)*360)+90;
	const minutesdegree = ((minutes/60)*360)+((seconds/60)*6)+90;
	const hoursdegree = ((hours%12 /12)*360)+((minutes/60)*30)+90;

	secondhand.style.transform = `rotate(${seconddegree}deg`;
	minutehand.style.transform = `rotate(${minutesdegree}deg`;
	hourhand.style.transform = `rotate(${hoursdegree}deg`;
	
}
setInterval(updateClock,1000);