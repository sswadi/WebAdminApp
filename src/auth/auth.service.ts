import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {} //you inject services into contructors in order to be able to use it 

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(username);

        if(user && user.password === password){
            const {password, username, ...rest} = user; //fetching the rest of the data from User object using rest operator
            return rest;
        }

        return null;
    }
}
