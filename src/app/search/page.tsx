"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function submitSearchParams(search: string) {
    console.log(search);
    router.push(`/search/result?term=${search}`);
  }
  return (
    <form onSubmit={() => submitSearchParams(search)}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
}
