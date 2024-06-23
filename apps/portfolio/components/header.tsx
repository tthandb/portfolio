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
                            href="#skills"
                        >
                            Skills
                        </a>
                        <a
                            className="hover:text-foreground hover:scale-110 transition-all"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header