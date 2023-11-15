import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <main>
      <div className="mx-6">
        <h1 className="mt-2 text-4xl text-left font-bold text-white">The Star Wars Catalog</h1>
        <div className="mt-3">
          <Catalog />
        </div>
      </div>
    </main >
  )
}
