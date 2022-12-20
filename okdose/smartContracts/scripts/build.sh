#!/bin/sh

echo ">> Building contract"

echo | pwd

near-sdk-js build smartContracts/prescriptions/contract.ts build/prescriptions_near.wasm

DIR="smartContracts/build/"
if [ ! -d "$DIR" ]; then
   mv build smartContracts
else
   rsync -av build smartContracts
   rm -rf build
fi
