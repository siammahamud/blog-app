'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">BlogApp</h1>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 
                  ${pathname === link.href ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
