describe('Split Array function', function() {
    var mergelist;
    beforeEach(function () {
    mergelist = [100,5,75,10,22,12,50,40,32,35];
})
    it('is able to split an array into two halves', function() {
    // your code here
    expect(split(mergelist).length).toEqual(2)
    });

    it('splits into two equal halfs', function () {
        expect(split(mergelist)[0].length).toEqual(split(mergelist)[1].length);
    });

    it('splits an odd array into two halfs that differ by 1 element', function () {
        mergelist = [100,5,75,10,22,12,50,40,32,35,66];
        expect(split(mergelist)[0].length).toEqual(split(mergelist)[1].length - 1);
    });
});


describe('Merge', function(){
    var listOne,
        listTwo,
        combinedList;
    beforeEach(function(){
        listOne = [1,5,9];
        listTwo = [2,3,6];
        combinedList = [1,2,3,5,6,9];
    })
  it('is able to merge two sorted arrays into one sorted array', function(){
    var mer1 = merge(listOne, listTwo).every(function(num,index){
      return num === combinedList[index];
    });

    expect(mer1).toEqual(true);
  });
});


  describe('Merge Sort', function(){
      var unsortedList
          combinedList;
      beforeEach(function(){
          unsortedList = [1,14,2,20,4,5,24,30,7,9,29];
          sortedList = [1,2,4,5,7,9,14,20,24,29,30];
      })
    it('is able to merge two sorted arrays into one sorted array', function(){
      var mer1 = mergeSort(unsortedList).every(function(num,index){
        return num === sortedList[index];
      });

      expect(mer1).toEqual(true);
    });
});
