export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-4">Welcome</h1>
      <p className="my-4 max-w-lg">
        This is a demo of social media images. Select a sample image to view its
        validation status. Copy and paste into a social media app to test the
        card display.
      </p>
      <ul className="list-disc list-inside">
        <li className="my-2">
          <a href="/sample/1" className="text-green-500 hover:text-green-700">
            ✅ Validated
          </a>
        </li>
        <li className="my-2">
          <a href="/sample/2" className="text-yellow-500 hover:text-yellow-700">
            ⚠️ Invalid
          </a>
        </li>
        <li className="my-2">
          <a href="/sample/3" className="text-orange-500 hover:text-orange-700">
            ❓Inconclusive
          </a>
        </li>
      </ul>
    </main>
  );
}
