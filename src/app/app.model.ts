export interface AppModel {

    name: string,
    label: string,
    sections: Sections[]
    

}
export interface Sections{
    name: string;
    appmodel: AppModel[];
}