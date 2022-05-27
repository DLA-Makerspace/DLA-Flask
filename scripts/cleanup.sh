#!/bin/bash

echo -e 'cleaning up...'

echo -e '\n cleaning transpiled ts ... \n'
rm -rf **/static/*_animate.js

echo -e '\n cleaning node_modules/ ... \n'
rm -rf node-modules/

echo -e '\n cleaning venv ... \n'
rm -rf dla_venv

echo -e '\n ...cleanup done! \n'
