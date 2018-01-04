
export class Metric{
    public id: number;
    public name: string;
    public lexicon_name: string;
    public is_featured: boolean;
    public isVisible: boolean;
    public rounding_units: number;
    public sig_figs: number;
    public x: number[];
    public x_Type: string;
    public y: number[];
    public y_Type: string;
    public slideID: number;
    public slideTitle: string;
    public children: number[];
    public hasChildren: boolean;
    public meta: Meta[];
    public checked: boolean;






}
export class Source {
    public agency: string;
    public sources: SourceDetails[];
    public description: string;
    public id: number;
    public name: string;

}

export class SourceDetails {
    public url: string;
    public source: string;

}
export class Meta {
    public type: string;
    public data: string;
}

export class ScrappingMetric {
    public name: string;
    public id: string;
}

export class Profile {
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Password: string;
    public SessionId: string;
    public id: string;
    public key: string;

}

export class SpreadSheet {
    public name: string;
    public id: number;
}
