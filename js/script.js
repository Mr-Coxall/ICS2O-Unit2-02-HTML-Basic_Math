// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  // this function does basic math

  document.getElementById('add-math').innerHTML = '6 + 5 = ' + (6 + 5)
  document.getElementById('subtract-math').innerHTML = '7 - 3 =  ' + (7 - 3)
  document.getElementById('multiply-math').innerHTML = '3 + 4 * 2 = ' + (3 + 4 * 2)
  document.getElementById('divide-math').innerHTML = '(4 / 2) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
}
