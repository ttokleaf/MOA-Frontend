import type { NextConfig } from 'next';
import type { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) =>
        typeof rule.test === 'object' && rule.test instanceof RegExp && rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      });

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
