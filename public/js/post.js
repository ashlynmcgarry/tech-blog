const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();

    if (title && body) {
        const response = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({ title, body }),
            headers: { "Content-Type": "application/json"},
        });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
    }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);