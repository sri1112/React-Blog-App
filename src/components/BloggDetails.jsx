

const BloggDetails = (props) =>{
    
    return (
        <>
            <div className="">
                <h1 className="text-2xl text-gray-400 font-bold ">{props.bloggDetail?.title}</h1>
                <img className="rounded shadow mt-6 w-full" src={props.bloggDetail?.imageUrl} 
                alt={props.bloggDetail?.title}/>
                <p className="text-sm text-gray-700 mt-6" >{props.bloggDetail?.intro}</p>
                <p className="text-gray-700 mt-4">{props.bloggDetail?.description}</p>
               
            </div>
        </>
    )
}
export default BloggDetails

// git clone 
// npm i - zip 