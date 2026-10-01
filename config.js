// config.js – Firebase-Zugang (Projekt „lern-deutsch-arash“, Realtime Database)
// Dasselbe Projekt und dasselbe Konto wie Liga-Konsole und Deutschtest.
// Zum Ausprobieren ohne Firebase: an jede Adresse ?demo anhängen (alles bleibt im eigenen Browser).

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBDChXlm34Kr7Gg0Dw458GiiwoLnWJAnxM",
  authDomain: "lern-deutsch-arash.firebaseapp.com",
  databaseURL: "https://lern-deutsch-arash-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lern-deutsch-arash",
  storageBucket: "lern-deutsch-arash.firebasestorage.app",
  messagingSenderId: "845503292114",
  appId: "1:845503292114:web:f76ab5fcde1e978d00c30b"
};

// Nur dieses Konto darf in die Konsole
export const ADMIN_UID = "YbTFy3hq7TYGReXHi2jRRQjjDUp1";

// Alle Daten der Übungszentrale liegen in der Datenbank unter diesem Knoten
export const ROOT = "uebungen";
