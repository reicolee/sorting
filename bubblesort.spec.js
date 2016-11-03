describe('Bubble Sort', function(){
  var bubbleArr;

  beforeEach(function(){
    bubbleArr = [1,5,7,10,22,12,50,40,32,35];

  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles number in the correct order', function(){
    var sortedBubble = bubbleArr.sort(function(a,b){return a-b});
    var bub1 = bubbleSort(bubbleArr).every(function(num,index){
      return num === sortedBubble[index];
    });

    expect(bub1).toEqual(true);
  });

   it('make sure .sort is not called', function(){
    bubbleSort(bubbleArr);
    expect(Array.prototype.sort.calls.any()).toEqual(false);
   });




});
