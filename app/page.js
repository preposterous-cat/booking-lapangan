import Footer from "@/components/footer";
import HomeComponent from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen px-16 py-10">
        <HomeComponent />
      </main>
      <div className="flex w-full justify-stretch">
        <Footer />
      </div>
    </>
  );
}
