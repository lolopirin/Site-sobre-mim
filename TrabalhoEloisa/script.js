function mostrarItem(item, tipoConteudo) {
    const exibicaoTexto = document.getElementById("exibicaoTexto");
    const galeria = document.getElementById("galeria");
  
    if (tipoConteudo === "galeria") {
      exibicaoTexto.style.display = "none";
      galeria.style.display = "flex";
    } else {
      exibicaoTexto.style.display = "flex";
      galeria.style.display = "none";
    }
  }
  