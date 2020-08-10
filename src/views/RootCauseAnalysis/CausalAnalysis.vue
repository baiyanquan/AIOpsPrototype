<template>
    <div>
        <Navigation/>
        <el-row style="width: 1536px">
            <el-col :offset="4">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <div class="title">因果关系分析</div>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="content"><b>异常事件id：</b></div>
                    </el-col>
                    <el-col :span="2">
                        <el-select v-model="value" size="small" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" size="small">点击切换</el-button>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; display: flex; align-items: center">
                    <div class="demo-image">
                        <div class="block">
                            <el-image
                                    style="width: 100%"
                                    :src="causal_analysis_url"
                                    fit="fill"></el-image>
                        </div>
                    </div>
                </el-row>
                <el-row style="margin-top: 20px;text-align: left">
                    <el-col :span="10">
                        <div class="content"><b>可能的根因路径</b></div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col>
                        <div class="content">carts:80/request_duration_seconds_bucket --> carts:80/request_duration_seconds_count</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col>
                        <div class="content">carts_1/NET_Input --> carts:80/request_duration_seconds_count</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col>
                        <div class="content">carts-db_1/CPU_usage --> carts:80/request_duration_seconds_count</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col>
                        <div class="content">carts_1/NET_Input --> carts_1/NET_Output --> carts:80/request_duration_seconds_count</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left; margin-bottom: 40px">
                    <el-col>
                        <div class="content">carts-db_1/NET_Input --> carts-db_1/NET_Output --> carts_1/NET_Output --> carts:80/request_duration_seconds_count</div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "CausalAnalysis",
        components: {Navigation},
        data() {
            return {
                causal_analysis_url: require('../../assets/causal-analysis.png'),
                options: [{
                    value: '105',
                    label: '105'
                }, {
                    value: '104',
                    label: '104'
                }, {
                    value: '103',
                    label: '103'
                }, {
                    value: '102',
                    label: '102'
                }, {
                    value: '101',
                    label: '101'
                }],
                value: 105
            }
        }
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