# CCSE Open Source Mirrors Website

This project builds the front-end website for [SUSTech CCSE Open Source Mirrors](https://mirrors.sustech.edu.cn/). It is built upon [Vuepress](https://vuepress.vuejs.org/).

## Setup

Make sure you have [Yarn](https://yarnpkg.com/) installed. (You may use NPM instead.)

``` sh
# Retrieve source code
git clone https://github.com/SUSTech-CRA/ccse-mirrors-web.git

# Install development dependencies
cd ccse-mirrors-web
yarn install

# Start your journey now
yarn dev
```

## Build for Production

``` sh
yarn build
```

By default, static files are generated in `site/.vuepress/dist/`. Publish the dist directory and you'll get your website.

## Acknowledgement

CCSE Open Source Mirrors is supported by [SUSTech Center for Computational Science and Engineering](http://hpc.sustech.edu.cn/).
