import { Test, TestingModule } from '@nestjs/testing';
import { Dog } from './dog';

describe('Dog', () => {
  let provider: Dog;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Dog],
    }).compile();

    provider = module.get<Dog>(Dog);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
