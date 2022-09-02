import { useState, useEffect } from "react";

const useApi = (request) => {
    const [data, setData] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await request();
                if (isMounted) {
                    setData(response);
                    setFetchError(null);
                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message);
                    setData(null);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }
        fetchData();
        const cleanUp = () => {
            isMounted = false;
        }
        return cleanUp;
    }, [request]);

    return [data, fetchError, isLoading];
}

export default useApi;