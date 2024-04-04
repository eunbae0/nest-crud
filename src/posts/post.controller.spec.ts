import { Test, TestingModule } from '@nestjs/testing';
import PostsController from './post.controller';
import PostsService from './post.service';

describe('PostsController', () => {
  let postsController: PostsController;

  beforeEach(async () => {
    const posts: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    postsController = posts.get<PostsController>(PostsController);
  });

  describe('get all posts', () => {
    it('should return "Hello World!"', () => {
      expect(postsController.findAll()).toBe('Hello World!');
    });
  });
  describe('get one post', () => {
    it('should return "Hello World!"', () => {
      expect(postsController.findAll()).toBe('Hello World!');
    });
  });
  describe('change post', () => {
    it('should return "Hello World!"', () => {
      expect(postsController.findAll()).toBe('Hello World!');
    });
  });
  describe('delete post', () => {
    it('should return "Hello World!"', () => {
      expect(postsController.findAll()).toBe('Hello World!');
    });
  });
});
