#!/bin/sh

if [ $? -ne 0 ]; then
  echo ">> Error building contract"
  exit 1
fi

echo ">> Deploying contract"

# https://docs.near.org/tools/near-cli#near-dev-deploy
near dev-deploy --projectKeyDirectory "smartContracts/neardev" --wasmFile smartContracts/build/prescriptions_near.wasm
