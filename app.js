// Apply font family once for the whole page
document.write("<style>body { font-family: Arial, sans-serif; }</style>");

function q1() {
    var emptyArrays = [[], [], []];
    document.write("<h2>Empty multidimensional array:</h2>[ [ ] ]<br>");
}

function q2() {
    var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
    document.write("<h2>Matrix array:</h2>");
    for (var i = 0; i < matrix.length; i++) {
        document.write(matrix[i].join(" ") + "<br>");
    }
}

function q3() {
    document.write("<h2>Counting from 1 to 10:</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>");
    }
}

function q4() {
    var number = +prompt("Enter a number to show its multiplication table:");
    var timesNum = +prompt("Enter the length of multiplication table:");
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    document.write("Length: " + timesNum + "<br><br>");
    for (var i = 1; i <= timesNum; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
}

function q5() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    document.write("<h2>Fruits List:</h2>");
    document.write(fruits.join("<br>") + "<br><br>");
    for (var i = 0; i < fruits.length; i++) {
        document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    }
}

function q6() {
    var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    var series = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    document.write("<h2>Counting:</h2>" + counting.join(", ") + "<br><br>");
    document.write("<h2>Reverse Counting:</h2>" + reverseCounting.join(", ") + "<br><br>");
    document.write("<h2>Even Numbers:</h2>" + even.join(", ") + "<br><br>");
    document.write("<h2>Odd Numbers:</h2>" + odd.join(", ") + "<br><br>");
    document.write("<h2>Series (with k):</h2>" + series.map(n => n + "k").join(", ") + "<br><br>");
}

function q7() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var order = prompt("Welcome to ABC Bakery. What do you want to order?");
    order = order.toLowerCase();

    var found = false;
    var index = -1;
    for (var i = 0; i < A.length; i++) {
        if (order === A[i]) {
            found = true;
            index = i;
            break;
        }
    }

    document.write("<h2>ABC Bakery</h2>");
    if (found) {
        document.write(order + " is available at index " + index + " in our bakery.");
    } else {
        document.write(order + " is not available in our bakery.");
    }
}

function q8() {
    var num = [24, 53, 78, 91, 12];
    var largest = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] > largest) largest = num[i];
    }
    document.write("<h2>Array Items:</h2>" + num.join(", ") + "<br>");
    document.write("<h2>The Largest Number is:</h2>" + largest);
}

function q9() {
    var num = [24, 53, 78, 91, 12];
    var smallest = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] < smallest) smallest = num[i];
    }
    document.write("<h2>Array Items:</h2>" + num.join(", ") + "<br>");
    document.write("<h2>The Smallest Number is:</h2>" + smallest);
}

function q10() {
    document.write("<h2>Multiples of 5 from 5 to 100:</h2>");
    for (var i = 5; i <= 100; i += 5) {
        document.write(i + "<br>");
    }
}
