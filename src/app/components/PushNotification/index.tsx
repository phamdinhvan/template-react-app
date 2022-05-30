/* eslint-disable react-hooks/exhaustive-deps */
import { getMessaging } from "@firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";

//CONFIG FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const PushNotification: React.FC = () => {
  const [isTokenFound, setTokenFound] = useState(false);

  /* Firebase web 9 */

  const messaging = getMessaging(app);

  useEffect(() => {
    async function fetchData() {
      //registration
      await navigator.serviceWorker.ready;
    }
    fetchData();
  }, []);

  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
    });
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          setTokenFound(true);
          // Send the token to your server and update the UI if necessary
          localStorage.setItem("firebaseToken", currentToken);
        } else {
          // Show permission request UI
          console.log("No registration token available. Request permission to generate one.");
        }
      })
      .catch((err) => {
        // enqueueSnackbar("Vui lòng bật thông báo!", {
        //   variant: "error",
        //   preventDuplicate: true,
        // });

        console.log("An error occurred while retrieving token. ", err);
      });
  }, [messaging]);

  useEffect(() => {
    !isTokenFound &&
      setTimeout(() => {
        //do something
      }, 200);
  }, [messaging]);

  return <div className="badge-noti"></div>;
};

export default PushNotification;
