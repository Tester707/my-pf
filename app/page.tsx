import Image from "next/image";
import { Glossary } from "@/components/component/glossary";
import { Gallery } from "@/components/component/gallery";
import Link from "next/link"

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
                  게임 시나리오 기획자가 되기위해 공부하고 있는 권오현 입니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  프로젝트 보기
                </a>
                <a
                  href="#about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                >
                  더 보기
                </a>
              </div>
            </div>
            <img
              alt="Kwon Oh Hyun"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="550"
              src="/Wanderer_above_the_Sea_of_Fog.jpeg"
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
      <div className="group flex flex-col gap-4">
        <img
          alt="Project 1"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
          height="300"
          src="/UNCLEAR.png"
          width="400"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">UNCLEAR</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            플레이어는 &apos;소란 이브라힘&apos;이 되어 애너하임 그룹의 음모를 막고 뱅가드의 도시를 지켜야 합니다.
          </p>
        </div>
      </div>
      <div className="group flex flex-col gap-4">
        <img
          alt="Project 2"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
          height="300"
          src="/Project Null.png"
          width="400"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">Project : Null</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            플레이어가 첨단 기술과 네온 불빛으로 빛나는 거대 도시의 거리를 탐색하고 부패한 정부의 어두운 진실을 파헤치는 디스토피아적인 미래를 탐험하세요.
          </p>
        </div>
      </div>
      <div className="group flex flex-col gap-4">
        <img
          alt="Project 3"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
          height="300"
          src="/placeholder.svg"
          width="400"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">태연시</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            상세 내용 추가 예정
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">태연시 상세 내용</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            상세 내용 추가 예정
            </p>
          </div>
          <div className="flex space-x-4 lg:justify-end">

          </div>
        </div>
      </section>
      
      <>
  <section className="w-full pt-12 md:pt-24 lg:pt-32">
    <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-24">
      <a href="https://www.pixiv.net/artworks/110424164" target="_blank" rel="noopener noreferrer">
        <img
          alt="b_rapi"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
          height="600"
          src="/b_rapi.jpg"
          width="800"
        />
      </a>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">바니걸 라피</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">By DrCrow</p>
        </div>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
        #勝利の女神:NIKKE #승리의 여신:니케 #NIKKE #メガニケ #Goddess of Victory: Nikke #ラピ(勝利の女神:NIKKE) #Rapi (NIKKE: The Goddess of Victory) #バニーガール #바니걸 #니케 #라피 #바니걸
        </p>
      </div>
    </div>
  </section>
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="group overflow-hidden rounded-lg">
        <a href="https://www.pixiv.net/artworks/112622753" target="_blank" rel="noopener noreferrer">
            <img
              alt="run_folkwang"
              className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
              height="300"
              src="/r_folkwang.jpg"
              width="400"
            />
        </a>
          <div className="p-4">
            <h3 className="text-lg font-semibold">달리는 폴크방</h3>
            <p className="text-gray-500 dark:text-gray-400">DrCrow</p>
          </div>
      </div>
      <div className="group overflow-hidden rounded-lg">
        <a href="https://www.pixiv.net/artworks/115024368" target="_blank" rel="noopener noreferrer">
          <img
            alt="D"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/D.jpg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">D</h3>
            <p className="text-gray-500 dark:text-gray-400">DrCrow</p>
          </div>
        </a>
      </div>
      <div className="group overflow-hidden rounded-lg">
        <a href="https://www.pixiv.net/artworks/118075496" target="_blank" rel="noopener noreferrer">
          <img
            alt="Artwork 3"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/venus.jpg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">금성</h3>
            <p className="text-gray-500 dark:text-gray-400">DrCrow</p>
          </div>
        </a>
      </div>
      <div className="group overflow-hidden rounded-lg">
          <img
            alt="Artwork 4"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/placeholder.svg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>
      </div>
      <div className="group overflow-hidden rounded-lg">
          <img
            alt="Artwork 5"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/placeholder.svg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>
      </div>
      <div className="group overflow-hidden rounded-lg">
          <img
            alt="Artwork 6"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/placeholder.svg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>
      </div>
      <div className="group overflow-hidden rounded-lg">
          <img
            alt="Artwork 7"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/placeholder.svg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>
      </div>
      <div className="group overflow-hidden rounded-lg">
          <img
            alt="Artwork 8"
            className="aspect-[4/3] w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
            height="300"
            src="/placeholder.svg"
            width="400"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>
      </div>
    </div>
  </section>
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Kwon Ohhyun. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              연락처
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              이력서 다운로드
            </Link>
        </nav>
      </footer>
</>
    </main>
    
  );
}
