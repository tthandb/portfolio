import Image from 'next/image'
import ContactLink from 'components/contact-link';
import Header from 'components/header';
import type { PageWithLocalParam } from 'type';
import { getDictionary } from 'dictionaries';

export default async function Page({params: {lang}}: PageWithLocalParam) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header />
      <main className="min-h-[300vh] bg-gray-500">
        <section
          className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28"
          id="home"
        >
          <div className="text w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl">
              Call me <br /> {dictionary.nav.home}
              <span
                className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent"> Ryan </span>
            </h1>
            <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sed leo blandit lobortis. Fusce
              eget eleifend nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Morbi gravida non arcu nec tempus. Nullam ornare faucibus auctor. Nam sagittis eu nibh a ultrices.
              Cras suscipit volutpat tellus id feugiat. Sed accumsan laoreet risus, a sodales augue laoreet non. Integer
              euismod odio id urna tristique, non euismod nibh finibus. Cras suscipit mattis augue, porta ullamcorper
              elit ornare nec. Aliquam est sapien, porta ac eleifend at, tristique nec ligula. Fusce eu nulla leo.
              Pellentesque laoreet ipsum a lectus sagittis, id hendrerit nisl cursus. Pellentesque et vehicula justo.
              Nunc laoreet finibus magna, venenatis tempor lectus rutrum eget.
            </p>
            <ContactLink />
          </div>
          <div className="image w-full lg:w-1/2 relative aspect-square -mt-10 ">
            <Image
              alt="image"
              fill
              src="/sova.jpg"
            />
            <div
              className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0" />
          </div>
        </section>

      </main>
    </>
  );
}
