import { useState } from 'react';
import { Menu, Sun, Moon, X, Bell, UserCircle } from 'lucide-react';
import { roleSideBarItems } from '../data/mockData';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import EduLogoDark from '../assets/EduLogoDark.png';
import EduLogoLight from '../assets/EduLogoLight.png';

interface LayoutProps {
    role: "student" | "teacher" | "admin";
}

const Layout = ({ role }: LayoutProps) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [isDark, setIsDark] = useState(() => {
        return document.documentElement.classList.contains('dark');
    });

    const location = useLocation();
    const navigate = useNavigate();

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); 
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const currentPage = location.pathname.split("/").pop(); 

    const handleNavigate = (page: string) => {
        navigate(page); // navigate to relative route
        setSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-page transition-colors duration-200">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-ui-border z-30 flex items-center px-4 lg:px-6">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text lg:hidden mr-4 p-2 hover:bg-ui-hover rounded-lg"
                >
                    {sidebarOpen ? <X size={24} className='text-text-main' /> : <Menu size={24} className="text-text-main" />}
                </button>

                <div className="flex items-center flex-1">
                    {isDark ?
                        <>
                            <img src={EduLogoDark} alt="EduLogo Dark" className="h-12" />
                            <p className='text-text-main font-bold text-2xl hidden md:block'>Edu Portal</p>
                        </>
                        :
                        <>
                            <img src={EduLogoLight} alt="EduLogo Light" className="h-12" />
                            <p className='text-text-muted font-bold text-2xl hidden md:block'>Edu Portal</p>
                        </>
                    }

                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 hover:bg-ui-hover rounded-lg mr-2 text-text-muted transition-all"
                >
                    {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                </button>


                <button
                    onClick={() => handleNavigate('notifications')}
                    className="relative text-text-muted p-2 hover:bg-ui-hover rounded-lg mr-2"
                >
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
                </button>


                <button
                    onClick={() => handleNavigate('profile')}
                 className="flex items-center text-text-muted gap-2 p-2 hover:bg-ui-hover rounded-lg">
                    <UserCircle size={24} />
                    <span className="hidden sm:inline text-sm font-medium">Alex Morgan</span>
                </button>

            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-ui-border z-20 transition-transform transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <nav className="space-y-1 p-4">

                    {roleSideBarItems[role].map((item) => {
                        const Icon = item.icon;
                        const isActive = currentPage === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavigate(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary-muted text-primary font-medium'
                                    : 'text-text-muted hover:bg-page'
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}


                </nav>

            </aside>




            {/* Main content */}
            <main className="pt-16 lg:pl-64">
                <div className="p-4 lg:p-6">
                    <Outlet /> {/* Nested route pages will render here */}
                </div>
            </main>
        </div>
    );
};

export default Layout;