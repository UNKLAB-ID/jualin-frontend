import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import Link from "next/link";

const NavbarHome = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white shadow-sm py-4" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">AutoRental</h1>
                            <p className="text-xs text-gray-500">Rental Mobil Makassar</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-[var(--primary)] font-medium text-sm">HOME</Link>
                        <Link href="/product-user" className="text-gray-700 hover:text-[var(--primary)] font-medium text-sm">PRODUCT</Link>
                        <Link href="#reviews" className="text-gray-700 hover:text-[var(--primary)] font-medium text-sm">REVIEWS</Link>
                        <Link href="#blogs" className="text-gray-700 hover:text-[var(--primary)] font-medium text-sm">BLOGS</Link>
                        <Link href="#service" className="text-gray-700 hover:text-[var(--primary)] font-medium text-sm">SERVICE</Link>
                        <button className="px-5 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary)]/90 transition text-sm font-medium flex items-center space-x-1">
                            <span>LOGIN</span>
                            <LoginIcon fontSize="small" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 space-y-3 pb-4">
                        <Link href="/" className="block text-gray-700 hover:text-[var(--primary)] text-sm">HOME</Link>
                        <Link href="/product-user" className="block text-gray-700 hover:text-[var(--primary)] text-sm">PRODUCT</Link>
                        <Link href="#reviews" className="block text-gray-700 hover:text-[var(--primary)] text-sm">REVIEWS</Link>
                        <Link href="#blogs" className="block text-gray-700 hover:text-[var(--primary)] text-sm">BLOGS</Link>
                        <Link href="#service" className="block text-gray-700 hover:text-[var(--primary)] text-sm">SERVICE</Link>
                        <button className="w-full px-5 py-2 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-md text-sm">LOGIN</button>
                    </div>
                )}
            </div>
        </nav >
    )
}

export default NavbarHome;