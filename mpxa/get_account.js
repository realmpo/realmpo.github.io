mpxa = localStorage.getItem("MPX ACCOUNT");
if (mpxa == null) {
  if (document.getElementById("MPXADATA") == null) {
    window.location.href = `/mpxa/create`;
  };
};
function createMpxAccount() {
  mpxa = {username: document.getElementById("CAUSERNAME").value(), country: document.getElementById("CACOUNTRY").value(), country: document.getElementById("CAPASSWORD"), totalXp: 0, xS: 10, otherData: {}};
  window.location.href = `/mpxa/`;
}