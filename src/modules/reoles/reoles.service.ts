import { Injectable } from '@nestjs/common';
import { CreateReoleDto } from './dto/create-reole.dto';
import { UpdateReoleDto } from './dto/update-reole.dto';

@Injectable()
export class ReolesService {
  create(createReoleDto: CreateReoleDto) {
    return 'This action adds a new reole';
  }

  findAll() {
    return `This action returns all reoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reole`;
  }

  update(id: number, updateReoleDto: UpdateReoleDto) {
    return `This action updates a #${id} reole`;
  }

  remove(id: number) {
    return `This action removes a #${id} reole`;
  }
}
