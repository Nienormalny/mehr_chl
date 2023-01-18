import React, { useState } from 'react';
import InfoCard from '../../../components/info-card.component';
import { getInfoBoxData, InfoBoxDataType } from '../../../utils/info.data';

const InfoSection = () => {
    const [infosData, setInfosData] = useState<InfoBoxDataType[]>(getInfoBoxData);
    return <section id="info">
        <img src={`assets/images/infobox-lg.jpg`} alt="Ingormation box" className="info-cover"/>
        <h2 className="info-section-title">Wir melden Verspätungen - <br/> bevor es zu spät ist.</h2>
        <div className="informations-container">
            {infosData.map((info: InfoBoxDataType, key: number) => {
                console.log(info);
                return <InfoCard {...info} key={key}/>
            })}
        </div>
    </section>
}

export default InfoSection;