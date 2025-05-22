import Image from "next/image"; // Correct import from Next.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[20px] items-center sm:items-start text-center">
        <Image
          src="/profile_image.jpg" // Updated path to match the file in the public folder
          alt="Profile picture of Lê Hoàng Vĩ"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg">
          Hi, I’m Lê Hoàng Vĩ, a passionate developer. Explore my work and get in touch!
        </p>
        <Link href="/projects" className="text-blue-500 hover:underline">
          View My Projects
        </Link>
      </main>
    </div>
  );
}