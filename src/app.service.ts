import { Injectable } from '@nestjs/common';
import { IAnimalService } from './interfaces/ianimal.service';

@Injectable()
export class AppService {
  constructor(private animalService: IAnimalService) {}

  getNoise(): string {
    return this.animalService.noise();
  }
}
