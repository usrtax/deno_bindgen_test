#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if ! [ -x "$(command -v deno_bindgen)" ]; then
deno install -Afq -n deno_bindgen https://deno.land/x/deno_bindgen/cli.ts
fi

deno_bindgen --release
