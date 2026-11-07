const form = document.getElementById("personForm");
const resultBox = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const civilite = formData.get("civilite");
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const telephone = formData.get("telephone");
    const dateNaissance = formData.get("dateNaissance");
    const sexe = formData.get("sexe");
    const adresse = formData.get("adresse");
    const ville = formData.get("ville");
    const codePostal = formData.get("codePostal");

    if (
      !civilite ||
      !nom ||
      !prenom ||
      !email ||
      !telephone ||
      !dateNaissance ||
      !sexe ||
      !adresse ||
      !ville ||
      !codePostal
    ) {
      resultBox.textContent = "Veuillez remplir tous les champs du formulaire.";
      resultBox.classList.add("visible");
      return;
    }

    resultBox.innerHTML = `
      <strong>Formulaire enregistré avec succès !</strong><br>
      <span>${civilite} ${prenom} ${nom}</span><br>
      <span>Email : ${email}</span><br>
      <span>Téléphone : ${telephone}</span><br>
      <span>Adresse : ${adresse}, ${codePostal} ${ville}</span>
    `;
    resultBox.classList.add("visible");
    form.reset();
  });
}
