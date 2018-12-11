const Fraction = require('../fraction').Fraction;

test('Testing simplify I', ()=> {
      let fr = new Fraction(4, 2);
      expect(fr.getNumerator()).toBe(2);
      expect(fr.getDenominator()).toBe(1);
    });

test('Testing simplify II', ()=> {
    let fr = new Fraction(3, 5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
  });

test('Testing mcd I', ()=> {
    expect(Fraction.mcd(4, 3)).toBe(1);
  });

test('Testing mcd II', ()=> {
    expect(Fraction.mcd(22, 30)).toBe(2);
  });

test('Testing mcd III', ()=> {
    expect(Fraction.mcd(3, 9)).toBe(3);
    expect(Fraction.mcd(9, 3)).toBe(3);
  });

test('Testing mcm I', ()=> {
    expect(Fraction.mcm(2, 6)).toBe(6);
  });

test('Testing mcm II', ()=> {
    expect(Fraction.mcm(3, 4)).toBe(12);
  });

test('Testing mcm III', ()=> {
    expect(Fraction.mcm(4, 6)).toBe(12);
  });

test('Testing mcm IV', ()=> {
    expect(() => Fraction.mcm(1.5, 5)).toThrowError(Error);
  });

test('Testing mcm V', ()=> {
    expect(() => Fraction.mcm(1, 5.5)).toThrowError(Error);
  });

test('Testing add I', ()=> {
  let fr = new Fraction(3, 6);
  console.log(fr);
  let frNew = fr.add(1);
  expect(frNew.denominator).toBe(2);
  expect(frNew.numerator).toBe(2);
});

/*test('Testing add II', ()=> {
  let fr = new Fraction(3, 6);
  let frNew = fr.add(1, 1);
  expect(frNew.denominator).toBe(2);
  expect(frNew.numerator).toBe(3);
});*/
