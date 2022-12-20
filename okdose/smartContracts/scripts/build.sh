#!/bin/sh

echo ">> Building contract"

echo | pwd

near-sdk-js build smartContracts/prescriptions/contract.ts build/prescriptions_near.wasm

mv build smartContracts
