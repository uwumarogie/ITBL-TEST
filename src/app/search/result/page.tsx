export default function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return <h1>Search Params : {searchParams.search}</h1>;
}
