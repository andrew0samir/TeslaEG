"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-black/10 hover:ring-black/20 dark:text-white dark:ring-white/10 dark:hover:ring-indigo-400">
              Tesla Egypt for Trading and Manufacturing.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl dark:text-white">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus-visible:outline-indigo-500"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
