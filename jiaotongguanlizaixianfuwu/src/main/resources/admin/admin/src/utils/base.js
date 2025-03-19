const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaotongguanlizaixianfuwu/",
            name: "jiaotongguanlizaixianfuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaotongguanlizaixianfuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "交通管理在线服务系统"
        } 
    }
}
export default base
