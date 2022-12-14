import { Oval } from 'react-loader-spinner';

const Loader = ({ loading }) => {
    if (!loading) {
        return null;
    }

    return (
        <div className='loader'>
            <Oval
                height={80}
                width={80}
                color='#09357B'
                wrapperClass=''
                visible={loading}
                ariaLabel='oval-loading'
                secondaryColor='#09357B'
                strokeWidth={4}
                strokeWidthSecondary={4}
            />
        </div>
    )
}

export default Loader;