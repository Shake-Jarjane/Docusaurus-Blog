module.exports = {
    helpers: {
        getDate: () => {
            let d = new Date()
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            return `${year}/${month}/${day}`
        }
    }
}