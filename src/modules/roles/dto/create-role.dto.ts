import { IsString, IsArray, ArrayNotEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama role tidak boleh kosong' })
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @ArrayNotEmpty({ message: 'Minimal harus ada 1 permission' })
  @IsString({ each: true, message: 'Setiap permission harus berupa string' })
  permissions!: string[];
}