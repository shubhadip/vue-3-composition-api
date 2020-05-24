import { reactive, onMounted, onUnmounted, onUpdated } from 'vue'

export function useTimer({secondsValue}) {

  const timerDetails = reactive({
    seconds: secondsValue,
    isActive: true,
    interval: null
  })

  function update() {
    if(timerDetails.isActive && timerDetails.seconds> 0){
      timerDetails.interval = setInterval(() => {
        timerDetails.seconds = timerDetails.seconds - 1
    }, 1000);
    }
  }

  onUpdated(()=>{
    if(timerDetails.seconds == 0){
      clearInterval(timerDetails.interval);
      timerDetails.isActive = false
    }
  })
  onMounted(() => {
    update()
  })

  onUnmounted(() => {
    clearInterval(timerDetails.interval)
  })

  return { timerDetails }
}