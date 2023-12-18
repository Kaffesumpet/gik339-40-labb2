const serverUrl = "http://localhost:3000/users";

/* At its core this code fetches user data from a server, dynamically creates an HTML table to display the data, and adds it to the webpage. In case of any errors during fetching or displaying the data, it catches and logs the errors. */

async function fetchUserData() {
  try {
    const response = await fetch(serverUrl);
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

async function displayUsers() {
  try {
    const users = await fetchUserData();

    const userTable = document.createElement("table");
    userTable.classList.add("user-table");

    const tableHeaders = document.createElement("tr");
    tableHeaders.innerHTML = `
      <th>ID</th>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>Användarnamn</th>
      <th>Färg</th>
    `;
    userTable.appendChild(tableHeaders);

    users.forEach((user) => {
      const userRow = document.createElement("tr");
      userRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.username}</td>
        <td>${user.color}</td>
      `;

      userRow.style.backgroundColor = user.color;
      userTable.appendChild(userRow);
    });

    const section = document.createElement("section");
    section.classList.add("user-section");
    section.appendChild(userTable);

    const main = document.querySelector("main");
    main.appendChild(section);
  } catch (error) {
    console.error("Error displaying users:", error);
  }
}
displayUsers();
