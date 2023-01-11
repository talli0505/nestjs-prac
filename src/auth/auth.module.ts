import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserSerivce } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  exports : [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, UserSerivce]
})
export class AuthModule {}
