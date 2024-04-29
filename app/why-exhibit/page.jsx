
import Image from "next/image"
import whyexhibit from '../../public/assests/whyexhibit.jpg'


function page() {
    return (
        <>
            <div className='mx-auto   w-full max-w-screen-2xl '>
                <div className=" mt-40  flex justify-center">
                    <section class="hero">
                        <div class="left-side-under-hero">
                            <h1 className="text-xl md:text-3xl py-2 font-medium">The WOFX Advantage</h1>
                            <h2 className="text-lg md:text-xl py-1 font-medium">WOFX - Unlock a World of Opportunities</h2>
                            <p>WOFX is your gateway to access a host of industry prospects in the domestic and global furniture &amp; design market. Our platform offers a transformative experience, providing the tools and connections needed to support development in an ever-evolving industry landscape.</p>
                            <p className="text-2xl font-bold">The WOFX Advantage</p>
                            <p><strong>Global Exposure:</strong> WOFX enables you to showcase your products to a diverse global audience, including brands, leading buyers, and decision-makers from India, South Asia, and beyond.</p>
                            <p>Strategic Networking: WOFX brings together the entire furniture industry ecosystem under one roof. It&apos;s the ultimate opportunity to forge lasting partnerships by networking with industry leaders, key buyers, and decision-makers. WOFX is your chance to collaborate and enhance brand visibility, propelling your business from the national to the international stage.</p>
                            <p>Expand Your Reach: Tap into India&apos;s booming interior design, property development, retail, and workspace sectors. WOFX is your bridge to expanding your influence by networking and conducting business with India&apos;s largest dealers, distributors, importers, real estate developers, buying houses, retail chains, e-commerce platforms, and industry professionals.</p>
                            <p>Insightful Knowledge Sharing: Participate in knowledge seminars and discussions to gain insights into emerging trends, market demands, and consumer preferences shaping the future of furniture design.</p>
                            <p>Catalyst for Progress: Since 2018, WOFX has been a transformative force, redefining the Indian furniture and design landscape. WOFX empowers the industry through global connections, cutting-edge innovations, and insightful knowledge sharing.</p>
                            <p>WOFX is more than an expo; it&apos;s a journey towards elevating your furniture business to unprecedented heights. Join us at WOFX World Furniture Expo and unlock a world of opportunities.</p>
                        </div>
                        <div class="right-side-under-hero">
                            <Image src={whyexhibit} alt="" loading="lazy" />
                        </div>
                    </section>
                </div>




            </div>
        </>
    )
}

export default page