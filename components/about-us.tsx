export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About TelTaste</h2>
          <p className="text-gray-500 md:text-xl mt-4 max-w-3xl mx-auto">
            TelTaste is a culinary business that specializes in authentic Indonesian food products. Our mission is to
            bring the rich and diverse flavors of Indonesian cuisine to food enthusiasts everywhere.
          </p>
        </div>

        {/* Additional content */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-500 max-w-3xl mx-auto">
              TelTaste began as a small home kitchen experiment, born from our founder's love for traditional Indonesian
              flavors. What started as sharing homemade dishes with friends and family quickly grew into a passionate
              culinary venture as more people discovered and fell in love with our authentic taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Mission</h4>
              <p className="text-gray-500">
                To preserve and share the authentic flavors of Indonesian cuisine while innovating to create convenient,
                high-quality food products that bring joy to our customers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Vision</h4>
              <p className="text-gray-500">
                To become a leading brand in Indonesian culinary products, recognized for quality, authenticity, and
                innovation, making Indonesian flavors accessible to food lovers everywhere.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-red-600">Our Values</h4>
              <p className="text-gray-500">
                We believe in quality without compromise, cultural authenticity, sustainable practices, and creating
                meaningful connections through food that brings people together.
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
                    Our products are based on traditional Indonesian recipes, passed down through generations and
                    carefully adapted for modern convenience without compromising on taste.
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
                    We source only the finest ingredients, working with trusted suppliers to ensure that every product
                    meets our high standards for quality and flavor.
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
                    Each product is prepared with meticulous attention to detail, ensuring consistent quality and
                    authentic taste in every batch we produce.
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
                    While respecting tradition, we continuously innovate to create products that meet modern dietary
                    preferences and lifestyle needs without sacrificing authentic flavor.
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
