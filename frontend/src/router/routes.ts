import Home from "../views/Home.vue"
import Photography from "../views/Photography.vue";

export default [
    {
        path: "/",
        component: Home,
        meta: {
          title: "Home",
        },
    },
    {
        path: "/photography",
        component: Photography,
        meta: {
          title: "Photography",
        },
    },
];
