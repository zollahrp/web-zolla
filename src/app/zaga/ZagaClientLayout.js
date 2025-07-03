'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Sidebar from '@/components/dashboard/layout/sidebar';
import Header from '@/components/dashboard/layout/Header';

export default function ZagaClientLayout({ children }) {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/masuk');
      }
      setIsAuthChecked(true);
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push('/masuk');
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (!isAuthChecked) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
