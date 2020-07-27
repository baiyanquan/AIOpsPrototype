<template>
    <div>
        <Navigation/>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title">告警信息</div>
                        </el-col>
                        <el-col :span="2">
                            <el-button size="mini" type="success">全部设为已读</el-button>
                        </el-col>
                    </el-row>
                </el-row>
                <el-row style="margin-top: 10px">
                    <template>
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    label="id"
                                    width="130">
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
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                            size="mini"
                                            type="primary"
                                            @click="preliminary_analysis(scope.$index, scope.row)">告警分析</el-button>
                                    <el-button
                                            size="mini"
                                            type="success">设为已读</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-row>
                <el-row style="margin-bottom: 40px">
                    <el-col :span="11">
                        <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                            <el-col :span="4">
                                <div class="title">系统状态</div>
                            </el-col>
                            <el-col :span="4">
                                <el-button size="mini" type="primary" @click="viewKG">查看详情</el-button>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 10px; display: flex; align-items: center">
                            <div class="demo-image">
                                <div class="block">
                                    <el-image
                                            style="width: 100%"
                                            :src="homepage_KG_url"
                                            fit="fill"></el-image>
                                </div>
                            </div>
                        </el-row>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                            <el-col :span="4">
                                <div class="title">日志统计</div>
                            </el-col>
                            <el-col :span="4">
                                <el-date-picker
                                        v-model="value1"
                                        type="datetimerange"
                                        size="mini"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 10px; display: flex; align-items: center">
                            <div class="demo-image">
                                <div class="block">
                                    <el-image
                                            style="width: 100%"
                                            :src="homepage_log_statistics_url"
                                            fit="fill"></el-image>
                                </div>
                            </div>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "Homepage",
        components: {Navigation},
        data() {
            return {
                tableData: [{
                    date: '2020-06-10 10:40:00',
                    operation_entity: 'service:carts',
                    type: "时序性能数据异常",
                    description: "CPUThrottlingHigh",
                    id: "105"
                }, {
                    date: '2020-06-10 09:40:00',
                    operation_entity: 'service:carts',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    id: "104"
                }, {
                    date: '2020-06-10 08:00:00',
                    operation_entity: 'pod:carts-abcd',
                    type: "日志异常",
                    description: "SocketTimeoutException",
                    id: "103"
                }, {
                    date: '2020-06-10 07:00:00',
                    operation_entity: 'server:192.168.199.33',
                    type: "时序性能数据异常",
                    description: "KubeNodeNotReady",
                    id: "102"
                },{
                    date: '2020-06-10 06:00:00',
                    operation_entity: 'server:192.168.199.32',
                    type: "日志异常",
                    description: "MongoSocketOpenException",
                    id: "101"
                },{
                    date: '2020-06-10 05:00:00',
                    operation_entity: 'server:192.168.199.34',
                    type: "时序性能数据异常",
                    description: "etcdHTTPRequestsSlow",
                    id: "100"
                }],
                homepage_KG_url: require('../assets/homepage-KG.png'),
                homepage_log_statistics_url: require('../assets/homepage-LogStatistics.png'),
                value1: [new Date(2020, 5, 10, 16, 16, 0), new Date(2020, 5, 10, 16, 16, 30)],
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            preliminary_analysis(index, row){
                let status = '';
                if(row.type === '时序性能数据异常'){
                    status = 'performance';
                }
                else{
                    status = 'log'
                }
                this.$router.push({ path: '/alarm-monitoring/anomaly-preliminary-analysis', query: { status: status }})
            },
            viewKG(){
                this.$router.push('/data-management/system-status-management');
            }
        }
    }
</script>

<style scoped>
    .title{
        margin-left: 10px;
        font-size: 16px;
        font-weight: bolder;
        color:#101010;
        height: 28px;
        line-height: 28px
    }
</style>