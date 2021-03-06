module.exports = {
  apps: [
    {
      name: 'devcon',
      script: 'api/index.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: '',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        DEBUG: '@arcblock/*',
        NODE_ENV: 'production',
        ROOT_PATH: process.cwd(),
      },
    },
  ],
};
