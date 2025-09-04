#!/bin/sh
set -e
export NPM_CONFIG_YES=true
npx @medusajs/cli@2.8.2 db:migrate --execute-safe-links || npx @medusajs/cli@2.8.2 db:setup --execute-safe-links
exec npx @medusajs/cli@2.8.2 start -H 0.0.0.0 -p "${PORT:-8080}"
