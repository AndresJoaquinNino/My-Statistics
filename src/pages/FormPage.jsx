import { Survey, Problems } from '../components';
import { getDataType } from '../api';
import { useApi } from '../hooks';

function FormPage() {

    const [dataTypes, fetchError, isLoading] = useApi(getDataType);

    return (
        <>
            {
                !fetchError
                &&
                !isLoading
                &&
                <Survey dataTypes={dataTypes} isLoading={isLoading} />
            }
            {
                fetchError
                &&
                <Problems />
            }
        </>
    );
}

export default FormPage;
