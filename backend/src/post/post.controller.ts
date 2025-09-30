import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostInterface } from './post.model';
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }
    @Get()
    async findAll(): Promise<PostInterface[]> {
        return this.postService.findAll();
    }
    @Post()
    async create(@Body() body: { name: string; description: string }): Promise<PostInterface> {
        return this.postService.create(body);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<PostInterface> {
        return this.postService.delete(Number(id));
    }
}
