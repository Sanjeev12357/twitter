class CrudRepository{
    constructor(model){
        this.model=model;
   }

   async create(data){
     try {
        return await this.model.create(data);
     } catch (error) {
        console.log(error)
     }
   }

   async destroy(id){
    try {
        const result = await this.model.findByIdAndDelete(id);
        return result
    } catch (error) {
        console.log(error)
    }
   }

   async get(id){
    try {
        return await this.model.findById(id);   
   }catch(error){
         console.log(error) 
   }
}

    async getAll(){
        try {
            return await this.model.find({});
        } catch (error) {
            console.log(error)
        }
    }   

    async update(id,data){
        try {
            return await this.model.findByIdAndUpdate(id,data,{new:true});  
        }catch(error){
            console.log(error)
        }
    }
}
    
    module.exports=CrudRepository;