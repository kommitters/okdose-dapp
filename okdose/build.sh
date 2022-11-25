#!/bin/sh

echo ">> Building contract"

near-sdk-js build contracts/medicines/contract.ts contracts/build/medicine_near.wasm
