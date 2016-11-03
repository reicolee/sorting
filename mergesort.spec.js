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
