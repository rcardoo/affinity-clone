import "./About.css"
import img_about from "../../assets/img_about.png";
import img_about2 from "../../assets/img_about2.png";
import img_about3 from "../../assets/img_about3.png";

function About() {
    return (
        <section className="about container-fluid">
            <div className="about-content container-fluid w-auto">
                <h1 className="about-title text-4xl w-75">
                    Chega de ficar trocando de aplicativo
                </h1>
                <p className="about-subtitle fs-lg w-80 h-50">
                    Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso.
                </p>
            </div>
            <div className="about-content-imagens container-fluid w-auto">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="tab" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Vector</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="tab" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pixel</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="tab" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Layout</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <img src={img_about} alt="" className="img-fluid" />
                    </div>
                    <div className="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <img src={img_about2} alt="" className="img-fluid" />
                    </div>
                    <div className="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <img src={img_about3} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="about-content-feedback container-fluid w-auto fs-3xl">
                <p>"O Affinity deixa a gente se concentrar no trabalho. Ter edição de fotos, vetores e layout em um único app significa menos trocas, menos interrupções e mais tempo dedicado a projetar e criar os detalhes que fazem a diferença.."</p>
            </div>
        </section>
    );
}

export default About;
