function split(WholeArr) {
    var halfLength = Math.floor(WholeArr.length / 2);
    var firstHalf = WholeArr.slice(0,halfLength);
    var secondHalf = WholeArr.slice(halfLength);
    console.log([firstHalf, secondHalf]);
    return [firstHalf, secondHalf];
}


function merge (arr1, arr2){
    var mergedArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] <= arr2[0]) {
            mergedArr.push(arr1.shift());
        } else {
            mergedArr.push(arr2.shift());
        }
    }
    return mergedArr.concat(arr1,arr2);
}

function mergeSort(unsortedArr) {
    var splited = split(unsortedArr);
    if (splited[0].length > 1)
}

var listOne = [1,5,9];
var listTwo = [2,3,6];
var combinedList = [1,2,3,5,6,9];
console.log(merge(listOne,listTwo));
