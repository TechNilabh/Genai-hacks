import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen px-16 py-8 bg-[#000000] text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Spotlight />
        <BackgroundBeamsWithCollision className="bg-[#000000] w-[100%] h-[100%]">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
            Welcome to Law for all{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Legal made Simple</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Legal made Simple</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
      </main>
    </div>
  );
}
