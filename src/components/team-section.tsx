import Image from 'next/image'

export default function TeamSection() {
  return (
    <section id="about" className="flex flex-col items-center gap-12 py-20 px-55 w-[1100px] mx-auto bg-black pb-[32rem]">
      <h2 className="text-3xl font-bold text-[#10BEF2] text-center w-full mt-16">
        Meet Our Team
      </h2>
      <div className="relative">
        <div className="w-[1100px] h-[667px] rounded-lg overflow-hidden">
          <Image
            src="/assets/images/ChatGPT Image Jun 27, 2025, 12_38_41 PM 1.jpg"
            alt="Genesis Aircraft Parts Team"
            width={1100}
            height={667}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute top-[75%] left-[5%] right-[5%] bg-[#444444]/70 backdrop-blur-sm p-8 rounded-lg">
          <div className="text-white space-y-6">
            <p className="text-lg">
              Genesis is a premier supplier in the commercial aviation industry. We specialize in inventory solutions to the worldwide aviation marketplace. With over 50 years combined experience in aircraft maintenance, finance solutions, and asset management, our team prides itself in our commitment to integrity, flexibility, and quality of work.
            </p>
            <p className="text-lg">
              As an international service company, we work closely with our network of partners to meet a wide range of material requirements for customers. From simple parts transactions to highly intricate supply chain management programs, we are committed to providing practical business solutions that meet our customer needs.
            </p>
            <p className="text-lg">
              We are a trusted partner in the commercial aerospace aftermarket for supply, purchase, exchange, lease, and repair management. We offer a direct link between your commercial aircraft and engine needs and innovative, cost effective, quality driven inventory solutions. At Genesis Aircraft our commitment is to you, the customer and is driven by integrity, technology and the highest quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}