<script>
import { useTimer } from '../use/useTimer'
import { useCounter } from '../use/useCounter'
import { useDataFetcher } from '../use/useDataFetcher'

export default {
  name: 'Home',
  setup() {
	const { timerDetails } = useTimer({secondsValue: 10})
	const { count, incrementCounter } = useCounter();
	const { isFetching, apiDetails } = useDataFetcher({url: 'http://dummy.restapiexample.com/api/v1/employees'})

	return {
		count,
		incrementCounter,
		timerDetails,
		isFetching,
		apiDetails
	};
  },
};
</script>
<template>
  <div class="wrapper">
    <div style="display: flex;flex-direction: column">
      <label style="font-weight: bold;">count:  {{ count }}</label>
      <button
        class="btn"
        @click="incrementCounter"
      >
        Increment Counter
      </button>
    </div>
    <div>
      <div class="timerdetails">
        <div class="row">
          <span class="heads">Remaining Seconds</span> : {{ timerDetails.seconds }}
        </div>
        <div class="row">
          <span class="heads">Is TimerActive</span> : {{ timerDetails.isActive }}
        </div>
      </div>
    </div>
    <div>
      <div class="elabel">
        <h3>Employee List</h3>
      </div>
      <div class="employee">
        <div v-if="!isFetching">
          <div
            v-for="elem in apiDetails.data"
            :key="elem"
            class="elist"
          >
            <div class="eitem">
              {{ elem.employee_name }}
            </div>
          </div>
        </div>
        <div
          v-else
          class="loading"
        >
          Loading ...
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper{
    display: flex;
	flex-direction: column;
    justify-content: space-around;
	align-items: center;
    .btn {
        margin-top: 10px;
        color: white;
        background: red;
        outline: none;
        border: none;
        padding: 15px 30px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }
	.heads{
		font-size: 16px;
	}
	.timerdetails{
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 30px;
		.row{
			font-size: 14px;
			font-weight: bold;
			color: white;
			background: green;
			padding: 10px;
			margin: 0px 10px;
		}
	}
	.employee {
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		.loading {
			font-size: 20px;
			font-weight: 600;
		}
	}
	.elabel {
		margin-top: 10px;
		font-size: 16px;
	}
	.eitem{
		border: 1px solid #e0e0e0;
		padding: 10px;
		width: 200px;
		font-weight: 600;
		&:hover{
			background-color: #ccc;
			color: white;
		}
	}
}
</style>
