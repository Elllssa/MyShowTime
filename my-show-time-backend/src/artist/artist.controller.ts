import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './schemas/artist.schema';

@Controller('artists')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get()
  async getAllArtists(): Promise<Artist[]> {
    return this.artistService.findAllArtists();
  }

  @Get(':id')
  async getOneArtist(
    @Param('id')
    id: string,
  ): Promise<Artist> {
    return this.artistService.findArtistById(id);
  }

  @Post('new')
  async createArtist(
    @Body()
    artist,
  ): Promise<Artist> {
    return this.artistService.createArtist(artist);
  }

  @Put(':id')
  async updateArtist(
    @Param('id')
    id: string,
    @Body()
    artist,
  ): Promise<Artist> {
    return this.artistService.updateArtistById(id, artist);
  }

  @Delete(':id')
  async deleteOneArtist(
    @Param('id')
    id: string,
  ): Promise<Artist> {
    return this.artistService.deleteArtistById(id);
  }
}
