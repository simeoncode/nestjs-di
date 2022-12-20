import { Injectable } from '@nestjs/common';
import { IAnimalService } from 'src/interfaces/ianimal.service';

@Injectable()
export class Cat implements IAnimalService {
  noise(): string {
    return 'meow';
  }
}
