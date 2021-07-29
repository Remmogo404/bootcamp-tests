describe('isWeekday' , function(){

    it('should return which weekday it is when required ' , function(){

assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);

});
});

