export default function Page({ params }: { params: { id: string } }) {
  return <>this is your id you give in the routes: {params.id}</>;
}
