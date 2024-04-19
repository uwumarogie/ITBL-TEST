import Link from "next/link";


export default function ProductsPage() {
    return <div className="flex flex-col">
        <span className="p-3 mb-4">Open a product, to view its details.</span>

        {["a", "b", "c"].map(id => (<Link className="p-3" href={"/products/" + id}>{id}</Link>))}
    </div>
}