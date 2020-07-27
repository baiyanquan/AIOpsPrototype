import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import SystemConfiguration from './views/SystemConfiguration.vue'
import AnomalyAlarmInformation from './views/AlarmAndMonitoring/AnomalyAlarmInformation.vue'
import AnomalyPreliminaryAnalysis from "@/views/AlarmAndMonitoring/AnomalyPreliminaryAnalysis.vue";
import AnomalyIntelligenceAnalysis from "@/views/AlarmAndMonitoring/AnomalyIntelligenceAnalysis.vue";
import Reason from "@/views/RootCauseAnalysis/Reason.vue";
import CausalAnalysis from "@/views/RootCauseAnalysis/CausalAnalysis.vue";
import SystemStatusManagement from './views/DataManagement/SystemStatusManagement.vue'
import WorkflowManagement from './views/DataManagement/WorkflowManagement.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage,
        },{
            path: '/system-configuration',
            name: 'system-configuration',
            component: SystemConfiguration,
        },{
            path: '/alarm-monitoring/anomaly-alarm-information',
            name: 'anomaly-alarm-information',
            component: AnomalyAlarmInformation,
        },{
            path: '/alarm-monitoring/anomaly-preliminary-analysis',
            name: 'anomaly-preliminary-analysis',
            component: AnomalyPreliminaryAnalysis,
        },{
            path: '/data-management/system-status-management',
            name: 'system-status-management',
            component: SystemStatusManagement,
        },{
            path: '/data-management/workflow-management',
            name: 'workflow-management',
            component: WorkflowManagement,
        },{
            path: '/alarm-monitoring/anomaly-intelligence-analysis',
            name: 'anomaly-intelligence-analysis',
            component: AnomalyIntelligenceAnalysis,
        },{
            path: '/root-cause/causal-analysis',
            name: 'causal-analysis',
            component: CausalAnalysis,
        },{
            path: '/root-cause/reason',
            name: 'reason',
            component: Reason,
        }
    ]
})