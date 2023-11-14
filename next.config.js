/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');

const plugins = [
    [
        withLess,
        {
            lessLoaderOptions: {},
        },
    ],
];

module.exports = withPlugins(plugins, {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 's3-alpha-sig.figma.com' }],
    },
});