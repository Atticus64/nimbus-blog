---
title: Make 
publish_date: 2023-05-21
description: a
---

# Table of contents

[[#Introduction]]
[[#The main function]]
[[#The include preprocessor]]
[[#Literals]]
[[#Functions]]
[[#Statements]]
[[#Classes]]
[[#Structs]]
[[#Enumerators]]
[[#Namespaces]]

# Introduction

C++ is a really vast and complex language. Teaching how the language works, alongside good practices and other advices is way too extense, complex, and probably boring for the reader.

The goal of this book is to give you a grasp of how C++ *works*, how to do things syntactically correct. That way you can only focus on learning what the language is capable to do. The moment you understand how the language works, you are ready to learn practices that will make your code cleaner, mantainable, readable, scalable and secure.

If you do not get quite the idea of any topic given, re read in case you misread something that made things unclear, otherwise keep reading, maybe the concept will get clearer with information alonside the way. If all else fails, issue the problem directly with me and I will try to offer some explanation you are capable to understand and in case it is convenient, change the book's current explanation.

# The main function

Every C++ program must have something we call "Entry Point"; this tells the program where it is supposed to begin the program's logic.

This is represented in our code as a function with some specific attributes. 

- The return type must be `int`
- The name of the function must be `main`
- Should have two parameters for program arguments (optional)
- Should return 0 (optional)

A function with all these attributes should look like this:

```cpp
int main(int argc, char** argv) {
	
	return 0;
}
```

You see, you can avoid two out of four characteristics of the main function, you could avoid the parameters and the return, it will compile just fine.

```cpp
int main() {

}
```

Yet the return type and the name must stay untouched, otherwise the compiler will assume there is no entry point.

# The \#include preprocessor

These are some special rules, used to indicate directives or capabilities of you C++ files.

There are various types of preprocessor, but right now, we will only discuss about one. The other will be of more use in the [[#Header files]] section.

The one preprocessor it is important to us right now it the `#include`. This indicates we want to use some external file inside the code; it may be some standard library, maybe a third party library, or even another library declared by ourselves.

When thing we call using `#include` is called a header, more details about headers later. The important thing is that the syntax slightly different if we need to call a system(standard or third party) or a personal header.

```cpp
#include <iostream>
```

```cpp
#include "myHeader.hpp"
```

If it is a system library, one should put the name of the library inside `< >`, otherwise it should be called using `" "`.

We will be covering many standard libraries since they offer a wide variety of functionality. Here and example of input/output utilities exported from a standard header.

```cpp
#include <iostream>

int main() {
	std::cout << "Hello World!" << std::endl;
	
	return 0;
}
```

# Literals

These are *tokens* of a C++ program, and they come to represent some constant value embedded in the source code.

Literals are divided into five different categories, integer(decimal, octal, hex), character(UTF-8 up to UTF-32), floating point(fractions), string(a sequence of characters), and boolean(true or false).

You can store these kind of values inside variables, using some special keywords made specifically for this.

### Integer literals
- `int`
- `short`
- `long`
- `long long`

### character literals
- `char`
- `wchar_t`
- `char8_t`
- `char16_t`
- `char32_t`

### floating point literals
- `float`
- `double`
- `long double`

### String literals
- `const any_char_literal*`
- `const any_char_literal[]` 

It may seem like a lot right now, but we do not require to know all of them immediately. Only `int`, `float`, `char`, and `const char*` for now.

# Functions

### Declaring funcions

The way we can declare functions is quite straight forward:

```cpp
int add(int x, int y) {
	return x + y;
}
```

indicate the return type, give the function a name, add parameters inside the parenthesis, put the functions logic inside curly braces, and finally return something.

By the way, you can declare the return type as any valid data type in C++, but in case you don't want to return anything, use the keyword `void`

```cpp
void sayHello(const char* name) {
	std::cout << "Hello " << name << std::endl;
}
```

### Calling functions

Once we have declared a function, we can call it inside our code if needed, just writing the function name and giving parameters(if needed).

```cpp
int main() {
	sayHello("midnight");
	
	return 0;
}
```

### Overloading functions

Functions can be overloaded, which means we can declare a function multiple times with different logic, parameters, and even different return types.

```cpp
void foo() {
	std::cout << "foo!" << std::endl;
}

int foo(int a, int b) {
	return a + b;
}

float foo(float x) {
	return x * x;
}
```

As long as the return type or the parameters are different from previous declarations of the function, you can overload as many times as you want.

# Statements

Described as fragments of every C++ program that are executed in sequence. The available staments we could mention are:

- [[#Declaration statements]]
- [[#Expression statement]]
- [[#Compound statements]]
- [[#Iteration statements]]
- [[#Selection statements]]
- [[#Jump statements]]
- [[#Try blocks]]

### Declaration statements

Introduce one(or more) variables into a statement block.

```cpp
// single declaration
int myInteger = 10;
```

```cpp
// multiple declarations
int first = 1, second = 2, third = 3;
```

### Expression statement

An expression followed by a semicolon.

```cpp
myInteger += 10;
```

### Compound statements

AKA block, it groups a series of statements into a single statement

```cpp
// everything inside the curly braces 
// is part of the compound block
{
	int myInteger = 0;
	
	myInteger += 10;
}
```

### Iteration statements

Statement that repeatedly executes some code.

```cpp
// while 
int index = 0;

while(index > 10) {
	std::cout << index << ' ';
	
	index++;
}
```

```cpp
// do while
int index = 0;

do {
	std::cout << index << ' ';
	
	index++;
}
while(index > 20)
```

```cpp
// for 
for(int i = 0; i < 10; i++) {
	std::cout << index << ' ';
}
```

```cpp
// range for
int array[] = { 1, 2, 4, 8, 16, 32 };

for(auto item : array) {
	std::cout << item << ' ';
}
```

### Selection statements

Choose between one(or several) control flows.

```cpp
// if statements
int myInteger = 10;

if(myInteger > 10) {
	// ...
}
else if(myInteger < 10) {
	// ...
}
else {
	// ...
}
```

```cpp
int myInteger = 10;

switch(myInteger) {
	case 10:
		// ...
		break;
		
	// ...
		
	default:
		// ...
		break;
}
```

### Jump statements

Unconditionally transfer control flow.

```cpp
// return, avoid the rest of the function code to be executed

void foo(int number) {
	if(number > 10) {
		return;
	}
	
	// ...
}
```

```cpp
// return with some value, will stop the rest of the execution 
// of any statement, and give some data back 
// to wherever the function was called
// can even abruptly stop a loop

int foo(int param) {
	if(param > 10) {
		return param;	
	}
	
	return 3;
} 
```

```cpp
// continue, will skip the rest of the statements inside a loop and go to the next iteration.

for(int i = 0; i < 10; i++) {
	if(i % 2 == 0) {
		continue;
	}
	
	// ...
}
```

```cpp
// break, will stop the iteration, even if it was unfinished

for(int i = 0; i < 10; i++) {
	if(i > 7) {
		break;
	}
	
	// ...
}
```

### Try blocks

Catches exceptions thrown when executing other statements

```cpp
// will execute the code inside the catch block if an exception is met

try {
	// ...
}
catch(...) {
	// ...
}
```

Try blocks can also be embedded directly in functions

```cpp
int foo(int param) try {
	// ...
}
catch(...) {
	// ...
}
```

# Classes

These are user-defined types, they can hold data members, member functions, nested types, enumerators and member templates. But we will focus our attention in something else right now, class declaration and something we call access specifiers.

When we declare a class type, we need to give our type a name, of course

```cpp
class Vector;
```

This is a totally valid custom type, the fact that is utterly useless is another story. Lets make our custom type more usable then.

```cpp
class Vector {
	int x;
	int y;
	int z;
};
```

Fantastic, now we have some data specified inside our class, can you recall the access specifier we mentioned?, well now it is a good time to explain that.

### Access specifiers

Meant to indicate how accessible some data inside a class is. There are a total of three types of access specifiers:

- `public`: totally accessible from outside.
- `private`: not accessible for nobody but the class itself.
- `protected`: same as `private` but they can be inherited.

The reason why you would want something like this, is that you will probably want some complex functionality out of a custom object, sometimes that required functions and data, which you need to work, but at the time you are using an object with those treats, you don't want to mess up with that, in fact, it may not work as intented if you do.

```cpp
class Vector {
public:
	// ...
	
private:
	int x;
	int y;
	int z;
}
```

What you normally do, is having the data as private, then through some member function(method) you can consult the current state of the data. For now, lets suppose it is all declared as public for the next topic.

Lets create a vector out of our Vector type

```cpp
int main() {
	Vector myVector;
	
	myVector.x = 10;
	myVector.y = 3;
	myVector.z = 9;
	
	return 0;
}
```

We can declare an object out of a user-defined type like any other variable, the thing here is, we are not only declaring our object, we are also setting the values of its members in other statements. Writing this much and probably forgetting to set some important member in the process is not the best, so we will introduce the concept of class constructors.

### Class constructors

A special type of function belonging to some class, this function will only be called when an object is declared. The constructor can be overloaded as any other function.

```cpp
class Vector {
public:
	Vector(int x, int y, int z);
}
```

The constructor must be public, obviously; and it can be defined either inside the class or outside the class.

```cpp
// inside the class

class Vector {
public:
	Vector(int x, int y, int z) {
		m_x = x;
		m_y = y;
		m_z = z;
	}

private:
	int m_x;
	int m_y;
	int m_z;
}
```

```cpp
// outside the class

class Vector {
public:
	Vector(int x, int y, int z);

private:
	int m_x;
	int m_y;
	int m_z;
}

Vector::Vector(int x, int y, int z) {
	m_x = x;
	m_y = y;
	m_z = z;
}
```

Members can be either initialized inside the constructor body or using a member initializer list.

```cpp
// inside the body
Vector::Vector(int x, int y, int z) {
	m_x = x;
	m_y = y;
	m_z = z;
}
```

```cpp
// using initializer list
Vector::Vector(int x, int y, int z) 
	: m_x(x), m_y(y), m_z(z) {
	// ...	
}
```

Sometimes you want to leave the constructor body clean for extra operations, so you have a whole different section to declare your class members. In other occasions you want to default initialize a class.

### Default construction

You can have a default state for your class by defining your members with some values, so you can declare two type of constructions, one as default and another more explicit.

```cpp
class Vector {
public:
	Vector() = default;

private:
	int x = 0;
	int y = 0;
	int z = 0;
}
```

Declaring the constructor as default, and giving the members some default values, we can have a sort of *neutral* state.

```cpp
int main() {
	// default constructor
	Vector myDefaultVec;
	
	// explicit constuctor
	Vector myExplicitVec(3, 1, 49);
	
	return 0;
}
```

Now we don't need to worry about manually declaring all member values or writing more than necessary when doing so.

This class is just holding three values, and we cannot do much with it, not even accessing those values. Some class methods could be useful here.

### Class methods

Methods are basically functions declared inside a class, they can access private members and modify them if needed.

```cpp
class Vector {
public:
	// ...

	int x();
	int y();
	int z();

private:
	int m_x = 0;
	int m_y = 0;
	int m_z = 0;
}
```

Just like functions, you declare a return type and give it a name, add some parameters if needed. And just like class constructors, you can either define the logic of methods inside the class or ouside the class.

```cpp
// inside class
class Vector {
public:
	int x() {
		return m_x;
	}
	
	// ...
}
```

```cpp
// outside class
class Vector {
public:
	int x();
	
	// ...
}

int Vector::x() {
	return m_x;
}
```

Methods are can be accessed just like members(if the access specifiers permits it).

```cpp
int main() {
	Vector myVector(1, 3, 8);
	
	std::cout << myVector.x() << std::endl;
	std::cout << myVector.y() << std::endl;
	std::cout << myVector.z() << std::endl;
}
```

This is mostly all you need to know about classes, but we will cover some things about classes that may be important to know later, yet you are not forced to go any further with this one rigth now. If you want to skip to [[#Structs]], go ahead.

### The this pointer

`this` is a keyword that refers to the class itself, it can be called inside any method that belongs to the class.

```cpp
class Vector {
	Vector() {
		this->m_x = 0;
		this->m_y = 0;
		this->m_z = 0;
	}
}
```

It can point to anything that belongs to the class, could be either a member of a method.

### Abstract classes

Defines a class type which you cannot create, but you can inherit, represent a concept to be implemented, not an actual type.

```cpp
// declaring abstract class

class Abstract {
public:
	virtual void function() = 0;
}
```

```cpp
// implementing abstract class

class Concrete : Abstract {
public:
	virtual void function() override;
}
```

`virtual` is a keyword that defines a function whose behavior can be overriden by a child class, asigning the method as 0 we also specify that this function is purely virtual, something that requires definition when inherited.

Once we inherit our abstract class, we declare the inherited functionality as `override`, indicating we are modifying the behavior of the original class(if there was any).

Like the other methods, these can be declared inside or outside, but if declared outside, you don't need to write `virtual` nor `override` on the declaration outside.

### Class friends

`friend` is a keyword that may appear on the class body, and it will grant a function outside the class to access the private/protected members of a class.

```cpp
class Vector {
public:
	Vector() = default;
	
private:
	int x = 0;
	int y = 0;
	int z = 0;
	
	friend void printElements(Vector& ref);
}

void printElements(Vector& ref) {
	std::cout 
		<< " x: " << ref.x 
		<< " y: " << ref.y 
		<< " z: " << ref.z 
		<< '\n';
}
```

# Structs

Everything you have read about [[#Classes]] applies to the `struct` type, with only once difference between the two. The class default access specifier is `private`, the default for `struct` type is `public`.

The same places you could use a class, a struct may also be of valid use, by convention we use classes for complex types that require methods and members both public and private. Structures are more useful when structured related data is needed somewhere.

```cpp
struct CameraInformation {
	int width  = 0;
	int heigth = 0;
	
	float fieldOfView = 0;
	float focusLength = 0;
	
	// ...
}
```

# Enumerators

A distinct type whose value is restricted to a set range of constant values(enumerators). There are two different enumerator types, unscoped enumerators and scoped enumerators.

Yet both share some things in common that are worth mentioning before sharing the differences.

- Will have the same size as the underlying data is holding.
- Enumerators can be explicitly declared or implicitly declared.
- The declarations follow as enum keyword, enum head name, enum base, and the enumerator list.

There are four ways you can declare an enum, following the previous declarations it goes as follows:

```
enum_keyword head_name : enum_base {
	enumerator_list,
}

enum_keyword head_name {
	enumerator_list,
}

enum_keyword head_name : enum_base;

enum_keyword head_name;
```

### Unscoped enumerators

Declared with the keyword `enum`, the rest of the declaration can follow as the previous examples mentioned.

```cpp
enum Colors : int {
	red = 0,
	blue = 1,
	// ...
}
```

As you can see in this example, we are explicitly declaring the enumerator value. In case we do not specify the first enumerator's value, the default will be 0, if any following enumerator is left unspecified, the default value will be the previous enumerator's value plus one.

### Scoped enumerators

Declared with either `enum class` or `enum struct` (`enum class` preferred)

# Namespaces

One thing that may eventually happen, maybe using a third-party library, maybe conflicting with your own code, some data type, variable, something that have similar declarations in different contexts.

To avoid a naming conflict problem, you can use namespaces. Symbols declared inside some namespace scope, avoid conflict with identically named symbols inside other namespace's scope.

### declaring namespaces

```cpp
namespace foo {
	void printHello() {
		std::cout << "hello from foo::printHello!" << std::endl;
	} 
}

namespace wee {
	void printHello() {
		std::cout << "hello from wee::printHello" << std::endl;
	}
}

int main() {
	foo::printHello();
	wee::printHello();
	
	return 0;
}
```

Despite having the same name, and the same type, these two functions will never collide since they are located in different name scopes.

That way, even if a library(or even yourself) implemented a symbol that happens to be named identically to other symbol somewhere else, they will never interfere each other if declared on different namespaces.

### Using namespaces

You can cast away some namespace if you want to, which will be a bit contradictory but you are allowed to do that, who knows.

```cpp
using namespace wee;

int main() {
	foo::printHello();
	printHello();
	
	return 0;
}
```

Since we got rid of wee's namespace, everytime we call `printHello` without a method, the compiler will assume that we refer to `wee::printHello`

If we cast away the other namespace alongside `wee`, it will have naming conflicts, since the compiler can't tell which one is which.

### Namespace alias

Lets suppose you have a nested namespace, and you do not want to write the all the namespaces to access some symbol inside the nested namespace. For that we have namespace alias.

```cpp
#include <filesystem>

namespace fs = std::filesystem;

int main() {
	fs::path homeDirectory("~/");
	
	return 0;
}
```

That way, you can asign a shorter, more elegant name to a nested namespace if you will use it frecuently in your code.

