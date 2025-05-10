# Calculator program build with C programming language <br>
# And build with Electron.js

> Build with Peakk
> Program with performance

## Install
    install webassembly to path env
    run
    ``  ./emsdk activate latest -> Run this for initiation this program
        npm install -> Than compile first run script on compile section below
        npm start  -> Run Electron app
    ``

## Start
    #### or you want to run on web
    python -m http.server 8000

## COMPILE 

    1. npm run build:wasm
    2. .exe | npm run compile:c
    3. webassembly | npm run compile:wasm
    4. debug | npm run compile:debug
   
    *if all method doesn't work*

    ```emcc Helloworld.c -o calculator.js -s WASM=1 -s EXPORTED_FUNCTIONS=\"['_add','_subtract','_multiply','_divide']\" -s EXPORTED_RUNTIME_METHODS=\"['ccall']\" -s NO_EXIT_RUNTIME=1```