

export default async function fetchGraphql(query) {
    return await fetch("http://localhost:4000/graphql",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        mode:'cors',
        body: JSON.stringify({ query: query })
    }).then((value) => {
        return value.json()
    })
}