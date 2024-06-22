const Header = () => {
    return (
        <header className="bg-grey shadow-sm mx-auto  fixed z-50 left-0 right-0 transition-all">
            <div className="wrapper px-10 py-5 w-full relative">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="#home">
                        <header className="flex items-center gap-1">
                            <span>&lt; </span>
                            <h1 className="text-2xl font-medium">Ryan</h1>
                            <span> /&gt;</span>
                        </header>
                    </a>
                    <nav className="text-muted gap-8 hidden items-center  lg:flex">
                        <a
                            className="hover:text-foreground hover:scale-110 transition-all"
                            href="#services"
                        >
                            Services
                        </a>
                        <a
                            className="hover:text-foreground hover:scale-110 transition-all"
                            href="#skills"
                        >
                            Skills
                        </a>
                        <a
                            className="hover:text-foreground hover:scale-110 transition-all"
                            href="#testimonials"
                        >
                            Testimonials
                        </a>
                        <a
                            className="hover:text-foreground hover:scale-110 transition-all"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </nav>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-menu "
                        >
                            <line x1={4} x2={20} y1={12} y2={12} />
                            <line x1={4} x2={20} y1={6} y2={6} />
                            <line x1={4} x2={20} y1={18} y2={18} />
                        </svg>
                        <div className="sr-only">Menu Button</div>
                    </button>
                </div>
                <div
                    className="mobile-nav absolute lg:hidden top-[120%] mx-auto w-[95vw] left-0 right-0 transition-all overflow-hidden"
                >
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                        <nav className="flex flex-col gap-4">
                            <a className="text-lg" href="#services">
                                Services
                            </a>
                            <a className="text-lg" href="#skills">
                                Skills
                            </a>
                            <a className="text-lg" href="#testimonials">
                                Testimonials
                            </a>
                            <a className="text-lg" href="#contact">
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header