import '../App.css';
import NavButton from "./buttons/NavButton";

function Header() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2 text-4xl text-blue-900 font-bold font-sans">
                    Ad Astra
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-6">
                    <NavButton path="#" text="Home"/>
                    <NavButton path="#" text="Docs"/>
                    <NavButton path="#" text="Blog"/>
                </div>
            </div>
        </nav>
    );
}

export default Header;
