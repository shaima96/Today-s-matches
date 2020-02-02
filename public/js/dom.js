const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", event => {
  event.preventDefault();
  const inputMatch = document.getElementById("searchbar");
  searchRequest(inputMatch.value, (error, matches) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      console.log(matches);
      updateMatches(matches);
    }
  });
});
