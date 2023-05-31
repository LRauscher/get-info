let button = document.getElementById("fetch");

function fetchProfile() {
    document.getElementById("profileContainer").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";
  
    var username = document.getElementById("usernameInput").value;
  
    if (!username) {
      document.getElementById("errorMessage").innerHTML = "Please enter a GitHub username";
      return;
    }
  
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Not Found") {
          document.getElementById("errorMessage").innerHTML = "User not found";
        } else {
          var profileContainer = document.getElementById("profileContainer");
          var profileData = `
            <h2>${data.name}</h2>
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <p><strong>Repositories:</strong> ${data.public_repos}</p>
          `;
          profileContainer.innerHTML = profileData;
        }
      })
      .catch(error => {
        document.getElementById("errorMessage").innerHTML = "An error occurred while fetching the data";
        console.error(error);
      });
  }
  
button.addEventListener("click", fetchProfile);

function fetchProfile2() {
  document.getElementById("profileContainer2").innerHTML = "";
  document.getElementById("errorMessage2").innerHTML = "";

  var username = document.getElementById("usernameInput2").value;

  if (!username) {
    document.getElementById("errorMessage2").innerHTML = "Please enter a GitHub username";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Not Found") {
        document.getElementById("errorMessage2").innerHTML = "User not found";
      } else {
        var profileContainer = document.getElementById("profileContainer2");
        var profileData = `
          <h2>${data.name}</h2>
          <p><strong>Username:</strong> ${data.login}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
          <p><strong>Repositories:</strong> ${data.public_repos}</p>
        `;
        profileContainer.innerHTML = profileData;
      }
    })
    .catch(error => {
      document.getElementById("errorMessage2").innerHTML = "An error occurred while fetching the data";
      console.error(error);
    });
}

button.addEventListener("click", fetchProfile2);