import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
@Injectable()
export class PostService {
  constructor(@InjectModel(Post) private postModel: typeof Post) { }

  async findAll(): Promise<Post[]> {
    return this.postModel.findAll();
  }
  async create(postData): Promise<Post> {
    return this.postModel.create(postData);
  }
  async delete(id: number): Promise<Post> {
    const post = await this.postModel.findByPk(id);
    if (!post) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    await post.destroy();
    return post; // ✅ devolvemos el objeto eliminado
  }
}
