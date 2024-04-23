import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity()
export class Item extends AbstractEntity<Item> {
  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  // * cascade true, otomatis upsert listing saat upsert item
  // * otomatis juga bikin listingId untuk relasi 1 to 1 nya
  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  // * cascade untuk otomatis upsert comments saat upsert item
  @OneToMany(() => Comment, (comment) => comment.item, { cascade: true })
  comments: Comment[];

  // * join table khusus untuk many to many
  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable()
  tags: Tag[];

  // * tidak perlu constructor lagi karena sudah di handle di abstraction
  // constructor(item: Partial<Item>) {
  //   Object.assign(this, item);
  // }
}
