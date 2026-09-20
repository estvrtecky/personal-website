import { z } from "zod";

/**
 * Validation schema for wish translations.
 *
 * @property id - UUID v4 identifier
 * @property locale - Locale code in format `xx` or `xx-XX`
 * @property name - Translated name of the wish
 * @property description - Translated description of the wish
 */
const wishTranslationSchema = z.object({
  id: z.uuid(),
  locale: z
    .string()
    .regex(
      /^[a-z]{2}(-[A-Z]{2})?$/,
      "Invalid locale format. Expected format: 'xx' or 'xx-XX'",
    ),
  name: z.string(),
  description: z.string(),
});

/**
 * Validation schema for wishes.
 *
 * @property id - UUID v4 identifier
 * @property price - Price of the wish
 * @property translations - List of translations
 * @property link - Where to buy it
 * @property image_url - Image URL of the wish
 */
export const wishSchema = z.object({
  id: z.uuid(),
  price: z.int().nonnegative(),
  translations: z.array(wishTranslationSchema),
  link: z.url(),
  image_url: z.url().nullable(),
});

/**
 * Type inferred from wishSchema.
 *
 * @property id - UUID v4 identifier
 * @property price - Price of the wish
 * @property translations - List of translations
 * @property link - Where to buy it
 * @property image_url - Image URL of the wish
 */
export type Wish = z.infer<typeof wishSchema>;
