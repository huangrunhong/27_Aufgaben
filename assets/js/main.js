const tall = document.body.querySelector("#tall");

const age = document.body.querySelector("#age");

const breite = document.body.querySelector("#breite");

const schmale = document.body.querySelector("#schmale");

const outputText = document.body.querySelector("#outputText");

const gewichtRechner = () => {
  const weight = (Number(tall.value) - 100 + Number(age.value) / 10) * 0.9;
  if (breite.checked) {
    outputText.textContent = `Dein Idealgewicht ist ${(weight * 1.1).toFixed(
      1
    )} kg.`;
  } else if (schmale.checked) {
    outputText.textContent = `Dein Idealgewicht ist ${(weight * 0.9).toFixed(
      1
    )} kg.`;
  }
};
