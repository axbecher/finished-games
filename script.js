let http = new XMLHttpRequest();

http.open('get','finishedGames.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let informatii = JSON.parse(this.responseText);
        let output = "";

        for(let item of informatii){
            output += `
                <div class="game">
                <img src="${item.GameImage}" alt="${item.GameTitle}"></img>
                <p class="title">${item.GameTitle}</p>
                <p class="progress">Progress: ${item.Progress}</p>
                <p class="platform">Platform: ${item.Platform}</p>
                <p class="hoursPlayed">Hours Played: ${item.Total_Hours_Played}</p>
                <p class="tags">Tags: ${item.Tags}</p>
                </div>
                `;
        }
        document.querySelector(".games").innerHTML = output;
    }
}