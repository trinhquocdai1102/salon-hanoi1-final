import { FC, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface MapProps {}

const Map: FC<MapProps> = () => {
    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setLoading(false);
    };
    return (
        <>
            <div id='map' className='h-[600px] w-full relative'>
                {loading ? (
                    <div className='absolute top-0 right-0 left-0 flex items-center justify-center'>
                        <ClipLoader
                            color='#ed563b'
                            size={80}
                            aria-label='Loading Spinner'
                            data-testid='loader'
                        />
                    </div>
                ) : null}
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.856514060046!2d105.79657408697553!3d21.04416546835265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab395e622385%3A0x60c13ceb686d2001!2zMSDEkC4gTmd1eeG7hW4gVsSDbiBIdXnDqm4sIE5naMSpYSDEkMO0LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1668995807896!5m2!1svi!2s'
                    className='h-full w-full'
                    allowFullScreen
                    loading='lazy'
                    onLoad={handleLoad}
                    frameBorder='0'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='map'
                ></iframe>
            </div>
        </>
    );
};

export default Map;
