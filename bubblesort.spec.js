describe('Bubble Sort', function(){
  var bubbleArr;

  beforeEach(function(){
    bubbleArr = [];

  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles number in the correct order', function(){
    bubbleArr = [1,5,7,10,22,12,50,40,32,35];
    expect(bubbleSort(bubbleArr)).toEqual(bubbleArr.sort(function(a,b){return a-b}));
  });



});
