import { type SchemaTypeDefinition } from 'sanity'
import { CategorySchema } from '../schemas/category-schema'
import { ProductSchema } from '../schemas/product-schema'
import { GalleryImageSchema } from '../schemas/gallery-image-schema'
import { FeaturedSchema } from '../schemas/featured-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CategorySchema,ProductSchema,GalleryImageSchema,FeaturedSchema],
}

