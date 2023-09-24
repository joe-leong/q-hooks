#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

cd packages/hooks
npm publish --access=public
cd -

echo "✅ Publish completed"
