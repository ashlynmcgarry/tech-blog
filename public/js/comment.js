const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector("#comment").value.trim();
    let post_id = window.location.href.split('/').slice(-1)[0];
    if (body) {
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ body, post_id }),
            headers: { "Content-Type": "application/json"},
        });

    if (response.ok) {
        document.location.replace(`/post/${post_id}`); 
    } else {
        alert(response.statusText);
    }
    }
};
console.log(window.location.href.split('/').slice(-1)[0]);
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);