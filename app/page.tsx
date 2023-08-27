import Input from "./components/input";
import Header from "./components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Input />
      </main>
    </>
  );
}
