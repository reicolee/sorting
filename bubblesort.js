function bubbleSort(arr) {
    var bubbleArr = arr.slice();
        // console.log(bubbleArr);
    var temp;
    for (var i = 0; i < bubbleArr.length; i++) {
        for (var j = i + 1; j < bubbleArr.length; j++) {
            if (bubbleArr[i] > bubbleArr[j]) {
                temp = bubbleArr[i]
                bubbleArr[i] = bubbleArr[j]
                bubbleArr[j] = temp;
            }
        }
    }
    return bubbleArr;
    // console.log(bubbleArr);
}
