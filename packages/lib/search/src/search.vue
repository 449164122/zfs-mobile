<!--
 * @Author: 李韬
 * @Date: 2022-07-15 14:52:24
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-29 21:03:01
-->
<template>
  <div class="zfs-search">
    <van-search
      v-model="searchValue"
      :shape="shape"
      v-bind="$attrs"
      @search="handlerSearch"
      @input="handlerInput"
      @focus="handlerFocus"
      @blur="handlerBlur"
      @clear="handlerClear"
      @cancel="handlerCancel"
      :placeholder="placeholder"
    >
      <i slot="left-icon" class="icon-search"></i>
    </van-search>
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'zfsSearch',
  props: {
    value: String,
    shape:{
      type: String,
      default: 'round',
    },
    placeholder:{
      type: String,
      default: '搜索',
    }
  },
  data() {
    return {
      isCenter: true,
      showList: [],
    }
  },
  computed: {
    searchValue() {
      return this.value;
    }
  },
  methods: {
    handlerSearch(value) {
      this.$emit('search', value);
    },
    handlerInput(value) {
      this.$emit('input', value);
    },
    handlerFocus(event) {
      this.$emit('focus', event);
    },
    handlerBlur(event) {
      this.$emit('blur', event);
    },
    handlerClear(event) {
      this.$emit('clear', event);
    },
    handlerCancel() {
      this.$emit('cancel');
    },
  }
}
</script>