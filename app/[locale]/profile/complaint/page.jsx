


const Complaint = () => {
    return (
        <div className="flex flex-col  m-2 p-2 gap-8 w-full lg:w-1/2  mx-auto my-20 lg:my-10">
            <input placeholder="موضوع شکایت" className=" py-2 px-4 border border-gray-300 rounded-lg "></input>
            <textarea placeholder="اینجا تایپ کن"  className=" py-2 px-4 border border-gray-300 rounded-lg " rows="7"></textarea>
            <input type="submit" value="ثبت" className="bg-green-500 shadow-lg rounded-md hover:bg-green-700 text-white px-4 py-2 cursor-pointer"/>
        </div>
    )
}

export default Complaint;