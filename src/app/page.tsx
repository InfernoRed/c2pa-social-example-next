import SampleList from "@/components/SampleList";
import sampleImages from "@/constants/sampleImages";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-4">Welcome</h1>
      <p className="my-4 max-w-lg">
        This is a demo of social media images. Select a sample image to view its
        validation status. Copy and paste into a social media app to test the
        card display.
      </p>
      <SampleList samples={sampleImages} />
    </main>
  );
}
