function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }

    return sum;
}
sigma(5);
sigma(4);
sigma(3);
sigma(2);


function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }

    return product;
}
console.log(factorial(3));
console.log(factorial(5));


function fib(n) {

    var a = 0, b = 1, sum = 1;

    for (var i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))


function SecToLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length - 2];
    }
}
console.log(SecToLast([42, true, 4, "Liam", 7]));
console.log(SecToLast([4]));


function NthtoLast(arr, n) {
    if (arr.length < n) {
        return null;
    } else {
        return arr[arr.length - n];
    }
}
console.log(NthtoLast([1, 3], 3))
console.log(NthtoLast([5, 2, 3, 6, 4, 9, 7], 3));



function secMax(arr) {
    var max = arr[0];
    var sec = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr.length < 2) {
            return null;
        }
        else if (arr[i] > max) {
            sec = max;
            max = arr[i];
        }
        else if (arr[i] > sec && arr[i] < max)
            sec = arr[i];
    }
    return sec;

}
console.log(secMax([1, 9, 5, 4]));
console.log(secMax([2, 10, 15, 4]));
console.log(secMax([1]));
console.log(secMax([]));