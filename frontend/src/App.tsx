import "./App.css";

function App() {
  return (
    <>
      {" "}
      <main className="min-h-screen bg-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-pink-600">Nailora</h1>

          <p className="mt-4 text-gray-600">
            Find and book mobile nail technicians near you.
          </p>

          <button className="mt-6 rounded-lg bg-pink-600 px-6 py-3 font-medium text-white hover:bg-pink-700">
            Get Started
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
