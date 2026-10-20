import "./Inspiracao.css"

function Inspiracao() {
    return (
        <section className="inspiracao-container container-fluid">
            <div
                id="carouselInspiracao"
                className="carousel carousel-auto slide"
                data-bs-ends="stop"
                style={{ "--bs-carousel-items-gap": "1rem" }}
            >
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fs-4xl padrao-titulo">Inspiração.af</h5>
                    <div>
                        <button
                            className="btn-icon btn-sm"
                            type="button"
                            data-bs-target="#carouselInspiracao"
                            data-bs-slide="prev"
                            style={{ "--bs-carousel-control-icon-width": "1rem" }}
                        >
                            <span className="carousel-icon-prev" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="btn-icon btn-sm"
                            type="button"
                            data-bs-target="#carouselInspiracao"
                            data-bs-slide="next"
                            style={{ "--bs-carousel-control-icon-width": "1rem" }}
                        >
                            <span className="carousel-icon-next" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active container-fluid" style={{ width: "400px" }}>
                        <figure className="m-0">
                            <img src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
                            <a href="" className="link-texto">

                                <figcaption className="figure-caption fs-2xl figure-texto">Novidades no Affinity: Ferramenta Mesclagem, scripts e mais de 60 atualizações</figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="carousel-item active container-fluid" style={{ width: "400px" }}>
                        <figure className="m-0">
                            <img src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
                            <a href="" className="link-texto">

                                <figcaption className="figure-caption fs-2xl figure-texto">Design de grade para layouts editoriais e de sites</figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="carousel-item active container-fluid" style={{ width: "400px" }}>
                        <figure className="m-0">
                            <img src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
                            <a href="" className="link-texto">

                                <figcaption className="figure-caption fs-2xl figure-texto">Dê uma olhada nas obras de arte que aparecem no banner da nossa página inicial</figcaption>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inspiracao;
