'use client'
import HamBurger from "./components/HamBurger"
import Header from "./components/Header";
import Categorys from "./components/Categorys";
import Search from "./components/Search";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <HamBurger />
      <Header />
      <Search />
      <Categorys />
      <Dishes />
      <Footer />
    </main>
  );
}

