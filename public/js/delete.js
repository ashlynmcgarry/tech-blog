const deletePost = async function(event) {
    console.log(event.target.getAttribute("data-id"));
    const id = event.target.getAttribute("data-id");
    if (id) {
        const response = await fetch(`/api/post/${id}`, {
            method: "DELETE",
        });
    if (response.ok) {
        document.location.reload(); 
    } else {
        alert(response.statusText);
    }
    }
}


document
.querySelector('.delete-btn')
.addEventListener('click', deletePost);