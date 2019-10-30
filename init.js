
function factorial(n) {
    let result;
    if( n == 1){
      return 1;
    }else{
      result = factorial(n-1)*n;
     return result;

    }
}
console.log(factorial(5));

function fib(n) {
    if ( n <= 1){
        return n;
    }else {
        let result = fib(n -1)+ fib(n-2);
        return result;

    }
}
console.log(fib(10));



function binSearch(n,arr) {
    let first = 0;
    let last = arr.length-1;
     if ((Math.floor((first + last)/2) >= n ) || (Math.floor((first + last)/2) <= n )){
        return arr[n];
    }else {
      let result = binSearch(Math.floor((first + last)/2));
      return result;
    }
}
console.log(binSearch(3, [1,2,3,25,6,7,8,9]));
