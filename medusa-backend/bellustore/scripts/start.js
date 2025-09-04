#!/usr/bin/env node
(async () => {
  try {
    const cli = require('@medusajs/cli');
    await cli.run(['start', '-H', '0.0.0.0', '-p', String(process.env.PORT || 8080)]);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
