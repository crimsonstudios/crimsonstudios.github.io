# Crimson Studios Marketing Website

## Running the app

Just navigate to the root folder, and then run the command `yarn && yarn start` and this should install the packages and run the website.

## Structure & Tech

It's a simple website using HTML/SASS/JS. There's not much JS, and hopefully we've kept it minimal - no doubt it'll expand over time but the idea is to keep away from using libraries such as Bootstrap & jQuery etc...

The SASS is structured according to 7-1/5-1 pattern and atomic design: https://matthewelsom.com/blog/simple-scss-playbook.html

> We've not actually used it but its there to eventually abstract into, especially as the site grows.

Images and Design creation will be private, but feel free to reach out if you want to know how we went about it!

In order to compile the CSS from the Sass, you need to run the command `yarn build:css`, this does a mixture of building the css from the sass, concatenating any other css files required and it will auto prefix various properties for multiple browsers and then compresses it.

# Go see the website! https://crimsonstudios.io/
