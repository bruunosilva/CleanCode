import { calc } from "../src/main";
test("Deve testar o algoritmo de cálculo da corrida",function(){
    expect(calc([
        { dist: 10, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(15);
    expect(calc([
        { dist: 10, ds: new Date("2021-03-02T10:00:00") }
    ])).toBe(21);
    expect(calc([
        { dist: 10, ds: new Date("2021-03-02T23:00:00") }
    ])).toBe(39);
    expect(calc([
        { dist: 10, ds: new Date("2021-03-07T10:00:00") }
    ])).toBe(29);
    expect(calc([
        { dist: 10, ds: new Date("2021-03-07T23:00:00") }
    ])).toBe(50);
    expect(calc([
        { dist: -10, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(-1);
    expect(calc([
        { dist: 10, ds: new Date("abcdef") }
    ])).toBe(-2);
    expect(calc([
        { dist: 3, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(10);
});