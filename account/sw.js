// sw.js
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : { title: "Hello", body: "New Update!" };

  const options = {
    body: data.body,
    icon: "/icon.png",
    badge: "/badge.png" // Monochromatic icon for mobile status bars
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle what happens when they click the background alert
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://mywebsite.com")
  );
});
