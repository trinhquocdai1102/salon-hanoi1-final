const Loading = () => {
    return (
        <div id='preloader' className='preloader'>
            <div className='preloader-inner'>
                <span className='dot'></span>
                <div className='dots'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
