import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('App module works correctly', () => {
    request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });

  it('should bring all the games in page 1', async () => {
    const response = await request(app.getHttpServer()).get('/games');

    expect(response.status).toBe(200);
    expect(response.body.games.length).toBe(10);
    expect(response.body.currentPage).toBe(1);
  });

  it('should find the game with the id passed as param', async () => {
    const response = await request(app.getHttpServer()).get('/games/1');

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it('should throw 404 if the game doesnt exists', async () => {
    const response = await request(app.getHttpServer()).get('/games/999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('No game found');
  });

  it('should find the game with the name passed as query', async () => {
    const response = await request(app.getHttpServer()).get(
      '/games?name=warcraft',
    );

    expect(response.status).toBe(200);
    expect(response.body.games.length).toBeGreaterThan(0);
  });
});
