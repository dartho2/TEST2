export interface AppModel {

    data: [{
        type: string;
    }];
    type: string;
    name: string;
    image: string;
    image_top: string;
    label: string;
    style: {
        colors: {
            primary: string;
            secondary: string;
        }
    };
    sections: [{
        name: string;
        label: string;
        data: [{
            type: string;
            styles: [{
                image_right: string;
                image_small: string;
            }],
            content: {
                title: string;
                lead: string;
                text: string;
            }
        }]
    }];
}