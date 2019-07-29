describe("HomeWork1 tests function", function () {
    describe('getSumOrMultByEven', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: -2,
                expected: 0,
            },
            {
                a: -3,
                b: -4,
                expected: -7,
            },
            {
                a: 2,
                b: 0,
                expected: 0,

            }
        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = getSumOrMultiByEven(a, b);

            it(`Should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getQuarterNumber', () => {
        const testData = [
            {
                x: 1,
                y: 2,
                expected: 1,
            },
            {
                x: -2,
                y: 3,
                expected: 2,
            },
            {
                x: -2,
                y: -3,
                expected: 3,
            },
            {
                x: 3,
                y: -3,
                expected: 4
            },
            {
                x: 2,
                y: 0,
                expected: -1,
            },
            {
                x: 0,
                y: 2,
                expected: -1,
            },
            {
                x: 0,
                y: 0,
                expected: -1,
            }
        ];
        testData.forEach(data => {
            const {x, y, expected} = data;

            const actual = getQuarterNumber(x, y);
            it(`Should return quarter ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getOnlyPositiveSum', () => {
        const testData = [
            {
                a: 1,
                b: 2,
                c: 3,
                expected: 6,
            },
            {
                a: 0,
                b: 0,
                c: 0,
                expected: 0,
            },
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 3,
            },
            {
                a: -1,
                b: -2,
                c: 0,
                expected: 0,
            },
            {
                a: 3,
                b: -2,
                c: 0,
                expected: 3
            },
            {
                a: -1,
                b: -1,
                c: -1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const {a, b, c, expected} = data;

            const actual = getOnlyPositiveSum(a, b, c);
            it(`Should return sum ${expected} when a = ${a}, b = ${b}, c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMaxValue', () => {
        const testData = [
            {
                a: 0,
                b: 0,
                c: 0,
                expected: 3,
            },
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 6,
            },
            {
                a: 2,
                b: 3,
                c: 4,
                expected: 27,
            },
            {
                a: -2,
                b: -1,
                c: 3,
                expected: 9,
            },
            {
                a: -1,
                b: -2,
                c: -3,
                expected: -3,
            },
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 6,
            },
        ];
        testData.forEach(data => {
            const {a, b, c, expected} = data;

            const actual = getMaxValue(a, b, c);
            it(`Should return ${expected} where a = ${a}, b = ${b}, c = ${c}`, () => {
                assert.strictEqual(expected, actual);
            });
        });
    });
    describe('getRating', () => {
        const testData = [
            {
                rating: 3,
                expected: "F",
            },
            {
                rating: 10,
                expected: "F",
            },
            {
                rating: 20,
                expected: "E",
            },
            {
                rating: 40,
                expected: "D",
            },
            {
                rating: 60,
                expected: "C",
            },
            {
                rating: 75,
                expected: "B",
            },
            {
                rating: 90,
                expected: "A",
            },

        ];
        testData.forEach(data => {
            const {rating, expected} = data;

            const actual = getRating(rating);
            it(`Should return ${expected} where rating = ${rating}`, () => {
                assert.strictEqual(expected, actual);
            });
        });
    });

    describe('getSumOfEven', () => {
        const testData = [
            {
                expected: {"sum": 2450, "counter": 50}
            },
        ];
        testData.forEach(data => {
            const {expected} = data;
            const actual = getSumOfEven();
            it(`Should return ${expected.counter} where counter is ${actual.counter}`, () => {
                assert.strictEqual(actual.counter, expected.counter);
            });
            it(`Should return ${expected.sum} where sum is ${actual.sum}`, () => {
                assert.strictEqual(actual.sum, expected.sum);
            });
        });
    });

    describe('isSimple', () => {
        const testData = [
            {
                number: 1,
                expected: false,
            },
            {
                number: 2,
                expected: true,
            },
            {
              number: 33,
              expected: false,
            },
            {
                number: 0,
                expected: true,
            },
            {
                number: 7,
                expected: true,
            },
        ];
        testData.forEach(data => {
            const {number, expected} = data;
            const actual = isSimple(number);
            it(`Should return ${expected} where number is ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getSqrt', () => {
        const testData = [
            {
                number: 4,
                expected: 2,
            },
            {
                number: 9,
                expected: 3,
            },
            {
                number: 16,
                expected: 4,
            },
        ];
        testData.forEach(data => {
            const {number, expected} = data;
            const actual = getSqrt(number);
            it(`Should return ${expected} where sqrt = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        });

        describe('getFactorial', () => {
            const testData = [
                {
                    number: 5,
                    expected: 120,
                },
                {
                    number: 3,
                    expected: 6,
                },
                {
                    number: 0,
                    expected: -1,
                },
                {
                    number: -2,
                    expected: -1,
                },
                {
                    number: -25,
                    expected: -1,
                },
            ];
            testData.forEach(data => {
                const {number, expected} = data;
                const actual = getFactorial(number);
                it(`Should return ${expected} where factorial = ${number}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('getSumOfCurrentNumbers', () => {
            const testData = [
                {
                    number: 521,
                    expected: 8,
                },
                {
                    number: 0,
                    expected: 0,
                },
                {
                    number: -1,
                    expected: -1,
                },
                {
                    number: -123,
                    expected: -1,
                },
                {
                    number: 25,
                    expected: 7,
                },
            ];
            testData.forEach(data => {
                const {number, expected} = data;
                const actual = getSumOfCurrentNumbers(number);
                it(`Should return ${expected} where number = ${number}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('getFactorial', () => {
            const testData = [
                {
                    number: 5,
                    expected: 120,
                },
                {
                    number: 3,
                    expected: 6,
                },
                {
                    number: 0,
                    expected: -1,
                },
                {
                    number: -2,
                    expected: -1,
                },
                {
                    number: -25,
                    expected: -1,
                },
            ];
            testData.forEach(data => {
                const {number, expected} = data;
                const actual = getFactorial(number);
                it(`Should return ${expected} where factorial = ${number}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('getMirrorDisplaytion', () => {
            const testData = [
                {
                    number: 0,
                    expected: 0,
                },
                {
                    number: 12,
                    expected: 21,
                },
                {
                    number: 333,
                    expected: 333,
                },
                {
                    number: 123,
                    expected: 321,
                },
                {
                    number: 565,
                    expected: 565,
                },
            ];
            testData.forEach(data => {
                const {number, expected} = data;
                const actual = getMirrorDisplaytion(number);
                it(`Should return ${expected} where number = ${number}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });
        describe('getMinElement', () => {
            const testData = [
                {
                    array: [],
                    expected: -1,
                },
                {
                    array: [1, 2, 3, 123],
                    expected: 1,
                },
                {
                    array: [0, 0, 0, 0, 0],
                    expected: 0,
                },
                {
                    array: [0, -1, 2, 3, 112],
                    expected: -1,
                },
                {
                    array: [-5, -3, 24],
                    expected: -5,
                },
            ];
            testData.forEach(data => {
                const {array, expected} = data;
                const actual = getMinElement(array);
                it(`Should return ${expected} where array = ${array}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });
    });
    describe('getMinElement', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 1,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: -1,
            },
            {
                array: [-5, -3, 24],
                expected: -5,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMinElement(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMaxElement', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 123,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: 112,
            },
            {
                array: [5, 3, 33],
                expected: 33,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMaxElement(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMinimalIdexOfElement', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 0,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: 1,
            },
            {
                array: [5, 3, 33],
                expected: 1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMinimalIndexOfElement(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
    describe('getMaxIndexOfElement', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 3,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: 4,
            },
            {
                array: [5, 3, 33],
                expected: 2,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMaxIndexOfElement(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSumWithOddIndexes', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 125,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: 2,
            },
            {
                array: [5, 3, 33],
                expected: 3,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getSumWithOddIndexes(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('reverseOfArray', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: [123, 3, 2, 1],
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: [0, 0, 0, 0, 0],
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: [112, 3, 2, -1, 0],
            },
            {
                array: [5, 3, 33],
                expected: [33, 3, 5],
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = reverseOfArray(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
    describe('getCountOddElement', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123],
                expected: 3,
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: 0,
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: 2,
            },
            {
                array: [5, 3, 33],
                expected: 3,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getCountOddElement(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMirrorChange', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [1, 2, 3, 123, 1],
                expected: [3, 123, 1, 1, 2],
            },
            {
                array: [0, 0, 0, 0, 0],
                expected: [3, 123, 1, 1, 2],
            },
            {
                array: [0, -1, 2, 3, 112],
                expected: [3, 123, 1, 1, 2],
            },
            {
                array: [5, 3, 33],
                expected: [3, 123, 1, 1, 2],
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMirrorChange(array);
            it(`Should return ${expected} where array = ${array}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
});