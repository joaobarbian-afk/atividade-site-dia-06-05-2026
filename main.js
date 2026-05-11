import { db } from "./FirebaseConfig.js";
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

// SALVAR
window.salvar = function () {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const presente = document.getElementById("presente").value;

  if (!nome || !data) {
    alert("Preencha nome e data!");
    return;
  }

  push(ref(db, "aniversarios"), {
    nome,
    data,
    presente
  });
};

// MOSTRAR ORDENADO
const lista = document.getElementById("lista");

onValue(ref(db, "aniversarios"), (snapshot) => {
  lista.innerHTML = "";

  const dados = snapshot.val();
  if (!dados) return;

  const hoje = new Date();

  let pessoas = [];

  for (let id in dados) {
    const p = dados[id];

    let dataAniv = new Date(p.data);

    // Ajusta para este ano
    dataAniv.setFullYear(hoje.getFullYear());

    // Se já passou, joga pro próximo ano
    if (dataAniv < hoje) {
      dataAniv.setFullYear(hoje.getFullYear() + 1);
    }

    pessoas.push({
      ...p,
      proximaData: dataAniv
    });
  }

  // 🔥 Ordena pelo mais próximo
  pessoas.sort((a, b) => a.proximaData - b.proximaData);

  // MOSTRA
  pessoas.forEach((p) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${p.nome}</strong><br>
      📅 ${p.data}<br>
      🎁 ${p.presente || "Sem presente"}
    `;

    lista.appendChild(li);
  });
});