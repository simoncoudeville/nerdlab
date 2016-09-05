Nerdlab
=====================

This is the codebase for [nerdlab.be](http://nerdlab.be). It hosted with github pages.

It's build with an early version of [Chopstick Boilerplate](https://github.com/getchopstick/chopstick-boilerplate).

## Setup and usage

### Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node 0.12.2](http://nodejs.org) and [npm](https://npmjs.org) or [NVM](https://github.com/creationix/nvm)

### Install

For automated install just run ./install.sh from project root.
This will check if package managers are installed and download required packages for you. For manual installation follow the below method.

You only need to do this once in a new project.
First, `cd` into the project root (where this file is).
Install [bundler](http://bundler.io) and the necessary Ruby dependencies:

    gem update --system && gem install bundler
    bundle install

Install [bower](http://bower.io) and the necessary JavaScript dependencies:

    npm install -g bower
    bower install

Install [gulp](http://gulpjs.com/) and the necessary gulp dependencies:

    npm install -g gulp
    npm install

### Use

We use Gulp as our task runner. There are some basic tasks defined but these can be easily extended by changing the `gulpfile.js`.

To compile Chopstick Boilerplate, `cd` into the project root and run:

    gulp

This will compile the `scss` and build the Jekyll site.

For development there is also a watch task wich will load a browsersync server and watch your all your files (`*.html, *.md, *.scss, *.js, *.jpg, *.png, *.svg`) for changes:

    gulp watch

Browsersync also works as a server for your devices. More info can be found on the [browsersync site](http://www.browsersync.io/).
