// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];


// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};


//fill house dropdown list
const fillHouseDropdown = () => {
  const dropdown = document.getElementById("house");
  houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    //append option to dropdown
    dropdown.appendChild(option);
  });
};


//display character list per house
const displayCharacters = () => {
  const houseCode = document.getElementById("house").value;
  const characters = getCharacters(houseCode);
  const charactersList = document.getElementById("characters");

  //clear the existing list
  charactersList.innerHTML = "";

  //fill the list
  characters.forEach(character => {
    const listItem = document.createElement("li");
    listItem.textContent = character;
    charactersList.appendChild(listItem);
  });
};


//event listener for displayCharacters function
document.getElementById("house").addEventListener("change", displayCharacters);

//call fillHouseDropdown function
document.addEventListener("DOMContentLoaded", fillHouseDropdown);