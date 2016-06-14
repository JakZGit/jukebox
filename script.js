var audio;
var music =["LaunchNats","WheelStop","Lifeoff"];
var index = 0;
var newAdded = [];
var ext = ".mp3"

function Jukebox(){
	audio = new Audio();
	audio.src=music[0]+ext;
	this.play = function(){audio.play()};
	this.pause = function(){audio.pause()};
	this.song = function(song){audio.src = song};
	this.stop = function(){audio.load();};
}

var jb = new Jukebox();

$("#pause").click(function(){
	jb.pause();
})

$("#play").on("click",function(){
	if(audio.src!="")
		try{
			jb.play();
			$("#songtitle").html("Now Playing: " +music[index]);
		}catch(err){
			console.log("no songs");
		}
})

$("#fire").click(function(){
	jb.song(music[0]+ext);
	index = 0;
	jb.play();
	$("#songtitle").html("Now Playing: " +music[index]);
})

$("#home").click(function(){
	jb.song(music[1]+ext);
	index = 1;
	jb.play();
	$("#songtitle").html(" Now Playing: "+music[index]);
})

$("#fame").click(function(){
	jb.song(music[2]+ext);
	index  = 2;
	jb.play();
	$("#songtitle").html("Now Playing: " +music[index]);
})


$("#stop").click(function(){
	jb.stop();
	audio.currentTime = 0;
	$("#songtitle").html("");

})

$("#next").click(function(){
	index = (index+1)%music.length;

	if(index>2){
		audio.src = music[index];
		jb.play();
		$("#songtitle").html("Now Playing: "+newAdded[index-3]);

	}
	else{
		audio.src=music[index]+ext;
		jb.play();
		$("#songtitle").html("Now Playing: "+music[index]);
	}
})



$("#open").click(function(){
  var path = document.getElementById("path").value;
  // console.log(path);
  music.push(path);
  audio.src = music[music.length-1];
  console.log(music);
  index = music.length-1;
  jb.play();
  var song = document.getElementById("songname").value;

  $('ul').append(
    $('<li id = "add">').click(function(){audio.src = path; jb.play(); 
    	$("#songtitle").html("Now Playing: " +song); }).text(song)
    )

  newAdded.push(song);
  // $("#songtitle").html("Now Playing: "+song);
  // $("ul").append('<li>document.getElementById("songname").value</li>');


})





