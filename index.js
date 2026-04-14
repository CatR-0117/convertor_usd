const usdInput = document.getElementById("usd");
const mntInput = document.getElementById("mnt");
const rateText = document.getElementById("rateText");

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedText = document.getElementById("selectedText");
const logo = document.getElementById("logo");
let rate = 3550;
dropdownBtn.onclick = () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
};
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.onclick = () => {
    selectedText.textContent = item.textContent.trim();
    logo.src = item.querySelector("img").src;
    rate = Number(item.dataset.rate);

    dropdownMenu.style.display = "none";
    convert();
  };
});
function convert() {
  const usd = parseFloat(usdInput.value) || 0;
  mntInput.value = (usd * rate).toFixed(2);
  rateText.textContent = rate;
}
usdInput.addEventListener("input", convert);
convert();
