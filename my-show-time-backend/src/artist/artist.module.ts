import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, artistSchema } from './schemas/artist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: artistSchema }]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
