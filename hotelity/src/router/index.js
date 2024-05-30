import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';
import EmployeeList from '@/component/employee/EmployeeList.vue';
import Test from '@/component/Test.vue';
import TestChart from '@/component/TestChart.vue';
import EmployeeInfo from '@/component/employee/EmployeeInfo.vue';
import Login from '@/component/login/Login.vue';
import BranchInfo from '@/component/hotel-management/BranchInfo.vue';
import PaymentList from '@/component/hotel-service/PaymentList.vue';
import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import ReservationCalendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";
import BranchPage from "@/component/hotel-management/branch/BranchPage.vue";
import RoomPage from "@/component/hotel-management/room/RoomPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: '/',
      component: CustomerInit
    },
    {
      path: '/customerList',
      component: CustomerList
    },
    {
      path: '/employeeList',
      component: EmployeeList
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/chartTest',
      component: TestChart
    },
    {
      path: '/employeeInfo',
      component: EmployeeInfo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/branchInfo',
      component: BranchInfo
    },
    {
      path: '/paymentList',
      component: PaymentList
    },
    {
      path: '/reservationPage',
      component: ReservationPage
    },
    {
      path: '/reservationCalendar',
      component: ReservationCalendar
    },
    {
      path: '/branchPage',
      component: BranchPage
    },
    {
      path: '/roomPage',
      component: RoomPage
    }
]
});

export default router;