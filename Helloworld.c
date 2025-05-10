#include <emscripten/emscripten.h>

#ifdef __cplusplus
extern "C" {
#endif

EMSCRIPTEN_KEEPALIVE
float add(float a, float b) { return a + b; }

EMSCRIPTEN_KEEPALIVE
float subtract(float a, float b) { return a - b; }

EMSCRIPTEN_KEEPALIVE
float multiply(float a, float b) { return a * b; }

EMSCRIPTEN_KEEPALIVE
float divide(float a, float b) { return b != 0 ? a / b : 0; }

#ifdef __cplusplus
}
#endif