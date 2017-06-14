export class iRecipe {
    name: string;
    description: string;
    imgUrl: string;

    constructor( name: string, description: string, imgUrl){
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
    }

}