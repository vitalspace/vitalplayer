import { routers } from "../app/routes/routes";
routers(window.location.hash.substr(1).toLowerCase().split("/"))

window.addEventListener('hashchange', () => {
    routers(window.location.hash.substr(1).toLowerCase().split("/"))
})

