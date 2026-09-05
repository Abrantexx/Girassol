function proximaTela(idProximaTela) {
    const proxima = document.getElementById(idProximaTela);
    
    if (proxima) {
        // Revela a tela tirando a classe escondida
        proxima.classList.remove("escondida");
        
        // Rola até ela suavemente
        setTimeout(() => {
            proxima.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}