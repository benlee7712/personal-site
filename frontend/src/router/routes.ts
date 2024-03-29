import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";

export default [
    {
        path: "/",
        component: Home,
        meta: {
          title: "Home",
        },
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
          title: "Contact",
        },
    },
    {
        path: "/about",
        component: About,
        meta: {
          title: "About",
        },
    },
    {
        path: "/project",
        component: Project,
        meta: {
          title: "Project",
        },
    },
];
