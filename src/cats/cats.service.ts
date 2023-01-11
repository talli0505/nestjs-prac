import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entitiy';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class CatsService {
  // 이렇게 하면 cat의 엔터티를 사용할수있음
  constructor(
    @InjectRepository(Cat)
    private catsRepository : Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catsRepository.findOne({ where: { id } });
}

  async create(cat: Cat): Promise<void> {
    await this.catsRepository.save(cat);
  }

  async remove(id: number) : Promise<void> {
    await this.catsRepository.delete(id);
  }

  async update(id:number, cat: Cat) : Promise<void> {
    const existedCat = await this.findOne(id);

    if(existedCat) {
      // await this.catsRepository
      // .createQueryBuilder('cat')
      // // 앞에 id는 접근한 id를 따라 써야함..
      // .where("cat.id = :id", {id})
      // .update({
      //   name : cat.name,
      //   age : cat.age,
      //   breed : cat.breed
      // })
      // .execute();

      // 간단한 문법 
      await this.catsRepository.update(id, 
        {
        name : cat.name,
        age : cat.age,
        breed : cat.breed}
      );
    }
  }
}
