
export class Metric{
    public id: number;
    public name: string;
    public lexicon_name: string;
    public isFeatured: boolean;
    public isVisible: boolean;
    public rounding_units: number;
    public sig_figs: number;
    public x: number[];
    public x_Type: string;
    public y: number[];
    public y_Type: string;
    public slidID: number;
    public slideTitle: string;
    public children: number[];
    public hasChildren: boolean;






}
export class Source {
    public agency: string;
    public source: string;
    public SourceURL: string;

}
