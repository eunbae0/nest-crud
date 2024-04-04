import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import IPost from './interfaces/post.interface';
import { CreatePostDto } from './dto/post-create.dto';
import PostsService from './post.service';

@Controller('posts')
export default class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<void> {
    this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<IPost[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: IPost['id']): Promise<IPost> {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: IPost['id'],
    @Body() createPostDto: CreatePostDto,
  ): Promise<void> {
    this.postsService.put(id, createPostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: IPost['id']): Promise<void> {
    this.postsService.delete(id);
  }
}
