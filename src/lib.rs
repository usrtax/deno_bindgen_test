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
fn add3() -> &'static [u8] {
    &[
        1, 2, 3, 4, 5, 6, 7, 9, 0, 1, 2, 3, 4, 5, 6, 7, 9, 0, 1, 2, 3, 4, 5, 6, 7, 9, 0, 1, 2, 3,
    ]
}
