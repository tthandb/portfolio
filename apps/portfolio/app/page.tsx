import Image from 'next/image'
import Header from '../components/header';
import ContactLink from '../components/contact-link';

export default function Page() {
  return (
    <>
    <Header />
    <main className="min-h-[300vh] bg-background">
      <section
        id="home"
        className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28"
      >
        <div className="text w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl">
            Hi I'm <br />
            <span className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent"> Ryan </span>
          </h1>
          <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sed leo blandit lobortis. Fusce eget eleifend nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi gravida non arcu nec tempus. Nullam ornare faucibus auctor. Nam sagittis eu nibh a ultrices. Cras suscipit volutpat tellus id feugiat. Sed accumsan laoreet risus, a sodales augue laoreet non. Integer euismod odio id urna tristique, non euismod nibh finibus. Cras suscipit mattis augue, porta ullamcorper elit ornare nec. Aliquam est sapien, porta ac eleifend at, tristique nec ligula. Fusce eu nulla leo. Pellentesque laoreet ipsum a lectus sagittis, id hendrerit nisl cursus. Pellentesque et vehicula justo. Nunc laoreet finibus magna, venenatis tempor lectus rutrum eget.
          </p>
          <ContactLink />
          <div className="button gap-2 flex items-center flex-col md:flex-row my-5">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-bold text-xl md:w-auto w-full"
              href="#contact"
            >
              Contact Me
            </a>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-bold text-xl md:w-auto w-full">
              My Projects
            </button>
          </div>
        </div>
        <div className="image w-full lg:w-1/2 relative aspect-square -mt-10 ">
          <Image
             src="/sova.jpg"
             fill
          />
          {/*<img*/}
          {/*  alt=""*/}
          {/*  fetchpriority="high"*/}
          {/*  decoding="async"*/}
          {/*  data-nimg="fill"*/}
          {/*  className="w-full aspect-square"*/}
          {/*  style={{*/}
          {/*    position: "absolute",*/}
          {/*    height: "100%",*/}
          {/*    width: "100%",*/}
          {/*    left: 0,*/}
          {/*    top: 0,*/}
          {/*    right: 0,*/}
          {/*    bottom: 0,*/}
          {/*    color: "transparent"*/}
          {/*  }}*/}
          {/*  src="https://static.wikia.nocookie.net/valorant/images/c/c5/Sova_Artwork_Full.png/revision/latest"*/}
          {/*  sizes="100vw"*/}
          {/*/>*/}
          <div
            className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0" />
        </div>
      </section>

    </main>
    </>
  );
}
