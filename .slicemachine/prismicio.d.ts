// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for character documents */
interface CharacterDocumentData {
    /**
     * Slug field in *character*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: character.slug
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slug: prismicT.KeyTextField;
    /**
     * Image Character field in *character*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: character.image_character
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_character: prismicT.ImageField<never>;
    /**
     * Name Character field in *character*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: character.name_character
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name_character: prismicT.KeyTextField;
    /**
     * Description Character field in *character*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: character.description_character
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_character: prismicT.RichTextField;
}
/**
 * character document from Prismic
 *
 * - **API ID**: `character`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CharacterDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CharacterDocumentData>, "character", Lang>;
/** Content for home documents */
interface HomeDocumentData {
    /**
     * Subtitle Hero field in *home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.subtitle_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle_hero: prismicT.KeyTextField;
    /**
     * Title Hero field in *home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title_hero: prismicT.KeyTextField;
    /**
     * Description Hero field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.description_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_hero: prismicT.RichTextField;
    /**
     * Label Trailer field in *home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.label_trailer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_trailer: prismicT.KeyTextField;
    /**
     * Label Button field in *home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.label_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_button: prismicT.KeyTextField;
    /**
     * Url Button field in *home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.url_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url_button: prismicT.LinkField;
    /**
     * Thumbnail Trailer field in *home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.thumbnail_trailer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail_trailer: prismicT.ImageField<never>;
}
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = CharacterDocument | HomeDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { CharacterDocumentData, CharacterDocument, HomeDocumentData, HomeDocument, AllDocumentTypes };
    }
}
