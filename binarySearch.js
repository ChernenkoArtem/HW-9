//console.log(binSearch(1, [1,2,3,25,6,7,8,9]));
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