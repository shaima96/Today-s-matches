const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", event => {
  event.preventDefault();
  const inputMatch = document.getElementById("searchbar");

  searchRequest(inputMatch.value, (error, matches) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      updateMatches(matches.results);
    }
  });
});

var updateMatches = function(matchesList) {
  const listSection = document.getElementById("calendar-league");
  listSection.innerText = null;
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
  }

  matchesList.forEach(match => {
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "calendar-league1");
    const image = document.createElement("img");
    image.setAttribute("src", match.competition.logo.small);
    imageDiv.appendChild(image);
    listSection.appendChild(imageDiv);

    const competitionName = document.createElement("h2");
    competitionName.innerText = match.competition.name;
    competitionName.setAttribute("class", "competitionName");

    listSection.appendChild(competitionName);
    /////////////Team A
    const firstTeamName = document.createElement("p");
    firstTeamName.innerText = match.team_A_name;
    firstTeamName.setAttribute("class", "firstTeamName");
    listSection.appendChild(firstTeamName);

    const firstTeamImg = document.createElement("img");
    firstTeamImg.setAttribute("src", match.team_A_logo);
    firstTeamImg.setAttribute("class", "firstTeamImg");
    listSection.appendChild(firstTeamImg);

    const firstTeamScore = document.createElement("h2");
    firstTeamScore.innerText = match.fs_A;
    firstTeamScore.setAttribute("class", "firstTeamScore");
    listSection.appendChild(firstTeamScore);
    ////////////Team B

    const secondTeamScore = document.createElement("h2");
    secondTeamScore.innerText = match.fs_B;
    secondTeamScore.setAttribute("class", "secondTeamScore");
    listSection.appendChild(secondTeamScore);

    const secondTeamName = document.createElement("p");
    secondTeamName.innerText = match.team_B_name;
    secondTeamName.setAttribute("class", "secondTeamName");
    listSection.appendChild(secondTeamName);

    const secondTeamImg = document.createElement("img");
    secondTeamImg.setAttribute("src", match.team_B_logo);
    secondTeamImg.setAttribute("class", "secondTeamImg");
    listSection.appendChild(secondTeamImg);

    const matchTimeFinal = document.createElement("p");
    matchTimeFinal.innerText = match.time_utc;
    matchTimeFinal.setAttribute("class", "matchTimeFinal");
    listSection.appendChild(matchTimeFinal);

    imageDiv.appendChild(competitionName);
    imageDiv.appendChild(firstTeamImg);
    imageDiv.appendChild(firstTeamName);
    imageDiv.appendChild(firstTeamScore);
    imageDiv.appendChild(secondTeamScore);
    imageDiv.appendChild(secondTeamImg);
    imageDiv.appendChild(secondTeamName);
    imageDiv.appendChild(matchTimeFinal);
  });
};
var arr;
var h;
var didMount = h => {
  var d = new Date();
  d.setDate(d.getDate() + h);
  console.log(d.getMonth(), "ddddd");
  var yyyy = d.getFullYear();
  var mm = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  var dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  const date = yyyy + "-" + mm + "-" + dd;

  searchRequest(date, (err, data) => {
    arr = data.results;

    updateMatches(data.results);
  });
};

console.log("date", didMount());

const searchYesterdayMatch = document.getElementById("btntom");
searchYesterdayMatch.addEventListener("click", event => {
  event.preventDefault();
  searchRequest(didMount() - 1, (error, matches) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      updateMatches(matches.results);
    }
  });
});

const searchTommorrowMatch = document.getElementById("btnyes");
searchTommorrowMatch.addEventListener("click", event => {
  event.preventDefault();
  searchRequest(didMount() + 1, (error, matches) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      updateMatches(matches.results);
    }
  });
});
