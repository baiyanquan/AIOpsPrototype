<template>
    <div>
        <Navigation/>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-row style="width: 1265px">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title">告警信息</div>
                        </el-col>
                        <el-col :span="2">
                            <el-button size="small" type="success">全部设为已读</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button size="small" type="warning">清除全部记录</el-button>
                        </el-col>
                        <el-col :span="2" v-if="status==='showAll'">
                            <el-button size="small" type="danger" @click="showUnreadData">筛选未读信息</el-button>
                        </el-col>
                        <el-col :span="2" v-if="status==='showUnread'">
                            <el-button size="small" type="primary" @click="showAllData">展示全部信息</el-button>
                        </el-col>
                    </el-row>
                </el-row>
                <el-row style="margin-top: 10px; width: 1280px">
                    <template>
                        <el-table
                                :data="tableData"
                                style="width: 100%"
                                :row-class-name="tableRowClassName" class="content-font">
                            <el-table-column
                                    label="id"
                                    width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.id }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="发生时间"
                                    width="250">
                                <template slot-scope="scope">
                                    <i class="el-icon-time"></i>
                                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="所在实体"
                                    width="230">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.operation_entity }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="异常类别"
                                    width="230">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.type }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="异常描述"
                                    width="230">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.description }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="操作"
                                    width="240">
                                <template slot-scope="scope">
                                    <el-button
                                            size="small"
                                            type="primary"
                                            @click="preliminary_analysis(scope.$index, scope.row)">告警分析</el-button>
                                    <el-button
                                            size="small"
                                            type="success"
                                            v-if="scope.row.status===0">设为已读</el-button>
                                    <el-button
                                            size="small"
                                            type="warning"
                                            v-if="scope.row.status===1">清除记录</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-row>
                <el-row style="margin-top: 20px; width: 1265px" v-if="status==='showAll'">
                    <el-pagination
                            layout="prev, pager, next"
                            background
                            :total="50">
                    </el-pagination>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "AnomalyAlarmInformation",
        components: {Navigation},
        data() {
            return {
                status: 'showAll',
                tableData: [],
                allData: [{
                    date: '2020-06-10 10:40:00',
                    operation_entity: 'service:carts',
                    type: "时序性能数据异常",
                    description: "CPUThrottlingHigh",
                    status: 0,
                    id: "105"
                }, {
                    date: '2020-06-10 09:40:00',
                    operation_entity: 'service:carts',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    status: 0,
                    id: "104"
                }, {
                    date: '2020-06-10 08:00:00',
                    operation_entity: 'pod:carts-abcd',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    status: 0,
                    id: "103"
                }, {
                    date: '2020-06-10 07:00:00',
                    operation_entity: 'server:192.168.199.33',
                    type: "时序性能数据异常",
                    description: "KubeNodeNotReady",
                    status: 0,
                    id: "102"
                },{
                    date: '2020-06-10 06:00:00',
                    operation_entity: 'server:192.168.199.32',
                    type: "日志异常",
                    description: "MongoSocketOpenException",
                    status: 0,
                    id: "101"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    status: 0,
                    id: "100"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    status: 1,
                    id: "100"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    status: 1,
                    id: "100"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    status: 1,
                    id: "100"
                }],
                unreadData: [{
                    date: '2020-06-10 10:40:00',
                    operation_entity: 'service:carts',
                    type: "时序性能数据异常",
                    description: "CPUThrottlingHigh",
                    status: 0,
                    id: "105"
                }, {
                    date: '2020-06-10 09:40:00',
                    operation_entity: 'service:carts',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    status: 0,
                    id: "104"
                }, {
                    date: '2020-06-10 08:00:00',
                    operation_entity: 'pod:carts-abcd',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    status: 0,
                    id: "103"
                }, {
                    date: '2020-06-10 07:00:00',
                    operation_entity: 'server:192.168.199.33',
                    type: "时序性能数据异常",
                    description: "KubeNodeNotReady",
                    status: 0,
                    id: "102"
                },{
                    date: '2020-06-10 06:00:00',
                    operation_entity: 'server:192.168.199.32',
                    type: "日志异常",
                    description: "MongoSocketOpenException",
                    status: 0,
                    id: "101"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    status: 0,
                    id: "100"}],
            }
        },
        created(){
          this.tableData = this.allData;
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (row.status === 0) {
                    return 'warning-row';
                } else {
                    return 'success-row';
                }
            },
            showUnreadData(){
                this.tableData = this.unreadData;
                this.status = "showUnread"
            },
            showAllData(){
                this.tableData = this.allData;
                this.status = "showAll"
            },
            preliminary_analysis(index, row){
                let status = '';
                if(row.type === '时序性能数据异常'){
                    status = 'performance';
                }
                else{
                    status = 'log'
                }
                this.$router.push({ path: 'anomaly-preliminary-analysis', query: { status: status }})
            }
        },
    }
</script>

<style>
    .el-table .warning-row {
        background: #EF7F7F;
    }

    .el-table .success-row {

    }
    .title{
        margin-left: 10px;
        font-size: 18px;
        font-weight: bolder;
        color:#101010;
        height: 28px;
        line-height: 28px
    }
    .content-font{
        font-size: 16px;
    }
</style>