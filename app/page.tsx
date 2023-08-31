import Input from "./components/input";
import Header from "./components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-24 py-14">
        <div className="text-center py-4">
          <p className="font-semibold tracking-wide">
            Topic: <span className="uppercase">TOPIC</span>
          </p>
        </div>
        <Input />
      </main>
    </>
  );
}
