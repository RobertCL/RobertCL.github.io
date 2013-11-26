    	var console = console || { "log": function () { } };

    	$(function () {
			
    		$("#btnCheck").click(function (event) {
    			event.preventDefault();

    			var num = parseInt($("#inValue").val());
    			if (isNaN(num) || num < 1) {
    				$("#result").html("Please enter a number > 0<br/>" + $("#result").html());
    				return;
    			}

    			console.log("Start to check: " + num);
    			var result = isHappy(num);

    			if (result)
    				$("#result").html(num + " is a happy number! :-)<br/>" + $("#result").html());
    			else
    				$("#result").html(num + " is not a happy number... :-(<br/>" + $("#result").html());
    		});

    		function isHappy(num, sequenceSoFar) {
    			if (sequenceSoFar == undefined) { sequenceSoFar = new Array(); }

    			var strN = num.toString();
    			var sumsq = 0;

    			for (var i = 0 ; i < strN.length; i++) {
    				var digit = parseInt(strN[i]);
    				sumsq += digit * digit;
    			}
    			
    			console.log("Sum of squares of digits: " + sumsq);

    			if (sumsq == 1) // Its a happy number
    				return true;
    			else {
    				if ($.inArray(sumsq, sequenceSoFar) > -1)
    					return false;
    				else {
    					sequenceSoFar.push(num);
    					return isHappy(sumsq, sequenceSoFar);
    				}
    			}
    		};
    	});
