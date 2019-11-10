function fib(n) {
    if ( n <= 1){
        return n;
    }else {
        let result = fib(n -1)+ fib(n-2);
        return result;
    }
}