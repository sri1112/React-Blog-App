const BloggCard = (props) => {

  return (
    <div className="border-8 rounded p-10">
      <p className="text-xs text-gray-400">{props.date.toString()}</p>
      <h2 className="text-lg text-black font-bold">{props.title}</h2>
      <p className="text-sm text-gray-500">
        {props.intro}
      </p>
      <button onClick={props.showBloggDetails} 
      className="text-blue-500 font-bold mt-2 hover:text-blue-800">Read More 
      <pre> <small>click to view fullcontent</small></pre></button>
      <div className="text-red-500 mt-2">
        {/* <button 
        onClick={props.editBloggDetails}
        className="mr-2 hover:text-blue-800">Edit </button> 
        <button 
        onClick={props.deleteBloggDetails}
        className="ml-2">Delete </button> */}
      </div>
    </div>
  );
};

export default BloggCard;
