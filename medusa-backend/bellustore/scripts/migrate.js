#!/usr/bin/env node
const { run } = require('@medusajs/cli');
(async () => {
  try {
    await run(['db:migrate', '--execute-safe-links']);
    console.log('✔ db:migrate completed');
  } catch (e) {
    console.warn('db:migrate failed, trying db:setup...', e?.message || e);
    await run(['db:setup']);
    console.log('✔ db:setup completed');
  }
})();
