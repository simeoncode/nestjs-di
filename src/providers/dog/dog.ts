import { Injectable } from '@nestjs/common';
import { IAnimalService } from 'src/interfaces/ianimal.service';

@Injectable()
export class Dog implements IAnimalService {
  noise(): string {
    return 'woff';
  }
}
