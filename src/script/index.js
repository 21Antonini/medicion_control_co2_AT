async function getSheetsData() {
  let url =
    "https://sheets.googleapis.com/v4/spreadsheets/1eDiUovi31jO_3NIx1P-ey4PZ3nz-wvz36D2B7lNWv1A/?key=AIzaSyB535LrZyJwfod0J1mfgd_YCWbgyoh2ZuY&includeGridData=true";
  let response = await axios.get(url);
  let data1 = response.data.sheets[0].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  let data2 = response.data.sheets[1].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  let data3 = response.data.sheets[2].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  let data4 = response.data.sheets[3].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  let data5 = response.data.sheets[4].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  let data6 = response.data.sheets[5].data[0].rowData.filter(
    (element) => element.values.length === 6
  );
  return (fullData = {
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
  });
}

document.addEventListener("DOMContentLoaded", async function DOMCall() {
  slideActive();
  createTable(await getSheetsData());
  let state = setInterval(async function stateWait() {
    ambientState(await getSheetsData());
  }, 2000);
});

createTable = (data, ambiente = "data1") => {
  let fragment = document.createDocumentFragment();
  let contador = 0;
  document.querySelector(".table").innerHTML = "";
  data[ambiente].forEach((e, i) => {
    if (e.values[0].formattedValue === "Dia") {
      return;
    }
    if (data[ambiente].length - 1 > 50) {
      while (contador <= 50) {
        contador++;
        return;
      }
    }

    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    col1.textContent = e.values[0].formattedValue;
    col2.textContent = e.values[1].formattedValue;
    col3.textContent = e.values[2].formattedValue;
    col4.textContent = e.values[3].formattedValue;
    col5.textContent = e.values[5].formattedValue;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    fragment.appendChild(row);
  });
  document.querySelector(".table").appendChild(fragment);
};

slideActive = () => {
  slideButtomState = [
    ["amb1"],
    ["amb2"],
    ["amb3"],
    ["amb4"],
    ["amb5"],
    ["amb6"],
  ];

  activeSeacher = (slideButtomState) => {
    return slideButtomState.forEach((e, i) => {
      slideButtomState[i].push(
        document.getElementById(`amb${i + 1}`).classList[0]
      );
    });
  };
  removeActive = (Actives = activeSeacher(slideButtomState)) => {
    Actives.forEach((e, i) => {
      if (Actives[i][1] === "active") {
        document.getElementById(`${Actives[i][0]}`).classList.remove("active");
      }
      slideButtomState[i].pop();
    });
  };

  document.addEventListener("click", async function clickEvent(e) {
    activeSeacher(slideButtomState);
    if (e.target.innerHTML === "Ambiente 1") {
      document.getElementById("amb1").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data1");
    }
    if (e.target.innerHTML === "Ambiente 2") {
      document.getElementById("amb2").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data2");
    }
    if (e.target.innerHTML === "Ambiente 3") {
      document.getElementById("amb3").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data3");
    }
    if (e.target.innerHTML === "Ambiente 4") {
      document.getElementById("amb4").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data4");
    }
    if (e.target.innerHTML === "Ambiente 5") {
      document.getElementById("amb5").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data5");
    }
    if (e.target.innerHTML === "Ambiente 6") {
      document.getElementById("amb6").classList.add("active");
      removeActive(slideButtomState);
      createTable(await getSheetsData(), "data6");
    }
  });
};

ambientState = (data) => {
  for (lastProperty in data["data1"]);
  if (data["data1"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb1-state").classList.add("error");
  }
  if (data["data1"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb1-state").classList.remove("error");
  }

  for (lastProperty in data["data2"]);
  if (data["data2"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb2-state").classList.add("error");
  }
  if (data["data2"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb2-state").classList.remove("error");
  }

  for (lastProperty in data["data3"]);
  if (data["data3"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb3-state").classList.add("error");
  }
  if (data["data3"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb3-state").classList.remove("error");
  }

  for (lastProperty in data["data4"]);
  if (data["data4"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb4-state").classList.add("error");
  }
  if (data["data4"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb4-state").classList.remove("error");
  }

  for (lastProperty in data["data5"]);
  if (data["data5"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb5-state").classList.add("error");
  }
  if (data["data5"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb5-state").classList.remove("error");
  }

  for (lastProperty in data["data6"]);
  if (data["data6"][`${lastProperty}`].values[2].formattedValue === "error") {
    document.getElementById("amb6-state").classList.add("error");
  }
  if (data["data6"][`${lastProperty}`].values[2].formattedValue === "ok") {
    document.getElementById("amb6-state").classList.remove("error");
  }
};
