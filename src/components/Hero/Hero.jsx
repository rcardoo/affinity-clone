import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content container-fluid">
                <h1 className="hero-title text-6xl">Crie <span>livremente</span></h1>
                <p className="hero-subtitle fs-lg">
                    Design profissional, edicao de fotos e layout de paginas no mesmo app.
                </p>
                <div className="hero-btns container-fluid d-flex flex-column sm:flex-row align-items-center gap-4 justify-content-center">
                    <button type="button" className="btn-green btn-solid theme-success w-12">
                        Gratis para pessoa fisica
                    </button>
                    <button type="button" className="btn-white btn-solid w-12">
                        Adquira para empresas
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
