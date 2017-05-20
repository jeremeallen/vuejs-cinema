<template>
  <div 
    class='check-filter' 
    @click='checkFilter' 
    :class='{ "check-filter": true, active: checked}'
  >
  <span class='checkbox'></span>
  <span class='check-filter-title'>
    {{ title }}
  </span>
  </div>
</template>
<script>
  export default {
    name: 'check-filter',
    props: [
      'title',
    ],
    data() {
      return {
        checked: false,
      }
    },
    methods: {
      checkFilter() {
        this.checked = !this.checked;
        this.$emit('check-filter', 'genre', this.title, this.checked);
      },
    },
  };
</script>