import { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Projects: FC = () => {
  const { language } = useLanguage();
  const uz = language === 'uz';

  const projects = [
    {
      title: 'Venu',
      type: uz ? 'E-commerce marketplace' : 'E-commerce marketplace',
      description: uz
        ? 'Elektronika va maishiy texnika marketplace’i. Product strategy, analytics, UX, backlog, PRD/TZ, QA/UAT, marketing va seller onboarding jarayonlarida ishladim.'
        : 'Marketplace for electronics and home appliances. Worked across product strategy, analytics, UX, backlog, PRDs/specifications, QA/UAT, marketing and seller onboarding.',
      tags: ['Product Management', 'Amplitude', 'GA4', 'ClickUp'],
    },
    {
      title: 'Latta Putta',
      type: uz ? 'Marketplace · Fashion & Beauty' : 'Marketplace · Fashion & Beauty',
      description: uz
        ? 'Kiyim-kechak, parfyumeriya va kosmetika yo‘nalishidagi marketplace. Audience, marketing funnel, sellerlar va kontent jarayonlari bilan ishladim.'
        : 'Marketplace focused on clothing, perfume and cosmetics. Worked with audience definition, marketing funnel, sellers and content processes.',
      tags: ['Marketplace', 'Growth', 'Marketing', 'Analytics'],
    },
    {
      title: 'TheAntique.uz',
      type: uz ? 'Marketplace konsepsiyasi' : 'Marketplace concept',
      description: uz
        ? 'Milliy hunarmandchilik mahsulotlarini xalqaro auditoriyaga olib chiqishga yo‘naltirilgan marketplace konsepsiyasi.'
        : 'A marketplace concept focused on bringing Uzbek handicraft products to an international audience.',
      tags: ['Product Discovery', 'Marketplace', 'Strategy'],
    },
    {
      title: 'Botlab',
      type: uz ? 'AI / Business automation' : 'AI / Business automation',
      description: uz
        ? 'Bizneslar uchun chatbot xizmatlarini taqdim etishga qaratilgan shaxsiy loyiha. AI agentlar va avtomatlashtirishga bo‘lgan qiziqishimning amaliy namunasi.'
        : 'A personal project focused on chatbot services for businesses, reflecting my interest in AI agents and automation.',
      tags: ['AI', 'Automation', 'Product'],
    },
  ];

  return (
    <>
      <title>{uz ? 'Loyihalar — Alisher' : 'Projects — Alisher'}</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Portfolio' : 'Portfolio'}</p>
        <h1 className='text-white text-3xl sm:text-4xl md:text-5xl w-full md:w-3/5'>
          {uz ? 'Men ishlagan mahsulotlar va loyihalar' : 'Products and projects I have worked on'}
        </h1>
        <p className='text-slate-300 text-sm md:text-base lg:text-lg py-4 max-w-3xl leading-7'>
          {uz
            ? 'Bu yerda men ishlagan yoki product sifatida hissa qo‘shgan loyihalarimning qisqa ko‘rinishi.'
            : 'A concise overview of products and projects where I contributed as a product or project manager.'}
        </p>

        <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <article key={project.title} className='bg-gray-800 p-5 sm:p-6 md:p-7 rounded-lg'>
              <p className='text-[#2AB7A6] text-sm mb-2'>{project.type}</p>
              <h2 className='text-white text-2xl md:text-3xl mb-3'>{project.title}</h2>
              <p className='text-slate-300 text-base md:text-lg leading-7'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mt-5'>
                {project.tags.map((tag) => (
                  <span key={tag} className='border border-[#3A3A40] text-slate-300 px-3 py-1 rounded-full text-xs md:text-sm'>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;