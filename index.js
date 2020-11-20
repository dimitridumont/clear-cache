exports.clearCache = function (reloadAfterClear = true) {
    if('caches' in window){
        caches.keys().then((names) => {
            names.forEach(async (name) => {
                await caches.delete(name)
            })
        })

        if(reloadAfterClear)
            window.location.reload()
    }
}