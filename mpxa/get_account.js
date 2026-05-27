mpxa = localStorage.getItem("MPX ACCOUNT");
if (mpxa == null) {
  if (document.getElementById("MPXADATA") == null) {
    window.location.href = `/mpxa/create`;
  };
};
function createMpxAccount() {
  // HTML: <input type="file" id="imageInput" />

  document.getElementById('imageInput').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      
      reader.onload = function(e) {
          const base64String = e.target.result;
          console.log(base64String); // Contains data:image/png;base64,...
      };

      reader.readAsDataURL(file);
  });
const PROJECT_REF = "rrxxnrhjdfkkzkggyuby";
const ANON_KEY = "sb_publishable_8otqa5vZveDxDRa..."; // Use your actual full key
const TABLE_NAME = "profiles"; // Replace with your actual table name

  document.getElementById('profileForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;

    try {
      const response = await fetch(`https://${PROJECT_REF}.supabase.co/rest/v1/${TABLE_NAME}`, {
        method: "POST",
        headers: {
          "apikey": ANON_KEY,
          "Authorization": `Bearer ${ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation" // Tells Supabase to return the inserted data
        },
        body: JSON.stringify({ username, bio })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to insert data");

      alert("User data added successfully!");
      console.log(data);
    } catch (error) {
      alert("RLS Error or Request Failed: " + error.message);
    }
  });
  window.location.href = `/mpxa/`;
}