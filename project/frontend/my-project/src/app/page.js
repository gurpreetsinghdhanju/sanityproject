import Image from 'next/image'
import Link from 'next/link';
import Cards from './components/Cards';

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-4xl mb-4 font-medium text-gray-900">Welcome to our Tech Blog
              <br className="hidden lg:inline-block" />Unique Bloger
            </h1>
            <p className="mb-8 leading-relaxed">In this blog, can expect to find a diverse range of topics,including programing languages, web development,Software engineering, data science, aritficial intelligence and much more. We believe that technology is constantly evoloping,and staying up-to-date with the latest trends and advancements is essential for any aspiring coder.    </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/tutorials">Tutorials</Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href="/blog">Blogs</Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="guru1.png" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <h3 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-center text-gray-900">
            Popular Tutorials
          </h3>
          <div class="h-1 w-20 bg-indigo-500 rounded text-center mx-auto "></div>
          <div className="flex flex-wrap -m-4 mt-10">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
    <h3 className="text-3xl font-medium title-font text-gray-900 mb-4 text-center">Testimonials</h3>
    <div class="h-1 w-20 bg-indigo-500 rounded text-center mx-auto mb-12 "></div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <p className="leading-relaxed mb-6">Unique Bloger has been a game-changer for me in my bloging journey. Their blog is a treasure trove of valuable insinghts, and resourses that have singificantly iproved my skills.  The articles are well-written, engaging, and cover wide range of topics. Thanks to Unique Bloger.   </p>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col ">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <p className="leading-relaxed mb-6">Finding Unique Bloger's tech blog was a turning point in my career. The content they provide is exceptional,and it's evident that the Writers possess a deep understanding of the subject matter. The Tutorials are comprehensive, easy to follow, and have helped me in varius place. Thanks to Unique Bloger.  </p>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col ">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
