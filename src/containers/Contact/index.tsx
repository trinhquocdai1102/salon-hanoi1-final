import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactForm } from './contact';
import toast from 'react-hot-toast';
import Banner from '../../components/Slider/Banner';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import Map from '../../components/Map';

interface IContact {
    key: string;
    label: string;
    name: string;
    value: string;
    type: string;
    required: boolean;
}

const ContactComponent = () => {
    const initialValue = {
        key: '',
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
    };
    const [value, setValue] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<any>(null);
    const key = 'AIzaSyC-nlGzaiSYBi5BGzP42iJ7Riy-UpWT0dc';

    const handleChangeValueInput = (e: any, item: IContact) => {
        if (item.value === 'user_name') {
            setValue({
                ...value,
                user_name: e.target.value,
            });
        } else if (item.value === 'user_email') {
            setValue({
                ...value,
                user_email: e.target.value,
            });
        } else if (item.value === 'user_phone') {
            setValue({
                ...value,
                user_phone: e.target.value,
            });
        }
    };

    const handleSendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                'service_salonhanoi1',
                'template_salonhanoi1',
                value,
                'x053gTcoI5UY44x-E'
            )
            .then(
                (result: any) => {
                    toast.success('Bạn đã gửi thông tin thành công');
                    formRef.current.reset();
                    setLoading(false);
                },
                (error: any) => {
                    setLoading(false);
                    toast.error(error);
                }
            );
    };
    return (
        <div>
            <Banner />
            <div className='py-[60px]'>
                <div className='container'>
                    <h1 className='uppercase text-[40px] text-center mb-[40px]'>
                        Thông tin{' '}
                        <span className='text-txt-highlight'>liên hệ</span>
                    </h1>
                    <div className='flex justify-between md:flex-row flex-col gap-4'>
                        <div className='w-full md:w-1/3 text-center'>
                            <div className='bg-txt-highlight w-[60px] h-[60px] text-[24px] flex items-center justify-center text-white rounded-md mx-auto'>
                                <FaPhoneAlt />
                            </div>
                            <p className='max-w-[360px] my-[16px] mx-auto'>
                                0968680977
                            </p>
                        </div>
                        <div className='w-full md:w-1/3 text-center'>
                            <div className='bg-txt-highlight w-[60px] h-[60px] text-[24px] flex items-center justify-center text-white rounded-md mx-auto'>
                                <FiMail />
                            </div>
                            <p className='max-w-[360px] my-[16px] mx-auto'>
                                trinhquocdai1102@gmail.com
                            </p>
                        </div>
                        <div className='w-full md:w-1/3 text-center'>
                            <div className='bg-txt-highlight w-[60px] h-[60px] text-[24px] flex items-center justify-center text-white rounded-md mx-auto'>
                                <MdLocationPin />
                            </div>
                            <p className='max-w-[360px] my-[16px] mx-auto'>
                                Số 1B Nguyễn Văn Huyên, Phường Nghĩa Đô, Quận
                                Cầu Giấy, TP. Hà Nội
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-full md:w-1/2'>
                    <Map />
                </div>
                <div
                    className='w-full md:w-1/2'
                    style={{
                        background:
                            "url('./images/contact-form-bg.jpg') center center no-repeat",
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='bg-third w-full h-full flex justify-center items-center'>
                        <div className='bg-white w-4/5 max-w-[500px] p-[24px] md:p-[32px] rounded-md'>
                            <form ref={formRef} onSubmit={handleSendEmail}>
                                <div className='w-full'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col gap-4 w-full'>
                                            {contactForm.map((item) => {
                                                return (
                                                    <div
                                                        key={item.key}
                                                        className='w-full'
                                                    >
                                                        <div>
                                                            <input
                                                                className='bg-main py-2 px-4 w-full focus:outline focus:outline-top-navbar'
                                                                placeholder={`${
                                                                    item.placeholder
                                                                }${
                                                                    item.required
                                                                        ? '*'
                                                                        : ''
                                                                }`}
                                                                required={
                                                                    item.required
                                                                }
                                                                type={item.type}
                                                                name={item.name}
                                                                id={item.key}
                                                                onChange={(e) =>
                                                                    handleChangeValueInput(
                                                                        e,
                                                                        item
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full'>
                                                <textarea
                                                    name='message'
                                                    className='bg-main py-2 px-4 h-[150px] max-h-[150px] min-h-[150px] md:w-full w-4/5 rounded-sm'
                                                    placeholder='Nhập lời nhắn...'
                                                    onChange={(e) =>
                                                        setValue({
                                                            ...value,
                                                            message:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 flex items-center justify-center md:justify-end w-full'>
                                    {loading ? (
                                        'Loading...'
                                    ) : (
                                        <input
                                            type='submit'
                                            value='Hoàn tất'
                                            className='bg-top-navbar py-3 px-8 rounded-md text-white font-semibold uppercase text-sm cursor-pointer hover:opacity-90'
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
