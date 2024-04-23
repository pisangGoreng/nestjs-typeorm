import { CreateListingDto } from './create-listing.dto';
import { createTagDto } from './create-tag.dto';

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: CreateListingDto;
  tags: createTagDto[];
}
