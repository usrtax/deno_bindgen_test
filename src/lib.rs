use deno_bindgen::deno_bindgen;

//#[deno_bindgen]
//fn add1(a: &[u8], b: &[u8]) -> Box<[u8]> {
//    [a, b].concat().into()
//}
//
//#[deno_bindgen]
//fn add2(a: &[u8], b: &[u8]) -> Vec<u8> {
//    [a, b].concat()
//}

#[deno_bindgen]
fn add3(a: u64, b: u64) -> u64 {
    a + b
}
