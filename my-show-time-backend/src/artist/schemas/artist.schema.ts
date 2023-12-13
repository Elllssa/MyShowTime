import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Artist {
  @Prop()
  pseudo: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const artistSchema = SchemaFactory.createForClass(Artist);
