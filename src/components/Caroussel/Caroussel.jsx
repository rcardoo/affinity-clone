import "./Caroussel.css"

function Caroussel() {
    return (
        <section className="brands">
            <div className="brands-scroll">
                <div className="brands-list d-flex flex-row align-items-center">

                    <p>WPP</p>
                    <p>Nike</p>
                    <p>Adidas</p>
                    <p>Coca-Cola</p>
                    <p>Samsung</p>
                    <p>Spotify</p>
                    <p>Netflix</p>
                    <p>Airbnb</p>
                    <p>Uber</p>

                    <p aria-hidden="true">WPP</p>
                    <p aria-hidden="true">Nike</p>
                    <p aria-hidden="true">Adidas</p>
                    <p aria-hidden="true">Coca-Cola</p>
                    <p aria-hidden="true">Samsung</p>
                    <p aria-hidden="true">Spotify</p>
                    <p aria-hidden="true">Netflix</p>
                    <p aria-hidden="true">Airbnb</p>
                    <p aria-hidden="true">Uber</p>

                </div>
            </div>
        </section>
    );
}

export default Caroussel;
