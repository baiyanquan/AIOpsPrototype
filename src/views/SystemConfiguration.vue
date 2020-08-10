<template>
    <div>
        <Navigation/>
        <el-row style="width: 1536px">
            <el-col :span="20" :offset="2">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="title">规则配置</div>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="small" type="success">添加新规则</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="small" type="warning">导出</el-button>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                    <template>
                        <el-table
                                :data="tableData"
                                style="width: 100%;font-size:16px">
                            <el-table-column
                                    label="id"
                                    width="120">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.id }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="规则名称"
                                    width="300">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="类别"
                                    width="190">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.type }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="详细信息"
                                    width="480">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.description }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template>
                                    <el-button
                                            size="small"
                                            type="primary">修改</el-button>
                                    <el-button
                                            size="small"
                                            type="success">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-row>
                <el-row style="margin-top: 10px">
                    <el-pagination
                            layout="prev, pager, next"
                            background
                            :total="50">
                    </el-pagination>
                </el-row>

                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="title">系统设置</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="content">刷新时间</div>
                    </el-col>
                    <el-col :span="3">
                        <el-input placeholder="请输入刷新时间"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="content">偏好设置</div>
                    </el-col>
                    <el-col :span="3">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="4">
                        <div class="content">允许请求最大响应时间</div>
                    </el-col>
                    <el-col :span="3">
                        <el-input placeholder="请输入时间"></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2" style="margin-left: 10px">
                        <el-button size="medium" type="primary">编辑</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="medium" type="success">保存</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "SystemConfiguration",
        components: {Navigation},
        data() {
            return {
                tableData: [{
                    name: '日志序列异常智能检测模型接口',
                    type: "interface",
                    description: "{\"address\":\"10.60.38.173:2333\", \"interface\":\"SubModel1\"}",
                    id: "5"
                }, {
                    name: '日志属性值异常智能检测模型接口',
                    type: "interface",
                    description: "{\"address\":\"10.60.38.173:2334\", \"interface\":\"SubModel2\"}",
                    id: "4"
                }, {
                    name: '警报信息接口',
                    type: "interface",
                    description: "{\"address\":\"10.60.38.173:2335\", \"interface\":\"AlarmMessage\"}",
                    id: "3"
                }, {
                    name: '运维知识图谱接口',
                    type: "interface",
                    description: "{\"address\":\"10.60.38.173:2336\", \"interface\":\"OperationKG\"}",
                    id: "2"
                },{
                    name: '警报规则',
                    type: "restriction",
                    description: "{\"name\":\"AlarmRestriction\", \"restriction\":\"Available in 2 days\"}",
                    id: "1"
                }],
                homepage_KG_url: require('../assets/homepage-KG.png'),
                homepage_log_statistics_url: require('../assets/homepage-LogStatistics.png'),
                value1: [new Date(2020, 5, 10, 16, 16, 0), new Date(2020, 5, 10, 16, 16, 30)],
                options: [{
                    value: '明亮',
                    label: '明亮'
                }, {
                    value: '暗夜',
                    label: '暗夜'
                }],
            }
        },
    }
</script>

<style scoped>
    .title{
        margin-left: 10px;
        font-size: 18px;
        font-weight: bolder;
        color:#101010;
        height: 28px;
        line-height: 28px
    }
    .content{
        margin-left: 10px;
        font-size: 16px;
        color:#101010;
        height: 28px;
        line-height: 28px
    }
</style>