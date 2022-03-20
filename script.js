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
            <div class="padding-item">
              <div class="card-item">
                  <div class="gameImage">
                    <a title="${item.GameTitle}" href="${item.AccesLink}" target="_blank"><img src="${item.GameImage}" alt="${item.AccesLink}"></img></a>
                  </div>
                  <div class="gameTitle-area">
                    <p class="gameTitle">${item.GameTitle}</p>
                  </div>
                  <div class="progress-area">
                    <p class="progressArea">${item.Progress}%</p>
                  </div>
                  <div class="hoursPlayed-area">
                    <div class="hoursPlayed">${item.Total_Hours_Played} hours</div>
                  </div>
                  <div class="platform-area">
                    <p class="platformImg"> <img  src="platforms/${item.Platform}.png" alt="${item.Platform}"></img> </p>
                  </div>
              </div>
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


//$(window).load(function() {  $("#tabs").removeClass("stillLoading"); });

document.onreadystatechange = function(e)
{
  if(document.readyState=="interactive")
  {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) 
    {
      set_ele(all[i]);
    }
  }
}

function check_element(ele)
{
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on())
  {
    var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value=prog_width;
    $("#bar1").animate({width:prog_width+"%"},10,function(){
      if(document.getElementById("bar1").style.width=="100%")
      {
        $(".progress").fadeOut("slow");
      }			
    });
  }

  else	
  {
    set_ele(ele);
  }
}

function set_ele(set_element)
{
  check_element(set_element);
}