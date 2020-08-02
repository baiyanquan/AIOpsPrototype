<template>
    <div>
        <Navigation/>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <el-button size="medium" type="primary" v-if="status===0">图谱状态</el-button>
                        <el-button size="medium" type="primary" v-else plain @click="status=0">图谱状态</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="medium" type="success" v-if="status===1">图谱设置</el-button>
                        <el-button size="medium" type="success" v-else plain @click="status=1">图谱设置</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="medium" type="warning" v-if="status===2">图谱构建</el-button>
                        <el-button size="medium" type="warning" v-else plain @click="status=2">图谱构建</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="medium" type="danger" v-if="status===3">删除图谱</el-button>
                        <el-button size="medium" type="danger" v-else plain @click="status=3">删除图谱</el-button>
                    </el-col>
                    <el-col :span="2" :offset="10" v-show="!status">
                        <div class="title">当前时间戳</div>
                    </el-col>
                    <el-col :span="2" v-show="!status">
                        <el-date-picker
                                v-model="time1"
                                type="datetime"
                                placeholder="选择日期时间">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <div v-show="!status">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
                    </el-row>
                    <el-row style="margin-bottom: 40px; justify-content:center; display: flex; align-items: center">
                        <div class="demo-image">
                            <div class="block">
                                <el-image
                                        style="width: 100%"
                                        :src="system_status_management_KG_url"
                                        fit="fill"></el-image>
                            </div>
                        </div>
                    </el-row>
                </div>

                <div v-show="status===1">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="title">运维知识图谱设置</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">默认环境</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="k8s" v-model="default_env"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">显示实体列表</div>
                        </el-col>
                        <el-col :span="6">
                            <el-input placeholder="实体列表" v-model="show_entity_list"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">显示风格</div>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="style1" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
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
                </div>

                <div v-show="status===2">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="title">基础信息</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">图谱类型</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="k8s" v-model="default_env"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">图谱名称</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="图谱名称" v-model="kg_name"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">更新方式</div>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="options1[0].value" placeholder="请选择">
                                <el-option
                                        v-for="item in options1"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>

                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title">本体层构建</div>
                        </el-col>
                        <el-col :span="5">
                            <el-link>点击此处预览或下载本体层模板及规则</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip" style="margin-left: 10px">请上传与模板匹配的文件！</div>
                        </el-upload>
                    </el-row>

                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title">数据层构建</div>
                        </el-col>
                        <el-col :span="5">
                            <el-link>点击此处预览或下载数据层模板及规则</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip" style="margin-left: 10px">请上传与模板匹配的文件！</div>
                        </el-upload>
                    </el-row>

                    <el-row style="margin-top: 20px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2" style="margin-left: 10px">
                            <el-button size="medium" type="primary">提交</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button size="medium" type="success">暂存</el-button>
                        </el-col>
                    </el-row>
                </div>

                <div v-show="status===3">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="title">删除图谱</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">图谱类型</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="k8s" v-model="default_env"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="content">图谱名称</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="图谱名称" v-model="kg_name"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2" style="margin-left: 10px">
                            <el-button size="medium" type="danger">删除</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "SystemStatusManagement",
        components: {Navigation},
        data(){
            return{
                status: 0,
                time1: new Date(2020, 5, 10, 16, 16, 0),
                system_status_management_KG_url: require('../../assets/system-status-management-KG.png'),
                default_env: 'k8s',
                show_entity_list: 'namespace; service; pod; container; server',
                options: [{
                    value: '亮',
                    label: '亮'
                }, {
                    value: '暗',
                    label: '暗'
                }],
                style1: '亮',
                kg_name: 'k8s-409',
                options1: [{
                    value: '请求更新',
                    label: '请求更新'
                }, {
                    value: '手动更新',
                    label: '手动更新'
                }],
                anomaly_chart_data:[
                    ["2020-06-10 02:00:00", 2],
                    ["2020-06-10 04:00:00", 3],
                    ["2020-06-10 06:00:00", 2],
                    ["2020-06-10 08:00:00", 1],
                    ["2020-06-10 10:00:00", 3]]
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: "异常事件时间轴",
                        textStyle: {
                            fontSize: 14,
                        },
                        x: '120px'
                    },
                    tooltip: {
                        trigger: "axis",
                        showDelay: 0,
                        axisPointer: {
                            type: "cross",
                            lineStyle: {
                                type: "dashed",
                                width: 1
                            }
                        }
                    },
                    xAxis: [
                        {
                            type: "time",
                            power: 1,
                            precision: 2,
                            scale: true
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            power: 1,
                            precision: 2,
                            scale: true,
                            axisLine: { // 坐标轴刻度相关设置。
                                show: true,
                                alignWithLabel: false,// 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
                                interval: 'auto', // 坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
                                inside: false, // 坐标轴刻度是否朝内，默认朝外。
                                length: 5
                            }
                        }
                    ],
                    series: [{
                        name: 'unselected',
                        type: 'scatter',
                        data: this.anomaly_chart_data,
                        symbolSize: 20,
                    },{
                        name: 'selected',
                        type: 'scatter',
                        data: [
                            ["2020-06-10 16:00:00", 2]],
                        symbolSize: 20,
                    }]
                });

                myChart.on('click', (param) => {
                    if(param.value[0] === this.anomaly_chart_data[0][0]){
                        this.system_status_management_KG_url = require('../../assets/system-status-management-KG.png')
                    } else if(param.value[0] === this.anomaly_chart_data[1][0]) {
                        this.system_status_management_KG_url = require('../../assets/system-status-management-KG1.png')
                    } else if(param.value[0] === this.anomaly_chart_data[2][0]) {
                        this.system_status_management_KG_url = require('../../assets/system-status-management-KG2.png')
                    } else if(param.value[0] === this.anomaly_chart_data[3][0]) {
                        this.system_status_management_KG_url = require('../../assets/system-status-management-KG3.png')
                    }
                })
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
    .content{
        margin-left: 10px;
        font-size: 14px;
        color:#101010;
        height: 28px;
        line-height: 28px
    }
</style>