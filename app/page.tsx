import Image from "next/image";
import Header from "../components/Header";

type HomeProps = {
  folderName?: string;
};

export default function Home({ folderName }: HomeProps) {
  return (
    <div className="m-0 flex flex-col p-0 bg-transparent">
      {/* FOLDERS */}
      <div className="header-div">
        <div className="flex justify-end flex-row">
          <button className="btn">Glaze Submissions</button>
          <button className='btn'>Incognito</button>
        </div>
        <Header />
      </div>
      {folderName && (
        <div className="mx-auto my-2 rounded-full bg-black px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-lime-200">
          Route: /{folderName}
        </div>
      )}
      {/* PROMISE ITS NOT A CULT */}
      <div className="m-0 p-0">
        <Image
          src="/cult.svg"
          alt="Totally not a cult"
          width={1600}
          height={800}
          className="block w-full h-auto"
        />
      </div>
      {/* COLLAGE */}
      <div className="bg-[#c5f2ca] m-0 p-0">
        <Image
          src="/bro_collage.svg"
          alt="Brothers Collage"
          width={1600}
          height={800}
          className="block w-full h-auto"
        />
      </div>
      <div className="relative m-0 overflow-hidden bg-black p-0 leading-none text-white">
        <Image
          src="/grid.jpg"
          alt="Grid"
          width={1600}
          height={800}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
        />
        <Image
          src="/donut_joke.svg"
          alt="Donut Joke"
          width={1600}
          height={800}
          className="relative z-10 block w-full h-auto align-top"
        />
        <button className="absolute left-1/2 top-1/2 z-20 w-auto -translate-x-1/2 -translate-y-1/2 px-6 py-3">
          Post a compliment
        </button>
      </div>
            <div className="relative m-0 overflow-hidden bg-black p-0 leading-none text-white">
        <Image
          src="/grid.jpg"
          alt="Grid"
          width={1600}
          height={800}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
        />
        <Image
          src="/lost.svg"
          alt="Lost Sisters?"
          width={1600}
          height={800}
          className="relative z-10 block w-full h-auto align-top"
        />
      </div>
    </div>
  );
}
