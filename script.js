let http = new XMLHttpRequest();

http.open('get','finishedGames.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let informatii = JSON.parse(this.responseText);
        let output = "";
        let statistici = "";
        let countFinished = 0;
        let countAllGames = 0;

        for(let item of informatii){
            if(parseInt(item.Progress)==parseInt(100)){
                countFinished = countFinished + 1;
            }
            if(item.Status){
                countAllGames = countAllGames + 1;
            }
            
            
            output += `
                <div class="game">
                <a title="${item.GameTitle}" href="${item.AccesLink}" target="_blank"><img src="${item.GameImage}" alt="${item.AccesLink}"></img></a>
                <p class="progress">${item.Progress}%</p>
                <p class="gameTitle">${item.GameTitle}</p>
                <div class="hoursPlayed">${item.Total_Hours_Played} hours</div>
                <p class="platformImg"> <img  src="platforms/${item.Platform}.png" alt="${item.Platform}"></img> </p>
                </div>
                `;
        }
        statistici += `<p> Finished Games Number in Total: [ ${countFinished} / ${countAllGames} ]  </p>`
        document.querySelector(".games").innerHTML = output;
        document.querySelector(".analytics").innerHTML = statistici;
    }
}


var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}