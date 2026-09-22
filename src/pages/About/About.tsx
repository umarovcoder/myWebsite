import { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import me from '../../assets/Imgs/me.jpg';

const About: FC = () => {
  const { language } = useLanguage();
  const uz = language === 'uz';

  return (
    <>
      <title>{uz ? 'Men haqimda — Alisher Umarov' : 'About — Alisher Umarov'}</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 lg:gap-20'>
          <div className='flex-col w-full md:w-1/2'>
            <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Men haqimda' : 'About me'}</p>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              {uz ? 'Mahsulot, texnologiya va foydalanuvchi o‘rtasidagi bog‘lanish.' : 'Connecting product, technology and users.'}
            </h1>
            <p className='text-slate-300 text-sm md:text-base lg:text-lg py-5 leading-7'>
              {uz
                ? 'Men Product Manager sifatida e-commerce mahsulotlarini ishlab chiqish, tahlil qilish va yaxshilash bilan shug‘ullanganman. Mening yondashuvim: avval muammoni tushunish, keyin data bilan tekshirish, so‘ngra kichik va o‘lchanadigan yechimni ishga tushirish.'
                : 'As a Product Manager, I have worked on building, analyzing and improving e-commerce products. My approach is simple: understand the problem, validate it with data, then ship a small and measurable solution.'}
            </p>
          </div>
          <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl object-cover rotate-3' src={me} alt='Alisher Umarov' />
        </div>

        <div className='mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h2 className='text-white text-2xl mb-4'>{uz ? 'Nimalar bilan ishlaganman?' : 'What I have worked on'}</h2>
            <ul className='list-disc list-inside text-slate-300 space-y-2'>
              <li>{uz ? 'Marketplace va e-commerce mahsulotlari' : 'Marketplace and e-commerce products'}</li>
              <li>{uz ? 'Product strategy, roadmap va backlog' : 'Product strategy, roadmap and backlog'}</li>
              <li>{uz ? 'CJM, mindmap, business process va PRD/TZ' : 'CJM, mindmaps, business processes and PRDs/specifications'}</li>
              <li>{uz ? 'Amplitude, GA4 va funnel analysis' : 'Amplitude, GA4 and funnel analysis'}</li>
              <li>{uz ? 'UX improvements, QA va UAT' : 'UX improvements, QA and UAT'}</li>
              <li>{uz ? 'Marketing va development jamoalari bilan cross-functional ish' : 'Cross-functional work with marketing and development teams'}</li>
            </ul>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h2 className='text-white text-2xl mb-4'>{uz ? 'Asboblar' : 'Tools'}</h2>
            <div className='flex flex-wrap gap-2'>
              {['Amplitude', 'GA4', 'ClickUp', 'Bitrix', 'Figma', 'Google Ads', 'Yandex', 'Playwright', 'Python', 'React', 'Flutter'].map((tool) => (
                <span key={tool} className='border border-[#3A3A40] text-slate-300 px-3 py-1.5 rounded-full text-sm'>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-6 bg-gray-800 rounded-lg p-6 md:p-8'>
          <h2 className='text-white text-2xl md:text-3xl mb-5'>{uz ? 'Venu’dagi tajriba' : 'Experience at Venu'}</h2>
          <div className='space-y-5 text-slate-300 leading-7'>
            <p>{uz ? 'Marketplace mahsulotlari ustida product va project vazifalarini olib bordim: strategiya, backlog, sprint rejalashtirish, texnik topshiriqlar, QA/UAT va release jarayonlari.' : 'I handled product and project responsibilities across marketplace products: strategy, backlog, sprint planning, technical specifications, QA/UAT and releases.'}</p>
            <p>{uz ? 'Seller onboarding jarayonida 50 ga yaqin sotuvchini jalb qildim, ular orasida 10 dan ortiq yirik biznes egalari bor edi.' : 'I personally onboarded around 50 sellers, including more than 10 large business owners.'}</p>
            <p>{uz ? 'Analytics orqali foydalanuvchi yo‘lini kuzatib, registration bosqichidagi frictionni aniqladim va checkout oqimini qayta ko‘rib chiqish bo‘yicha yechim ishlab chiqdim.' : 'I used analytics to identify friction around registration and worked on redesigning the checkout flow to reduce that friction.'}</p>
            <p>{uz ? 'Shuningdek, marketing, SMM va development jamoalari bilan birgalikda ishladim va biznes jarayonlarini hujjatlashtirdim.' : 'I also worked closely with marketing, SMM and development teams and documented business processes.'}</p>
          </div>
        </div>

        <div className='mt-6 pb-8'>
          <h2 className='text-white text-2xl md:text-3xl mb-4'>{uz ? 'Yo‘nalishim' : 'Direction'}</h2>
          <p className='text-slate-300 text-base md:text-lg leading-7'>
            {uz
              ? 'Frontend developmentdan Product Management’ga o‘tganman. Endi fintech, growth, analytics va AI-powered product workflows yo‘nalishida chuqurlashishni istayman.'
              : 'I moved from frontend development into Product Management. I am now deepening my focus on fintech, growth, analytics and AI-powered product workflows.'}
          </p>
        </div>
      </div>
    </>
  )
}

export default About;