import { reactive, onMounted, ref } from 'vue'
import Axios from 'axios';

export function useDataFetcher({url}) {
    const isFetching = ref(true);
    const apiDetails = reactive({
        data: null,
        error: false,
    })

    async function fetchData() {
        try{
            const response = await Axios.get(url);
            apiDetails.data = response.data.data
        }
        catch(e){
            apiDetails.error = true
        }
        finally{
            isFetching.value = false
        }
    }

    onMounted(() => {
        fetchData()
    })

  return { isFetching, apiDetails  }
}