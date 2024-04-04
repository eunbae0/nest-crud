import { Injectable } from '@nestjs/common';
import IPost from './interfaces/post.interface';
import { CreatePostDto } from './dto/post-create.dto';

@Injectable()
export default class PostsService {
  private id: number = 0;
  posts: IPost[] = [];

  /** Post 생성 */
  create(post: CreatePostDto): void {
    const currentDate = new Date();
    const createdPost: IPost = {
      ...post,
      id: this.id,
      createdAt: currentDate,
      changedAt: currentDate,
    };
    this.posts.push(createdPost);

    this.id++;
  }

  /**
   * Post 전체 조회
   */
  findAll(): IPost[] {
    return this.posts;
  }

  /**
   * Post 조회
   * @param id
   */
  findOne(id: IPost['id']): IPost {
    return this.posts.find((p) => p.id === id);
  }

  /**
   * Post 수정
   * @param id
   * @param post
   */
  put(id: IPost['id'], post: CreatePostDto): void {
    const currentDate = new Date();
    const targetIndex = this.posts.findIndex((p) => p.id === id);
    this.posts[targetIndex] = {
      ...this.posts[targetIndex],
      ...post,
      changedAt: currentDate,
    };
  }

  /**
   * Post 삭제
   * @param id
   */
  delete(id: IPost['id']): void {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
