// Синтаксис Javascript
/*
	1) Пишем только латиницей (исключения в "можно" или 'можно')
	2) Каждая команда заканчивается ;    => shoot();
	3) Все названия объектов и функций должны быть логич. обоснованы
	4) Если мы заходим во внутрь конструкции { } то должен быть отступ
	5) Поддерживать понятную структуру
*/


// alert("Hello!");

// Переменные и функции в Javascript

// Как создать переменную
// let НАЗВАНИЕ = НАЧАЛЬНОЕ_ЗНАЧЕНИЕ;
let age = 13;
// let НАЗВАНИЕ;
let salary;

// Типы переменных
// Number = 0, -5, 0.35, 12698.00000000025
// Text/String = "Hello my name Ulan"
// Char = 'a', 'b', '5'
// Bool = true, false

// Операции над переменными
let x = 3;
let y = 5;
// Арифметические
// = => переменная = значение;
x = 8;

// +
x + 3; // => 11
x = x + 3; 
y = 1 + 8;

// -
x - 85; // => -74
y = x - y; 

// * 
y*4; // =>  8
y = y*y;  

//         /
x/2; // => 5.5
x = 3/2; 

// % - остаток от деления 
// ** - возведение в степень

// Логические ================
x = 5;
let c = 3;

    // Сравнение
// >   >=   <  <=
x > 3; // => true
c*5 < 10; // => false
c*5 <= 15; // => true

// == 
x == 5 // => true
x == 4 // => false
3 == 3 // => true
true == false // => false

// !=
x != 5 // => false
x != 4 // => true
3 != 3 // => false
true != false // => true

	// Логическое условие
let A = true;
let B = false;

// И =>    A && B
A && B; // => false

// ИЛИ =>    A || B
A || B; // => true

// НЕ => !A 
!A; // => false
!(A&&B); // => true


// ==============================================================
// Функции
/*
function НАЗВАНИЕ(аргументы){
	ДЕЙТСВИЕ
}
*/

// Создаём функцию
function show(){
	let name = "Alexander";
	alert(name);
}


function showMyName(name){
	alert(name);
}

// Используем функцию
showMyName("alexander");



document.addEventListener( "click" , show );

//let button = document.getElementById("btn");

function showButton(){
	let button = document.getElementById("btn");
	alert(btn.innerHTML);
}

showButton();

