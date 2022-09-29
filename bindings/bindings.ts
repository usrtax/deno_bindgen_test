// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.2/plug.ts"

function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}

function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as bigint)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const url = new URL("../target/debug", import.meta.url)
let uri = url.toString()
if (!uri.endsWith("/")) uri += "/"

let darwin: string | { aarch64: string; x86_64: string } = uri + "libdeno.dylib"

if (url.protocol !== "file:") {
  // Assume that remote assets follow naming scheme
  // for each macOS artifact.
  darwin = {
    aarch64: uri + "libdeno_arm64.dylib",
    x86_64: uri + "libdeno.dylib",
  }
}

const opts = {
  name: "deno",
  urls: {
    darwin,
    windows: uri + "deno.dll",
    linux: uri + "libdeno.so",
  },
  policy: CachePolicy.NONE,
}
const _lib = await prepare(opts, {
  add1: {
    parameters: ["buffer", "usize", "buffer", "usize"],
    result: "buffer",
    nonblocking: false,
  },
  add2: {
    parameters: ["buffer", "usize", "buffer", "usize"],
    result: "buffer",
    nonblocking: false,
  },
  add3: { parameters: [], result: "buffer", nonblocking: false },
})

export function add1(a0: Uint8Array, a1: Uint8Array) {
  const a0_buf = encode(a0)
  const a1_buf = encode(a1)

  let rawResult = _lib.symbols.add1(
    a0_buf,
    a0_buf.byteLength,
    a1_buf,
    a1_buf.byteLength,
  )
  const result = readPointer(rawResult)
  return result
}
export function add2(a0: Uint8Array, a1: Uint8Array) {
  const a0_buf = encode(a0)
  const a1_buf = encode(a1)

  let rawResult = _lib.symbols.add2(
    a0_buf,
    a0_buf.byteLength,
    a1_buf,
    a1_buf.byteLength,
  )
  const result = readPointer(rawResult)
  return result
}
export function add3() {
  let rawResult = _lib.symbols.add3()
  const result = readPointer(rawResult)
  return result
}
