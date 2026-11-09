(() => {
  const output = document.getElementById("blocked-domain");
  if (!output) return;

  // Recebe somente um nome de host em ?domain=; nunca navega para esse valor.
  const params = new URLSearchParams(window.location.search);
  const candidate = (params.get("domain") || "").trim().toLowerCase();

  const validHost =
    candidate.length <= 253 &&
    /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(?:\.(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?))*$/.test(candidate);

  output.textContent = validHost ? candidate : "Não informado";
})();
