<template>
<div class="q-pa-md">
  <q-btn color="primary" icon-right router-link to = 'Additem'  id="button" label="Add Row" />
   <q-btn color="primary"     icon-right="archive"    label="Export to csv"  no-caps  @click="exportTable" />
  <q-table class="header-table"  title="Currency Manager" :rows="Currency" :columns="columns"  row-key="name">
    <template v-slot:body-cell-actions="props" >
      <q-td :props="props">
        <q-btn icon="mode_edit" @click="onEdit(props.row.id)"></q-btn> 
      </q-td> 
    </template>
  </q-table>
</div>
</template>
<script>
import axios from "axios";
/* import { exportFile } from 'quasar'
function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val
  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)
  formatted = formatted.split('"').join('""')
  return `"${formatted}"`
}
 */export default {
  name: "HomeView",
  components: {},
  data(){
    return {
    columns,
    Currency : [],

    };
  },
  methods: {
    onEdit(id) {
      this.$router.push("/EditPage/" + id);
    },
  },
async mounted() {
    let res = await axios.get(" http://localhost:3000/Currency");
    console.warn(res);
    
    this.Currency = res.data;
  },
   exportTable () {
      this.$.file.printed(this.Currency);
       /*  const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          this.columns.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format,
            row
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          this.q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        } */
      }

}
const columns = [
  { name: "Country_Id", label: "Country Id", field: "Id", align: "center" },
  { name: "Country", label: "Country Name", field: "country", align: "center" },
  { name: "  Country_short_cut ", label: "Country Short Cut", field: "country_short_cut", align: "center" },
  { name: " country_code ", label: "Country Code", field: "country_code", align: "center" },
  { name: "actions", label: "Action", align: "center" },
];

</script>
<style scoped>
#button{
  margin:5px;
}
</style>