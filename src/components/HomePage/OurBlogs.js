import Frame5 from '../../assets/Frame5.png'
import CustomFrame from '../../shared/CustomFrame';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomBlog from '../shared-components/CustomBlog';
import resourcesFrame from '../../assets/ResourcesFrame.png'
import newsFrame from '../../assets/NewsFrame.png'
import articleFrame from '../../assets/ArticleFrame.png'
import blog1 from '../../assets/Blog1.png'
import blog2 from '../../assets/Blog2.png'
import blog3 from '../../assets/Blog3.png'

function OurBlogs() {
    const blogs = [
        {
            name: "Resources",
            title: "Here’s how decorate your new home from scratch",
            img: blog1,
            date: "Mar 30 , 2024",
            frame: resourcesFrame,

        },
        {
            name: "News",
            title: "Home buying basics: How many bedrooms and bathrooms?",
            img: blog2,
            date: "Mar 28 , 2024",
            frame: newsFrame,

        },
        {
            name: "Articles",
            title: "First-time homebuyer’s guide: Steps for beginners",
            img: blog3,
            date: "Mar 26 , 2024",
            frame: articleFrame,
        }
    ]

    return (
        <div data-aos="fade-in" className="lg:mt-40 mt-20 container mx-auto">
            <div >
                <CustomFrame title="Our Blogs" img={Frame5} />
                <div className='flex justify-between'>
                    <p className='text-5xl  font-normal my-4 text-[#14161C]'>Read our latest blog</p> <p className='my-8 text-[16px] cursor-pointer font-medium'>Browse all articles <ArrowForwardIosIcon style={{ fontSize: 10, marginLeft: 3 }} /></p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {blogs?.map(blog =>
                        <div>
                            <CustomBlog
                                key={blog?.name}
                                name={blog?.name}
                                title={blog?.title}
                                img={blog?.img}
                                frame={blog?.frame}
                                date={blog.date} />
                        </div>)}
                </div>

            </div>
        </div>
    );
}
export default OurBlogs;