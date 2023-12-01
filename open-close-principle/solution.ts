import axios from 'axios';


//here we have a class that handles axios and if something changes you only have to modify http client
class HTTPClient {
    async get(url){
        const { data } = await axios.get(url);

        return data
    }
}

export class TodoService { 

    constructor(private http:HTTPClient){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(private http:HTTPClient){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(private http:HTTPClient){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}
