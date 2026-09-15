document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('notice').textContent =
    'Démo visuelle uniquement : aucune donnée n’est transmise ou enregistrée.';
});
