import Image from "next/image";
import { Layout } from "@/components/component/layout";
import { Glossary } from "@/components/component/glossary";
import { Gallery } from "@/components/component/gallery";
import Link from "next/link"

export default function GlossaryPage()
{
  
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">권오현</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  플레이어를 매혹적인 세계로 안내하는 몰입형 게임 시나리오를 제작합니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Projects
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  About Me
                </Link>
              </div>
            </div>
            <img
              alt="Evelyn Blackwood"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32" id="projects">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">참여 프로젝트</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                제가 참여한 게임 시나리오 프로젝트를 살펴보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="group grid gap-4">
              <img
                alt="Project 1"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Forgotten Kingdom</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Immerse players in a forgotten medieval kingdom, where they must uncover ancient secrets and navigate
                  a web of political intrigue.
                </p>
              </div>
            </div>
            <div className="group grid gap-4">
              <img
                alt="Project 2"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Cyberpunk Uprising</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore a dystopian future where players must navigate the high-tech, neon-lit streets of a megacity
                  and join a resistance movement against a corrupt corporate regime.
                </p>
              </div>
            </div>
            <div className="group grid gap-4">
              <img
                alt="Project 3"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Elven Odyssey</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embark on a fantastical journey through the enchanted forests and hidden realms of an elven
                  civilization, where players must navigate the delicate balance between tradition and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Evelyn Blackwood</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Evelyn Blackwood is a seasoned game scenario designer with a passion for crafting immersive,
              narrative-driven experiences. With over a decade of industry experience, she has honed her skills in
              world-building, character development, and interactive storytelling.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Evelyn&apos;s approach is rooted in a deep understanding of player psychology and a commitment to creating
              scenarios that challenge and engage. She works closely with game developers to ensure her designs
              seamlessly integrate with the overall game mechanics and vision.
            </p>
          </div>
          <div className="flex space-x-4 lg:justify-end">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Me
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Download CV
            </Link>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Evelyn Blackwood. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </main>
  );
}
