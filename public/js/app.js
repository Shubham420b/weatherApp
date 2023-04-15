const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const errorPara = document.querySelector("#error");
const messagePara = document.querySelector("#message");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = "/weather?address=" + search.value;

  errorPara.textContent = "Loading...";
  messagePara.textContent = "";
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        errorPara.textContent = data.error;
      } else {
        errorPara.textContent = data.location;
        messagePara.textContent = data.forecast;
      }
    });
  });
});
