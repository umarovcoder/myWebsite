import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Articles: FC = () => {
  const { language } = useLanguage();
  const uz = language === 'uz';

  const articles = [
    {
      id: 'product-checkout-case',
      title: uz ? 'Product Manager sifatida: checkout’dagi frictionni qanday topdim' : 'A Product Manager case: finding friction in checkout',
      description: uz
        ? 'Venu’dagi real case: analytics orqali registration bosqichidagi muammoni topish, hypothesis tuzish va checkout oqimini o‘zgartirish.'
        : 'A real Venu case: using analytics to identify registration friction, form a hypothesis and redesign the checkout flow.',
    },
    {
      id: 'typescript',
      title: uz ? 'TypeScript bilan tanishuv' : 'Introduction to TypeScript',
      description: uz
        ? 'TypeScript’ning asosiy imkoniyatlari, type safety va React bilan ishlash haqida.'
        : 'An overview of TypeScript, type safety and working with React.',
    },
  ];

  return (
    <>
      <title>{uz ? 'Blog — Alisher Umarov' : 'Articles — Alisher Umarov'}</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <div>
          <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Blog' : 'Writing'}</p>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl w-full md:w-3/5'>
            {uz ? 'Product, analytics va IT haqida yozuvlar' : 'Notes on product, analytics and IT'}
          </h1>
          <p className='text-slate-300 text-sm md:text-base lg:text-lg py-3 md:py-4 max-w-3xl'>
            {uz ? 'Nazariya emas, amaliyotda uchragan muammolar, qarorlar va o‘rganganlarim.' : 'Practical problems, decisions and lessons from my work.'}
          </p>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {articles.map((article) => (
            <div key={article.id} className='bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg'>
              <h2 className='text-white text-2xl md:text-3xl mb-3'>{article.title}</h2>
              <p className='text-slate-300 text-base md:text-lg mb-5 leading-7'>{article.description}</p>
              <Link to={`/articles/${article.id}`} className='text-[#2AB7A6] underline underline-offset-4'>
                {uz ? 'O‘qish →' : 'Read →'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Articles;
