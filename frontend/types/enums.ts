// Karat options for jewelry
export enum Karat {
    K14 = '14K',
    K18 = '18K',
    K22 = '22K',
    K24 = '24K'
}

// Categories based on MegaMenu structure
export enum Category {
    GOLD_ORNAMENTS = 'GOLD_ORNAMENTS',
    SILVER_ARTICLES = 'SILVER_ARTICLES',
    SILVER_ORNAMENTS = 'SILVER_ORNAMENTS',
    SILVER_JEWELLERY = 'SILVER_JEWELLERY'
}

// Subcategories mapped to their parent categories
export const SubcategoryByCategory = {
    [Category.GOLD_ORNAMENTS]: [
        'RINGS FOR WOMEN',
        'RINGS FOR MEN',
        'EARRINGS',
        'NECKLACES',
        'BRACELETS',
        'PENDANTS',
        'CHAINS',
        'BANGLES'
    ],
    [Category.SILVER_ARTICLES]: [
        'PLATES',
        'BOWLS',
        'GLASSES',
        'UTENSILS'
    ],
    [Category.SILVER_ORNAMENTS]: [
        'DECORATIVE_ITEMS',
        'FIGURINES',
        'FRAMES'
    ],
    [Category.SILVER_JEWELLERY]: [
        'RINGS',
        'EARRINGS_SILVER',
        'NECKLACES_SILVER',
        'BRACELETS_SILVER',
        'PENDANTS_SILVER',
        'CHAINS_SILVER',
        'BANGLES_SILVER'
    ]
} as const

// All subcategories as a flat array
export const AllSubcategories = Object.values(SubcategoryByCategory).flat()

// Gender options
export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    UNISEX = 'UNISEX',
    KIDS = 'KIDS'
}

// Helper functions
export const getSubcategoriesForCategory = (category: Category): readonly string[] => {
    return SubcategoryByCategory[category] || []
}

export const getCategoryForSubcategory = (subcategory: string): Category | undefined => {
    for (const [category, subcategories] of Object.entries(SubcategoryByCategory)) {
        if ((subcategories as readonly string[]).includes(subcategory)) {
            return category as Category
        }
    }
    return undefined
} 