#!/usr/bin/env node
const { run } = require('@medusajs/cli');
const port = String(process.env.PORT || 8080);
(async () => {
  await run(['start', '-H', '0.0.0.0', '-p', port]);
})();
