// script.js

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCltrA_S1nLluibGa8lwfsHnlz5VuGFJCw",
  authDomain: "shortify-74f0f.firebaseapp.com",
  projectId: "shortify-74f0f",
  storageBucket: "shortify-74f0f.firebasestorage.app",
  messagingSenderId: "225477634420",
  appId: "1:225477634420:web:7a491cee660a32f340e421",
  measurementId: "G-N45JDYH99K"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

// Botones
const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const welcomeText = document.getElementById("welcome-text");

// Manejar inicio de sesión con Google
loginButton.addEventListener("click", async () => {
  const provider = new firebase.GoogleAuthProvider();
  try {
    const result = await firebase.signInWithPopup(auth, provider);
    const user = result.user;
    welcomeText.textContent = `Bienvenido, ${user.displayName}!`;
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
});

// Manejar cierre de sesión
logoutButton.addEventListener("click", async () => {
  try {
    await firebase.signOut(auth);
    welcomeText.textContent = "Inicia sesión para acceder a tus videos y música favoritos.";
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
});
