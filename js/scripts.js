var a = prompt('enter value for a');
var b = prompt('enter value for b');
var result = (a * a) - (2 * a * b) - (b * b);


if (result > 0) {
	alert('result of your input for (a*a)-(2*a*b)-(b*b) is positive and ' + ('equals ') + result);
	console.log('result of your input for (a*a)-(2*a*b)-(b*b) is positive')
} else if (result < 0) {
	alert('result of your input for (a*a)-(2*a*b)-(b*b) is negative and ' + ('equals ') + result);
	console.log('result of your input for (a*a)-(2*a*b)-(b*b) is negative')
} else if (result == 0) {
	alert('result of your input for (a*a)-(2*a*b)-(b*b) is 0');
	console.log('result of your input for (a*a)-(2*a*b)-(b*b) is 0')
} 