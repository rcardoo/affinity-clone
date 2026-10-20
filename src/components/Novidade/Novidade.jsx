import "./Novidade.css"

import novidade from "../../assets/novidade.png"
import novidade2 from "../../assets/novidade2.png"

function Novidade() {
    return (
        <section className="novidade container-fluid">
            <div className="novidade-content container-fluid w-auto">
                <h1 className="novidade-title text-4xl w-75">
                    Acabou de sair
                </h1>
                <p className="novidade-subtitle fs-lg w-80 h-50">
                    Com base nos seus comentários, essas novidades já estão causando impacto.
                </p>
            </div>
            <div className="novidade-content-imagens container-fluid w-auto">
                <figure className="figure">
                    <a href="#">
                        <img src={novidade} className="img-fluid rounded-3" alt="Novidade 1" />
                    </a>
                </figure>
                <figure className="figure">
                    <a href="#">
                        <img src={novidade2} className="img-fluid rounded-3" alt="Novidade 2" />
                    </a>
                </figure>
            </div>
        </section>
    );
}

export default Novidade;
