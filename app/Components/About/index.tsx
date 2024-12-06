import Image from '@/app/utils/Image'
import React from 'react'

const About = () => {
  return (
    <section className="py-10 text-white  h-auto w-full" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <Image
              path="skouzi/about"
              alt="about"
              priority
              width={400}
              height={300}
              className="object-cover rounded-xl  h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                🌐✨ Transform your web content using Framer Motions UTF-16
                powered text animations. Each character, a vibrant performer,
                dances dynamically, weaving a captivating narrative. Elevate
                user engagement with the art of animated storytelling. 🚀🎉
                #WebDev #Animation
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                5<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">years experience</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                30
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">happy clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
