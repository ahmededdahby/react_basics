//this is used to create va generic reusable api service to work with any provided endpoint
import ApiClient from "./ApiClient";

interface Entity{
    id:number
}
class httpService{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    GetAll <T>() {
        //clean up function in case the user doesnt want to wait the request
        const controller = new AbortController;
        const result = ApiClient
            .get<T>(this.endpoint, { signal: controller.signal })
        
        return {result, cancel : ()=>{controller.abort()}}
    }
    Delete(id : number) {
        return ApiClient.delete(this.endpoint + "/"+ id)
    }
    Create<T>(entity: T) { 
        return ApiClient.post(this.endpoint, entity);
    }
    update<T extends Entity>(entity: T) { 
        return ApiClient.patch(this.endpoint+"/"+entity.id, entity)
    }
}
const create = (endpoint: string) => new httpService(endpoint);
export default create