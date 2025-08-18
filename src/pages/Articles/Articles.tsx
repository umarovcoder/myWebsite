import { FC } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: "typescript",
    title: "Introduction to TypeScript",
    description: "An in-depth look at TypeScript and its features.",
    content: (
      <>
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
        {/* More content here */}
      </>
    )
  },
  // Add more articles here
];

const Articles: FC = () => {
  return (
    <>
      <title>Articles - Alisher</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <div>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl w-full md:w-3/5'>Writing on software and programming</h1>
          <p className='text-white text-sm md:text-base lg:text-lg py-3 md:py-4'>Writing my thoughts about IT, programming and more</p>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {articles.map((article) => (
            <div key={article.id} className='bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-lg'>
              <h2 className='text-white text-2xl md:text-3xl mb-3 md:mb-4'>{article.title}</h2>
              <p className='text-white text-base md:text-lg mb-3 md:mb-4'>{article.description}</p>
              <Link to={`/articles/${article.id}`} className='text-blue-400 underline'>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Articles;
