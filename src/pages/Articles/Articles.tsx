import { FC } from 'react';

const Articles: FC = () => {
  return (
    <>
      <title>Articles - Alisher</title>
      <div className='container pt-32'>
        <div>
          <h1 className='text-white text-5xl w-[60%]'>Writing on software and programming</h1>
          <p className='text-1xl text-white py-3'>Writing my thoughts about IT, programming and more</p>
        </div>

        <div className='mt-10'>
          <article className='bg-gray-800 p-6 rounded-lg'>
            <h2 className='text-white text-3xl mb-4'>Introduction to TypeScript</h2>
            <p className='text-white text-lg mb-4'>
              TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
            </p>
            <h3 className='text-white text-2xl mb-3'>Why TypeScript?</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript offers several benefits, including static type checking, better code readability, and improved developer experience. It helps catch errors early in the development process, making it easier to maintain and scale your codebase.
            </p>
            <h3 className='text-white text-2xl mb-3'>Key Features</h3>
            <ul className='list-disc list-inside text-white text-lg mb-4'>
              <li>Static type checking</li>
              <li>Enhanced IDE support</li>
              <li>Compatibility with JavaScript</li>
              <li>Rich type definitions</li>
              <li>Advanced type inference</li>
            </ul>
            <h3 className='text-white text-2xl mb-3'>Getting Started</h3>
            <p className='text-white text-lg mb-4'>
              To get started with TypeScript, you need to install it via npm:
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>$ npm install -g typescript</code>
            </pre>
            <p className='text-white text-lg mb-4'>
              You can then create a TypeScript file with the `.ts` extension and compile it to JavaScript using the TypeScript compiler:
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>$ tsc filename.ts</code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>Basic Types</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript supports various basic types including `string`, `number`, `boolean`, `array`, `tuple`, `enum`, and `any`. Here are some examples:
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>
                {`let isDone: boolean = false;
let age: number = 30;
let userName: string = "Alisher";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
enum Color {Red, Green, Blue};
let notSure: any = 4;`}
              </code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>Advanced Types</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript provides advanced types like `union`, `intersection`, and `type aliases` to create more flexible and expressive type definitions.
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>
                {`type Padding = string | number;
function padLeft(value: string, padding: Padding) {
  // ...
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type Pet = Bird | Fish;`}
              </code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>Classes and Interfaces</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript extends JavaScript classes with interfaces, access modifiers, and more to facilitate object-oriented programming.
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>
                {`class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };`}
              </code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>Generics</h3>
            <p className='text-white text-lg mb-4'>
              Generics enable the creation of reusable components that work with any data type. This ensures type safety while maintaining flexibility.
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>
                {`function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);`}
              </code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>TypeScript with React</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript integrates seamlessly with React, providing robust type checking and IntelliSense for props and state.
            </p>
            <pre className='bg-gray-900 p-4 rounded-lg mb-4'>
              <code className='text-green-400'>
                {`import React, { FC } from 'react';

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
}

export default Hello;`}
              </code>
            </pre>
            <h3 className='text-white text-2xl mb-3'>Best Practices</h3>
            <p className='text-white text-lg mb-4'>
              Following best practices ensures that you get the most out of TypeScript:
            </p>
            <ul className='list-disc list-inside text-white text-lg mb-4'>
              <li>Consistently use types and interfaces for type safety.</li>
              <li>Leverage TypeScript's strict mode for enhanced error checking.</li>
              <li>Integrate TypeScript with your build tools and CI/CD pipeline.</li>
              <li>Keep your type definitions up to date as your code evolves.</li>
              <li>Use modern TypeScript features like optional chaining and nullish coalescing.</li>
            </ul>
            <h3 className='text-white text-2xl mb-3'>Conclusion</h3>
            <p className='text-white text-lg mb-4'>
              TypeScript enhances JavaScript by adding static types, improving code quality, and boosting developer productivity. Whether you are working on a small project or a large application, TypeScript can help you write more reliable and maintainable code.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

export default Articles;
