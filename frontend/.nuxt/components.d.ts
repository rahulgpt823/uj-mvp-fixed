
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BrandCertifications': typeof import("../components/BrandCertifications.vue")['default']
    'GoogleMap': typeof import("../components/GoogleMap.vue")['default']
    'ImageModal': typeof import("../components/ImageModal.vue")['default']
    'ImageUploadField': typeof import("../components/ImageUploadField.vue")['default']
    'LanguageSelector': typeof import("../components/LanguageSelector.vue")['default']
    'LanguageSwitcher': typeof import("../components/LanguageSwitcher.vue")['default']
    'MegaMenu': typeof import("../components/MegaMenu.vue")['default']
    'PriceTicker': typeof import("../components/PriceTicker.vue")['default']
    'ProductCard': typeof import("../components/ProductCard.vue")['default']
    'ProductEnquiryModal': typeof import("../components/ProductEnquiryModal.vue")['default']
    'ProductImageGallery': typeof import("../components/ProductImageGallery.vue")['default']
    'ProductImageUpload': typeof import("../components/ProductImageUpload.vue")['default']
    'ProductListItem': typeof import("../components/ProductListItem.vue")['default']
    'StoreLocator': typeof import("../components/StoreLocator.vue")['default']
    'UserProfileMenu': typeof import("../components/UserProfileMenu.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBrandCertifications': LazyComponent<typeof import("../components/BrandCertifications.vue")['default']>
    'LazyGoogleMap': LazyComponent<typeof import("../components/GoogleMap.vue")['default']>
    'LazyImageModal': LazyComponent<typeof import("../components/ImageModal.vue")['default']>
    'LazyImageUploadField': LazyComponent<typeof import("../components/ImageUploadField.vue")['default']>
    'LazyLanguageSelector': LazyComponent<typeof import("../components/LanguageSelector.vue")['default']>
    'LazyLanguageSwitcher': LazyComponent<typeof import("../components/LanguageSwitcher.vue")['default']>
    'LazyMegaMenu': LazyComponent<typeof import("../components/MegaMenu.vue")['default']>
    'LazyPriceTicker': LazyComponent<typeof import("../components/PriceTicker.vue")['default']>
    'LazyProductCard': LazyComponent<typeof import("../components/ProductCard.vue")['default']>
    'LazyProductEnquiryModal': LazyComponent<typeof import("../components/ProductEnquiryModal.vue")['default']>
    'LazyProductImageGallery': LazyComponent<typeof import("../components/ProductImageGallery.vue")['default']>
    'LazyProductImageUpload': LazyComponent<typeof import("../components/ProductImageUpload.vue")['default']>
    'LazyProductListItem': LazyComponent<typeof import("../components/ProductListItem.vue")['default']>
    'LazyStoreLocator': LazyComponent<typeof import("../components/StoreLocator.vue")['default']>
    'LazyUserProfileMenu': LazyComponent<typeof import("../components/UserProfileMenu.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BrandCertifications: typeof import("../components/BrandCertifications.vue")['default']
export const GoogleMap: typeof import("../components/GoogleMap.vue")['default']
export const ImageModal: typeof import("../components/ImageModal.vue")['default']
export const ImageUploadField: typeof import("../components/ImageUploadField.vue")['default']
export const LanguageSelector: typeof import("../components/LanguageSelector.vue")['default']
export const LanguageSwitcher: typeof import("../components/LanguageSwitcher.vue")['default']
export const MegaMenu: typeof import("../components/MegaMenu.vue")['default']
export const PriceTicker: typeof import("../components/PriceTicker.vue")['default']
export const ProductCard: typeof import("../components/ProductCard.vue")['default']
export const ProductEnquiryModal: typeof import("../components/ProductEnquiryModal.vue")['default']
export const ProductImageGallery: typeof import("../components/ProductImageGallery.vue")['default']
export const ProductImageUpload: typeof import("../components/ProductImageUpload.vue")['default']
export const ProductListItem: typeof import("../components/ProductListItem.vue")['default']
export const StoreLocator: typeof import("../components/StoreLocator.vue")['default']
export const UserProfileMenu: typeof import("../components/UserProfileMenu.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBrandCertifications: LazyComponent<typeof import("../components/BrandCertifications.vue")['default']>
export const LazyGoogleMap: LazyComponent<typeof import("../components/GoogleMap.vue")['default']>
export const LazyImageModal: LazyComponent<typeof import("../components/ImageModal.vue")['default']>
export const LazyImageUploadField: LazyComponent<typeof import("../components/ImageUploadField.vue")['default']>
export const LazyLanguageSelector: LazyComponent<typeof import("../components/LanguageSelector.vue")['default']>
export const LazyLanguageSwitcher: LazyComponent<typeof import("../components/LanguageSwitcher.vue")['default']>
export const LazyMegaMenu: LazyComponent<typeof import("../components/MegaMenu.vue")['default']>
export const LazyPriceTicker: LazyComponent<typeof import("../components/PriceTicker.vue")['default']>
export const LazyProductCard: LazyComponent<typeof import("../components/ProductCard.vue")['default']>
export const LazyProductEnquiryModal: LazyComponent<typeof import("../components/ProductEnquiryModal.vue")['default']>
export const LazyProductImageGallery: LazyComponent<typeof import("../components/ProductImageGallery.vue")['default']>
export const LazyProductImageUpload: LazyComponent<typeof import("../components/ProductImageUpload.vue")['default']>
export const LazyProductListItem: LazyComponent<typeof import("../components/ProductListItem.vue")['default']>
export const LazyStoreLocator: LazyComponent<typeof import("../components/StoreLocator.vue")['default']>
export const LazyUserProfileMenu: LazyComponent<typeof import("../components/UserProfileMenu.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
