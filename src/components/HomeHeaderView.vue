<script setup>
import {ref} from "vue"
const tabList = ref([
  {
    "key" : '1',
    "name" : 'Home',
    "to" : '/'
  },
  {
    "key" : '2',
    'name' : 'AI',
    "to" : "ai"
  },
  {
    "key" : "3",
    "name" : 'Blog',
    "to" : 'blog'
  },
  {
    "key" : '4',
    'name' : 'Academic',
    "to" : 'academic'
  },
  {
    "key" : '5',
    "name" : 'Programming',
    "to" : 'programming'
  },
  {
    "key" : '6',
    "name" : 'University',
    "to" : 'university'
  },
  {
    "key" : '7',
    "name" : 'Resources',
    "to" : 'resources'
  },
  {
    "key" : '8',
    "name" : 'Key',
    "to" : 'key'
  },
  {
    "key" : '9',
    "name" : 'OpenSource',
    "to" : 'opensource'
  }
])
</script>
<template>
  <div class="menu-demo">
    <a-menu mode="horizontal"   :default-selected-keys=" `v-if= item.key == 1`" >
      <RouterLink :to="item.to" v-for="item in tabList">
      <a-menu-item :key="item.key" class="menu-item" >{{item.name}}</a-menu-item>
      </RouterLink>
    </a-menu>
  </div>
</template>
<style scoped>
.menu-demo {
  margin-bottom: 24px;
  width: auto;
  justify-items: center;
  justify-content: center;
  background: #2c3e50;
}
.menu-item{
  margin-left: 70px;
}

</style>
