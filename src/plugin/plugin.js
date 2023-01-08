// require("https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js")
require("https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js");

this.pyodide = 0;

function Hello() {
    post("hello")
    post(this.pyodide.runPython("1 + 2"));
}

function moop() {
    post("moop")
    this.pyodide = loadPyodide();
    post("moop2")
}

// var pyodide = await loadPyodide();


// maxmsp params
outlets = 6
inlets = 2
