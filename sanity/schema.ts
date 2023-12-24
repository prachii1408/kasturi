import { type SchemaTypeDefinition } from 'sanity'
import { CategorySchema } from '../schemas/category-schema'
import { ProductSchema } from '../schemas/product-schema'
import { GalleryImageSchema } from '../schemas/gallery-image-schema'
import { FeaturedSchema } from '../schemas/featured-schema'
import { GenderSchema } from '../schemas/gender-schemas'
import { MaterialSchema } from '../schemas/material-schema'
import { SubCategorySchema } from '../schemas/sub-categorySchema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CategorySchema,ProductSchema,GalleryImageSchema,FeaturedSchema,GenderSchema,MaterialSchema,SubCategorySchema],
}

