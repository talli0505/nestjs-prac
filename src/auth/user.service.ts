import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { FindOneOptions } from "typeorm";
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class UserSerivce {
  constructor(@InjectRepository(UserRepository)
  private userRepository: UserRepository
  ) {}

  async findByFields(option: FindOneOptions<UserDTO>): Promise<UserDTO | undefined> {
    return await this.userRepository.findOne(option);
  }

  async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
    return await this.userRepository.save(userDTO);
  }
}