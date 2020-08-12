<template>
    <div>
        <Navigation/>
        <el-row style="width: 1536px">
            <el-col :span="20" :offset="2">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <div class="title">告警信息详情</div>
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
                        <el-button type="primary" size="small" @click="change_status">点击切换</el-button>
                    </el-col>
                </el-row>
                <div v-if="status==='performance'">
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>发生时间：</b>2020-06-10 10:40:00</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>所在实体：</b>service:carts</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>异常描述：</b>CPUThrottlingHigh</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>系统记录：</b></div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:5px; text-align: left; display: flex; align-items: center">
                        <el-col :span="7">
                            <div style="width:100%;font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px">
                                <p>alert: CPUThrottlingHigh</p>
                                <p>expr: 100</p>
                                <p>* sum by(container_name, pod_name, namespace) (increase(container_cpu_cfs_throttled_periods_total&nbsp;{container_name!=""}[5m]))</p>
                                <p>/ sum by(container_name, pod_name, namespace) (increase(container_cpu_cfs_periods_total[5m])) > 25</p>
                                <p>for: 15m</p>
                                <p>labels:</p>
                                <p>severity: warning</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>性能监控：</b></div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="11">
                            <div class="demo-image">
                                <div class="block">
                                    <el-image
                                            style="width: 100%"
                                            :src="anomaly_preliminary_analysis_performance_1"
                                            fit="fill"></el-image>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="11" :offset="2">
                            <div class="demo-image">
                                <div class="block">
                                    <el-image
                                            style="width: 100%"
                                            :src="anomaly_preliminary_analysis_performance_2"
                                            fit="fill"></el-image>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="text-align: center; display: flex; align-items: center; font-size:14px">
                        <el-col :span="11">
                            <span>Carts QPS：2020-06-10 10:40:00开始出现异常</span>
                        </el-col>
                        <el-col :span="11" :offset="2">
                            <span>Carts Latency：未检测出明显异常</span>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>根因推理与性能因果关系分析</b></div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" size="small" @click="root_cause_analysis">点击前往</el-button>
                        </el-col>
                    </el-row>
                </div>

                <div v-else>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>发生时间：</b>2020-06-10 09:40:00</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>所在实体：</b>Service:carts</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>异常描述：</b>SocketTimeoutException</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>日志记录：</b></div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:5px; text-align: left; display: flex; align-items: center">
                        <el-col :span="23">
                            <div style="width:100%;font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px">
                                <p>2020-06-10 09:38:56.387  INFO [carts,,,] 6 --- [main] works.weave.socks.cart.CartApplication: No active profile set, falling back to default profiles: default</p>
                                <p>2020-06-10 09:39:04.373  INFO [carts,,,] 6 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]: Initializing Spring embedded WebApplicationContext</p>
                                <p>2020-06-10 09:39:59.956  INFO [carts,,,] 6 --- [-carts-db:27017] org.mongodb.driver.cluster: SocketTimeOutException in monitor thread while connecting to server
                                    carts-db:27017</p>
                                <p>2020-06-10 09:40:35.357  INFO [carts,,,] 6 --- [main] org.mongodb.driver.cluster: Cluster created with settings {hosts=[carts-db:27017], mode=SINGLE, required
                                    -ClusterType=UNKNOWN, serverSelectionTimeout='10000 ms', maxWaitQueueSize=500}</p>
                                <p>OpenJDK 64-Bit Server VM warning: ignoring option MaxPermSize=64m; support was removed in 8.0</p>
                                <p>2020-06-10 09:41:31.416  INFO [bootstrap,,,] 6 --- [main] trationDelegate$BeanPostProcessorChecker : Bean 'configurationPropertiesRebinderAutoConfiguration'
                                    of type [class org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$b894f39] is not eligible
                                    for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="content"><b>总体检测报告：</b></div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:5px; text-align: left; display: flex; align-items: center">
                        <el-col :span="23">
                            <div style="width:100%;font-size: 16px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px">
                                <p>异常描述：Service:carts的QPS指标下降，Service:carts的Latency指标相较于正常业务情况显著升高。</p>
                                <p>可能原因：Container:carts的网络出现故障、部分Container:carts失联、IP为192.168.199.32的服务器网络出现故障。</p>
                                <p>建议解决方案：检查Container:carts是否处于正常工作状态、检查IP为192.168.199.32的服务器网络是否畅通。</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px; text-align: left; display: flex; align-items: center">
                        <el-col :span="5">
                            <div class="title">智能模型检测</div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="6">
                            <div class="content"><b>日志可能对应的工作流</b></div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="6">
                            <div class="content">工作流 a 开始时间：2020-06-10 09:38:00</div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" size="small" @click="intelligence_analysis">智能分析</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="6">
                            <div class="content">工作流 b 开始时间：2020-06-10 09:39:00</div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" size="small" @click="intelligence_analysis">智能分析</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="6">
                            <div class="content">工作流 c 开始时间：2020-06-10 09:40:00</div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" size="small" @click="intelligence_analysis">智能分析</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title" @click="root_cause_analysis"><b>根因推理</b></div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="success" size="small" @click="root_cause_analysis">点击前往</el-button>
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
        name: "AnomalyPreliminaryAnalysis",
        components: {Navigation},
        data() {
            return {
                status: 'log',
                anomaly_preliminary_analysis_performance_1: require('../../assets/anomaly-preliminary-analysis-performance-1.png'),
                anomaly_preliminary_analysis_performance_2: require('../../assets/anomaly-preliminary-analysis-performance-2.png'),
                options: [{
                    value: '105',
                    label: '105'
                }, {
                    value: '104',
                    label: '104'
                }],
                value: 104
            }
        },
        methods: {
            root_cause_analysis(){
                this.$router.push('/root-cause/reason');
            },
            intelligence_analysis(){
                this.$router.push({ path: 'anomaly-intelligence-analysis'});
            },
            change_status(){
                if(this.value == 104){
                    this.status = 'log';
                }
                else if(this.value == 105){
                    this.status = 'performance';
                }
            }
        },
        created() {
            let status = this.$route.query.status;
            if(status==='log' || status==='performance'){
                this.status = status;
            }
            else{
                this.status = 'log';
                this.value = 104;
            }
            if(this.status==='log'){
                this.value = 104;
            }
            else{
                this.value = 105;
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