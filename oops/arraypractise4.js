function x(a) {
    a();
}

x(() => console.log("anonymous function called"));