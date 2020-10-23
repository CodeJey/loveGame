		function nameCleaner(ide){
            document.getElementById(ide).value = "";
        }

        function show(){
            var firstCheck = document.getElementById("name1").value === "" || document.getElementById("name2").value === "" || (document.getElementById("name1").value === "" && document.getElementById("name2").value === "");
        var secondCheck = document.getElementById("name1").value === "Enter your name here." || document.getElementById("name2").value === "Enter your crush's name here." || (document.getElementById("name1").value === "Enter your name here." && document.getElementById("name2").value === "Enter your crush's name here.");
            if (firstCheck == true || secondCheck == true ) {
                document.getElementById("Button").value = "Unexpected form! Try again. ";
                document.getElementById("name1").value = "Enter your name here.";
                document.getElementById("name2").value = "Enter your crush's name here.";
            }
            else {
			var names = parseFloat((document.getElementsByClassName("lefted")[0].value).length + (document.getElementsByClassName("lefted")[1].value).length);
			var items;
			var offset;
			var result;
			
			var st1 = parseFloat(4);
			var st2 = parseFloat(8);
			var mid;
					
			while(true){
				
				if(names >= st1 && names <= st2){
					mid = (st1+st2) / 2;
					items = [(50/mid), (75/mid), (100/mid)]; 
					break;
				}
				
					else {
						st1 += 5;
						st2 += 5;
					}
					
			}
			
			
			offset = items[Math.floor(Math.random()*items.length)];
			result = names*offset;
				
				if (result >= 100) result = 100;
				else result = Math.ceil(result);
			
            document.getElementById("Button").value = ((document.getElementsByClassName("lefted")[0].value).toString() +" and " + (document.getElementsByClassName("lefted")[1].value).toString() + "\n" + " get a result of " + result + " points in our love score game.");
            document.getElementById("name1").value = "Enter your name here.";
                document.getElementById("name2").value = "Enter your crush's name here.";
        }
		}