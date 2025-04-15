export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">About TelTaste</h2>
          <p className="text-gray-500 md:text-xl mt-4 max-w-3xl mx-auto text-justify">
            TelTaste adalah brand kuliner modern yang terinspirasi dari kekayaan cita rasa Indonesia. Kami menghadirkan berbagai produk makanan siap saji dan pelengkap makanan yang praktis, autentik, dan inovatif. <br /><br />
            Produk unggulan kami — seperti Nasi GIT (nasi kepal isi ayam dan jamur), Dimsum dengan saus Chili Oil atau Mentai, serta Sambal Kecombrang — dirancang untuk memberikan sensasi rasa yang lezat, mudah dinikmati, dan cocok untuk berbagai momen. Baik untuk pekerja kantoran yang sibuk, mahasiswa yang ingin camilan hemat dan mengenyangkan, hingga keluarga yang mencari variasi makanan di rumah. <br /><br />
            Kami percaya bahwa makanan bukan hanya soal rasa, tetapi juga kemudahan dalam menikmati. Misi TelTaste adalah membawa kekayaan rasa khas Nusantara lebih dekat ke masyarakat modern melalui produk yang terjangkau, berkualitas, dan siap santap. <br /><br />
            Dari dapur rumahan hingga acara Market Day, dari makan siang praktis hingga camilan sore — TelTaste hadir untuk menemani hari-hari Anda dengan rasa yang selalu bikin rindu. <br /><br />
          </p>
          <p className="text-center">Let’s Taste TelTaste!</p>
        </div>

        {/* Additional content */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-500 max-w-3xl mx-auto">
              TelTaste dimulai sebagai eksperimen dapur rumahan kecil, lahir dari kecintaan pendiri kami terhadap cita rasa tradisional Indonesia. Apa yang dimulai dengan berbagi hidangan rumahan kepada teman-teman dan keluarga, dengan cepat berkembang menjadi sebuah usaha kuliner yang penuh semangat seiring semakin banyak orang yang menemukan dan jatuh cinta dengan rasa autentik kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Mission</h4>
              <p className="text-gray-500">
                Untuk melestarikan dan membagikan cita rasa autentik masakan Indonesia sambil berinovasi untuk menciptakan produk makanan berkualitas tinggi yang praktis dan membawa kebahagiaan bagi pelanggan kami.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Vision</h4>
              <p className="text-gray-500">
                Menjadi merek terkemuka dalam produk kuliner Indonesia, yang diakui karena kualitas, keaslian, dan inovasi, serta menjadikan cita rasa Indonesia dapat diakses oleh para pecinta makanan di mana saja.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Values</h4>
              <p className="text-gray-500">
                Kami percaya pada kualitas tanpa kompromi, keaslian budaya, praktik berkelanjutan, dan menciptakan koneksi yang bermakna melalui makanan yang membawa orang-orang bersama.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">The TelTaste Difference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Authentic Recipes</h4>
                  <p className="text-gray-500">
                    Produk kami berbasis pada resep tradisional Indonesia, yang diwariskan turun-temurun dan dengan hati-hati disesuaikan untuk kenyamanan modern tanpa mengorbankan rasa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quality Ingredients</h4>
                  <p className="text-gray-500">
                    Kami hanya menggunakan bahan-bahan terbaik, bekerja sama dengan pemasok terpercaya untuk memastikan setiap produk memenuhi standar tinggi kami dalam kualitas dan rasa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Handcrafted Care</h4>
                  <p className="text-gray-500">
                    Setiap produk disiapkan dengan perhatian yang teliti terhadap setiap detail, memastikan kualitas yang konsisten dan rasa autentik di setiap batch yang kami produksi.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-500">
                    Sambil menghormati tradisi, kami terus berinovasi untuk menciptakan produk yang memenuhi preferensi makanan modern dan kebutuhan gaya hidup tanpa mengorbankan cita rasa asli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
