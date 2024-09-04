import arrow from '../assets/Element.png'
function CustomButton({title}){
    return(
        <div className="bg-[#990A05] hover:scale-105 hover:bg-[#812522] h-10 relative text-white flex justify-between rounded-full px-[24px] py-[8px]">
            <button className="text-[16px] text-nowrap mr-5">{title}</button>
            <img className='bg-white absolute right-1 rounded-full p-2' src={arrow} />
        </div>
    );
}
export default CustomButton;