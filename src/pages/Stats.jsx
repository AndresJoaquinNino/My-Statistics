import { Charts, Problems } from '../components';
import { getSurveyData, getDataType } from '../api';
import { useApi } from '../hooks';

function Stats() {
    const [data, fetchError, isLoading] = useApi(getSurveyData);
    const [dataTypes] = useApi(getDataType);

    return (
        <>
            {
                !fetchError
                &&
                !isLoading
                &&
                <Charts data={data} dataTypes={dataTypes} />
            }
            {
                fetchError
                &&
                <Problems />
            }
        </>
    );
}

export default Stats;
