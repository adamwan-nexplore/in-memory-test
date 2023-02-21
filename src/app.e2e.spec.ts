import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ArticleService } from './article/article.service';

describe('AppController (e2e)', () => {
  let moduleFixture: TestingModule;
  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .compile();


  });

  it('/ (GET)', async () => {
    const articleService = moduleFixture.get<ArticleService>(ArticleService);
    const date = new Date();
    const article = await articleService.create({
      title: `title ${date}`
    });
    
    
    console.log('article');
    console.log(article);
    const result = await articleService.findOne(article.id);
    console.log('fetch');
    console.log(result);
  });
});
