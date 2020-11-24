<template>
  <div class="SimplePage">
    <h1>{{ data.H1Content }}</h1>
    <h2>{{ data.TableName }}</h2>
    <app-table
      :heroes="data.Data"
      :columns="data.ColsTitles"
    >
    </app-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SimplePage',
  components: {
    AppTable: () => import('@/components/core/AppTable')
  },
  computed: {
    ...mapState(['data'])
  },
  mounted () {
    window.title = this.data.PageTitle
  }
}
</script>
