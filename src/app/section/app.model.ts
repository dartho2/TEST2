export interface SectionModel {
    yoga: {
        yoga: {
            labels: string,
            sections: [{
                name: string,
                label: string,
                data: [{
                    type: string
                }]
            }]
        },
        fitness: {
            labels: string,
            sections: [{
                name: string,
                label: string,
                data: [{
                    type: string
                }]
            }]
        },
        id: string
    }
}