$(document).ready(function() {
	var input = prompt("Please enter a number")
	var body = $("body");
	for (i = 0; i <= input; i++) {

		if (i % 3 === 0 && i % 5 === 0){
			body.append("<div>FizzBuzz</div>");
		}

		else if (i % 3 === 0) {
			body.append("<div>Fizz</div>");
		}
		
		else if (i % 5 === 0) {
			body.append("<div>Buzz</div>");
		}

		else { 
			body.append("<div>" + i + "</div>");
		}
	}
});