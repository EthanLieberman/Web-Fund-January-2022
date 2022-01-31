function reverse(arr) {
    // your code here
    start = 0
    var end = arr.length-1
    while(start < end){

        var temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }


    return arr;
}

var array = ["a", "b", "c", "d", "e"];
var result = reverse(array);
console.log(result);
// expected: ["e", "d", "c", "b", "a"]


