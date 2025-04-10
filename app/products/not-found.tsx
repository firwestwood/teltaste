import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
  return (
    <div className="container mx-auto py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Produk Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-8">Maaf, produk yang Anda cari tidak tersedia.</p>
      <Link href="/#products">
        <Button className="bg-red-600 hover:bg-red-700">Kembali ke Daftar Produk</Button>
      </Link>
    </div>
  )
}
