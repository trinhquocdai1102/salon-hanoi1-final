import { FC } from 'react';
import { AiTwotoneBoxPlot } from 'react-icons/ai';
import { IoSpeedometer } from 'react-icons/io5';
import { MdSettings } from 'react-icons/md';

interface CarInfoProps {
    car: any;
}

const CarInfo: FC<CarInfoProps> = ({ car }) => {
    return (
        <div title={car.name}>
            <h1 className='font-bold text-xl'>{car.name}</h1>
            <p className='my-2'>
                <span className='mr-2'>Giá:</span>
                <span className='text-txt-highlight font-semibold'>
                    {car.price}
                </span>
            </p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm text-third'>
                    <IoSpeedometer />
                    <p className='ml-2'>
                        130
                        <span>km</span>
                    </p>
                </div>
                <div className='flex items-center text-sm text-third'>
                    <AiTwotoneBoxPlot />
                    <p className='ml-2'>
                        1300
                        <span>cc</span>
                    </p>
                </div>
                <div className='flex items-center text-sm text-third'>
                    <MdSettings />
                    <p className='ml-2'>Số sàn</p>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;
