// https://jsonplaceholder.typicode.com/posts/1
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

export async function getPostBody(id){
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r => r.json())
    return data.body
}