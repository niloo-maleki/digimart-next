"use client";

import Link from "next/link";

const links = [
  { title: "دسته‌بندی کالاها", href: "/" },
  { title: "شگفت‌انگیزها", href: "/incredible-offers" },
  { title: "سوپرمارکت", href: "/fresh" },
  { title: "کارت هدیه", href: "/main/dk-ds-gift-card" },
  { title: "پرفروش‌ترین‌ها", href: "/best-selling" },
  { title: "تخفیف‌ها", href: "/promotion-center" },
];

const Navigation = () => {
  return (
    <nav className="bg-white pt-2 shadow-sm">
      <div className="container mx-auto flex gap-4">
        {links.map((link, index) => (
          <div key={index} className="relative px-2 py-3">
            <Link
              href={link.href}
              className="group flex whitespace-nowrap items-center cursor-pointer text-gray-600"
            >
              {link.title}
              <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
