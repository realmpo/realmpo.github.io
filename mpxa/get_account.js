mpxa = localStorage.getItem("MPX ACCOUNT");
if (mpxa == null) {
  if (!(document.getElementById("MPXADATA") == null)) {
    document.getElementById("MPXADATA").innerHTML = "<meta http-equiv=\"refresh\" content=\"0; url='/mpxa/create'\">"
  };
};
function createMpxAccount()
  mpxa = {username: document.getElementById("CAUSERNAME").value(), country: document.getElementById("CACOUNTRY").value(), totalXp: 0, xS: 10, otherData: {}};
