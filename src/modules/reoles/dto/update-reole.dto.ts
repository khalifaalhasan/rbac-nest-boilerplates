import { PartialType } from '@nestjs/mapped-types';
import { CreateReoleDto } from './create-reole.dto';

export class UpdateReoleDto extends PartialType(CreateReoleDto) {}
