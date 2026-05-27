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
    const ANON_KEY = "sb_publishable_8otqa5vZveDxDRaVCV1wOg_i3A5sVPI"; // Ensure this is your full key
    const TABLE_NAME = "Meower-ProX Accounts (MAIN)"; // Replace with your exact table name if different

    document.getElementById('registrationForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('CAUSERNAME').value;
      const display_name = document.getElementById('CADNAME').value;
      const password = document.getElementById('CAPASSWORD').value;

      // 1. Grab the value from your form input
      const profilePicInput = document.getElementById('CAPFP').value.trim();

      // 2. Build your base required payload
      const payload = {
        username: username,
        display_name: display_name,
        password: password
      };

      // 3. Only append the property if the user actually provided a custom value
      if (profilePicInput !== "") {
        payload.profile_picture = profilePicInput;
      }

      // If profilePicInput is empty, payload.profile_picture stays undefined.
      // Supabase will see the column is missing and apply your default link automatically!

      try {
        const response = await fetch(`https://${PROJECT_REF}.supabase.co/rest/v1/${TABLE_NAME}`, {
          method: "POST",
          headers: {
            "apikey": ANON_KEY,
            "Authorization": `Bearer ${ANON_KEY}`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Database insert failed");
        }

        alert("User successfully added!");
        console.log("Created Row Data:", data);
        document.getElementById('registrationForm').reset();

      } catch (error) {
        alert("Error adding user: " + error.message);
        console.error("Full error details:", error);
      }
    });
  window.location.href = `/mpxa/`;
}