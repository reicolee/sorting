function split(WholeArr) {
    var halfLength = Math.floor(WholeArr.length / 2);
    var firstHalf = WholeArr.slice(0,halfLength);
    var secondHalf = WholeArr.slice(halfLength);
    console.log([firstHalf, secondHalf]);
    return [firstHalf, secondHalf];
}
