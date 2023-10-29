// "use client";



import data from "./data.json"

const Subpage = () => {
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <div  className="container mx-auto my-5 flex-grow-1">
      <div className="flex">
        {(data.blogs.map((data) => (
          <div  key={data.title} className="mb-3">
            <div className="border-none">
              <div>
                <p>
                <div dangerouslySetInnerHTML={{__html: data}}></div>

                 </p>
                <p>
                <div dangerouslySetInnerHTML={{__html: data}}></div>

                </p>
              </div>
            </div>
          </div>
        )))}
      </div>
    </div>
    </div>
  );
};

export default Subpage;