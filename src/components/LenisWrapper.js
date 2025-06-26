// src/components/LenisWrapper.js
"use client";
import useLenis from "@/hooks/useLenis";

export default function LenisWrapper() {
  useLenis(); // ini jalanin scroll animation
  return null; // gak render apapun, cuma efek
}
