import leapYear from './index';

it('Should NOT be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('Should be a leap year if divisible by 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('Should NOT be a leap year if if not divisible by 4', () => {
    expect(leapYear(1983)).toBe(false);
});

it('Should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
});

it('Should throw an error for years before 1582', () => {
    expect(() => {
        leapYear(1568);
    }).toThrow();
});