export interface AppModel {

    name: string,
    labels: string,
    sections: [{
        name: string,
        label: string,
        data: [{
            type: string
            content: [{
                title: string
            }]
        }]
    }]


}