window.onload = () => {
	const app = document.querySelector("#app");
	
	// const testDiv = document.createElement("div");
	// const practiceOne = document.createElement("p");
	// const practiceTwo = document.createElement("p");

	// practiceOne.innerText = `지정한 숫자만큼 아날로그 초침이 시계 방향으로 설정된 다음 
    //     시작 버튼을 누르면 1초마다 시계 반대 방향으로 움직여서 
    //     결국 12시 방향을 가르키며 종료되는 아날로그 타이머`;
	// practiceTwo.innerText = `지정한 숫자만큼 타이머가 표시되고 
    //     시작 버튼을 누르면 1초씩 줄어들고 
    //     0초에서 정지하는 디지털 타이머`;

	// testDiv.append(practiceOne, practiceTwo);
	// app.prepend(testDiv);
	
	const dgtClock = document.querySelector(".dgt-clock");
	const screen = document.createElement("h2");
	const plusBtn = document.createElement("button");
	const minusBtn = document.createElement("button");
	const startBtn = document.createElement("button");
	let time = 0;

	function saveTimeNum(time) {
		localStorage.setItem("timer", time);
	}

	function plusNum(event) {
		if(localStorage.getItem("timer")<60){
			time += 1;
			saveTimeNum(time);	
			screen.innerText = `${localStorage.getItem("timer",time)}`;
		} else{
			alert("창회형이 60넘기지말래..");
		}
	}

	function minusNum(event) {
		if (localStorage.getItem("timer")-1 < 0){
			alert('시간을 거스를순 없습니다.');	
		} else {
			time -= 1;
			saveTimeNum(time);
			screen.innerText = `${localStorage.getItem("timer",time)}`;
		}
	}


	function startTimer() {
		let nowTimer = localStorage.getItem("timer");
		plusBtn.disabled = true;
		minusBtn.disabled = true;
		startBtn.disabled = true;
		const setTimer = setInterval(function(){
			if (nowTimer+1 !==0){	
				screen.innerText = nowTimer;
				localStorage.setItem("timer",nowTimer);				
				--nowTimer;
			}else{
				alert("펑리수");
				plusBtn.disabled = false;
				minusBtn.disabled = false;
				startBtn.disabled = false;
				clearInterval(setTimer);
			}
		},1000);
	}

	function renew() {
		let timer = localStorage.getItem("timer");
	}

	function loadTimer(){
		dgtClock.appendChild(screen);
		dgtClock.appendChild(plusBtn);
		dgtClock.appendChild(startBtn);
		dgtClock.appendChild(minusBtn);
		plusBtn.innerText = "+"
		minusBtn.innerText = "-"
		startBtn.innerText = "start"
		plusBtn.addEventListener("click", plusNum);
		minusBtn.addEventListener("click", minusNum);
		startBtn.addEventListener("click", startTimer);
		screen.innerText = "0";
	}

	function init() {
		loadTimer();
		

	}


	init();

};


