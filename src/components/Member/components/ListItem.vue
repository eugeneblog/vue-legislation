<template>
    <div>
      <div>
       {{ listData.content }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    listData: Object
  }
}
</script>
