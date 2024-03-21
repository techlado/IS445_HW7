// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaïjan"
];


//filter countries based on user input
const filterCountries = input => {
  const inputValue = input.value.trim().toLowerCase();
  const filteredCountries = countryList.filter(country => country.toLowerCase().startsWith(inputValue));
  return filteredCountries;
};

//display country suggestions
const displaySuggestions = () => {
  const input = document.getElementById("country");
  const suggestionsList = document.getElementById("suggestions");

  //clear old suggestions
  suggestionsList.innerHTML = "";

  const filteredCountries = filterCountries(input);

  //display suggestions
  filteredCountries.forEach(country => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.textContent = country;
    suggestion.addEventListener("click", () => {
      input.value = country;
      suggestionsList.innerHTML = "";
    });

    suggestionsList.appendChild(suggestion);
  });
};


document.getElementById("country").addEventListener("input", displaySuggestions);