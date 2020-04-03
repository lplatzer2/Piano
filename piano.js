
var note;	
	
		let keys=document.querySelectorAll(".key");
		
		//note and animation played when clicked
		keys.forEach(key=>key.addEventListener("click", function(){
			this.classList.add("pressed");
			note = new Howl({
		src:["sounds/beskhu__" + this.dataset.numkey+ "-" + this.id +".mp3"],
		sprite:{
			sound:[0,600] //clips the sound to 600ms
		}
	});
			
			note.play("sound");
			note.fade(1,0,600);
			key.addEventListener("transitionend",function(){
				key.classList.remove("pressed");
			})
// 			// note.on('end', function(){
// 			// key.classList.remove("pressed");
// });
		}));


		//note and animation play when key is pressed
		document.addEventListener("keydown",playNote);
		

		function playNote(e){
			console.log(e.key);
			let match=keyData[e.key];
			console.log(match);
			note = new Howl({
				src:["sounds/beskhu__"+ match.numKey+ "-" +match.note+".mp3"],
				sprite:{
					sound:[0,600]
				}
			});
			note.play("sound");
			note.fade(1,0,600);
			var keyPressed =document.querySelector("#"+match.note);
			keyPressed.classList.add("pressed");
			// note.on('end', function(){
			// 	keyPressed.classList.remove("pressed");
			// });
			keyPressed.addEventListener("transitionend",function(){
				keyPressed.classList.remove("pressed");
			});
		}

		//toggle labels
		let button = document.querySelector("button");
		button.addEventListener("click", function(){
			let labels =document.querySelectorAll("p");
			labels.forEach(label=>label.classList.toggle("hidden"));
		});

