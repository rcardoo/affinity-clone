import { GoArrowUpRight } from "react-icons/go";
import "./Footer.css";

const colunas = [
    {
        titulo: "Produto",
        links: [
            { texto: "Obtenha o Affinity" },
            { texto: "Design gráfico" },
            { texto: "Edição de fotos" },
            { texto: "Layout de página" },
            { texto: "Ilustração digital" },
            { texto: "Design tipográfico" },
            { texto: "Integrações do Canva" },
            { texto: "Integrações de produtos" },
        ],
    },
    {
        titulo: "Descubra",
        links: [
            { texto: "Inspiracao.af" },
            { texto: "Em destaque" },
            { texto: "Recursos de aprendizado" },
            { texto: "Comparativo: Affinity x Adobe" },
            { texto: "Imprensa", externo: true },
        ],
    },
    {
        titulo: "Ajuda",
        links: [
            { texto: "Central de Ajuda" },
            { texto: "Affinity V2", externo: true },
            { texto: "Conta Affinity V2", externo: true },
            { texto: "Atualização de setembro de 2026" },
            { texto: "Notas de versão" },
        ],
    },
    {
        titulo: "conectar",
        links: [
            { texto: "Sobre" },
            { texto: "Carreiras", externo: true },
            { texto: "Fale com a equipe de vendas", externo: true },
        ],
    },
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row gy-5">
                    {colunas.map((coluna) => (
                        <div className="col-6 md:col-3" key={coluna.titulo}>
                            <h6 className="footer-titulo fw-semibold mb-3">{coluna.titulo}</h6>
                            <ul className="list-unstyled mb-0">
                                {coluna.links.map((link) => (
                                    <li className="mb-2" key={link.texto}>
                                        <a
                                            href="#"
                                            className="footer-link"
                                            {...(link.externo && { target: "_blank", rel: "noopener noreferrer" })}
                                        >
                                            {link.texto}
                                            {link.externo && <GoArrowUpRight className="footer-icone" aria-hidden="true" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
