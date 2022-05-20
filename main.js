/*
let number = 1;
while ( number <= 100){
	console.log(number);
	number++;
}

number = 1;
do {
	console.log(number);
	number++;
} while(number <= 100);

for(let number= 1; number <= 100; number++){
	console.log(number);
}

//<break>
let number = 0;
while (number < 5){
	if (number === 3){
		break;
	}
	console.log(number);
	number++;
}

//<continue>
let number = 0;
while(number < 5){
	if(number === 3){
		number++;
					/*上のインクリメントは continue で、スキップされた瞬間に再度whileの条件判定に戻るためです。ということは、
					最後の2行（ console.log とnumber++; ）は、まだ実行されていない状態です。
					continue でスキップする前にインクリメントしてあげないと、numberが「3」のままループし続けることになってしまうので注意が必要です。
		continue;
	}
	console.log(number);
	number++;
}
*/

//<課題>
for (let number = 1; number <= 100; number++){
	if (number % 3 === 0 && number % 5 === 0){
		console.log('FizzBuzz!!');
	} else if (number % 3 === 0){
		console.log('Fizz!');
	} else if (number % 5 === 0 ){
		console.log('Buzz!');
	} else {console.log(number);
	}
	}
//最初の条件式が優先されるため、順番を考える！！
/*
let number = 1;
while ( number <= 100){
	console.log(number);
	number++;
}

number = 1;
do {
	console.log(number);
	number++;
} while(number <= 100);

for(let number= 1; number <= 100; number++){
	console.log(number);
}

//<break>
let number = 0;
while (number < 5){
	if (number === 3){
		break;
	}
	console.log(number);
	number++;
}

//<continue>
let number = 0;
while(number < 5){
	if(number === 3){
		number++;
					/*上のインクリメントは continue で、スキップされた瞬間に再度whileの条件判定に戻るためです。ということは、
					最後の2行（ console.log とnumber++; ）は、まだ実行されていない状態です。
					continue でスキップする前にインクリメントしてあげないと、numberが「3」のままループし続けることになってしまうので注意が必要です。
		continue;
	}
	console.log(number);
	number++;
}
*/

//<課題>
for (let number = 1; number <= 100; number++){
	if (number % 3 === 0 && number % 5 === 0){
		console.log('FizzBuzz!!');
	} else if (number % 3 === 0){
		console.log('Fizz!');
	} else if (number % 5 === 0 ){
		console.log('Buzz!');
	} else {console.log(number);
	}
	}
//最初の条件式が優先されるため、順番を考える！！
