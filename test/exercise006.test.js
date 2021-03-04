const { sumMultiples, areWeCovered, createMatrix, isValidDNA } = require("../challenges/exercise006");

    describe("sumMultiples", () => {
        test("if throws an error if isn't an array", () => {
            expect(() => {
                sumMultiples();
            }).toThrow("arr is required")
        });  

        test("return the sum of any numbers which are a multiple of 3 or 5", () => {
            const result = sumMultiples ([1, 3, 5]);
            const expected = 8;
            expect(result).toBe(expected);
        });

        test("test it works with decimals", () => {
            const result = sumMultiples ([1, 3, 5.0, 2, 12, 10]);
            const expected = 30;
            expect(result).toBe(expected);
        });

        test("returns 0  if there are no  multiples of 3 or 5", () => {
            expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
        });
    });

    describe("areWeCovered", () => { 
        test("The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
            const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                            { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
            ]
            const day = "Tuesday"
            expect(areWeCovered(staff, day)).toBe(true);
        });

        test("Returns false if <3 staff scheduled to work", () => {
            const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                            { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
            ]
            expect(areWeCovered(staff, "Friday")).toBe(false);
        });
        
        test("it returns false if there are no staff at all", () => { 
            expect(areWeCovered([], "Sunday")).toBe(false);
            expect(areWeCovered([], "Monday")).toBe(false);
            expect(areWeCovered([], "Tuesday")).toBe(false);
            expect(areWeCovered([], "Wednesday")).toBe(false);
            expect(areWeCovered([], "Thursday")).toBe(false);
            expect(areWeCovered([], "Friday")).toBe(false);
            expect(areWeCovered([], "Saturday")).toBe(false);
        });
    });

    xdescribe("creativeMatrix", () => { 
        test("returns a matrix of 1 * 1 when passed 1", () => {
            const result = createMatrix(1);
            const expected = [ ["foo"] ]
            expect(result).toEqual(expected); // use toEqual for complex values
        });
    });

    describe("isValidDNA", () => { 
        test("throws an error if isn't a string", () => {
            expect(() => {
                isValidDNA();
            }).toThrow("str is required")
        }); 
        
        test("string of characters should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
            const result = isValidDNA (['C', 'G', 'T', 'A']);
            const expected = CGTA;
            expect(result).toBe(expected); 
        });
    });