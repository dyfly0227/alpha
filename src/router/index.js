import { createRouter, createWebHashHistory } from "vue-router";
import MyPosition from "../views/MyPosition.vue";
import Staking from "../views/Staking.vue";
import Rewards from "../views/Rewards.vue";
import Referral from "../views/Referral.vue";
import Overview from "../views/Overview.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/position",
    },
    {
      path: "/position",
      name: "position",
      component: MyPosition,
    },
    {
      path: "/staking",
      name: "staking",
      component: Staking,
    },
    {
      path: "/rewards",
      name: "rewards",
      component: Rewards,
    },
    {
      path: "/referral",
      name: "referral",
      component: Referral,
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview,
    },
  ],
});

export default router;
