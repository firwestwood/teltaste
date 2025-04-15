import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      slug: "nasi-git",
      name: "Nasi GIT",
      description: "Nasi dengan aneka isian (ayam, jamur, ikan) yang praktis dan lezat.",
      image: "/nasi-git-ayam.png?height=300&width=300",
    },
    {
      id: 2,
      slug: "dimsum-chili-oil-mentai",
      name: "Dimsum Chili Oil & Mentai",
      description: "Camilan dengan cita rasa unik dan pedas gurih.",
      image: "/dimsum-original.png?height=300&width=300",
    },
    {
      id: 3,
      slug: "sambal-kecombrang",
      name: "Sambal Kecombrang",
      description: "Sambal khas dengan aroma kecombrang yang menggugah selera.",
      image: "/sambal-kecombrang.jpg?height=300&width=300",
    },
  ]

  return (
    <section id="products" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col overflow-hidden border-2 hover:border-red-600 transition-all duration-300 group hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-500">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/products/${product.slug}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    Order Sekarang
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
