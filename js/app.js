const app = new Framework7({
  el: '#app',
  name: 'Mi App',
  id: 'com.miempresa.miapp',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
  ],
});