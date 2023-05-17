const msubmitButton = document.getElementById("mobitelsubmitButton");
msubmitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const mreloadCard = document.getElementById("mobitelreload-card").value;
  const mussdCode = `*102*${mreloadCard}#`;
  
  window.location.href = `tel:${mussdCode}`;
});
