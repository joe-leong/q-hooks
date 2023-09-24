#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

cd packages/q-hooks
npm publish
cd -

echo "✅ Publish completed"
