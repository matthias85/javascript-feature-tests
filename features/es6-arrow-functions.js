/*
    es6 arrow functions
    lexical scoping
 */

this.message = 'this is MODULE context';


var foo = {
    message: 'this is OBJECT context'
};


foo.method = function(name, callback){
    this[name] = callback;
};


/*
    change this arrow function to standard function
    console.log(this.message); reference to "this" will change
 */
foo.method('bar', () => {
    console.log(this.message);
});


foo.bar();


// MODULE or OBEJCT ?