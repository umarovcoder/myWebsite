import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Home: FC = () => {
  const { language } = useLanguage();
  const uz = language === 'uz';

  return (
    <>
      <title>{uz ? 'Alisher Umarov — Product Manager' : 'Alisher Umarov — Product Manager'}</title>
      <main className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <section>
          <p className='text-[#2AB7A6] text-sm md:text-base mb-4'>Product Manager · E-commerce · Growth</p>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full md:w-4/5 select-none'>
            {uz ? 'Salom. Men Alisher Umarov — raqamli mahsulotlar yaratadigan Product Manager.' : 'Hi. I’m Alisher Umarov — a Product Manager building digital products.'}
          </h1>
          <p className='text-white text-sm md:text-base lg:text-lg py-5 md:py-6 w-full md:w-4/5 leading-7'>
            {uz
              ? 'Men foydalanuvchi muammosi, biznes maqsadi va texnologiyani bir nuqtada birlashtirishga e’tibor beraman. So‘nggi 1,5 yil davomida e-commerce mahsulotlari, marketplace, analytics, growth va jamoalar bilan ishladim.'
              : 'I focus on connecting user problems, business goals and technology. Over the last 1.5 years I have worked across e-commerce, marketplaces, analytics, growth and cross-functional teams.'}
          </p>
        </section>

        <section className='mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {[
            { value: '1.5+', label: uz ? 'yil Product Management' : 'years in Product Management' },
            { value: '50+', label: uz ? 'seller onboarding' : 'sellers onboarded' },
            { value: '18', label: uz ? 'betlik texnik topshiriq' : 'page technical specification' },
          ].map((item) => (
            <div key={item.label} className='bg-gray-800 rounded-lg p-5 md:p-6'>
              <div className='text-white text-3xl md:text-4xl font-semibold'>{item.value}</div>
              <p className='text-slate-300 mt-2'>{item.label}</p>
            </div>
          ))}
        </section>

        <section className='mt-12 md:mt-20 bg-gray-800 rounded-lg p-6 md:p-8'>
          <p className='text-[#2AB7A6] text-sm mb-2'>{uz ? 'Men haqimda' : 'About me'}</p>
          <h2 className='text-white text-2xl md:text-3xl mb-4'>
            {uz ? 'Frontend dasturlashdan Product Management’ga' : 'From frontend development to Product Management'}
          </h2>
          <p className='text-slate-300 text-base md:text-lg leading-7'>
            {uz
              ? 'IT sohasidagi yo‘lim frontend development va interfeyslar bilan boshlandi. Keyinchalik foydalanuvchi ehtiyoji, biznes modeli va mahsulot qarorlariga qiziqishim kuchaydi. Bugun men product discovery, analytics, roadmap, backlog, UX va developerlar bilan hamkorlikni birlashtirib ishlayman.'
              : 'My path in IT started with frontend development and interfaces. I gradually became more interested in user needs, business models and product decisions. Today I combine product discovery, analytics, roadmap, backlog, UX and collaboration with developers.'}
          </p>
          <div className='mt-6'>
            <Link to='/about' className='text-[#2AB7A6] underline underline-offset-4'>
              {uz ? 'To‘liq profil →' : 'Full profile →'}
            </Link>
          </div>
        </section>

        <section className='mt-10 md:mt-16'>
          <div className='flex items-end justify-between gap-4 mb-5'>
            <div>
              <p className='text-[#2AB7A6] text-sm mb-2'>{uz ? 'Tajriba' : 'Experience'}</p>
              <h2 className='text-white text-2xl md:text-3xl'>{uz ? 'Asosiy ish tajribam' : 'Selected experience'}</h2>
            </div>
            <Link to='/projects' className='text-[#2AB7A6] underline underline-offset-4'>{uz ? 'Loyihalar →' : 'Projects →'}</Link>
          </div>

          <div className='border-l border-[#3A3A40] pl-5 md:pl-7'>
            <h3 className='text-white text-xl md:text-2xl'>Venu — Product Manager / Project Manager</h3>
            <p className='text-slate-400 mt-1'>E-commerce marketplace · Uzbekistan</p>
            <p className='text-slate-300 mt-4 leading-7'>
              {uz
                ? 'Marketplace analitikasi, product strategy, roadmap va backlog, UX yaxshilash, PRD/TZ, QA/UAT, marketing bilan hamkorlik va seller onboarding. Amplitude, GA4, ClickUp va Bitrix orqali mahsulot jarayonlarini boshqardim.'
                : 'Marketplace analytics, product strategy, roadmap and backlog, UX improvements, PRD/specifications, QA/UAT, marketing collaboration and seller onboarding. I used Amplitude, GA4, ClickUp and Bitrix across the product workflow.'}
            </p>
          </div>
        </section>

        <section className='mt-10 md:mt-16 pb-8'>
          <p className='text-[#2AB7A6] text-sm mb-2'>{uz ? 'Hozirgi fokus' : 'Current focus'}</p>
          <h2 className='text-white text-2xl md:text-3xl mb-4'>
            {uz ? 'Fintech va kuchli product thinking' : 'Fintech and stronger product thinking'}
          </h2>
          <p className='text-slate-300 text-base md:text-lg leading-7'>
            {uz
              ? 'Keyingi bosqichda fintech yo‘nalishida Product Manager / Project Manager sifatida o‘sishni, data-driven qarorlar va AI vositalaridan foydalanib real biznes muammolarini yechishni maqsad qilganman.'
              : 'My next step is to grow in fintech as a Product Manager / Project Manager, using data-driven decision making and AI tools to solve real business problems.'}
          </p>
        </section>
      </main>
    </>
  )
}

export default Home;