import BloggCard from "./BloggCard";

const Blogs = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-12 mt-6">
        {props.bloggs.map((blogg, i) => {
          return (
            <BloggCard
              key={i}
              date={blogg.date}
              title={blogg.title}
              intro={blogg.intro}
              showBloggDetails = {()=>{
                props.setBloggIndex(i)
              }}
              editBloggDetails = {()=>{
                props.setBloggIndex(i)
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
