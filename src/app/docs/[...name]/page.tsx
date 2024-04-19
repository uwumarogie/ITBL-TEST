
export default ({params}: {params: {name: string[]}}) => {
    return <div>
        <h1>Doc entry for {params.name.join("/")}</h1>
    </div>
}