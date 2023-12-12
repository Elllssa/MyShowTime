import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Concert {
  @Prop()
  name: string;

  @Prop()
  date: string;

  @Prop()
  place: string;

  @Prop()
  price: string;

  @Prop()
  _artists: Array<string>;
}

export const concertSchema = SchemaFactory.createForClass(Concert);
