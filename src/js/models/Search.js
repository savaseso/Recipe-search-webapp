import axios from 'axios';
export default class Search {
    constructor(query){
        this.query=query;
    }



    async getResults (query){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'c0ab4c0e9e65be51ec0a8da0e26db4af';
        try{
            const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
           // console.log(this.result);
        }catch (error){
            alert(error);
        }
    }
}
