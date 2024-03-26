const User=require('../models/user');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{
    constructor(){
        super();
        this.model=User;
    }
    async create(data){
        try {
            const user =await User.create(data);
            return user;
        } catch (error) {
            console.log(error)
        }
    }

   
}

module.exports = UserRepository;