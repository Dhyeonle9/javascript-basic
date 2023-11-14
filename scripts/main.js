// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world!"

// 변수 선언
let myVariable
// 값 할당
myVariable = 'hello'

console.log(myVariable)

// 동시에 가능
let myVariable2 = 'world'

console.log(myVariable2)

var a = 1
let b = 2
const c = 3

console.log(a, b, c)

a = 10
b = 20
// const는 상수이므로 재할당 불가능
// c = 30
console.log(a, b, c)

var a
// let b
// const c
// let, const로 선언된 변수는 재선언 불가능

let stringVar = "hello"
let numberVar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}

console.log(stringVar, numberVar, boolVar, arrayVar, objectVar)

arrayVar.push("hello")
console.log(arrayVar)

// objectVar['name'] = 'kim'
// python에서 key값으로 접근한 것과 달리 어트리뷰트 형식같이 접근한다.
objectVar.name = "kim"
objectVar.location = "seoul"
console.log(objectVar)

// my_dict = Dict()
let myObj = new Object()

/*
사이에 있는 모든 것은 주석입니다.
*/

// 이것은 주석입니다

// 연산자
let myVarA = 10
let myVarB = "10"

console.log(myVarA == myVarB) 
// 과거 버전 '==' 값이 같은지 비교, 사용x
console.log(myVarA === myVarB)
// 최신 버전 '===' 값과 타입까지 비교, 엄격한 비교

// 부정, !, !== 

// 조건문 if 문

// let iceCream = "chocolate"
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!")
// } else {
//     alert("Awwww, but chocolate is my favorite...")
// }

// 반복문 for/while
console.log("while")
let i = 0
while (i < 5) {
    console.log(i)
    // python => i += 1
    i++
}

console.log("for1")
for (let i=0; i<5; i++) {
    console.log(i)
}

console.log("for2")
let myArray = [1, 2, 3, 4, 5]
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

console.log("for in")
// for item in myArray:? 다르다! index값이 처리가 됨
for (let item in myArray) {
    console.log(item)
    // console.log(myArray[item])
}

console.log("for of")
// for item in myArray:과 동일! 딕셔너리 value값 접근할때도 이용
for (let item of myArray) {
    console.log(item)
}

console.log("for each")
// 가장 많이 이용할 것
// 맵함수랑 비슷, 
myArray.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
// python
// def multi():

function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply1(3, 4))
// 함수를 변수에 할당하는 형식 -> 익명함수를 만들고 할당해줌
// 함수 표현식 
let multiply2 = function (num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply2(2, 4))

// 화살표함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(5, 6))

// 화살표함수의 2가지 기능
// 생략1
// {}안에 코드가 return 하는 문장 하나만 있는 경우 
// => {}, return 생략가능
let multiply4 = (num1, num2) => {
    return num1 * num2
}
console.log(multiply4(3, 4))
// 위 아래 같다
let multiply5 = (num1, num2) => num1 * num2
console.log(multiply5(3, 4))
// 생략2
// {}안에 매개변수가 하나만 있다면 () 생략 가능
let multiply6 = (num1) => num1 * 2
console.log(multiply6(5))
// 위아래 같다
let multiply7 = num1 => num1 * 2
console.log(multiply7(5))


let people1 = {
    "name": "kim",
    "greeting": function () {console.log(this)}
}

let people2 = {
    "name": "hong",
    "greeting": () => {console.log(this)}
}

people1.greeting()
// {name: 'kim', greeting: ƒ}

people2.greeting()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// this는 self와 같음
// this를 쓸때는 화살표함수를 쓰면 가리키는 것이 달라짐

// querySelector 이용법
// li태그인데 id가 first인 거 찾아줘
// querySelector("li#first") 
// // li태그인데 class가 list인 거 찾아줘
// querySelector("li.list")
// // li태그 전부 찾아줘
// querySelectorAll("li")

// 이벤트 -가장중요
// 1. onclick 이벤트 - 클릭에 대한 것을 처리
// document.querySelector("h1").onclick = function () {
//     alert("hihi")
// }

// 2. 이벤트 리스너 - 이렇게 이용
let myH1 = document.querySelector("h1")
// addEventListner(무슨일이 일어났을 때, 무슨 행동을 할 지)
myH1.addEventListener("click", function (e){
    // alert("hihi")
    console.log(e)
})
myH1.addEventListener("mouseover", function (e){
    // alert("hihi")
    console.log(e)
})
let myInput = document.querySelector("input")
myInput.addEventListener("keydown", function (e){
    console.log(e)
})

let myImage = document.querySelector("img")
console.log(myImage)
myImage.addEventListener("click", function (){
    let src = myImage.getAttribute("src")

    if (src === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/cat.png")
        myH1.textContent = "Cat is cool"
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png")
        myH1.textContent = "Mozilla is cool"
    }

})

// 비동기 처리
console.log("hi")
// setTimeout(실행시킬 함수, 시간(ms))
setTimeout(function(){
    console.log("hello")
}, 1000)
console.log("bye")

// 동기적(synchronous)
// 비동기적(Asynchronous)
// 자바스크립트는 기본적으로는 동기적이지만 몇가지 함수들은 비동기적
// setTimeout도 비동기

const URL = "https://jsonplaceholder.typicode.com/todos/1"
// fetch == request.get()

// let response = fetch(URL)
// console.log(response)

// let result = response.json()
// console.log(result)
// 외부에서 데이터를 가지고 오는 경우 비동기로 처리됨, 원하는대로 처리되지 않을 수 있음

fetch(URL)
// .then ((response) => {return response.json()})
    .then(response => response.json())
    .then(json => console.log(json))
// 자바스크립트는 어떤 처리를 할 때 비동기적으로 동작,
// .then을 이용하여 동작 구조를 동기적으로 바꿔줌

// function fetchAndPrint(){
//     let res = fetch(URL)
//     // 처리에 얼마나 걸리는지 보장할 수 없음
//     let result = res.json()
//     // 먼저 실행이 됨 
//     console.log(result)
//     // res에 아무것도 안들어있게 됨
// }

// fetchAndPrint()

async function fetchAndPrint(){
    let res = await fetch(URL)
    // 처리에 얼마나 걸리는지 보장할 수 없음
    let result = await res.json()
    // 먼저 실행이 됨 
    console.log(result)
    // res에 아무것도 안들어있게 됨
}

fetchAndPrint()

// let li1 = document.querySelector("li#first")
// let li2 = document.querySelector("li#second")
// let li3 = document.querySelector("li#third")


// 요소가 많아지면 하나씩 처리하기 힘듬 반복처리
let liElements = document.querySelectorAll("li")
// for (let li of liElements) {
//     console.log(li)
// }

liElements.forEach(function(li){
    console.log(li)
    li.style.color = "red"
    li.style.backgroundColor = "blue"
})

liElements.forEach(function(li){
    li.addEventListener("click", function(e){
        // console.log(e.target)
        // console.log(e.target.textContent)
        if (e.target.textContent === "technologists"){
            e.target.style.color = "yellow"
        }
        else if (e.target.textContent === "thinkers") {
            e.target.style.color = "black"
        }
        else {
            e.target.style.color = "green"
        }
    })
})