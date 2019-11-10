var random = document.getElementById('random'),
    time = document.getElementById('time'),
    time2 = document.getElementById('time2'),
    array=[];
/*------search tree collection------*/
time.addEventListener("click", function () {
    var time = performance.now();
    tree1.search(2456);
    time = performance.now() - time;
    console.log('Время выполнения Tree = ', time);
});
/*------search array collection------*/
time2.addEventListener("click", function () {
    var time = performance.now();
    binSearch(2575,array);
    time = performance.now() - time;
    console.log('Время выполнения  Array= ', time);
});
random.addEventListener("click", function () {

    for (let i = 0; i <10000000 ; i++) {
        rand = getRandom();
        tree1.insert(rand);
        array.push(rand);
    }

});

function getRandom() {
   return  Math.floor(Math.random() * 10000000);
}