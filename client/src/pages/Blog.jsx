import React, { useEffect } from "react";


const Blog = () => {

  const photos = ["https://drive.google.com/uc?id=1eXrhC746jyp2NLKBxCfIsfw_0LUkNXS4", "https://drive.google.com/uc?id=1Z_uNV6zAGIRvcb9rbNDh2UV_Eudj1r_X", "https://drive.google.com/uc?id=1oSxelv7uuGn3cRUwOYDPYmpiMz5YgIq9", "https://drive.google.com/uc?id=1Udb3yxM03KCE3EmciKEQkJ1zNS2eZIl8", "https://drive.google.com/uc?id=1IwsZqPuN9Cz_8htHP46FI5_WVQl8EAhh", "https://drive.google.com/uc?id=1hAiSx81cOE1s09MwcP_-SgLtE-K1C2XE"];
  

    

  return (
    <>
      <div id="main" className="min-h-[95vh] mt-[80px] border border-white bg-slate-700 p-2 relative">
        Blogs - <strong className="text-red-500">UNDER DEVELOPMENT</strong>
        
        {/* {
          photos.length !== 0 ?(
              photos.map(url => {
                const match = url.match(/id=([a-zA-Z0-9_-]+)/);
                if(match && match[1]) {
                  return (
                    <img src={`https://drive.google.com/thumbnail?id=${match[1]}&sz=s4000`} alt="img"/> 
                  )
                }
                return null;
              })
          ) : 
          "No Image to show"
        } */}

        <img src="https://picsum.photos/200/150" alt="img" />
      </div>
    </>
  );
};

export default Blog;
