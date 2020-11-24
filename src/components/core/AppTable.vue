<template>
  <div>
    <div class="buttonGroup">
      <button class="btn btn_success">Сохранить</button>
      <button class="btn btn_primary">
        <a download="My-File.json" :href="'data:application/octet-stream' + JSON.stringify(filteredHeroes)">Применить
          изменения</a>
      </button>
      <button class="btn btn_danger">Закрыть</button>
    </div>
    <div class="table">
      <table @click="handleDisabled($event)">
        <thead>
        <tr>
          <th v-for="(value, key) in columns"
              :key="key.date"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }">
            {{ value | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entry in filteredHeroes" :key="entry.date">
          <td
            v-for="(value, key) in columns"
            :key="key.date">
            <label>
              <input ref="input" :disabled="isEditTable" type="text" v-model="entry[key]">
            </label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroes: Array,
    columns: Object
  },
  data: function () {
    const sortOrders = {}
    for (const value in this.columns) {
      sortOrders[value] = 1
    }
    return {
      sortKey: '',
      isEditTable: true,
      oldHeroes: [],
      sortOrders: sortOrders
    }
  },
  mounted () {
    this.oldHeroes = Object.assign([], this.heroes)
  },
  computed: {
    filteredHeroes: function () {
      const sortKey = this.sortKey
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.heroes
      if (sortKey) {
        heroes = heroes.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    handleDisabled (r) {
      if (r.target.disabled) {
        this.$refs.input.forEach(item => {
          item.disabled = true
        })
      }
      r.target.disabled = false
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &_success {
    background-color: forestgreen;
  }

  &_primary {
    background-color: dodgerblue;
  }

  &_danger {
    background-color: palevioletred;
  }
}

</style>
