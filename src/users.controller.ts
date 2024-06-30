import {Controller, Get, Inject, Injectable} from '@nestjs/common';
//import {DATABASE_Name} from './app.module';

@Controller('/users')
export class Userscontroller{
    constructor(@Inject('Names') private name: string[]){
        //console.log(this.dbname);
        console.log(this.name); 
    }
    
}
