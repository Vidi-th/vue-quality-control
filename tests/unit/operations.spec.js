import { 
  penjumlahan, 
  pengurangan, 
  pembagian, 
  perkalian, 
  rataRata,
  sisaBagi,
  luasPersegi,
  luasLingkaran,
  luasKubus,
  volKubus 
} from "@/utils/operation.js";

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

describe("Mencari sisa bagi", () => {
  test("sisa bagi dari bilangan positif", () => {
    expect(sisaBagi(7, 2)).toBe(1);
  });
  test("sisa bagi dari bilangan positif dan negatif", () => {
    expect(sisaBagi(-11, 3)).toBe(-2);
  });
  test("sisa bagi bilangan negatif negatif", () => {
    expect(sisaBagi(-43, -3)).toBe(-1);
  });
});

describe("Mencari luas persegi", () => {
  test("luas persegi pertama", () => {
    expect(luasPersegi(7, 2)).toBe(14);
  });
  test("luas persegi kedua", () => {
    expect(luasPersegi(11, 3)).toBe(33);
  });
  test("luas persegi ketiga", () => {
    expect(luasPersegi(5, 0.3)).toBe(1.5);
  });
});

describe("Mencari luas lingkaran", () => {
  test("luas lingakran pertama", () => {
    expect(luasLingkaran(5, 5)).toBe(78.5);
  });
  test("luas lingkaran kedua", () => {
    expect(luasLingkaran(2, 2)).toBe(12.56);
  });
  test("luas lingkaran ketiga", () => {
    expect(luasLingkaran(4, 4)).toBe(50.24);
  });
});

describe("Mencari luas kubus", () => {
  test("luas kubus kesatu", () => {
    expect(luasKubus(5, 5, 5)).toBe(150);
  });
  test("luas kubus kedua", () => {
    expect(luasKubus(2, 2, 2)).toBe(24);
  });
  test("luas kubus ketiga", () => {
    expect(luasKubus(4, 4, 4)).toBe(96);
  });
});

describe("Mencari Volume Kubus", () => {
  test("vol kubus kesatu", () => {
    expect(volKubus(5, 5, 5)).toBe(125);
  });
  test("vol kubus kedua", () => {
    expect(volKubus(2, 2, 2)).toBe(8);
  });
  test("vol kubus ketiga", () => {
    expect(volKubus(4, 4, 4)).toBe(64);
  });
});