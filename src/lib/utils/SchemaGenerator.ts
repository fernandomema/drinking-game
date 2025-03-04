import { BreadcrumbList, Product, WithContext } from "schema-dts"

export class SchemaGenerator {
    public static getBreadcrumbs(items: {name: string, url: string}[]): WithContext<BreadcrumbList> {
        let position = 1;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item) => {
                return {
                    "@type": "ListItem",
                    "position": position++,
                    "name": item.name,
                    "item": item.url
                }
            }),
        }
    }

    public static getProduct(product: {
        name: string, 
        description: string, 
        image: string, 
        url: string,
        review?: {
            name: string,
            author: {
                name: string
            },
            positiveItems: string[],
            negativeItems: string[]
        }
    }): WithContext<Product> {
        const productschema: WithContext<Product> = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": product.image,
            "url": product.url
        }

        if (product.review) {
            let positivePosition = 1;
            let negativePosition = 1;
            productschema.review = {
                "@type": "Review",
                "name": product.review.name,
                "author": {
                    "@type": "Person",
                    "name": product.review.author.name,
                },
                "positiveNotes": {
                    "@type": "ItemList",
                    "itemListElement": product.review.positiveItems.map((item) => {
                        return {
                            "@type": "ListItem",
                            "position": positivePosition++,
                            "name": item
                        }
                    })
                },
                "negativeNotes": {
                    "@type": "ItemList",
                    "itemListElement": product.review.negativeItems.map((item) => {
                        return {
                            "@type": "ListItem",
                            "position": negativePosition++,
                            "name": item
                        }
                    })
                }
            }
        }

        return productschema;
    }
}