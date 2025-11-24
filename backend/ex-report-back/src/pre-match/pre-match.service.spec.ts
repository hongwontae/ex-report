import { Test, TestingModule } from '@nestjs/testing';
import { PreMatchService } from './pre-match.service';

describe('PreMatchService', () => {
  let service: PreMatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreMatchService],
    }).compile();

    service = module.get<PreMatchService>(PreMatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
