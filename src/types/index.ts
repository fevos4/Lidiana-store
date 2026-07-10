export interface Collection {
  id: string
  slug: string
  name: string
  subtitle: string
  description: string
  image: string
  year: string
}

export interface Product {
  id: string
  slug: string
  name: string
  collection: string
  price: string
  images: string[]
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}
