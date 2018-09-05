export interface AppModel {
  name: string;
  label: string;
  sections: Sections[];
  type: string;
  data: Data[];
}

export interface Sections {
  name: string;
  appmodel: AppModel[];
  data: Data[];
}

export interface Data {
  name: string;
  type: string;
}
