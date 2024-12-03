import React from 'react'

const Experience = () => {
  return (
    <section>
      <div className="py-10">
        <h2 className="mb-8 text-3xl text-white text-center">
          My <span>Experience</span>
        </h2>
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-normal">First company</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    description of your experience in this company
                  </div>
                </div>
              </div>

              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-purple-800 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-purple-800 leading-none text-center z-10 bg-white">
                    <div className="font-medium">2020</div>
                    <div className="font-medium">present</div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10"></div>

              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-purple-800 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-purple-800 leading-none text-center z-10 bg-white">
                    <div className="font-medium">2022</div>
                    <div className="font-medium">2023</div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-normal">second company</div>
                  </div>
                  <div className="text-gray-600">
                    description of your experience in this company
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-normal">third company</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    description of your experience in this company
                  </div>
                </div>
              </div>

              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-purple-800 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-purple-800 leading-none text-center z-10 bg-white">
                    <div className="font-medium">2023</div>
                    <div className="font-medium">2024</div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10"></div>

              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-purple-800 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-purple-800 leading-none text-center z-10 bg-white">
                    <div className="font-medium">2024</div>
                    <div className="font-medium">2025</div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-normal">Fourth company</div>
                  </div>
                  <div className="text-gray-600">
                    description of your experience in this company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
