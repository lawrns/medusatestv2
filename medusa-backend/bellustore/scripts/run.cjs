#!/usr/bin/env node
const cli = require('@medusajs/cli');
(async () => {
  try {
    await cli.run(['db:migrate', '--execute-safe-links']);
  } catch (e) {
    console.error('migrate failed → running db:setup:', e?.message || e);
    await cli.run(['db:setup', '--execute-safe-links']);
  }
  await cli.run(['start', '-H', '0.0.0.0', '-p', String(process.env.PORT || 8080)]);
})();
