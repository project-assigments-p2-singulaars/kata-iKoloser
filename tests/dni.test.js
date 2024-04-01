import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { validarDNI } from "../src/js/dni";

test('DNI válido devuelve mensaje de correcto', ({ expect }) => {
    const dni = '12345678Z';
    expect(validarDNI(dni)).toBe(`DNI: ${dni} es correcto`);
  });
  
  test('DNI con formato incorrecto devuelve mensaje de formato incorrecto', ({ expect }) => {
    const dni = '12345678Z9';
    expect(validarDNI(dni)).toBe('Formato Incorrecto');
  });
  
  test('DNI con letra incorrecta devuelve mensaje de letra de DNI incorrecta', ({ expect }) => {
    const dni = '98765432A';
    expect(validarDNI(dni)).toBe('Letra de DNI INCORRECTA');
  });
