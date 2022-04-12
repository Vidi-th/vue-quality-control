import { penjumlahan, pengurangan, pembagian, perkalian, rataRata } from "@/utils/operation.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("1", "0")).toBe("10");
  });
});

describe("Melakukan pengurangan", () => {
  test("Pengurangan dua bilangan positif", () => {
    expect(pengurangan(6, 4)).toBe(2);
  });
  test("Pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-10, -2)).toBe(-8);
  });
  test("Pengurangan dua bilangan positif dan negatif", () => {
    expect(pengurangan(10, -5)).toBe(15);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif bulat", () => {
    expect(pembagian(10, 2)).toBe(5);
  });
  test("pembagian bilangan positif dan negatif", () => {
    expect(pembagian(-15, 3)).toBe(-5);
  });
  test("pembagian koma", () => {
    expect(pembagian(11, 2)).toBe(5.5);
  });
});

describe("Melakukan perkalian", () => {
  test("perkalian dua bilangan positif bulat", () => {
    expect(perkalian(7, 2)).toBe(14);
  });
  test("perkalian bilangan positif dan negatif", () => {
    expect(perkalian(-11, 3)).toBe(-33);
  });
  test("perkalian koma", () => {
    expect(perkalian(5.2, 0.4)).toBe(2.08);
  });
});

describe("Mencari rata-rata", () => {
  test("rata-rata lima bilangan positif bulat", () => {
    expect(rataRata(7, 2, 4, 5, 1)).toBe(3.8);
  });
  test("rata-rata lima bilangan positif dan negatif", () => {
    expect(rataRata(-11, 3, 7, 5, 20)).toBe(4.8);
  });
  test("rata-rata lima bilangan koma", () => {
    expect(rataRata(5.2, 0.4, 3.0, 4.1, 2.3)).toBe(3);
  });
});