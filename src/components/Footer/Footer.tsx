import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
    return (
        <>
            <hr className='border-solid border-1 border-[#27272C] mt-[8rem]' />
            <div className='container py-40 flex gap-[100px] items-center'>
                <div>
                    <h1 className='text-white text-7xl'>Got a Project to work with?</h1>
                </div>
                <div>
                    <Link to={'/contact'}>
                        <span className='text-5xl'>
                            <svg width="159" height="160" viewBox="0 0 159 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M158 80C158 123.633 122.851 159 79.5 159C36.1486 159 1 123.633 1 80C1 36.3665 36.1486 1 79.5 1C122.851 1 158 36.3665 158 80Z" stroke="white" />
                                <path d="M36.343 72.7606C41.2939 72.7606 44.7074 70.1548 44.7074 65.9596V65.6208H41.6066V65.9596C41.6066 68.6435 39.9128 70.0506 36.369 70.0506C32.278 70.0506 30.2977 68.1224 30.2977 63.7708C30.2977 59.4192 32.278 57.4649 36.369 57.4649C39.9128 57.4649 41.6066 58.898 41.6066 61.5559V61.9207H44.7074V61.5559C44.7074 57.3867 41.2678 54.7809 36.343 54.7809C30.923 54.7809 27.3271 58.3248 27.3271 63.7708C27.3271 69.2168 30.923 72.7606 36.343 72.7606ZM53.3992 72.7606C57.7247 72.7606 60.6171 70.0245 60.6171 66.0378C60.6171 61.9989 57.7247 59.2889 53.3992 59.2889C49.0997 59.2889 46.2073 61.9989 46.2073 66.0378C46.2073 70.0245 49.0997 72.7606 53.3992 72.7606ZM53.3992 70.2591C50.2723 70.2591 48.9694 68.7738 48.9694 66.0378C48.9694 63.2757 50.2723 61.7643 53.3992 61.7643C56.5522 61.7643 57.855 63.2757 57.855 66.0378C57.855 68.7738 56.5522 70.2591 53.3992 70.2591ZM65.4736 72.5V66.0899C65.4736 63.2757 66.7504 61.8164 69.5906 61.8164C72.2746 61.8164 73.369 63.0411 73.369 65.4645V72.5H76.1832V64.7088C76.1832 61.7122 74.4113 59.2889 70.8153 59.2889C67.5321 59.2889 65.8123 61.3735 65.4215 63.5623H65.239V59.5495H62.6594V72.5H65.4736ZM87.1855 72.5V69.9724H84.8404C83.2248 69.9724 82.4952 69.5555 82.4952 67.966V61.8946H87.1855V59.5495H82.4952V56.7092H79.707V59.5495H77.5182V61.8946H79.707V68.1224C79.707 71.2753 81.4268 72.5 84.215 72.5H87.1855ZM92.7502 72.7606C95.6947 72.7606 97.7532 71.4577 98.4307 69.2689H98.6131V72.5H101.193V64.6307C101.193 61.5298 99.3427 59.2889 95.2257 59.2889C91.1086 59.2889 88.6592 61.5038 88.6592 64.4483V64.5525H91.4473V64.4483C91.4473 62.5461 92.6199 61.7643 95.0172 61.7643C97.4927 61.7643 98.4307 62.52 98.4307 64.6567V65.4124L92.5417 66.0378C89.9881 66.3244 88.3726 67.3667 88.3726 69.3731C88.3726 71.5098 90.0663 72.7606 92.7502 72.7606ZM91.1868 69.1907C91.1868 68.1745 91.8903 67.8357 93.3495 67.6533L98.4307 67.0801C98.4307 69.6337 96.4504 70.7281 93.5059 70.7281C91.8903 70.7281 91.1868 70.233 91.1868 69.1907ZM110.245 72.7606C114.128 72.7606 116.968 70.5717 116.968 67.3406V67.054H114.18V67.2364C114.18 69.2428 112.721 70.233 110.193 70.233C107.275 70.233 105.972 68.8259 105.972 66.0378C105.972 63.1975 107.275 61.8164 110.193 61.8164C112.721 61.8164 114.18 62.8066 114.18 64.8131V64.9694H116.968V64.7088C116.968 61.4777 114.128 59.2889 110.245 59.2889C105.972 59.2889 103.184 61.9989 103.184 66.0378C103.184 70.0245 105.972 72.7606 110.245 72.7606ZM127.544 72.5V69.9724H125.199C123.583 69.9724 122.854 69.5555 122.854 67.966V61.8946H127.544V59.5495H122.854V56.7092H120.066V59.5495H117.877V61.8946H120.066V68.1224C120.066 71.2753 121.785 72.5 124.573 72.5H127.544ZM60.2315 104.5V98.0899C60.2315 95.2236 61.1957 93.8164 63.9838 93.8164C66.4853 93.8164 67.4755 94.9109 67.4755 97.4645V104.5H70.2637V98.0899C70.2637 95.2236 71.2538 93.8164 74.0159 93.8164C76.5174 93.8164 77.5337 94.9109 77.5337 97.4645V104.5H80.3218V96.7088C80.3218 93.5819 78.6281 91.2889 75.2667 91.2889C71.9834 91.2889 70.5242 93.3474 70.1855 95.5623H70.0291C69.6643 93.0868 68.0748 91.2889 65.1303 91.2889C61.8992 91.2889 60.4921 93.2953 60.1534 95.4581H59.997V91.5495H57.4173V104.5H60.2315ZM89.353 104.761C93.2095 104.761 95.9194 102.858 95.9194 100.096V99.8618H93.1052V100.07C93.1052 101.608 91.9848 102.494 89.2748 102.494C86.2782 102.494 85.0535 101.165 84.9493 98.6631H95.9455C96.0237 98.2723 96.0497 97.9075 96.0497 97.4384C96.0497 93.5038 93.3137 91.2889 89.3009 91.2889C85.0795 91.2889 82.3175 93.9989 82.3175 98.0378C82.3175 102.363 85.1056 104.761 89.353 104.761ZM89.2487 93.5038C92.0108 93.5038 93.3919 94.6503 93.3919 97.0476V97.0997H84.9753C85.1317 94.7806 86.3824 93.5038 89.2487 93.5038ZM101.232 98.7674C101.232 96.2658 101.649 90.872 101.649 88.8655V87.0415H98.0794V88.8655C98.0794 90.872 98.4963 96.2398 98.4963 98.7674H101.232ZM101.441 104.5V100.643H98.2618V104.5H101.441Z" fill="white" />
                                <path d="M104.5 122.5L99.5 119.613V125.387L104.5 122.5ZM54.5 123H100V122H54.5V123Z" fill="white" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>

            <div className='container pb-16'>
                <div className='flex justify-center gap-7'>
                    <Link target={'_blank'} to={'https://github.com/Alisher-Umarov'}>
                        <span>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-current text-white dark:text-gray-200 hover:opacity-50 dark:hover:text-blue-400 h-6 w-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                        </span>
                    </Link>
                    <Link target={'_blank'} to={"https://twitter.com/umarovcoder"}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer fill-current text-white dark:text-gray-200 hover:opacity-50 dark:hover:text-blue-400 h-6 w-6"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                        </span>
                    </Link>
                    <Link target={'_blank'} to={'umarovalisher132@gmail.com'}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="cursor-pointer fill-current text-white dark:text-gray-200 hover:opacity-50 dark:hover:text-blue-400 h-6 w-6"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </span>
                    </Link>
                </div>
                <div className='flex justify-center mt-5'>
                    <p className='text-slate-300 text-1xl'>Copyright © 2023 • Alisher's blog - Alisher's coding journey</p>
                </div>
            </div>
        </>
    )
}

export default Footer