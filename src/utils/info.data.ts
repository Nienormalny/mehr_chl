export const infoBoxData: InfoBoxDataType[] = [
    {
        title: "Böse Überraschungen am Bahnsteig gehören ab sofort der Vergangenheit an.",
        description: "Denn zuginfo.nrw versorgt Sie mit Neuigkeiten direkt aus der Betriebszentrale der Deutschen Bahn, von wo aus der gesamte Schienenverkehr in NRW gesteuert wird.",
        iconUrl: "assets/icons/icon-clock.svg",
    },
    {
        title: "Ob Schneesturm, Zugüberholung oder hohes Fahrgastaufkomme",
        description: "Sobald eine Störung im Betriebsablauf auftritt, erhalten Sie unverzüglich eine Nachricht auf Ihr Endgerät.",
        iconUrl: "assets/icons/icon-warning.svg",
    },
    {
        title: "Passende Ausweichempfehlung liefert zuginfo.nrw in der Regel direkt mit.",
        description: "So kommen Sie trotz Verspätung oder Zugausfall ans Ziel.",
        iconUrl: "assets/icons/icon-shuffle.svg",
    }
]

export type InfoBoxDataType = {
    title: string;
    description: string;
    iconUrl: string;
}

export const getInfoBoxData = ():InfoBoxDataType[] => infoBoxData;