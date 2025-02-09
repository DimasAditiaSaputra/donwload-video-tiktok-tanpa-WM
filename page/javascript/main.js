document.getElementById("fetchBtn").addEventListener("click", async () => {
  const url = document.getElementById("tiktokUrl").value;
  if (!url) {
    alert("Please enter a TikTok URL first");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    const result = data.result.result;

    // Update UI with video details
    document.getElementById("avatar").src = result.author.avatar;
    document.getElementById("nickname").textContent = result.author.nickname;
    document.getElementById("description").textContent = result.desc;
    document.getElementById("likeCount").textContent =
      result.statistics.likeCount;
    document.getElementById("commentCount").textContent =
      result.statistics.commentCount;
    document.getElementById("shareCount").textContent =
      result.statistics.shareCount;

    // Set download links
    document.getElementById("downloadVideo").href = result.video;
    document.getElementById("downloadMusic").href = result.music;

    // Show the video container
    document.getElementById("videoContainer").style.display = "block";
  } catch (error) {
    alert("Error fetching video details. Please try again.");
    console.error("Error:", error);
  }
});
