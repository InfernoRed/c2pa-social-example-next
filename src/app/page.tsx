import Image from "next/image";
import CrPin from "../assets/cr-pin.svg";
import artisticSample from "../samples/artistic-sample.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-4">Sample 1</h1>
      <div className="group relative aspect-square">
        <Image
          priority
          className="h-full w-full rounded-xl object-cover lg:rounded-[20px]"
          alt="artistic sample"
          src={artisticSample}
        />
        <CrPin className="absolute right-4 top-4 h-[24px] w-[24px] hover:cursor-pointer" />
      </div>
    </main>
  );
}
