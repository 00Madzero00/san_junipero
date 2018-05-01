export interface IEvent {
    id: number;
    type: string;
    uri: string;
    displayName: string;
    start: IStart;
    performace: IskPerformance[];
    location: ILocation;
}

export interface IStart {
    time: string;
    date: string;
    datetime: string;
}

export interface IskPerformance {
    artist: IArtist;
}

export interface IArtist {
    id: number;
    displayName: String;
    uri: String;
    identifier: IMBIdentity[];
    onTourUntil: string;
}

export interface IMBIdentity {
    href: string;
    mbid: string;
}

export interface ILocation {
    city: string;
    lat: number;
    lng: number;
}

export interface IVenue {
    id: number;
    displayName: string;
    uri: string;
    city: ICity;
    lat: number;
    lng: number;
    street: string;
    zip: string;
    phone: string;
    website: string;
    capacity: number;
    description: string;
    metroArea: ICity;
}

export interface ICity {
    id: number;
    uri: string;
    displayName: string;
    country: { displayName: string };
}
