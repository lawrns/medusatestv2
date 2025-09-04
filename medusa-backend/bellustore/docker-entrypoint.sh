#!/bin/sh
set -e
node scripts/migrate.js
exec node scripts/start.js
