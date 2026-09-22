import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Home: FC = () => {
  const { language } = useLanguage();
  const uz = language === 'uz';

  const stats = [
    { value: '1.5+', label: uz ? 'yil PM tajribasi' : 'years in product' },
    { value: '50+', label: uz ? 'seller onboarding' : 'sellers onboarded' },
    { value: '4+', label: uz ? 'asosiy mahsulot / loyiha' : 'key products / projects' },
  ];

  const capabilities = uz
    ? ['Product Strategy', 'Product Analytics', 'UX & CRO', 'Roadmap & Backlog', 'PRD / TZ', 'Growth']
    : ['Product Strategy', 'Product Analytics', 'UX & CRO', 'Roadmap & Backlog', 'PRD / Specs', 'Growth'];

  return (
    <>
      <title>Alisher Umarov — Product Manager</title>

      <main className='container px-4 sm:px-6 md:px-8'>
        {/* Hero */}
        <section className='min-h-[calc(100vh-88px)] flex items-center pt-16 pb-20 md:pt-20 md:pb-24'>
          <div className='w-full max-w-4xl'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='h-2 w-2 rounded-full bg-[#2AB7A6]' />
              <span className='text-slate-400 text-sm md:text-base'>
                {uz ? 'Product Manager · E-commerce · Growth' : 'Product Manager · E-commerce · Growth'}
              </span>
            </div>

            <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.035em] max-w-4xl'>
              {uz
                ? 'Foydalanuvchi muammosini biznes natijasiga aylantiraman.'
                : 'I turn user problems into business outcomes.'}
            </h1>

            <p className='text-slate-300 text-base md:text-lg lg:text-xl leading-8 max-w-2xl mt-7'>
              {uz
                ? 'Men Alisher Umarov — Product Manager. So‘nggi 1,5 yil davomida marketplace va e-commerce mahsulotlarida analytics, UX, growth, roadmap va cross-functional delivery bilan ishladim.'
                : 'I’m Alisher Umarov, a Product Manager. Over the last 1.5 years, I’ve worked across marketplace and e-commerce products, analytics, UX, growth, roadmaps and cross-functional delivery.'}
            </p>

            <div className='flex flex-col sm:flex-row gap-3 mt-9'>
              <Link
                to='/projects'
                className='inline-flex items-center justify-center rounded-full bg-[#2AB7A6] text-[#18181B] px-6 py-3.5 font-medium hover:opacity-90 transition'
              >
                {uz ? 'Portfolio’ni ko‘rish →' : 'View portfolio →'}
              </Link>
              <Link
                to='/about'
                className='inline-flex items-center justify-center rounded-full border border-[#3A3A40] text-white px-6 py-3.5 font-medium hover:border-[#2AB7A6] transition'
              >
                {uz ? 'Men haqimda' : 'About me'}
              </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x divide-[#303035] mt-14 pt-7 border-t border-[#303035] max-w-3xl'>
              {stats.map((item) => (
                <div key={item.label} className='py-2 sm:px-6 first:pl-0'>
                  <div className='text-white text-3xl md:text-4xl font-semibold tracking-tight'>{item.value}</div>
                  <p className='text-slate-400 text-sm mt-1'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof / experience */}
        <section className='py-16 md:py-20 border-t border-[#303035]'>
          <div className='grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20'>
            <div>
              <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Tajriba' : 'Experience'}</p>
              <h2 className='text-white text-3xl md:text-4xl leading-tight'>
                {uz ? 'Real product muammolari bilan ishlaganman.' : 'I’ve worked on real product problems.'}
              </h2>
            </div>

            <div>
              <div className='border-l border-[#3A3A40] pl-6'>
                <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
                  <h3 className='text-white text-xl md:text-2xl'>Venu</h3>
                  <span className='text-slate-500 text-sm'>Product Manager / Project Manager</span>
                </div>
                <p className='text-slate-400 text-sm mt-1'>E-commerce marketplace · Uzbekistan</p>
                <p className='text-slate-300 mt-5 leading-7'>
                  {uz
                    ? 'Marketplace analytics, product strategy, roadmap va backlog, UX improvements, PRD/TZ, QA/UAT, marketing bilan hamkorlik va seller onboarding. Asosiy vositalarim: Amplitude, GA4, ClickUp va Bitrix.'
                    : 'Marketplace analytics, product strategy, roadmaps and backlogs, UX improvements, PRDs/specifications, QA/UAT, marketing collaboration and seller onboarding. Core tools: Amplitude, GA4, ClickUp and Bitrix.'}
                </p>
                <Link to='/about' className='inline-block text-[#2AB7A6] text-sm mt-5 underline underline-offset-4'>
                  {uz ? 'Tajribani batafsil ko‘rish →' : 'See experience →'}
                </Link>
              </div>

              <div className='mt-10'>
                <p className='text-slate-500 text-sm mb-4'>{uz ? 'Asosiy kompetensiyalar' : 'Core capabilities'}</p>
                <div className='flex flex-wrap gap-2.5'>
                  {capabilities.map((item) => (
                    <span key={item} className='border border-[#3A3A40] rounded-full px-3.5 py-2 text-sm text-slate-300'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case study teaser */}
        <section className='py-16 md:py-20 border-t border-[#303035]'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8'>
            <div className='max-w-2xl'>
              <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Featured case' : 'Featured case'}</p>
              <h2 className='text-white text-3xl md:text-4xl leading-tight'>
                {uz ? 'Checkout’dagi frictionni analytics orqali aniqlash' : 'Finding checkout friction through analytics'}
              </h2>
              <p className='text-slate-400 mt-4 leading-7'>
                {uz
                  ? 'Venu’dagi real vaziyat: foydalanuvchi mahsulotni ko‘rardi, savatga qo‘shardi, ammo registration bosqichida funnel keskin pasayardi.'
                  : 'A real Venu case: users viewed products and added them to cart, but the funnel dropped sharply at registration.'}
              </p>
            </div>
            <Link to='/articles/product-checkout-case' className='text-[#2AB7A6] underline underline-offset-4 whitespace-nowrap'>
              {uz ? 'Case’ni o‘qish →' : 'Read case →'}
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-[#303035] rounded-xl overflow-hidden'>
            <div className='bg-[#18181B] p-6'>
              <p className='text-slate-500 text-sm mb-2'>{uz ? 'Muammo' : 'Problem'}</p>
              <p className='text-white leading-7'>{uz ? 'Registration xarid intentiga juda erta aralashardi.' : 'Registration interrupted purchase intent too early.'}</p>
            </div>
            <div className='bg-[#18181B] p-6'>
              <p className='text-slate-500 text-sm mb-2'>{uz ? 'Yondashuv' : 'Approach'}</p>
              <p className='text-white leading-7'>{uz ? 'Amplitude funnel → hypothesis → checkout flow o‘zgarishi.' : 'Amplitude funnel → hypothesis → checkout flow change.'}</p>
            </div>
            <div className='bg-[#18181B] p-6'>
              <p className='text-slate-500 text-sm mb-2'>{uz ? 'Signal' : 'Signal'}</p>
              <p className='text-white leading-7'>{uz ? 'Add to Cart → Checkout: 3.03% → 4.71%.' : 'Add to Cart → Checkout: 3.03% → 4.71%.'}</p>
            </div>
          </div>
        </section>

        {/* About / positioning */}
        <section className='py-16 md:py-20 border-t border-[#303035]'>
          <div className='max-w-3xl'>
            <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Men haqimda' : 'About me'}</p>
            <h2 className='text-white text-3xl md:text-4xl leading-tight'>
              {uz ? 'Frontend’dan Product Management’ga o‘tganman.' : 'I moved from frontend development into Product Management.'}
            </h2>
            <p className='text-slate-300 text-base md:text-lg leading-8 mt-5'>
              {uz
                ? 'Texnik tushunchalar menga developerlar bilan aniq gaplashish va yechimni tushunishga yordam beradi. Product Management esa muammoni tanlash, prioritetlash va natijani o‘lchashga majbur qiladi. Hozirgi fokusim — fintech, growth, analytics va AI-powered product workflows.'
                : 'My technical background helps me communicate with developers and understand implementation trade-offs. Product Management pushes me to choose the right problem, prioritize it and measure the outcome. My current focus is fintech, growth, analytics and AI-powered product workflows.'}
            </p>
            <Link to='/about' className='inline-block text-[#2AB7A6] mt-6 underline underline-offset-4'>
              {uz ? 'Profilni to‘liq ko‘rish →' : 'View full profile →'} 
            </Link>
          </div>
        </section>

        {/* Explore / navigation */}
        <section className='py-20 md:py-28 border-t border-[#303035]'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10'>
            <div>
              <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Ko‘rib chiqing' : 'Explore'}</p>
              <h2 className='text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em]'>
                {uz ? 'Ishim va product fikrlashim.' : 'My work and product thinking.'}
              </h2>
            </div>
            <p className='text-slate-400 max-w-md leading-7'>
              {uz
                ? 'Loyihalarim, amaliy case’larim va Product Management bo‘yicha yozganlarim bilan tanishing.'
                : 'Explore selected projects, practical case studies and my thoughts on Product Management.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-[#303035] rounded-xl overflow-hidden'>
            <Link to='/projects' className='group bg-[#18181B] p-7 md:p-8 hover:bg-[#202024] transition'>
              <span className='text-slate-500 text-sm'>01</span>
              <h3 className='text-white text-2xl mt-10 group-hover:text-[#2AB7A6] transition'>
                {uz ? 'Loyihalar' : 'Projects'}
              </h3>
              <p className='text-slate-400 mt-3 leading-7'>
                {uz ? 'Real mahsulotlar va ustida ishlagan loyihalarim.' : 'Products and projects I have worked on.'}
              </p>
              <span className='inline-block text-[#2AB7A6] mt-7'>→</span>
            </Link>

            <Link to='/articles' className='group bg-[#18181B] p-7 md:p-8 hover:bg-[#202024] transition'>
              <span className='text-slate-500 text-sm'>02</span>
              <h3 className='text-white text-2xl mt-10 group-hover:text-[#2AB7A6] transition'>
                {uz ? 'Maqolalar' : 'Articles'}
              </h3>
              <p className='text-slate-400 mt-3 leading-7'>
                {uz ? 'Product, analytics va amaliy tajribalar haqida.' : 'Product, analytics and practical lessons.'}
              </p>
              <span className='inline-block text-[#2AB7A6] mt-7'>→</span>
            </Link>

            <Link to='/about' className='group bg-[#18181B] p-7 md:p-8 hover:bg-[#202024] transition'>
              <span className='text-slate-500 text-sm'>03</span>
              <h3 className='text-white text-2xl mt-10 group-hover:text-[#2AB7A6] transition'>
                {uz ? 'Profil' : 'Profile'}
              </h3>
              <p className='text-slate-400 mt-3 leading-7'>
                {uz ? 'Tajribam, yondashuvim va hozirgi fokusim.' : 'My experience, approach and current focus.'}
              </p>
              <span className='inline-block text-[#2AB7A6] mt-7'>→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
