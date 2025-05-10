# Calculator Program Built with C and Electron.js

> **🚀 Built by Peakk**  
> **⚡ Optimized for Performance**

<b>⚠️ Warning</b> <br>
To run this app, you need to install **WebAssembly** into your path environment.

## 📦 Installation

To set up the program, follow these steps:

1. **🛠️ Activate WebAssembly**  
   Run the following command to initialize WebAssembly:  
   ```bash
   ./emsdk activate latest
   ```

2. **📥 Install Dependencies**  
   Install the necessary Node.js dependencies:  
   ```bash
   npm install
   ```

3. **⚙️ Compile First**  
   Before running the program, compile it using one of the scripts in the [Compile](#compile) section below.

4. **💻 Run the Electron App**  
   Start the application using:  
   ```bash
   npm start
   ```

## 🌐 Running on the Web

If you want to run the program in a web environment instead of Electron, simply use:  
```bash
python -m http.server 8000
```

## 🔨 Compile

Here are the available compilation commands:

1. **🔧 Build WebAssembly**:  
   ```bash
   npm run build:wasm
   ```

2. **🏗️ Compile C to Executable**:  
   ```bash
   npm run compile:c
   ```

3. **🌍 Compile C to WebAssembly**:  
   ```bash
   npm run compile:wasm
   ```

4. **🐞 Debug Build**:  
   ```bash
   npm run compile:debug
   ```

### ❌ If None of the Above Methods Work

Manually compile the program with the following command:  
```bash
emcc Helloworld.c -o calculator.js -s WASM=1 \
-s EXPORTED_FUNCTIONS="['_add','_subtract','_multiply','_divide']" \
-s EXPORTED_RUNTIME_METHODS="['ccall']" \
-s NO_EXIT_RUNTIME=1
```

This will ensure that the program is properly compiled and ready for use.
