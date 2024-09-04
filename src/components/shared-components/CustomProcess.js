import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useState } from 'react';
function CustomProcess({ title, details }) {
    const [activeDetails, setActiveDetails] = useState(false)
    const handleActiveDetails = () => {
        if (activeDetails) {
            setActiveDetails(false)
        }
        else setActiveDetails(true)
    }

    return (

        <div className='p-9 shadow rounded-3xl'>
            <div className='flex justify-between'>
                <p className='text-2xl font-medium my-4 text-[#14161C]'>{title}</p>
                <div className='flex flex-col justify-center'>
                    {activeDetails ? <div onClick={handleActiveDetails}> <HorizontalRuleIcon /></div> : <div onClick={handleActiveDetails}> <AddIcon /></div>}
                </div>
            </div>
            <p className={`text-[#464851] text-[16px] font-normal ${activeDetails ? "flex" : "hidden"}`}>
                {details}</p>
        </div>
    );
}
export default CustomProcess;