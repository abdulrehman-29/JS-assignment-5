var display = document.getElementById('output');

function q1() {
    var emptyArrays = [[], [], []];
    display.innerHTML = "<span class='highlight'>Empty multidimensional array:</span> [ [ ] ]";
}

function q2() {
    var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

    display.innerHTML = "<span class='highlight'>Matrix array:</span><br>" + " " + matrix[0].join(" ") + "<br>" + matrix[1].join(" ") + "<br>" + matrix[2].join(" ") + "<br>";
}

function q3() {
    var Numcounting = ""

    for (var i = 1  ; i <= 10; i++) {
        Numcounting += i + "<br>" 
    }

    display.innerHTML = "<span class = 'highlight'>Counting: </span><br>" + Numcounting ;
    
}

function q4(){
    var number = +prompt("Enter a number to show its multiplication table?")
    var timesNum = +prompt("Enter Length Multiplication Table?")

    var table = ""

    for (var i = 1; i <= timesNum; i++){
        table += number + " x " + i  + " = " + (number*i) + "<br>" 
    }

    display.innerHTML = "<span class = 'highlight'>Multiplication Tale of </span>" + number + "<br>" +
     "<span class = 'color'>Length </span>" + timesNum + "<br><br>" +
    table;

}

function q5() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

    var fruitName = ""
    for (let i = 0; i < fruits.length; i++) {
        fruitName += "Element at index " + i + " is " + fruits[i]  + "<br>"
    }

    display.innerHTML = "<span class = 'highlight'>Fruits Name: </span><br>" + fruits.join("<br>") + "<br><br>" + fruitName;

}

function q6() {
    var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    var series = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 + "k"]

    display.innerHTML = 
    "<div class = 'highlight'>Counting: </div>" + counting.join(", ") + "<br><br>" +
    "<div class = 'yellow'>Reverse Counting: </div>" + reverseCounting.join(", ") + "<br><br>" +
    "<div class = 'even'>Even: </div>" + even.join(", ") + "<br><br>" +
    "<div class = 'odd'>Odd: </div>" + odd.join(", ") + "<br><br>" +
    "<div class = 'series'>Series: </div>" + series.join("k, ") + "<br><br>" 
}


function q7() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];

    var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
    order = order.toLowerCase()

    var found = false
    var index = ""

    for ( var i = 0; i <= A.length; i++){
        if (order==A[i]){
            found = true;
            index = i;
            break
        }
    }

    if(found){
        display.innerHTML = "<div class = 'highlight'>Welcome to our Bakery</div>" + order + " is <span class = 'color'>Available</span> at index " + index + " in our bakery";

    } else{
        display.innerHTML = "<div class = 'highlight'>Welcome to our Bakery</div>" + order + " is <span class = 'odd'>Not Available</span> in our bakery";
    }
}

function q8() {
    var num = [24, 53, 78, 91, 12];
    var largest = num[0]

    for (var i = 0; i <= num.length; i++){
        if(largest < num[i]){
            largest = num[i]
        }
    } 

    display.innerHTML = "<span class = 'highlight'>Array Items: </span>" + num.join(", ") + "<br>" +
    "<span class = 'color'>The Largest Number is: </span>" + largest
}

function q9() {
    var num = [24, 53, 78, 91, 12];
    var smallest = num[0]

    for (var i = 0; i <= num.length; i++){
        if(smallest > num[i]){
            smallest = num[i]
        }
    } 

    display.innerHTML = "<span class = 'odd'>Array Items: </span>" + num.join(", ") + "<br>" +
    "<span class = 'even'>The Smallest Number is: </span>" + smallest
}

function q10() {
    var number = []

    for (var i = 5; i <= 100; i += 5){
        number.push(i)
    }
    display.innerHTML = "<div class = 'highlight'>Multiples of 5: </div>" + number.join(", ")
}
// ================== ** ==================
