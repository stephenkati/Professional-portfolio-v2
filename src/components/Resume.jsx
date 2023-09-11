import React from 'react'
import { BsDownload } from 'react-icons/bs'

const RESUME_FILE = '/Stephen_Katuli`s_Resume.pdf';

const Resume = () => {

  const handleDownload = (url) => {
    const filename = url.split("/").pop();
    
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <button
      type='button'
      onClick={() => handleDownload(RESUME_FILE)}
      className="btn btn-secondary rounded-lg"
      title="Download Resume"
    >
      Download Resume <BsDownload />
    </button>
  )
}

export default Resume;