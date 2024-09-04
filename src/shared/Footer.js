import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import logo from '../assets/Group.png'
function Footer() {
    return (
        <div className=' text-white rounded-3xl mt-20 py-[105px] px-5 lg:px-[100px] bg-[#14161C]'>
            <div className=" grid lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl">Discover exclusive real <br /> estate opportunities</h1>
                    <p className="text-[16px] text-[#A4A6B0] pt-4">Where every property is a step closer to your perfect life.
                        <br />  Your trusted real estate partner, turning visions into reality.</p>
                    <div className='relative'>
                        <input className="mt-8 mb-3 text-[16px] font-semibold px-4 py-[10px] lg:w-[410px]  rounded-full bg-[#202127]" placeholder="Enter your email address" />
                        <button className="bg-white text-[16px] hover:bg-gray-300 rounded-full text-black py-1.5 pl-3 pr-2 font-medium lg:absolute top-[34px] lg:left-[280px]">
                            <div className='flex'>
                                Subscribe <div className='bg-black ml-2 rounded-full p-1 text-[2px] text-white'><ArrowForwardIcon color='white' fontSize='small' /></div>
                            </div>
                        </button>
                    </div>
                    <div className='mt-3 pb-20'>
                        <FacebookIcon className='mx-1' />
                        <TwitterIcon className='mx-1' />
                        <InstagramIcon className='mx-1' />
                        <LinkedInIcon className='mx-1' />
                    </div>

                </div>
                <div>
                    <p className='text-xl font-medium mb-3'>Main Pages</p>
                    <div className='grid grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <ul className='text-[16px] font-light'>
                                <li className='my-2 hover:underline cursor-pointer'>Home</li>
                                <li className='my-2 hover:underline cursor-pointer'>About</li>
                                <li className='my-2 hover:underline cursor-pointer'>Properties</li>
                                <li className='my-2 hover:underline cursor-pointer'>Location CMS</li>
                                <li className='my-2 hover:underline cursor-pointer'>Property CSM</li>
                                <li className='my-2 hover:underline cursor-pointer'>Type CMS Sales</li>
                                <li className='my-2 hover:underline cursor-pointer'>Property single</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-[16px] font-light '>
                                <li className='my-2 hover:underline cursor-pointer'>Agents</li>
                                <li className='my-2 hover:underline cursor-pointer'>Agents single</li>
                                <li className='my-2 hover:underline cursor-pointer'>Blog</li>
                                <li className='my-2 hover:underline cursor-pointer'>Blog post</li>
                                <li className='my-2 hover:underline cursor-pointer'>Post a free property</li>
                                <li className='my-2 hover:underline cursor-pointer'>Post a paid property</li>
                                <li className='my-2 hover:underline cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-[16px] font-light'>
                                <li className='my-2 hover:underline cursor-pointer'>FAQs</li>
                                <li className='my-2 hover:underline cursor-pointer'>Property Management</li>
                                <li className='my-2 hover:underline cursor-pointer'>Owner Resource Page</li>
                                <li className='my-2 hover:underline cursor-pointer'>Resident Resource Page</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex lg:flex-row flex-col-reverse'>
                <div>
                    <img src={logo} alt='logo' className='lg:mt-12 mt-20 w-52' />
                    <p className='text-xs mt-5 font-thin'>Powered by Backbencher Studio</p>
                </div>
                <div className='lg:ml-[37%] mt-10'>
                    <h1 className='text-xl font-medium mb-5'>Contact Us</h1>
                    <div className='grid grid-cols-2 gap-5 gap-y-8'>
                        <div className='flex'>
                            <EmailIcon />
                            <div className='ml-2'>
                                <p className='text-[#A4A6B0] font-normal'>Email Address</p>
                                <p className='font-medium'>info@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <WorkIcon />
                            <div className='ml-2'>
                                <p className='text-[#A4A6B0] font-normal'>Sales executives</p>
                                <p className='font-medium'>sales@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <EmailIcon />
                            <div className='ml-2'>
                                <p className='text-[#A4A6B0] font-normal'>Phone Number</p>
                                <p className='font-medium'>+880 1788175088</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <EmailIcon />
                            <div className='ml-2'>
                                <p className='text-[#A4A6B0] font-normal'>Help & support</p>
                                <p className='font-medium'>support@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;