<template>
    <div>
      <div v-for="item in listData" :key="item.id">
        {{ item.name + ' : ' + item.value }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    listData: Array
  }
}
</script>
