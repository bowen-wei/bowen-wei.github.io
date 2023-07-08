const finalScore = document.getElementById("final-score");

const subScores = document.getElementsByClassName("score")

const remark = document.querySelector(".remark")
const comment = document.querySelector(".comment")

function showText(){
	remark.style.setProperty("opacity", "1")
	comment.style.setProperty("opacity", "1")
}


function increaseScore(element, num){
	let i = 0
	setInterval(function() {if(i <= num / 2) element.innerHTML = i++}, 20);
	setInterval(function() {if(i <= (num / 4 * 3)) element.innerHTML = i++}, 30);
	setInterval(function() {if(i <= (num / 10 * 9)) element.innerHTML = i++}, 50);
	setInterval(function() {if(i <= num) element.innerHTML = i++}, 200);

}

increaseScore(finalScore, 76)
increaseScore(subScores[0], 80)
increaseScore(subScores[1], 92)
increaseScore(subScores[2], 61)
increaseScore(subScores[3], 72)

setInterval(showText,1600)


