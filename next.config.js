// next.config.js
module.exports = {
  // Sentry configuration
  sentry: {
    // Your Sentry project (required for `@sentry/wasm`)
    org: 'codeforge-ai',
    project: 'javascript-nextjs',
    // Your Sentry DSN (write key)
    dsn: process.env.SENTRY_DSN,
    // Your Sentry environment
    environment: process.env.NODE_ENV,
    // Your Sentry release
    release: process.env.RELEASE,
  },
}