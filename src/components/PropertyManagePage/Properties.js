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
import propertyFrame from '../../assets/propertyFrame.png'
import CustomProperty from '../shared-components/CustomProperty';
function Properties() {
    const blogs = [
        {
            name: "For sale",
            title: "Here’s how decorate your new home from scratch",
            img: blog1,
            date: "Mar 30 , 2024",
            frame: propertyFrame,

        },
        {
            name: "For sale",
            title: "Home buying basics: How many bedrooms and bathrooms?",
            img: blog2,
            date: "Mar 28 , 2024",
            frame: propertyFrame,

        },
        {
            name: "For sale",
            title: "First-time homebuyer’s guide: Steps for beginners",
            img: blog3,
            date: "Mar 26 , 2024",
            frame: propertyFrame,
        }
    ]

    return (
        <div className='container mx-auto rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    {blogs?.map(blog =>
                        <div>
                            <CustomProperty
                                key={blog?.name}
                                name={blog?.name}
                                title={blog?.title}
                                img={blog?.img}
                                frame={blog?.frame}
                                date={blog.date} />
                        </div>)}
                </div>
        </div>
    );
}
export default Properties;