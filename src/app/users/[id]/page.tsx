

export default function UserPage({ params }: { params: { id: string }}) {
    return (<h1>Welcome User {params.id}</h1>)
}