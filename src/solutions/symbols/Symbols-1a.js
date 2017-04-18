// Wat verwacht je bij uitvoering van hetvolgende?
Symbol('foo') + 'bar';

// Oplossing
try {
    Symbol('foo') + 'bar';
} catch(err) {
    console.error("cannot use string concatenation on Symbol");
    console.err(err);
}
