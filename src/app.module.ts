import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat } from './providers/cat/cat';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // Cat,
    // Dog,
    { provide: 'IAnimalService', useClass: Cat },
  ],
})
export class AppModule {}
