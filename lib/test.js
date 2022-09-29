  //!/usr/bin/env coffee
import {
  add1,
  add2,
  add3
} from '../bindings/bindings.ts';

console.log(add1(new Uint8Array([1, 3, 4]), new Uint8Array([5, 8, 4])));

console.log(add2(new Uint8Array([1]), new Uint8Array([5, 8, 4])));

console.log(add3());

/*
sleep = =>
  new Promise((resolve) => setTimeout(resolve, 1000))

n = 0
loop
  c = add(
    Math.round(10*Math.random()),
    Math.round(10*Math.random())
  )
  if n++%10000 == 0
    gc()
    await sleep()
    console.log(Deno.memoryUsage())
*/
