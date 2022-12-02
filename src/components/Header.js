import '../App.css';

function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 font-sans">
            <div className="flex items-center flex-shrink-0 text-zinc-50 mr-6">
                <span className="font-semibold text-4xl tracking-tight">Ad Astra</span>
            </div>
            <div className="inline-block text-base px-4 py-2 leading-none text-white">
                <div className="text-base lg:flex-grow">
                    <a href="/"
                       className="block mt-8 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-8">
                        Docs
                    </a>
                    <a href="/"
                       className="block mt-8 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-8">
                        Examples
                    </a>
                    <a href="/"
                       className="block mt-8 lg:inline-block lg:mt-0 text-sky-100 hover:text-white">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
