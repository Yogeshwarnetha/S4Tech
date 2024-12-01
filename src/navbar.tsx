import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home, BookOpen, Phone } from 'lucide-react';

const menuItems = [
  {
    title: 'Home',
    icon: <Home className="w-5 h-5" />,
    path: '/'
  },
  {
    title: 'Aboutus',
    icon: <Phone className="w-5 h-5" />,
    path: '/aboutus'
  },
  {
    title: 'Services',
    icon: <BookOpen className="w-5 h-5" />,
    submenu: [
      { title: 'Web & Mobile App Development', path: '/' },
      { title: 'Digital Marketing Services', path: '/' },
      { title: 'Cyber Security Solutions', path: '/' },
      { title: 'Data Tracking Security', path: '/' },
      { title: 'IT Management Service', path: '/' },
      { title: 'UI/UX & Brand Identity', path: '/' },
    ],
    path: '/services'
  },
  {
    title: 'Blogs',
    icon: <Phone className="w-5 h-5" />,
    path: '/blogs'
  },
  {
    title: 'Contact Us',
    icon: <Phone className="w-5 h-5" />,
    path: '/contact'
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const MenuItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubMenuOpen = openSubMenus.includes(item.title);

    if (!hasSubmenu) {
      return (
        <a
          href={item.path}
          className={`${isMobile ? 'flex items-center p-3 text-black-700 hover:bg-gray-50 rounded-lg' : 'flex items-center px-4 py-2 text-black-700 hover:text-red-600'}`}
        >
          {isMobile && item.icon}
          <span className={isMobile ? 'ml-3' : ''}>{item.title}</span>
        </a>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() => toggleSubMenu(item.title)}
          className={`${isMobile ? 'flex items-center w-full p-3 text-black-700 hover:bg-black-50 rounded-lg' : 'flex items-center px-4 py-2 text-black-700 hover:text-red-600'}`}
        >
          {isMobile && item.icon}
          <span className={isMobile ? 'ml-2' : ''}>{item.title}</span>
          {isMobile ? (
            <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${isSubMenuOpen ? 'rotate-90' : ''}`} />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>
        <div className={`${isMobile ? `${isSubMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 pl-6` : 'absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'}`}>
          {item.submenu.map((subItem: any, index: number) => (
            <a
              key={index}
              href={subItem.path}
              className={`${isMobile ? 'flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'}`}
            >
              {subItem.title}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex items-center justify-center w-1/2 lg:w-[15%] mx-auto lg:mx-0">
              <a href="/">
                <img src="" className="w-20 sm:w-24 md:w-36 lg:w-48" alt="S4Tech Logo" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center w-4/6 lg:w-[70%] space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="group relative">
                  <MenuItem item={item} />
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="hidden lg:flex items-center justify-center w-1/6 lg:w-[15%]">
            <a href='/contact'>
              <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700">
                Schedule a Call
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-semibold text-blue-600">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <MenuItem item={item} isMobile={true} />
            </div>
          ))}
          <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
