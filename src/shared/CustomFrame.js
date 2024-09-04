
function CustomFrame({ title, img }) {
    return (
        <div className='bg-[#EEEFF1] p-2 inline-flex rounded-full'>
            <img className='bg-[#A4A6B0] rounded-full p-1 mr-1.5' src={img} alt='user' />
            <p className='font-medium text-[14px] text-[#14161C]'>{title}</p>
        </div>
    );
}
export default CustomFrame;