<template>
    <div>
        <Navigation/>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <div class="title">智能检测模型</div>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="2">
                        <div class="content"><b>异常事件id：</b></div>
                    </el-col>
                    <el-col :span="2">
                        <el-select v-model="value" size="mini" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" size="mini">点击切换</el-button>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <el-button size="medium" type="primary" v-if="model1===0" v-loading.fullscreen.lock="fullscreenLoading" @click="click_model1" style="width:90%">日志序列异常智能检测模型</el-button>
                        <el-button size="medium" type="primary" v-else plain @click="model1=0" style="width:90%">日志序列异常智能检测模型</el-button>
                    </el-col>
                    <el-col :span="16" v-if="model1===0">
                        使用日志pattern序列异常检测模型进行分析，检测相应的日志pattern序列是否存在增加、缺失、替换等异常
                    </el-col>
                    <el-col :span="1" :offset="12" v-if="model1===1">
                        <div style="height:25px;width: 25px;background: #0adf93;margin-left: 15px"></div>
                    </el-col>
                    <el-col :span="1" v-if="model1===1" style="text-align: left">
                        <span style="font-size: 12px">正常日志</span>
                    </el-col>
                    <el-col :span="1" v-if="model1===1">
                        <div style="height:25px;width: 25px;background: #e00b0b;margin-left: 15px"></div>
                    </el-col>
                    <el-col :span="2" v-if="model1===1" style="text-align: left">
                        <span style="font-size: 12px">检测出异常的日志</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center" v-if="model1===1">
                    <el-col :span="18">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px; border-right:1px solid #F4F5F7">
                            <div style="font-weight: bold; text-align: center">日志记录</div>
                            <p style="color: #0adf93">2020-06-10 09:38:56.387  INFO [carts,,,] 6 --- [main] works.weave.socks.cart.CartApplication: No active profile set, falling back to default profiles: default</p>
                            <p style="color: #0adf93">2020-06-10 09:39:04.373  INFO [carts,,,] 6 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]: Initializing Spring embedded WebApplicationContext</p>
                            <p style="color: #e00b0b">2020-06-10 09:39:59.956  INFO [carts,,,] 6 --- [-carts-db:27017] org.mongodb.driver.cluster: SocketTimeOutException in monitor thread while connecting to server
                                carts-db:27017</p>
                            <p style="color: #e00b0b">2020-06-10 09:40:35.357  INFO [carts,,,] 6 --- [main] org.mongodb.driver.cluster: Cluster created with settings {hosts=[carts-db:27017], mode=SINGLE, required
                                -ClusterType=UNKNOWN, serverSelectionTimeout='10000 ms', maxWaitQueueSize=500}</p>
                            <p style="color: #e00b0b">OpenJDK 64-Bit Server VM warning: ignoring option MaxPermSize=64m; support was removed in 8.0</p>
                            <p style="color: #e00b0b">2020-06-10 09:41:31.416  INFO [bootstrap,,,] 6 --- [main] trationDelegate$BeanPostProcessorChecker : Bean 'configurationPropertiesRebinderAutoConfiguration'
                                of type [class org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$b894f39] is not eligible
                                for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)</p>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px; border-left:1px solid #F4F5F7">
                            <div style="font-weight: bold">日志pattern编号</div>
                            <p>pattern number: 12</p>
                            <p>pattern number: 12</p>
                            <p>pattern number: 13<span style="color:white">pattern number: 13</span></p>
                            <p>pattern number: 6<span style="color:white">pattern number: 13</span></p>
                            <p>pattern number: 3</p>
                            <p>pattern number: 5<span style="color:white">pattern number: 13pattern number: 13pattern number: 13</span></p>
                        </div>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <el-button size="medium" type="success" v-if="model2===0" v-loading.fullscreen.lock="fullscreenLoading" @click="click_model2" style="width:90%">日志属性值异常智能检测模型</el-button>
                        <el-button size="medium" type="success" v-else plain @click="model2=0" style="width:90%">日志属性值异常智能检测模型</el-button>
                    </el-col>
                    <el-col :span="16" v-if="model2===0">
                        使用属性值异常检测模型进行分析，检测相关运维实体的属性值是否存在异常
                    </el-col>
                    <el-col :span="1" :offset="12" v-if="model2===1">
                        <div style="height:25px;width: 25px;background: #0adf93;margin-left: 15px"></div>
                    </el-col>
                    <el-col :span="1" v-if="model2===1" style="text-align: left">
                        <span style="font-size: 12px">正常日志</span>
                    </el-col>
                    <el-col :span="1" v-if="model2===1">
                        <div style="height:25px;width: 25px;background: #f7a643;margin-left: 15px"></div>
                    </el-col>
                    <el-col :span="2" v-if="model2===1" style="text-align: left">
                        <span style="font-size: 12px">检测出异常的日志</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center" v-if="model2===1">
                    <el-col :span="18">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px">
                            <div style="font-weight: bold; text-align: center">日志记录</div>
                            <p style="color: #0adf93">2020-06-10 09:38:56.387  INFO [carts,,,] 6 --- [main] works.weave.socks.cart.CartApplication: No active profile set, falling back to default profiles: default</p>
                            <p style="color: #0adf93">2020-06-10 09:39:04.373  INFO [carts,,,] 6 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]: Initializing Spring embedded WebApplicationContext</p>
                            <p style="color: #0adf93">2020-06-10 09:39:59.956  INFO [carts,,,] 6 --- [-carts-db:27017] org.mongodb.driver.cluster: SocketTimeOutException in monitor thread while connecting to server
                                carts-db:27017</p>
                            <p style="color: #f7a643">2020-06-10 09:40:35.357  INFO [carts,,,] 6 --- [main] org.mongodb.driver.cluster: Cluster created with settings {hosts=[carts-db:27017], mode=SINGLE, required
                                -ClusterType=UNKNOWN, serverSelectionTimeout='10000 ms', maxWaitQueueSize=500}</p>
                            <p style="color: #f7a643">OpenJDK 64-Bit Server VM warning: ignoring option MaxPermSize=64m; support was removed in 8.0</p>
                            <p style="color: #f7a643">2020-06-10 09:41:31.416  INFO [bootstrap,,,] 6 --- [main] trationDelegate$BeanPostProcessorChecker : Bean 'configurationPropertiesRebinderAutoConfiguration'
                                of type [class org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$b894f39] is not eligible
                                for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)</p>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 30px; padding-right: 10px; border-left:1px solid #F4F5F7">
                            <div style="font-weight: bold">属性值异常记录</div>
                            <p><span style="color:white">pattern number: 12</span></p>
                            <p><span style="color:white">pattern number: 12</span></p>
                            <p><span style="color:white">pattern number: 13pattern number: 13</span></p>
                            <p>serverSelectionTimeout: </p>
                            <p>now: <span style="color:red">10000ms</span></p>
                            <p>normal: [0ms, 200ms]<span style="color:white">pattern number: 13pattern number: 13pattern number: 13pattern number: 13</span></p>
                        </div>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                    <el-col :span="5">
                        <el-button size="medium" type="warning" v-if="compare_model===0" v-loading.fullscreen.lock="fullscreenLoading" @click="click_compare_model" style="width:90%">工作流画像比对算法智能检测模型</el-button>
                        <el-button size="medium" type="warning" v-else plain @click="compare_model=0" style="width:90%">工作流画像比对算法智能检测模型</el-button>
                    </el-col>
                    <el-col :span="16" v-if="compare_model===0">
                        使用画像比对算法进行检测，将目标工作流的画像与正常画像进行比对，分析工作流中是否存在异常
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1">
                        <el-switch
                                v-model="compare_open"
                                @change="compare_open_change"
                                active-color="#13ce66">
                        </el-switch>
                    </el-col>
                    <el-col :span="3" v-if="compare_model===1" style="font-size: 12px">
                        <span v-if="compare_open">展示正常日志工作流-开</span>
                        <span v-else>展示正常日志工作流-关</span>
                    </el-col>
                    <el-col :span="1" :offset="5" v-if="compare_model===1">
                        <div style="height:20px; width: 20px;background: #ff0000; margin-left: 20px"></div>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1" style="text-align: left">
                        <span style="font-size: 12px">异常</span>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1">
                        <div style="height:20px; width: 20px;background: #0900ff;margin-left: 20px"></div>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1" style="text-align: left">
                        <span style="font-size: 12px">新增</span>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1">
                        <div style="height:20px; width: 20px;background: #090000;margin-left: 20px"></div>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1" style="text-align: left">
                        <span style="font-size: 12px">删除</span>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1">
                        <div style="height:20px; width: 20px;background: #ffff00;margin-left: 20px"></div>
                    </el-col>
                    <el-col :span="1" v-if="compare_model===1" style="text-align: left">
                        <span style="font-size: 12px">移动</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px; margin-bottom: 40px; text-align: left; display: flex; align-items: center" v-if="compare_model===1">
                    <el-col :span="11">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; border-right:1px solid #F4F5F7; text-align: center">
                            <el-row><b>当前日志工作流</b></el-row>
                            <el-row>
                                <svg width="100%" height="350px" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <defs>  
                                        <marker id="idArrow" viewBox="0 0 30 30" refX="0" refY="20" markerUnits="strokeWidth" markerWidth="3" markerHeight="10" orient="auto">
                                            <path d="M 0 0 L 30 20 L0 40 z"fill="#c0c4cc"stroke="#c0c4cc"/>
                                        </marker>
                                    </defs>  

                                    <circle cx="280" cy="50" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="280" y="53" text-anchor="middle">12</text>

                                    <line x1='280' y1='70' x2='280' y2='104' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <circle cx="280" cy="130" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="red" @click="clickNode13" v-show="!click13"/>
                                    <circle cx="280" cy="130" r="20" stroke="#43f1f7"
                                            stroke-width="2" fill="red" @click="click13=false" v-show="click13"/>
                                    <text x="280" y="133" fill="white" text-anchor="middle">13</text>

                                    <line x1='267' y1='145' x2='237' y2='180' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='293' y1='145' x2='323' y2='180' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <circle cx="220" cy="200" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="220" y="203" text-anchor="middle">17</text>

                                    <circle cx="340" cy="200" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="340" y="203" text-anchor="middle">6</text>

                                    <circle cx="220" cy="280" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="220" y="283" text-anchor="middle">14</text>

                                    <line x1='353' y1='215' x2='387' y2='257' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='220' y1='220' x2='220' y2='254' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <circle cx="400" cy="280" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="blue"/>
                                    <text x="400" y="283" fill="white" text-anchor="middle">3</text>

                                    <line x1='200' y1='280' x2='146' y2='280' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='140' y1='280' x2='140' y2='206' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='140' y1='200' x2='194' y2='200' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                </svg>
                            </el-row>
                        </div>
                    </el-col>

                    <el-col :span="11" v-if="compare_open">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; border-left:1px solid #F4F5F7; text-align: center">
                            <el-row><b>对应的正常日志工作流</b></el-row>
                            <el-row>
                                <svg width="100%" height="350px" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <defs>  
                                        <marker id="idArrow" viewBox="0 0 30 30" refX="0" refY="20" markerUnits="strokeWidth" markerWidth="3" markerHeight="10" orient="auto">
                                            <path d="M 0 0 L 30 20 L0 40 z"fill="#c0c4cc"stroke="#c0c4cc"/>
                                        </marker>
                                    </defs>  

                                    <circle cx="280" cy="50" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="280" y="53" text-anchor="middle">12</text>

                                    <line x1='280' y1='70' x2='280' y2='104' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <circle cx="280" cy="130" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white" />
                                    <text x="280" y="133" text-anchor="middle">15</text>

                                    <line x1='267' y1='145' x2='237' y2='180' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='293' y1='145' x2='323' y2='180' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <circle cx="220" cy="200" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="220" y="203" text-anchor="middle">17</text>

                                    <circle cx="340" cy="200" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="340" y="203" text-anchor="middle">6</text>

                                    <circle cx="220" cy="280" r="20" stroke="#c0c4cc"
                                            stroke-width="1" fill="white"/>
                                    <text x="220" y="283" text-anchor="middle">14</text>

                                    <line x1='220' y1='220' x2='220' y2='254' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='200' y1='280' x2='146' y2='280' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='140' y1='280' x2='140' y2='206' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                    <line x1='140' y1='200' x2='194' y2='200' stroke="#c0c4cc" stroke-width='2'
                                          marker-end='url(#idArrow)'></line>

                                </svg>
                            </el-row>
                        </div>
                    </el-col>

                    <el-col :span="11" v-else>
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; border-left:1px solid #F4F5F7; text-align: center">
                            <el-row v-if="click13"><b>pattern:13的实体和属性画像</b></el-row>
                            <el-row style="color: white" v-else><b>定海神针</b></el-row>
                            <el-row>
                                <svg width="100%" height="350px" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <defs>  
                                        <marker id="idArrow" viewBox="0 0 30 30" refX="0" refY="20" markerUnits="strokeWidth" markerWidth="3" markerHeight="10" orient="auto">
                                            <path d="M 0 0 L 30 20 L0 40 z"fill="#c0c4cc"stroke="#c0c4cc"/>
                                        </marker>
                                    </defs>  

                                    <g v-show="click13">
                                        <circle cx="180" cy="180" r="50" stroke="#c0c4cc"
                                                stroke-width="1" fill="red" @click="click_cart_service=true" v-show="!click_cart_service"/>
                                        <circle cx="180" cy="180" r="50" stroke="#43f1f7"
                                                stroke-width="3" fill="red" @click="click_cart_service=false; click_network_bandwidth=false; click_success_rate=false" v-show="click_cart_service"/>
                                        <text x="180" y="183" fill="white" text-anchor="middle">cart-service</text>

                                        <circle cx="350" cy="120" r="50" stroke="#c0c4cc" fill="white" stroke-width="1" />
                                        <text x="350" y="123" text-anchor="middle">payment-service</text>

                                        <line x1='302' y1='135' x2='228' y2='165' stroke="#c0c4cc" stroke-width='2'></line>
                                    </g>

                                    <g v-show="click_cart_service">
                                        <circle cx="100" cy="280" r="30" stroke="#c0c4cc"
                                                stroke-width="1" fill="white" @click="click_network_bandwidth=true;click_success_rate=false" v-show="!click_network_bandwidth"/>
                                        <circle cx="100" cy="280" r="30" stroke="#43f1f7"
                                                stroke-width="3" fill="white" @click="click_network_bandwidth=false" v-show="click_network_bandwidth"/>
                                        <text x="100" y="275" text-anchor="middle">network</text>
                                        <text x="100" y="290" text-anchor="middle">bandwidth</text>

                                        <circle cx="230" cy="300" r="30" stroke="#c0c4cc"
                                                stroke-width="1" fill="red" @click="click_success_rate=true;click_network_bandwidth=false" v-show="!click_success_rate"/>
                                        <circle cx="230" cy="300" r="30" stroke="#43f1f7"
                                                stroke-width="3" fill="red" @click="click_success_rate=false" v-show="click_success_rate"/>
                                        <text x="230" y="295" fill="white" text-anchor="middle">success</text>
                                        <text x="230" y="310" fill="white" text-anchor="middle">rate</text>

                                        <line x1='115' y1='255' x2='150' y2='220' stroke="#c0c4cc" stroke-width='2'></line>

                                        <line x1='197' y1='227' x2='218' y2='274' stroke="#c0c4cc" stroke-width='2'></line>
                                    </g>

                                    <g v-show="click_network_bandwidth">
                                        <image x="340" y="180" width="200" height="200" :href="cart_service_network_bandwidth" />
                                    </g>

                                    <g v-show="click_success_rate">
                                        <image x="340" y="180" width="200" height="200" :href="cart_service_success_rate" />
                                    </g>
                                </svg>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: "AnomalyIntelligenceAnalysis",
        components: {Navigation},
        data() {
            return {
                model1: 0,
                model2: 0,
                compare_model: 0,
                compare_open: true,
                click13: false,
                click_cart_service: false,
                click_network_bandwidth: false,
                click_success_rate: false,
                cart_service_network_bandwidth: require('../../assets/cart-service-network-bandwidth.png'),
                cart_service_success_rate: require('../../assets/cart-service-success-rate.png'),
                fullscreenLoading: false,
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
                value: 104
            }
        },
        methods: {
            clickNode13(){
                this.click13=true;
                this.compare_open=false;
                this.click_cart_service = false;
                this.click_network_bandwidth=false;
                this.click_success_rate=false;
            },
            compare_open_change(){
                this.click13 = false;
                this.click_cart_service = false;
                this.click_network_bandwidth=false;
                this.click_success_rate=false;
            },
            click_model1(){
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.model1 = 1;
                }, 2000);
            },
            click_model2(){
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.model2 = 1;
                }, 2000);
            },
            click_compare_model(){
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.compare_model = 1;
                }, 2000);
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