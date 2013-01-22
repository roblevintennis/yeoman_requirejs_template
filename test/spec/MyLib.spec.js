// yeoman server:test -d # yeoman test
define(['MyLib'], function(MyLib){
	describe("Testing one two three", function () {
		beforeEach(function () {
			this.lib = new MyLib();
		});
		it("should add", function() {
			expect(this.lib.add(4,5)).to.equal(9);
			expect(this.lib.add(4,5)).not.to.equal(1);
		})
	});
});

