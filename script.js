function proximaTela(idProximaTela) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.add("escondida");
    });

    const proxima = document.getElementById(idProximaTela);

    if (proxima) {
        proxima.classList.remove("escondida");
        window.scrollTo(0, 0);
    }
}
