  
  import Title  from "./Title/Title";
  import Multiple_Blog from "./Blogs/blogs";
  import Pagination from "./Pagination/Pagination";
  import Topbtn from "./Top_btn/Top_btn";


const Blog = () => {
     return (
        <>
           < hr className="m-0"/>
           <Title  title='Blog 01'/> 
           <Multiple_Blog/>
           <Pagination/>
           <Topbtn/>

        </>
     )
}
export default Blog;