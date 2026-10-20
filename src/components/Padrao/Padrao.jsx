import "./Padrao.css"

function Padrao() {
    return (
        <section className="padrao-container container-fluid">
            <div
                id="carouselMultiple"
                className="carousel slide container-fluid"
                data-bs-ends="stop"
                style={{ "--bs-carousel-items": 3, "--bs-carousel-items-gap": "1rem" }}
            >
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fs-4xl padrao-titulo">O novo padrão</h5>

                    <div>
                        <button
                            className="btn-icon btn-sm"
                            type="button"
                            data-bs-target="#carouselMultiple"
                            data-bs-slide="prev"
                            style={{ "--bs-carousel-control-icon-width": "1rem" }}
                        >
                            <span className="carousel-icon-prev" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button
                            className="btn-icon btn-sm"
                            type="button"
                            data-bs-target="#carouselMultiple"
                            data-bs-slide="next"
                            style={{ "--bs-carousel-control-icon-width": "1rem" }}
                        >
                            <span className="carousel-icon-next" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 1" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 2" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 3" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 4" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 5" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 6" /></div>
                    <div className="carousel-item"><img src="https://placehold.co/320x400" className="d-block w-100 rounded-5" alt="Slide 7" /></div>
                </div>
            </div>
        </section>
    );
}

export default Padrao;
