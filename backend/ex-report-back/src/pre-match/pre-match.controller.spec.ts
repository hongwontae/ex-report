import { Test, TestingModule } from '@nestjs/testing';
import { PreMatchController } from './pre-match.controller';

describe('PreMatchController', () => {
  let controller: PreMatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreMatchController],
    }).compile();

    controller = module.get<PreMatchController>(PreMatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
