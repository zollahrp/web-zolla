"use client";
import AuthGuard from "@/lib/AuthGuard";

export default function ZagaPage() {
  return (
    <AuthGuard>
      <div>
        <h1>Halo dari Zaga!</h1>
      </div>
    </AuthGuard>
  );
}
