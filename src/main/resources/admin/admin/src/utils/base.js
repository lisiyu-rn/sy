const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote88k6/",
            name: "springboote88k6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote88k6/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于java的网上订餐系统的设计与实现"
        } 
    }
}
export default base
