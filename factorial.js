function factorial(n) {
    let result;
    if( n == 1){
        return 1;
    }else{
        result = factorial(n-1)*n;
        return result;
    }
}