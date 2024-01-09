"use client";

import Header from "@/components/Header";
import Editor from "@/components/Editor";
import Display from "@/components/Display";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState();
  
  return (
    <main className="container mx-auto max-w-2xl flex min-h-screen flex-col items-center mb-12">
      <Header />
      <Editor text={text} setText={setText}/>
      <Display text={text} />
    </main>
  );
}
