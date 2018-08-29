const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

const pick = collection => collection[randint(0, collection.length - 1)];

const shuffle = arr => {
  for (let i = arr.length, j = Math.floor(Math.random() * --i); i; j = Math.floor(Math.random() * --i)) [arr[i], arr[j]] = [arr[j], arr[i]]
  return arr;
}

window.addEventListener("load", () => {
  let length = 4;
  const alphaDown = "abcdefghijklmnopqrstuvwxyz";
  const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = " !#$%&()*+,-./:;<=>?@[\\]^_{|}~";
  const all = alphaDown + alphaUp + numbers + specials;
  const output = document.getElementById("result");
  document.getElementById("length").addEventListener("change", function(e){
    length = e.target.value;
  });
  document.getElementById("submit").addEventListener("click", function(e){
    e.stopPropagation();
    e.preventDefault();
    passwordBase = [alphaDown, alphaUp, numbers, specials].map(pick);
    while (passwordBase.length < length) passwordBase.push(pick(all));
    output.innerHTML = shuffle(passwordBase).join("");
  });
});
