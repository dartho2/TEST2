export interface AppModel {

    name: string,
    label: string,
    sections: Sections[]
    type: string;
    data: Data[];
    style: Style[]
    

}
export interface Sections{
    name: string;
    appmodel: AppModel[];
    data: Data[];
}
export interface Data{
    name: string;
    type: string;
    
}
export interface Style{
    color: Colors[];
    colors: string;
}
export interface Colors {
    primary: string;
    secondary: string;
}