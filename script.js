const tab1 = document.querySelector("#tab-1")
const tab2 = document.querySelector("#tab-2")
const tab3 = document.querySelector("#tab-3")
const tab4 = document.querySelector("#tab-4")

tab1.addEventListener("click", () => {
    if (tab1.classList.contains("unactive-menu-items")) {
    tab1.className = "active-menu-item"
    tab2.className = "unactive-menu-items"
    tab3.className = "unactive-menu-items"
    tab4.className = "unactive-menu-items"
    document.querySelector("#content-for-tab-1").classList.remove("hidden-content")
    document.querySelector("#content-for-tab-2").classList.add("hidden-content")
    document.querySelector("#content-for-tab-3").classList.add("hidden-content")
    document.querySelector("#content-for-tab-4").classList.add("hidden-content")
    }
})

if (tab2.classList.contains("unactive-menu-items")) {
    tab2.addEventListener("click", () => {
        tab2.className = "active-menu-item"
        tab1.className = "unactive-menu-items"
        tab3.className = "unactive-menu-items"
        tab4.className = "unactive-menu-items"
        document.querySelector("#content-for-tab-2").classList.remove("hidden-content")
        document.querySelector("#content-for-tab-1").classList.add("hidden-content")
        document.querySelector("#content-for-tab-3").classList.add("hidden-content")
        document.querySelector("#content-for-tab-4").classList.add("hidden-content")
    })
}

if (tab3.classList.contains("unactive-menu-items")) {
    tab3.addEventListener("click", () => {
        tab3.className = "active-menu-item"
        tab2.className = "unactive-menu-items"
        tab1.className = "unactive-menu-items"
        tab4.className = "unactive-menu-items"
        document.querySelector("#content-for-tab-3").classList.remove("hidden-content")
        document.querySelector("#content-for-tab-2").classList.add("hidden-content")
        document.querySelector("#content-for-tab-1").classList.add("hidden-content")
        document.querySelector("#content-for-tab-4").classList.add("hidden-content")
    })
}

if (tab4.classList.contains("unactive-menu-items")) {
    tab4.addEventListener("click", () => {
        tab4.className = "active-menu-item"
        tab2.className = "unactive-menu-items"
        tab3.className = "unactive-menu-items"
        tab1.className = "unactive-menu-items"
        document.querySelector("#content-for-tab-4").classList.remove("hidden-content")
        document.querySelector("#content-for-tab-2").classList.add("hidden-content")
        document.querySelector("#content-for-tab-3").classList.add("hidden-content")
        document.querySelector("#content-for-tab-1").classList.add("hidden-content")
    })
}

