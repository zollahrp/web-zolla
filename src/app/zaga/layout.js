// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '@/lib/supabaseClient';

// import { Geist, Geist_Mono } from 'next/font/google';
// import '@/app/globals.css';
// import Sidebar from '@/components/dashboard/layout/sidebar';
// import Header from '@/components/dashboard/layout/Header';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function ZagaLayout({ children }) {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { session } } = await supabase.auth.getSession();

//       if (!session) {
//         router.push('/masuk');
//       } else {
//         setLoading(false);
//       }
//     };

//     checkUser();
//   }, []);

//   if (loading) return <p className="p-10 text-center">Loading...</p>;

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <div className="flex min-h-screen">
//           <Sidebar />
//           <div className="flex flex-col flex-1">
//             <Header />
//             <main className="flex-1 p-6 bg-gray-50">{children}</main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import ZagaClientLayout from './ZagaClientLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Zaga Dashboard',
  description: 'Halaman admin/dashboard untuk Zolla',
};

export default function ZagaLayout({ children }) {
  return (
    <ZagaClientLayout>{children}</ZagaClientLayout>
  );
}