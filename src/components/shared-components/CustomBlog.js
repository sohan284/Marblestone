
import calender from '../../assets/Calendar.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function CustomBlog({name, img, title, frame, date }) {


    return (

        <div className='mt-10 relative p-5 rounded-3xl shadow-xl'>
                <div className='bg-white p-1 px-2 inline-flex rounded-full absolute top-10 left-10'>
                    <img className=' rounded-full p-1' src={frame} alt='user' />
                    <p className='font-medium mt- text-[14px] text-[#14161C]'>{name}</p>
                </div>

            <img className='rounded-3xl w-full shadow-md' src={img} alt='blog' />
            <p className='mt-6 text-2xl font-medium'>{title}</p>
            <div className='flex justify-between mt-6'>
                <p className='flex text-[16px] text-[#A4A6B0]'>
                    <img className='mr-1' src={calender} alt='cal' />{date}</p>
                <p className='text-[16px] font-medium cursor-pointer'>Read More
                    <ArrowForwardIosIcon style={{ fontSize: 10, marginLeft: 3 }} />
                </p>
            </div>
        </div>
    );
}
export default CustomBlog;