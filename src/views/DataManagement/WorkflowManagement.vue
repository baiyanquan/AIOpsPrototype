<template>
    <div>
        <Navigation/>
        <el-row style="width: 1536px">
            <el-col :span="20" :offset="2">
                <el-row>
                    <el-row style="margin-top: 10px; text-align: left; display: flex; align-items: center">
                        <el-col :span="2">
                            <div class="title">工作流列表</div>
                        </el-col>
                        <el-col :span="3">
                            <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search" size="small"></el-input>
                        </el-col>
                        <el-col :span="2" style="margin-left: 10px">
                            <el-button size="small" type="success">查询工作流</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button size="small" type="warning">新增工作流</el-button>
                        </el-col>
                    </el-row>
                </el-row>
                <el-row style="margin-top: 10px">
                    <template>
                        <el-table
                                :data="tableData"
                                style="width: 100%; font-size: 16px">
                            <el-table-column
                                    label="工作流id"
                                    width="400">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.id }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="工作流描述"
                                    width="600">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.description }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                            size="small"
                                            type="primary">编辑</el-button>
                                    <el-button
                                            size="small"
                                            type="danger">删除</el-button>
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

                <el-row>
                    <el-row style="margin-top: 20px; text-align: left; display: flex; align-items: center">
                        <el-col :span="3">
                            <div class="title">工作流 {{workflow_show}} 相应画像</div>
                        </el-col>
                        <el-col :span="1" style="text-align: center">
                            <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
                        </el-col>
                        <el-col :span="1" style="text-align: center">
                            <el-button type="success" icon="el-icon-check" circle size="small"></el-button>
                        </el-col>
                        <el-col :span="1" style="text-align: center">
                            <el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
                        </el-col>
                        <el-col :span="1" style="text-align: center">
                            <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
                        </el-col>

                        <el-col :span="3" :offset="1" v-if="workflow_show===1">
                            <div class="title">前置工作流：无</div>
                        </el-col>
                        <el-col :span="3" :offset="1" v-if="workflow_show===1">
                            <div class="title">后置工作流：</div>
                        </el-col>
                        <el-col :span="1" v-if="workflow_show===1">
                            <el-button type="text" size="small" style="font-size: 16px" @click="workflow_show=2">1</el-button>
                        </el-col>

                        <el-col :span="3" :offset="1" v-if="workflow_show===2">
                            <div class="title">前置工作流：</div>
                        </el-col>
                        <el-col :span="1" v-if="workflow_show===2">
                            <el-button type="text" size="small" style="font-size: 16px" @click="workflow_show=1">2</el-button>
                        </el-col>
                        <el-col :span="3" :offset="1" v-if="workflow_show===2">
                            <div class="title">后置工作流：无</div>
                        </el-col>
                    </el-row>
                </el-row>

                <el-row style="margin-top: 10px; margin-bottom: 40px; text-align: left; display: flex; align-items: center">
                    <el-col :span="11">
                        <div style="font-size: 12px;background: white;padding-top: 5px; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; border-right:1px solid #F4F5F7; text-align: center">
                            <el-row><b>工作流</b></el-row>
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
                                            stroke-width="1" fill="white" @click="click13=true" v-show="!click13"/>
                                    <circle cx="280" cy="130" r="20" stroke="#43f1f7"
                                            stroke-width="2" fill="white" @click="click13=false; click_cart_service=false; click_network_bandwidth=false; click_success_rate=false" v-show="click13"/>
                                    <text x="280" y="133" text-anchor="middle">13</text>

                                    <g v-if="workflow_show===1">
                                        <circle cx="220" cy="200" r="20" stroke="#c0c4cc"
                                                stroke-width="1" fill="white"/>
                                        <text x="220" y="203" text-anchor="middle">17</text>

                                        <line x1='200' y1='280' x2='146' y2='280' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <line x1='140' y1='280' x2='140' y2='206' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <line x1='140' y1='200' x2='194' y2='200' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <circle cx="220" cy="280" r="20" stroke="#c0c4cc"
                                                stroke-width="1" fill="white"/>
                                        <text x="220" y="283" text-anchor="middle">14</text>

                                        <line x1='220' y1='220' x2='220' y2='254' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <circle cx="220" cy="280" r="20" stroke="#c0c4cc"
                                                stroke-width="1" fill="white"/>
                                        <text x="220" y="283" text-anchor="middle">14</text>

                                        <line x1='267' y1='145' x2='237' y2='180' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>
                                    </g>

                                    <g v-if="workflow_show===2">
                                        <circle cx="340" cy="200" r="20" stroke="#c0c4cc"
                                                stroke-width="1" fill="white"/>
                                        <text x="340" y="203" text-anchor="middle">6</text>

                                        <line x1='353' y1='215' x2='387' y2='257' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <circle cx="400" cy="280" r="20" stroke="#c0c4cc"
                                                stroke-width="1" fill="white"/>
                                        <text x="400" y="283" text-anchor="middle">3</text>

                                        <line x1='293' y1='145' x2='323' y2='180' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>

                                        <line x1='353' y1='215' x2='387' y2='257' stroke="#c0c4cc" stroke-width='2'
                                              marker-end='url(#idArrow)'></line>
                                    </g>

                                </svg>
                            </el-row>

                        </div>
                    </el-col>
                    <el-col :span="11">
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

                                    <g v-show="click_cart_service&&click13">
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

                                    <g v-show="click_network_bandwidth&&click_cart_service&&click13">
                                        <image x="340" y="180" width="200" height="200" :href="cart_service_network_bandwidth" />
                                    </g>

                                    <g v-show="click_success_rate&&click_cart_service&&click13">
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
        name: "WorkflowManagement",
        components: {Navigation},
        data() {
            return {
                tableData: [{
                    description: "caller=middlewares.go:75 method=GetUsers",
                    id: "1"
                }, {
                    description: "caller=middlewares.go:118 method=PostCard",
                    id: "2"
                }, {
                    description: "caller=middlewares.go:36 method=Login",
                    id: "3"
                }, {
                    description: "caller=middlewares.go:53 method=AddToCart",
                    id: "4"
                },{
                    description: "caller=middlewares.go:88 method=PostAddress",
                    id: "5"
                }],
                input: '',
                workflow_show: 1,
                click13: false,
                click_cart_service: false,
                click_network_bandwidth: false,
                click_success_rate: false,
                cart_service_network_bandwidth: require('../../assets/cart-service-network-bandwidth.png'),
                cart_service_success_rate: require('../../assets/cart-service-success-rate.png'),
            }
        },
        methods: {

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
</style>