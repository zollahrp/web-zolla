// src/components/dashboard/layout/Header.js
"use client";

import { useState } from "react";
import { FiMenu, FiBell } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import LogoutButton from '@/components/ui/LogoutButton';

export default function header({ onToggleSidebar }) {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-4 lg:px-6 z-50">
      {/* Kiri: Toggle + Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-xl text-gray-700 hover:text-black focus:outline-none"
        >
          <FiMenu />
        </button>
        <div className="hidden md:flex items-center border rounded-md px-3 py-1 text-sm text-gray-500">
          <span className="mr-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </span>
          Ctrl + K
        </div>
      </div>

      {/* Kanan: GitHub, Notif, Avatar */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <FaGithub />
        </button>
        <div className="relative">
          <button className="relative text-xl text-gray-700">
            <FiBell />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] px-[6px] rounded-full">
              2
            </span>
          </button>
        </div>
        <LogoutButton />
        <div className="flex items-center gap-2">
          <Image
            src="/img/avatar.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full border-2 border-blue-200"
          />
          <span className="text-sm font-medium hidden md:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
}
