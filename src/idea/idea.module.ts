import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IdeaController } from './idea.controller';
import { IdeaEntity } from './idea.entity';
import { IdeaService } from './idea.service';

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity])],  // imports: [TypeOrmModule.forFeature([Entity1, Entity2]), //This will use default connection

  controllers: [IdeaController],
  providers: [IdeaService],
})
export class IdeaModule {}
