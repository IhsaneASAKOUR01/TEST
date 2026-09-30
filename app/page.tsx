"use client";

import { useState } from "react";
import { Marketing } from "@/components/marketing";
import { ProductApp } from "@/components/product-app";

export default function Home() {
  const [inApp, setInApp] = useState(false);
  return inApp ? <ProductApp onExit={() => setInApp(false)} /> : <Marketing onEnter={() => setInApp(true)} />;
}
