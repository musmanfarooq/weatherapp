import Card from "@/components/Card/Index";
import SearchBar from "@/components/SearchBar";
import SearchHistory from "@/components/seachHistory";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <h1 className="p-3 font-bold">Please Enter the Name of the City</h1>
      <SearchBar />
      <Card />
      <SearchHistory />
    </main>
  );
}
