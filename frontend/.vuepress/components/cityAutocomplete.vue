<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <input
      type="text"
      v-model="context.model"
      v-bind="context.attributes"
      autocomplete="no"
      @keydown.enter.prevent="context.model = selection.terms[0].value"
      @keydown.down.prevent="increment"
      @keydown.up.prevent="decrement"
      @blur="context.blurHandler"
    >
    <ul
      v-if=" filteredOptions && filteredOptions.length"
      class="formulate-input-dropdown"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="option.place_id"
        v-text="option.terms[0].value"
        :data-is-selected="selection && selection.place_id === option.place_id"
        @mouseenter="selectedIndex = index"
        @click="context.model = selection.terms[0].value"
      />
    </ul>
  </div>
</template>

<style>
.formulate-input-dropdown{background-color:#fff;margin:-3px 0 0;padding:0;list-style-type:none;border:1px solid #cecece;border-top-color:#41b883;border-radius:0 0 4px 4px;box-shadow:0 0 10px rgba(0,0,0,.1)}.formulate-input-dropdown li{padding:.5em 1em;margin:0}.formulate-input-dropdown li:hover,.formulate-input-dropdown li[data-is-selected]{background-color:rgba(0,0,0,.05)}.page .theme-default-content .formulate-input{position:relative;z-index:2}
</style>

<script>

export default {
  props: {
    context: {
      type: Object,
      required: true
    },
  },
  mounted() {
    this.service = new google.maps.places.AutocompleteService();
  },
  asyncComputed: {
    filteredOptions() {
      if(!this.context.model) return []
      return new Promise((resolve, reject) => {
        this.service.getPlacePredictions({ input: this.context.model.toLowerCase(), types: ['(cities)'], componentRestrictions:{country:"il"}}, (predictions, status) => {          
          if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) return resolve([])
          if (status != google.maps.places.PlacesServiceStatus.OK) return reject(status)
          const isAlreadySelected = predictions.find(option => option.terms[0].value === this.context.model);
          if (isAlreadySelected) resolve([])
          else  resolve(predictions)
        });
      })
    }
  },
  data () {
    return {
      selectedIndex: 0,
      service: null
    }
  },
  watch: {
    model () {
      this.selectedIndex = 0
    }
  },
  computed: {
    model () {
      return this.context.model
    },
    selection () {
      if (this.filteredOptions[this.selectedIndex]) {
        return this.filteredOptions[this.selectedIndex]
      }
      return false
    }
  },
  methods: {
    increment () {
      const length = this.filteredOptions.length
      if (this.selectedIndex + 1 < length) {
        this.selectedIndex++
      } else {
        this.selectedIndex = 0
      }
    },
    decrement () {
      const length = this.filteredOptions.length
      if (this.selectedIndex - 1 >= 0) {
        this.selectedIndex--
      } else {
        this.selectedIndex = length - 1
      }
    }
  }
}
</script>