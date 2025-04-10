import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

// Product data
const products = [
  {
    slug: "nasi-git",
    name: "Nasi GIT",
    description: "Nasi dengan aneka isian (ayam, jamur, ikan) yang praktis dan lezat.",
    image: "/placeholder.svg?height=600&width=600",
    details: {
      title: "Nasi GIT - Nasi Istimewa dengan Aneka Isian",
      description:
        "Nasi GIT adalah produk unggulan TelTaste yang menggabungkan nasi berkualitas dengan berbagai isian lezat seperti ayam, jamur, dan ikan. Dikemas secara praktis, Nasi GIT menjadi pilihan tepat untuk makan siang, makan malam, atau bekal yang lezat dan bergizi.",
      features: [
        "Nasi berkualitas premium",
        "Isian ayam yang lembut dan gurih",
        "Jamur yang kaya rasa",
        "Ikan yang segar dan lezat",
        "Bumbu rempah khas Indonesia",
        "Kemasan praktis dan higienis",
      ],
      nutritionalInfo:
        "Nasi GIT mengandung karbohidrat, protein, dan nutrisi penting lainnya yang dibutuhkan tubuh. Dengan kombinasi nasi, daging, dan sayuran, Nasi GIT menyediakan makanan seimbang dalam satu kemasan.",
      servingSuggestion:
        "Nasi GIT dapat dinikmati langsung setelah dipanaskan. Untuk pengalaman makan yang lebih nikmat, tambahkan sedikit sambal kecombrang TelTaste sebagai pendamping.",
      availability:
        "Tersedia dalam berbagai ukuran kemasan untuk memenuhi kebutuhan Anda. Hubungi kami untuk informasi pemesanan.",
    },
  },
  {
    slug: "dimsum-chili-oil-mentai",
    name: "Dimsum Chili Oil & Mentai",
    description: "Camilan dengan cita rasa unik dan pedas gurih.",
    image: "/placeholder.svg?height=600&width=600",
    details: {
      title: "Dimsum Chili Oil & Mentai - Camilan Lezat dengan Sentuhan Modern",
      description:
        "Dimsum Chili Oil & Mentai TelTaste adalah perpaduan sempurna antara dimsum tradisional dengan saus chili oil dan mentai yang kekinian. Camilan ini menawarkan pengalaman kuliner yang unik dengan kombinasi rasa pedas, gurih, dan creamy yang menggugah selera.",
      features: [
        "Dimsum berkualitas premium",
        "Chili oil dengan rasa pedas yang pas",
        "Saus mentai creamy yang lezat",
        "Tekstur yang sempurna",
        "Tanpa pengawet berbahaya",
        "Siap saji dan praktis",
      ],
      nutritionalInfo:
        "Dimsum Chili Oil & Mentai TelTaste mengandung protein berkualitas tinggi dan bumbu-bumbu pilihan yang tidak hanya lezat tetapi juga menyehatkan.",
      servingSuggestion:
        "Nikmati Dimsum Chili Oil & Mentai TelTaste sebagai camilan di sore hari atau hidangan pembuka untuk acara kumpul bersama keluarga dan teman. Sajikan hangat untuk pengalaman makan terbaik.",
      availability:
        "Tersedia dalam kemasan praktis yang menjaga kualitas dan kesegaran produk. Hubungi kami untuk informasi pemesanan.",
    },
  },
  {
    slug: "sambal-kecombrang",
    name: "Sambal Kecombrang",
    description: "Sambal khas dengan aroma kecombrang yang menggugah selera.",
    image: "/placeholder.svg?height=600&width=600",
    details: {
      title: "Sambal Kecombrang - Sambal Tradisional dengan Aroma Eksotis",
      description:
        "Sambal Kecombrang TelTaste adalah sambal tradisional Indonesia yang dibuat dengan bunga kecombrang segar, memberikan aroma eksotis dan rasa yang khas. Sambal ini menjadi pendamping sempurna untuk berbagai hidangan, menambahkan dimensi rasa yang unik dan autentik.",
      features: [
        "Terbuat dari kecombrang segar pilihan",
        "Cabai berkualitas tinggi",
        "Bumbu rempah tradisional",
        "Tanpa pengawet berbahaya",
        "Proses produksi higienis",
        "Kemasan yang praktis dan tahan lama",
      ],
      nutritionalInfo:
        "Sambal Kecombrang TelTaste mengandung antioksidan alami dari kecombrang dan cabai. Kecombrang juga dikenal memiliki berbagai manfaat kesehatan termasuk sifat antibakteri dan anti-inflamasi.",
      servingSuggestion:
        "Sambal Kecombrang TelTaste cocok disantap dengan nasi putih, ayam goreng, ikan bakar, atau sebagai bumbu tambahan untuk tumisan. Satu sendok teh sudah cukup untuk menambah cita rasa pada hidangan Anda.",
      availability:
        "Tersedia dalam berbagai ukuran kemasan untuk memenuhi kebutuhan rumah tangga maupun bisnis kuliner. Hubungi kami untuk informasi pemesanan.",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <Link href="/#products" className="text-red-600 hover:text-red-700 mb-8 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Kembali ke Produk
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-lg overflow-hidden">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.details.title}</h1>
          <p className="text-gray-600 mb-6">{product.details.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-red-600">Keunggulan Produk</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.details.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-red-600">Informasi Nutrisi</h2>
            <p className="text-gray-600">{product.details.nutritionalInfo}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-red-600">Saran Penyajian</h2>
            <p className="text-gray-600">{product.details.servingSuggestion}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-red-600">Ketersediaan</h2>
            <p className="text-gray-600">{product.details.availability}</p>
          </div>

          <div className="mt-8">
            <Link href="/#contact">
              <Button className="bg-red-600 hover:bg-red-700">Hubungi Kami untuk Pemesanan</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
