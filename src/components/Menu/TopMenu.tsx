import { Fragment } from 'react';
import { topNav } from './menu';

const TopMenu = () => {
    return (
        <div className='flex items-center justify-start container h-top-navbar'>
            <div className='text-white text-sm flex items-center gap-6'>
                {topNav.map((item) => {
                    return (
                        <div className='flex items-center gap-2' key={item.key}>
                            <item.icon className='text-txt-navbar text-[36px] border border-txt-navbar rounded-full p-2' />
                            {item.content && <p>{item.content}</p>}
                            {item.phone && (
                                <p className='flex items-center'>
                                    {item.phone?.map((phone) => {
                                        return (
                                            <Fragment key={phone.key}>
                                                <span>
                                                    {phone?.phoneNumber}
                                                </span>
                                                <span className='last:hidden mx-1'>
                                                    -
                                                </span>
                                            </Fragment>
                                        );
                                    })}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopMenu;
