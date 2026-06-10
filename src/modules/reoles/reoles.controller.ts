import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReolesService } from './reoles.service';
import { CreateReoleDto } from './dto/create-reole.dto';
import { UpdateReoleDto } from './dto/update-reole.dto';

@Controller('reoles')
export class ReolesController {
  constructor(private readonly reolesService: ReolesService) {}

  @Post()
  create(@Body() createReoleDto: CreateReoleDto) {
    return this.reolesService.create(createReoleDto);
  }

  @Get()
  findAll() {
    return this.reolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReoleDto: UpdateReoleDto) {
    return this.reolesService.update(+id, updateReoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reolesService.remove(+id);
  }
}
