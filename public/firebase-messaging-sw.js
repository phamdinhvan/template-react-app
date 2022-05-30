// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js'
)

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDICVLbPeeqdEQVFsSzyBPgZjKpjJNtj08",
  authDomain: "digifarm-555cf.firebaseapp.com",
  projectId: "digifarm-555cf",
  storageBucket: "digifarm-555cf.appspot.com",
  messagingSenderId: "466815016937",
  appId: "1:466815016937:web:ac3aefb3e188a8d8b4f578",
  measurementId: "G-84KBXEQSPW"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});