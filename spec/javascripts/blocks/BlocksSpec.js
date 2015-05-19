describe("blocks", function() {

    it("should be able to add a score", function() {
        score = 0;
        addScore();
        expect(score).toBe(1);
    });

    it("should be able to substract a score", function() {
        score = 0;
        subtractScore();
        expect(score).toBe(-1);
    });

    it("should generate a number between 0 and 4", function() {
        var number = randomNumber();
        expect(number).toBeGreaterThan(-1) && expect(number).toBeLessThan(5);
    });

    it("should generate a number pair", function() {
        var array = randomPair();
        expect(array[0]).toBeGreaterThan(-1) && expect(array[0]).toBeLessThan(5);
        expect(array[1]).toBeGreaterThan(-1) && expect(array[1]).toBeLessThan(5);
    });

    it("should generate an array of number pairs", function() {
        var array = buildArray();
        expect(array.length).toBe(5);
        expect(Array.isArray(array)).toBe(true);
        for(var x = 0; x < array.length; x++) {
            expect(Array.isArray(array[x])).toBe(true);
        }
    });

});