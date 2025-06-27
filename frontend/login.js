const select = document.getElementById("var");
const schoolBox = document.getElementById("school-box");
select.addEventListener("change", function () {
  if (this.value === "studant") {
    schoolBox.style.display = "block";
    schoolBox.querySelector("input").required = true;
  } else {
    schoolBox.style.display = "none";
    schoolBox.querySelector("input").required = false;
  }
});

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const nome = document.getElementById("name").value.trim();
    const tipo = document.getElementById("var").value;
    const escola = document.getElementById("escholl").value.trim();

    if (!nome) {
      alert("Informe seu nome.");
      return;
    }
    if (tipo === "studant" && !escola) {
      alert("Informe sua escola.");
      return;
    }

    const email = `${nome.replace(/\s/g, "").toLowerCase()}@quiz.com`;
    const senha = "senha123";

    try {
      // Tenta registrar
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          senha,
          telefone: "",
          tipo,
          escola: tipo === "studant" ? escola : "",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem(
          "usuarioLogado",
          JSON.stringify({
            nome,
            tipo,
            escola: tipo === "studant" ? escola : "",
          })
        );
        window.location.href = "./areaQuiz/home.html";
      } else if (data.error === "Usuário já cadastrado.") {
        // Se já cadastrado, faz login
        const loginRes = await fetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        });
        const loginData = await loginRes.json();
        if (loginRes.ok) {
          sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify({
              nome,
              tipo,
              escola: tipo === "studant" ? escola : "",
            })
          );
          window.location.href = "./areaQuiz/home.html";
        } else {
          alert(loginData.error || "Erro ao fazer login.");
        }
      } else {
        alert(data.error || "Erro ao registrar usuário.");
      }
    } catch (err) {
      alert("Erro de conexão com o servidor.");
    }
  });

if (sessionStorage.getItem("usuarioLogado")) {
  window.location.href = "./areaQuiz/home.html";
}
