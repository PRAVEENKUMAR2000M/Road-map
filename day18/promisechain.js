// function tookUserdetails(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//         .then(response => response.json())
//     .catch (error => console.log(error))
// }
// function fetchData() {
//     tookUserdetails(1)
//     .then((title) => {
//         console.log(title);
//     })
    
// }










async function fetchData() {
    let userId = 1
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    let user = await response.json();
  

    let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    let posts = await postResponse.json()


    let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${posts[0].id}`)
    let comments = await commentsResponse.json();
    console.log(comments)

}








// async function fetchData() {
//     let userId = 1;

//     // try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         let user = await response.json();

//         let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//         let posts = await postsResponse.json();

//         console.log(posts);
//         let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${posts[0].id}`);
//         let comments = await commentsResponse.json();

//         console.log(comments);
//     // } catch (error) {
//     //     console.log('error fetching data', error);
//     // }
// }