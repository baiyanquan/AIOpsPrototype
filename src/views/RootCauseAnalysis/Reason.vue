<template>
    <div>
        <Navigation/>
        <el-row style="width: 1536px">
            <el-col :span="16" :offset="4">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <div class="title">根因推理</div>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="3">
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
                        <el-button type="primary" size="small" @click="switch_kg">点击切换</el-button>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; justify-content:center; display: flex; align-items: center">
                    <div class="demo-image">
                        <div class="block">
                            <el-image
                                    style="width: 100%"
                                    :src="root_cause_reason_url"
                                    fit="fill"></el-image>
                        </div>
                    </div>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col :span="10">
                        <div class="content"><b>可能的异常影响路径</b></div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col :span="10">
                        <div class="content">Service:carts -> Pod:carts</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left">
                    <el-col :span="10">
                        <div class="content">Service:carts -> Pod:carts -> Container:carts</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;text-align: left; margin-bottom: 40px">
                    <el-col :span="10">
                        <div class="content">Service:carts -> Pod:carts -> Server:192.168.199.32</div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "Reason",
        components: {Navigation},
        data() {
            return {
                root_cause_reason_url: require('../../assets/root-cause-analysis.png'),
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
        },
        methods: {
            switch_kg() {
                if (this.value === '105') {
                    this.root_cause_reason_url = require('../../assets/root-cause-analysis.png')
                } else if(this.value === '104') {
                    this.root_cause_reason_url = require('../../assets/root-cause-analysis1.png')
                } else if(this.value === '103') {
                    this.root_cause_reason_url = require('../../assets/root-cause-analysis2.png')
                } else if(this.value === '102') {
                    this.root_cause_reason_url = require('../../assets/root-cause-analysis2.png')
                } else if(this.value === '101') {
                    this.root_cause_reason_url = require('../../assets/root-cause-analysis2.png')
                }
            }
        }
    }
</script>

<style scoped>
    .title{
        margin-left: 10px;
        font-size: 20px;
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