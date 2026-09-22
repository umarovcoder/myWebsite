import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

const DetailedArticle: FC = () => {
  const { articleId } = useParams();
  const { language } = useLanguage();
  const uz = language === 'uz';

  if (articleId === 'product-checkout-case') {
    return (
      <>
        <title>{uz ? 'Checkout’dagi friction — Product Management case' : 'Checkout friction — Product Management case'}</title>
        <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
          <p className='text-[#2AB7A6] text-sm mb-3'>{uz ? 'Product Management case' : 'Product Management case'}</p>
          <article className='bg-gray-800 p-5 sm:p-7 lg:p-10 rounded-lg'>
            <h1 className='text-white text-3xl md:text-5xl mb-5'>
              {uz ? 'Checkout’da muammo bor edi. Muammoni qanday topdim va oqimni o‘zgartirdim.' : 'There was a checkout problem. How I found it and changed the flow.'}
            </h1>

            <div className='space-y-7 text-slate-300 text-base md:text-lg leading-8'>
              <section>
                <h2 className='text-white text-2xl mb-3'>{uz ? 'Kontekst' : 'Context'}</h2>
                <p>{uz
                  ? 'Venu — elektronika va maishiy texnika marketplace’i. Saytga foydalanuvchilarning katta qismi reklama orqali kirardi. Muammo shundaki, odamlar mahsulotni ko‘rardi va savatga qo‘shardi, lekin registration formasi chiqganda funnel keskin pasayardi.'
                  : 'Venu is a marketplace for electronics and home appliances. A large share of users arrived through advertising. Users viewed products and added them to cart, but the funnel dropped sharply when the registration form appeared.'}</p>
              </section>

              <section>
                <h2 className='text-white text-2xl mb-3'>{uz ? '1. Muammoni taxmin emas, data bilan ko‘rdim' : '1. I looked at data instead of guessing'}</h2>
                <p>{uz
                  ? 'Amplitude’da product_view, add_to_cart, begin_checkout va purchase eventlarini kuzatdim. Funnelni bosqichma-bosqich tekshirganda registration bosqichi foydalanuvchining sotib olish niyatiga juda erta aralashayotganini ko‘rdim.'
                  : 'I used Amplitude to track product_view, add_to_cart, begin_checkout and purchase. Looking at the funnel showed that registration was interfering with purchase intent too early in the journey.'}</p>
              </section>

              <section>
                <h2 className='text-white text-2xl mb-3'>{uz ? '2. Hypothesis' : '2. Hypothesis'}</h2>
                <p>{uz
                  ? 'Hypothesis oddiy edi: foydalanuvchini mahsulotni tanlashdan oldin account yaratishga majburlash frictionni oshiryapti. Agar registration’ni checkout’ning oxirgi qismiga sursak, foydalanuvchi avval qiymatni ko‘radi va xarid jarayonini davom ettiradi.'
                  : 'The hypothesis was simple: forcing users to create an account before they had committed to the product was adding friction. Moving registration later in checkout could let users see value first and complete more of the purchase flow.'}</p>
              </section>

              <section>
                <h2 className='text-white text-2xl mb-3'>{uz ? '3. Yechim' : '3. Solution'}</h2>
                <p>{uz
                  ? 'Registration’ni checkout’ning yakuniy qismiga ko‘chirdik: foydalanuvchi savat → manzil → telefon → to‘lov bosqichlaridan o‘tadi va keyin account/registration masalasi hal qilinadi. Maqsad — foydalanuvchining xarid intentini keraksiz erta friction bilan to‘smaslik.'
                  : 'We moved registration toward the end of checkout: cart → address → phone → payment, and handled the account step later. The goal was to avoid blocking purchase intent with an early friction point.'}</p>
              </section>

              <section>
                <h2 className='text-white text-2xl mb-3'>{uz ? '4. Natija va eng muhim saboq' : '4. Result and the important lesson'}</h2>
                <p>{uz
                  ? 'Kuzatilgan funnel ma’lumotlarida Add to Cart → Checkout conversion 3.03% dan 4.71% gacha yaxshilangan. Checkout → Purchase esa kichik sample ichida 0% dan 75% gacha ko‘tarilgan. Bu raqamlarni katta statistik g‘alaba deb ko‘rsatish noto‘g‘ri — sample kichik edi va men natijani to‘liq revenue uplift sifatida o‘lchamaganman.'
                  : 'In the observed funnel data, Add to Cart → Checkout conversion improved from 3.03% to 4.71%. Checkout → Purchase moved from 0% to 75% in a small sample. It would be wrong to present this as a statistically proven win: the sample was small and I did not measure the full revenue uplift.'}</p>
              </section>

              <section className='border-l-2 border-[#2AB7A6] pl-5'>
                <h2 className='text-white text-2xl mb-3'>{uz ? 'Men nimani o‘rgandim?' : 'What I learned'}</h2>
                <ul className='list-disc list-inside space-y-2'>
                  <li>{uz ? 'Product Manager muammoni feature bilan emas, muammo va funnel bilan boshlashi kerak.' : 'A Product Manager should start with the problem and funnel, not with a feature.'}</li>
                  <li>{uz ? 'Har bir hypothesis eventlar va segmentlar orqali tekshirilishi kerak.' : 'Every hypothesis should be testable through events and segments.'}</li>
                  <li>{uz ? '“Natija oshdi” deyishdan oldin measurement dizaynini qurish kerak.' : 'Before saying “results improved”, measurement must be designed properly.'}</li>
                  <li>{uz ? 'Kichik sample’dagi signal — keyingi test uchun signal, lekin yakuniy xulosa emas.' : 'A signal from a small sample is a reason for the next test, not a final conclusion.'}</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <title>{uz ? 'TypeScript — Alisher' : 'TypeScript — Alisher'}</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <article className='bg-gray-800 p-5 sm:p-7 lg:p-10 rounded-lg'>
          <p className='text-[#2AB7A6] text-sm mb-3'>Development</p>
          <h1 className='text-white text-3xl md:text-5xl mb-5'>{uz ? 'TypeScript bilan tanishuv' : 'Introduction to TypeScript'}</h1>
          <div className='space-y-6 text-slate-300 text-base md:text-lg leading-8'>
            <p>{uz ? 'TypeScript JavaScript ustiga qurilgan, statik typing imkonini beruvchi til bo‘lib, katta kod bazalarini boshqarishni osonlashtiradi.' : 'TypeScript is a typed language built on JavaScript that improves maintainability and developer tooling.'}</p>
            <h2 className='text-white text-2xl'>{uz ? 'Asosiy afzalliklari' : 'Key benefits'}</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>{uz ? 'Static type checking' : 'Static type checking'}</li>
              <li>{uz ? 'IDE va developer experience yaxshiroq' : 'Better IDE and developer experience'}</li>
              <li>{uz ? 'JavaScript bilan moslik' : 'JavaScript compatibility'}</li>
              <li>{uz ? 'Katta loyihalarda maintainability' : 'Maintainability at scale'}</li>
            </ul>
            <h2 className='text-white text-2xl'>{uz ? 'Oddiy misol' : 'Simple example'}</h2>
            <pre className='bg-gray-900 p-4 rounded-lg overflow-x-auto'><code className='text-green-400'>{`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alisher",
  age: 21,
};`}</code></pre>
          </div>
        </article>
      </div>
    </>
  );
}

export default DetailedArticle;