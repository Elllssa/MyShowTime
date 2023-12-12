import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ArtistModule } from './artist/artist.module';
import { ConcertModule } from './concert/concert.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://valentin:valentin@myshowtime.hqn0sle.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
    ArtistModule,
    ConcertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
