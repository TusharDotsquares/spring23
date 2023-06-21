import * as React from "react";

type File = {
    mimeType?: string;
    name?: string;
    size?: string;
    url?: string;
  };
  
  type FileListProps = {
    files: File[];
  };

const Details = (files: FileListProps) => {
  return (
    
    files.files?.map((i:any) => {

      return (
        <>
          <div className="border-b border-gray-300 bg-gray-100 shadow-md rounded-lg p-2 px-4 py-5 sm:p-6">
      <div className="text-xl font-semibold">{i.mimeType}</div> 
          {i.name && <p className="pt-4">{i.name}</p>} 
         {/* {i.size && i.size}  */}
            {i.url && (
              <a href={i.url} rel="noopener noreferrer">
                <button className={`pt-4 ${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`}>
                  {i.name}
                </button>
              </a>
            )}
          </div>
        </>
      );
    })
  );
};

export default Details;
