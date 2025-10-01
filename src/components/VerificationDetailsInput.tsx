import { useState } from 'react'


function VerificationDetailsInput() {
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };


  return (
   <>
   <div className="mt-8 md:mt-0 mb-3 text-[#20B658] text-[20px] font-bold md:text-[32px]">
        Verification of Details
      </div>

      <form  className="flex flex-col gap-2" >
           <label
        htmlFor="document" >

        {file ? file.name : "Government-issued ID (e.g., National ID, Driver's License)"}
      </label>

      <input
        id="document"
        type="file"
        className=" border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-2 w-full"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={handleFileChange}
      />

      </form>

   
   </>
  )
}

export default VerificationDetailsInput
