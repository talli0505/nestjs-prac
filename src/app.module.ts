import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/entity/cats.entitiy';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      // entity만들고 그걸 여기에 대입 -> typeorm에서 cat사용 가능
      entities: [Cat],
      // 엔터티 만들고나면 테이블을 자동으로 생성해주는 옵션이므로 개발에서만 사용
      synchronize: true,
    }),
    CatsModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
