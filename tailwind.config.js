module.exports = {
    mode: 'aot',
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [],
}
