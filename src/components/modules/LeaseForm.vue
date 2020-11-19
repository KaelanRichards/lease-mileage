<template>
  <main>
    <h4>Lease calcs</h4>
    <BaseInput
      inputType="date"
      labelName="start date"
      v-model="startDate"
    />
    <BaseInput
      inputType="text"
      labelName="Enter your current mileage"
      v-model="currentMileage"
    />
    <BaseInput
      inputType="text"
      labelName="enter miles per year"
      v-model="milesPerYear"
    />
    <BaseInput
      inputType="text"
      labelName="enter amount of years in lease"
      v-model="lengthOfLeaseYears"
    />
    {{milesPerYear }}
    <BaseButton
      :onClick="this.calculateLeaseScore(currentMileage, milesPerYear, lengthOfLeaseYears, startDate)"
    >{{ buttonText }}</BaseButton>
    <h1>{{ leaseScore }}</h1>
  </main>
</template>

<script>
import leaseCalculations from "@/helper/LeaseCalculations";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "LeaseForm",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      buttonText: "Next",
  
      currentMileage: '',
      milesPerYear: '',
      lengthOfLeaseYears: '',
      startDate: '',

      leaseScore: '',
    };
  },
  methods: {
    calculateLeaseScore(currentMileageStr, milesPerYearStr, lengthOfLeaseYearsStr, startDateStr){
      console.log(currentMileageStr, milesPerYearStr, lengthOfLeaseYearsStr, startDateStr)
      if (currentMileageStr || milesPerYearStr || lengthOfLeaseYearsStr || startDateStr){
        const currentMileage = Number(currentMileageStr);
        const milesPerYear = Number(milesPerYearStr);
        const lengthOfLeaseYears = Number(lengthOfLeaseYearsStr);
        const startDate = startDateStr

        if(isNaN(currentMileage) || isNaN(milesPerYear) || isNaN(lengthOfLeaseYears)) {
          // redirect to an error page or have an error pop up
          // clear fields
        }

        const totalMiles = leaseCalculations.calculateTotalMiles(milesPerYear, lengthOfLeaseYears);
        const totalMonths =  leaseCalculations.calculateTotalMonths(lengthOfLeaseYears);
        const milesPerMonth = leaseCalculations.calculateMilesPerMonth(totalMonths, totalMiles);
        const currentMonth = leaseCalculations.calculateCurrentMonth(startDate);
        const allottedMiles = leaseCalculations.calculateAllottedMiles(currentMonth, milesPerMonth);
        const leaseScore = leaseCalculations.calculatedMileScore(currentMileage, allottedMiles);

        this.leaseScore = leaseScore
      }
    },
  },
};
</script>

<style></style>
