#!/usr/bin/env node
(async () => {
  try {
    const cli = require('@medusajs/cli');
    await cli.run(['db:migrate', '--execute-safe-links']);
    process.exit(0);
  } catch (e) {
    console.error(e);
    // Fallback to setup once if migrate path fails (fresh DB)
    try {
      const cli = require('@medusajs/cli');
      await cli.run(['db:setup']);
      process.exit(0);
    } catch (e2) {
      console.error(e2);
      process.exit(1);
    }
  }
})();
