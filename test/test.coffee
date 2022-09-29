#!/usr/bin/env coffee

> ../bindings/bindings.ts > add3
# > ../bindings/bindings.ts > add1 add2 add3

main = =>
  ###
  a=new Uint8Array(5550)
  crypto.getRandomValues(a)

  a1 = add1(
    a
    a
  )

  a2 = add2(
    new Uint8Array([1])
    new Uint8Array([5,8,4])
  )
  ###

  a3 = add3(1,5)

  #console.log(a1,a2,a3)
  return

sleep = =>
  new Promise((resolve) => setTimeout(resolve, 10))

n = 0
loop
  main()
  if n++%10000 == 0
    gc()
    await sleep()
    console.log(n,Deno.memoryUsage())
