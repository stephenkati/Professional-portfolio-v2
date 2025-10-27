import React from 'react'
import { BsDownload } from 'react-icons/bs'

const RESUME_FILE = '/Full Stack Resume.pdf'

const Resume = ({ className = 'btn-pill btn-outline' }) => {
  const handleDownload = (url) => {
    const filename = url.split('/').pop()

    const anchor = document.createElement('a')
    anchor.href = url
    anchor.setAttribute('download', filename)
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  return (
    <button
      type="button"
      onClick={() => handleDownload(RESUME_FILE)}
      className={className}
      title="Download resume"
    >
      Download resume <BsDownload />
    </button>
  )
}

export default Resume
