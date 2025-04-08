import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Downloads = () => {
  return (
    <div>
      <div className="bg-gray-100 text-left p-6 md:p-12 lg:p-16">

        <Helmet>
          <title>Downloads - ICRAECCT'2025 Conference</title>
          <meta
            name="description"
            content="Meet the Advisory committee members of ICRAECCT'2025 Conference"
          />
        </Helmet>
        <h1 className="text-4xl font-bold text-center text-third mb-8 underline">
          DOWNLOADS
        </h1>

        <div className="space-y-8">
          <section>
            <ul className='space-y-6 list-disc'>
              <li>
                <a href='files/Technical_schedule-Website-Upload-8-April-2025.pdf' className="text-xl font-semibold text-gray-800 mb-2 underline">
                PAPER PRESENTATION SCHEDULE
                </a>
              </li>
              <li  >
                <a href='files/ICRAECCT_2025_TEMPLATE_FOR_PAPER_PRESENTATION.pptx' className="text-xl font-semibold text-gray-800 mb-2 underline">
                PAPER PRESENTATION TEMPLATE FORMAT
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
