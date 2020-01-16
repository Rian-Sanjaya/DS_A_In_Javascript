** What is Closure ?

A function that return a function.
The return inner function have access to the variables in the outer (enclosing) function scope even after the outer function has returned.

Closures are used for data privacy.

** What is hoisting ?

In Javascript we can use a variable even the variable declaration is after it. 
We can also call a function even the function declaration is after calling the function.
In other structurul programming language this will be error because we have to declare a varialbe and function whenever we want to use the variable and the function.

Two step when javascript run:
1. creation phase
all variable and function declaration will be set in memory first

2. execution phase
execute javascript one command at a time


** What is this in Javascript ?

a special variable that reference to object.

this value will be different on how it is used.

function foo() {
  console.log( this.bar );
}

var bar = "global1";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo();           // "global1"
obj1.foo();      // "obj1"
foo.call( obj2 ) // "obj2"
new foo();       // undefined

1. foo() ends up setting this to the global object in non-strict mode -- in strict mode,
   this would be undefined and you'd get an error in accessing the bar property -- so
   "global" is the value found for this.bar .
2. obj1.foo() sets this to the obj1 object.
3. foo.call(obj2) sets this to the obj2 object.
4. new foo() sets this to a brand new empty object.


4 Rules:

1. DEFAULT BINDING

function foo() {
  console.log( this.a );
}

var a = 2;
foo();  // 2

- foo() is called with a plain, undecorated function reference

2. IMPLICIT BINDING

function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo();  // 42

- the call-site uses the obj context to reference the function, so you could say that the obj object owns or contains the function reference at the time the function is called.

Implicitly Lost

function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  // 'fn' is just another reference to 'foo'

  fn();  // <-- call-site
}

var obj = {
  a: 2,
  foo: foo
}

var a = "Oops, global"  // 'a' also property on global object

doFoo(obj.foo);  // Oop, global

3. EXPLICIT BINDING

function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
}

foo.call( obj );  // 2

Hard Binding

function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call(obj);
};

bar();  // 2
setTimeout( bar, 100 );  // 2
// hard-bound 'bar' can no longer have its 'this' overridden
bar.call( window );  // 2

No matter how you later invoke the function bar, it will always manually invoke foo with obj. This binding is both explicit and strong, so we call it hard binding.

Since hard binding is such a common pattern, its provided with a builtin utility as of ES5, Function.prototype.bind, and its used like this:

function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 );  // 2 5
console.log(b);    // 5

bind(..) returns a new function that is hardcoded to call the original function with the this context set as you specified.

4. NEW BINDING

function foo(a) {
  this.a = a;
}

var bar = new foo(2);  // bar is newly created (constructed) object
console.log( bar.a );  // 2


** What is Functional Programming ?

** What is Prototypal Inheritance (Diffrence between Class & Prototypal Inheritance) ?

all objects (including functions) has a prototype property (we call it proto), a property that simply a reference to another object.

** Prototype Chain

when we call a property (let say it prop1), it will look prop1 on the object itself, if it cannot find it, it will look on the prototype, if it cannot find it, it will look on the prototype of the prototype, and so on.

** What is Promise ?