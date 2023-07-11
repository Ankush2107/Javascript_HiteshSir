// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected two`);
} )();

( (name) => {
    console.log(`DB connected two ${name}`);
} )("Ankush");