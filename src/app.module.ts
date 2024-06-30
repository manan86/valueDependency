import { Module } from '@nestjs/common';
import { Userscontroller } from './users.controller';

@Module({
  imports: [],
  controllers: [Userscontroller],
  providers: [{provide: 'DATABASE_Name', useValue: 'Manan'}, 
              {provide: 'Names', useValue: ['Manan Gandhi','Disha Patel']}],
  
})
export class AppModule {}
