const serverUrl = "http://localhost:3000/users";
// const response = fetch(serverUrl);

async function fetchUserData() {
  try {
    const response = await fetch(serverUrl);
    console.log("Response Data:", usersData);

    if (!response.ok) {
      throw new Error("Något gick fel vid hämtning av data");
    }

    const usersData = await response.json();

    // Skapa en array av användarobjekt med önskade egenskaper
    const users = usersData.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      color: user.color,
    }));

    console.log("Användardata:", users);
    return users;
  } catch (error) {
    console.error("Fel vid hämtning av användardata:", error.message);
    return []; // Returnera en tom array om det uppstår ett fel
  }
}

const userUl = document.createElement("ul");
userUl.classList.add("user-list");

// Anropa funktionen för att hämta användardata från servern
fetchUserData().then((users) => {
  users.forEach((user) => {
    const userLi = document.createElement("li");
    userLi.classList.add("user-list-item");

    userLi.innerHTML = `
          <div class="user-info">
            <p>ID: ${user.id}</p>
            <p>Förnamn: ${user.firstName}</p>
            <p>Efternamn: ${user.lastName}</p>
            <p>Användarnamn: ${user.username}</p>
            <p>Färg: ${user.color}</p>
          <div>
          `;

    userLi.style.backgroundColor = user.color;
    userUl.appendChild(userLi);
  });
  const main = document.querySelector("main");
  main.appendChild(userUl);
});

// async function fetchUserData() {
//   try {
//     const response = await fetch("your_api_endpoint_here");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     // Handle errors accordingly
//     return [];
//   }
// }

// async function displayUsers() {
//   try {
//     const users = await fetchUserData();

//     const userUl = document.createElement("ul");
//     userUl.classList.add("user-list");

//     users.forEach((user) => {
//       const userLi = document.createElement("li");
//       userLi.classList.add("user-list-item");

//       userLi.innerHTML = `
//             <div class="user-info">
//               <p>ID: ${user.id}</p>
//               <p>Förnamn: ${user.firstName}</p>
//               <p>Efternamn: ${user.lastName}</p>
//               <p>Användarnamn: ${user.username}</p>
//               <p>Färg: ${user.color}</p>
//             <div>
//           `;

//       userLi.style.backgroundColor = user.color;
//       userUl.appendChild(userLi);
//     });

//     const main = document.querySelector("main");
//     main.appendChild(userUl);
//   } catch (error) {
//     console.error("Error displaying users:", error);
//     // Handle errors accordingly
//   }
// }

// // Call the function to display users
// displayUsers();

// // Exempeldata för användare
// const users = [
//   {
//     id: 1,
//     name: 'Alice',
//     age: 25,
//     color: 'blue'
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     age: 30,
//     color: 'green'
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     age: 28,
//     color: 'red'
//   }
// ];

// // Skapa ul-elementet
// const ulElement = document.createElement('ul');
// ulElement.classList.add('user-list'); // Lägger till en klass för styling

// // Loopa igenom users-arrayen och skapa li-element för varje användare
// users.forEach(user => {
//   const liElement = document.createElement('li');
//   liElement.classList.add(user.color); // Användar-specifik färgklass för styling

//   // Skapa element för användarinformation inuti li-elementet
//   const nameElement = document.createElement('div');
//   nameElement.textContent = `Name: ${user.name}`;

//   const ageElement = document.createElement('div');
//   ageElement.textContent = `Age: ${user.age}`;

//   // Lägg till informationselementen i li-elementet
//   liElement.appendChild(nameElement);
//   liElement.appendChild(ageElement);

//   // Lägg till li-elementet i ul-elementet
//   ulElement.appendChild(liElement);
// });

// // Lägg till ul-elementet i DOM-trädet (t.ex. body)
// document.body.appendChild(ulElement);
