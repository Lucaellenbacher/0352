/*
 * File: app.js
 * Author: Ellenbacher Luca
 * Copyright: 2022, Ellenbacher Luca
 * Group: Szoft I/1/E
 * Date: 2022-04-06
 * Github: https://github.com/Lucaellenbacher/0352.git
 * Licenc: GNU GPL
 */

$("#formBMR").validate();
const testZsirElem = document.querySelector("#testZsir")
const testTomegElem = document.querySelector("#testTomeg")
const kaloriaElem = document.querySelector("#kaloria")
const kaloriaGomb = document.querySelector("#szamitKal")

kaloriaGomb.addEventListener("click", () => {
  let testzsirszazalek = Number(testZsirElem.value)
  let testtomeg = Number(testTomegElem.value)
  let osszKaloria = kaloriaCalc(testzsirszazalek, testtomeg)
  kaloriaElem.value = osszKaloria
});

const kaloriaCalc = (zsir, suly) => 370 + 21.6 + Math.abs(1 - zsir) * suly;
