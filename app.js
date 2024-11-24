function submitPost() {
    const userName = document.getElementById("userName").value;
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;
  
    
    if (!userName || !postTitle || !postContent) {
        alert("Please fill out all required fields.");
        return;
    }

  
    const post = document.createElement("div");
    post.className = "post";
    
   
    post.style.backgroundColor = "#4267B2"; 

    
    post.innerHTML = `
      <div class="info">
        <h3>${postTitle}</h3>
        <p>by ${userName}</p>
        <p>${new Date().toLocaleString()}</p>
      </div>
      <p>${postContent}</p>
    `;

    
    document.getElementById("feed").prepend(post);

    
    document.getElementById("userName").value = "";
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}
