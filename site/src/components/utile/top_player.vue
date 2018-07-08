<template>
  <div class="top-player">
     <div v-if="show == 9.4">
         <vue-good-table
           title="مخدم 9.4"
           theme='nocturnal'
           :columns="columns"
           :rows="rows.server94"
           :totalRows="count.server94"
           :paginate="true"
           :paginationOptions="{
              enabled: true,
              perPage: 15,
              position: 'bottom',
              perPageDropdown: [5,10,15],
              dropdownAllowAll: false,
              setCurrentPage: 1,
              nextLabel: 'التالية',
              prevLabel: 'السابقة',
              rowsPerPageLabel: 'عرض النتائج بالصفحة',
              ofLabel: 'من',
              allLabel: 'عرض الكل',
            }"
           :lineNumbers="true"
           :rtl="true"
           :search-options="{
              enabled: true,
              placeholder: 'البحث عن اللاعب'
            }"
           :defaultSortBy="{field: 'lv', type: 'desc'}"
           styleClass="table table-bordered table-striped">
           <template slot="table-column" slot-scope="props">
               <span v-if="props.column.label == 'status'">
                  #
               </span>
               <span v-else>
                  {{props.column.label}}
               </span>
           </template>
           <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'status'">
                   <img title="Online" v-if="props.row.status" class="icon-resize" src="../../assets/status/online.png"/>
                   <img title="Offline" v-if="!props.row.status" class="icon-resize" src="../../assets/status/offline.png"/>
                </span>
                <span v-else-if="props.column.field == 'gender'">
                   <img title="Boy" class="icon-resize" v-if="props.row.gender === 2" src="../../assets/gender/boy/1.png"/>
                   <img title="Girl" class="icon-resize" v-if="props.row.gender === 1" src="../../assets/gender/girl/1.png"/>
                </span>
                <span v-else-if="props.column.field == 'class'">
                   <img title="Class" class="icon-resize" :src="`../../../static/class/${props.row.class}.jpg`"/>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
           </template>
           <div slot="emptystate" style="text-align: center">
               جاري تحميل المعلومات ....
           </div>
         </vue-good-table>
     </div>
      <div v-else-if="show == 7.2">
        <vue-good-table
          title="مخدم 7.2"
          theme='nocturnal'
          :columns="columns"
          :rows="rows.server72"
          :totalRows="count.server72"
          :paginate="true"
          :paginationOptions="{
              enabled: true,
              perPage: 15,
              position: 'bottom',
              perPageDropdown: [5,10,15],
              dropdownAllowAll: false,
              setCurrentPage: 1,
              nextLabel: 'التالية',
              prevLabel: 'السابقة',
              rowsPerPageLabel: 'عرض النتائج بالصفحة',
              ofLabel: 'من',
              allLabel: 'عرض الكل',
            }"
          :lineNumbers="true"
          :rtl="true"
          :search-options="{
              enabled: true,
              placeholder: 'البحث عن اللاعب'
            }"
          :defaultSortBy="{field: 'lv', type: 'desc'}"
          styleClass="table table-bordered table-striped">
          <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'status'">
                   <img title="Online" v-if="props.row.status" class="icon-resize" src="../../assets/status/online.png"/>
                   <img title="Offline" v-if="!props.row.status" class="icon-resize" src="../../assets/status/offline.png"/>
                </span>
            <span v-else-if="props.column.field == 'gender'">
                   <img title="Boy" class="icon-resize" v-if="props.row.gender === 2" src="../../assets/gender/boy/1.png"/>
                   <img title="Girl" class="icon-resize" v-if="props.row.gender === 1" src="../../assets/gender/girl/1.png"/>
                </span>
            <span v-else-if="props.column.field == 'class'">
                   <img title="Class" class="icon-resize" :src="`../../../static/class/${props.row.class}.jpg`"/>
                </span>
            <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
          </template>
          <div slot="emptystate" style="text-align: center">
            جاري تحميل المعلومات ....
          </div>
        </vue-good-table>
      </div>
     <div v-else-if="show == 'top10'">
           <table>
             <thead>
             <tr>
               <th>التخصص</th>
               <th>اللفل</th>
               <th>الأسم</th>
               <th>#</th>
             </tr>
             </thead>
             <tbody>
                 <tr v-for="row in rows.top10">
                   <td><img :src="`../../../static/class/${row.class}.jpg`" alt="class" title="Class" /></td>
                   <td>{{row.lv}}</td>
                   <td>{{row.name}}</td>
                   <td>{{row.rank}}</td>
                 </tr>
             </tbody>
           </table>
     </div>
  </div>
</template>

<script>
  import Character from "../../api/Character";

  export default {
      name: "top_player",
      props: ['show'],
      data(){
        return {
          columns: [
            {
              label: 'الاسم',
              field: 'name',
              type: 'string',
              sortable: true,
              filterable: true,
            },
            {
              label: 'اللفل',
              field: 'lv',
              type: 'number',
              sortable: true,
              filterable: true,
            },
            {
              label: 'التخصص',
              field: 'class',
              sortable: true,
              filterable: true,
              html: true
            },
            {
              label: 'الجنس',
              field: 'gender',
              sortable: true,
              filterable: true,
              html: true
            },
            {
              label: 'الكتيبة',
              field: 'guild',
              sortable: true,
              filterable: true,
              html: true,
              hidden: true
            },
            {
              label: ' نقاط النمط',
              field: 'pk',
              sortable: true,
              filterable: true,
            },
            {
              label: 'الحاله',
              field: 'status',
              sortable: true,
              filterable: true,
              html: true,
              hidden: false
            },
          ],
          rows: {
            server94: [],
            server72: [],
            top10: [],
          },
          count: {
            server94: 0,
            server72: 0
          },
        };
      },
      methods: {
        getTopData() {
            Character.getTop()
              .then(({top10,server94,server72}) => {
                 //console.log(values);
                    this.rows.top10 = top10;
                    this.rows.server94 = server94;
                    this.rows.server72 = server72;
                    this.count.server94 = server94.length;
                    this.count.server72 = server72.length;
              })
         }
      },
      created() {
         this.getTopData();
      },
      computed: {
      },
    }
</script>

<style lang="sass" scoped>
  .icon-resize
    width: 20px
    height: 20px
</style>
