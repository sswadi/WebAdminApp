import { Injectable } from '@nestjs/common';
export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
    type: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [ //User[] represnts array of users object with fields id,name,password, username,type
        {
            id: 1,
            name: 'swati',
            username: 'swati',
            password: 'swati123',
            type: 'powerUser',
        },
        {
            id: 2,
            name: 'mark',
            username: 'mark',
            password: 'mark123',
            type: 'superAdmin',
        },
        {
            id: 3,
            name: 'chris',
            username: 'chris',
            password: 'chris123',
            type: 'admin',
        },
        {
            id: 4,
            name: 'paul',
            username: 'paul',
            password: 'paul123',
            type: 'user',
        },
        {
            id: 5,
            name: 'phil',
            username: 'phil',
            password: 'phil123',
            type: 'supportDesk',
        },
    ];

    async findOne(username : string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
