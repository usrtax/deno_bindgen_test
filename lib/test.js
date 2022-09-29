#!/usr/bin/env -S node --es-module-specifier-resolution=node --trace-uncaught --expose-gc --unhandled-rejections=strict
var main, n, sleep;

import {
  add1,
  add2,
  add3
} from '../bindings/bindings.ts';

main = () => {
  var a, a1, a2, a3;
  a = new Uint8Array(5550);
  crypto.getRandomValues(a);
  a1 = add1(a, a);
  a2 = add2(new Uint8Array([1]), new Uint8Array([5, 8, 4]));
  a3 = add3();
};

//console.log(a1,a2,a3)
sleep = () => {
  return new Promise((resolve) => {
    return setTimeout(resolve, 10);
  });
};

n = 0;

while (true) {
  main();
  if (n++ % 10000 === 0) {
    gc();
    await sleep();
    console.log(n, Deno.memoryUsage());
  }
}
