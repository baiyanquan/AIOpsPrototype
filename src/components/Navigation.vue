<template>
    <div>
        <el-row class="top-bar">
            <el-col :span="5">
                <el-button type="text" style="margin-left: 20px; color:#101010; height: 40px"><i class="el-icon-menu"></i></el-button>
                <el-button type="text" style="margin-left: 10px; color:#101010; height: 50px; font-size: 16px; font-weight: bolder">
                    <span>Tongji&nbsp;</span>
                    <span style="color: #1E98EA">X</span>
                    <span>Lab</span>
                </el-button>
                <el-button type="text" style="color:#101010; height: 50px; font-size: 16px; font-weight: bolder">
                    智能运维原型
                </el-button>
            </el-col>
            <el-col :span="5" :offset="4">
                <el-input
                        placeholder="请输入想要搜索的内容"
                        prefix-icon="el-icon-search"
                        class="search-input"
                        v-model="input">
                </el-input>
            </el-col>
            <el-col :span="1">
                <div style="height: 50px; display: flex; align-items: center">
                    <el-button type="primary" style="height: 40px">搜索</el-button>
                </div>
            </el-col>
            <el-col :span="1" :offset="7">
                <div class="block" style="height: 50px; display: flex; align-items: center; justify-content:center">
                    <el-avatar size="medium" :src="circleUrl"></el-avatar>
                </div>
            </el-col>
            <el-col :span="1">
                <el-button type="text" style="color:#101010; height: 50px; font-size: 14px">
                    <span>D-Ark</span>
                </el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="2" :span="22">
                <el-menu :default-active="$route.path" class="navigation-menu" mode="horizontal" text-color="#101010"
                         active-text-color="#1E98EA" @select="handleSelect" router>
                    <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
                    <el-submenu index="/alarm-monitoring">
                        <template slot="title" ><i class="el-icon-message-solid"></i>异常告警与分析</template>
                        <el-menu-item index="/alarm-monitoring/anomaly-alarm-information" class="navigation-sub-menu">异常告警信息</el-menu-item>
                        <el-menu-item index="/alarm-monitoring/anomaly-preliminary-analysis" class="navigation-sub-menu">异常初步分析</el-menu-item>
                        <el-menu-item index="/alarm-monitoring/anomaly-intelligence-analysis" class="navigation-sub-menu">异常智能分析</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/root-cause">
                        <template slot="title"><i class="el-icon-data-line"></i>根因推理</template>
                        <el-menu-item index="/root-cause/reason" class="navigation-sub-menu">异常根因推理</el-menu-item>
                        <el-menu-item index="/root-cause/causal-analysis" class="navigation-sub-menu">因果关系分析</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/data-management">
                        <template slot="title"><i class="el-icon-s-data"></i>运维图谱</template>
                        <el-menu-item index="/data-management/system-status-management" class="navigation-sub-menu">异常事件图谱分析</el-menu-item>
                        <el-menu-item index="/data-management/workflow-management" class="navigation-sub-menu">事务工作流管理</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/system-configuration"><i class="el-icon-setting"></i>数据接口配置</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex: 'homepage',
                input: '',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large", "medium", "small"]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
                console.log(keyPath)
                console.log(this.$route.path);
            },

        }
    }
</script>

<style>
    .top-bar{
        color: #101010;
        font-size: 24px;
        text-align: left;
        height: 50px;
        background: white;
    }
    .navigation-menu{
        background-color: #F1F3F4;
        font-weight: bolder;
        margin-top: 0;
    }
    .navigation-sub-menu{
        font-size:12px;
        margin-left: 10px;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        height: 50px;
        line-height: 50px;
    }
    .el-menu--horizontal>.el-menu-item{
        height: 50px;
        line-height: 50px;
    }
    .search-input{
        line-height: 50px;
    }
</style>