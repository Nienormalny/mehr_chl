import React from "react";

const StoreSection = () => {
    return <section id="store">
        <div className="store-details-container">
            <h1 className="store-title">So <span className="sp-color">einfach</span><br/> behalten Sie Ihre<br/> Linie <span className="sp-color">im Blick</span></h1>
            <p className="store-description">Für regelmäßige Updates per E-Mail benötigen Sie lediglich eine gültige E-Mail-Adresse. Die App Notify ist kostenfrei – eine Registrierung oder das Anlegen eines Nutzerkontos sind nicht nötig. Die App gibt es für iOS-Nutzer und Android-Nutzer. Unser Web-Push-Service wird von Browser X, Browser Y sowie Browser Z unterstützt.</p>
            <div className="store-group-btn">
                <img src="assets/icons/icon-store-apple.svg" alt="Apple Store"/>
                <img src="assets/icons/icon-store-google.svg" alt="Google Store"/>
            </div>
        </div>
        <div className="store-slider">SLIDER</div>
    </section>
}

export default StoreSection;