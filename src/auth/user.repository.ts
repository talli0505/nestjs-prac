import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "./entity/user.entity";

// cat때는 repository를 안만들었지만 이번에는 만들어서 사용
@Entity()
export class UserRepository extends Repository<User> {

}