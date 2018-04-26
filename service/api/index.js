import {
    QuestionsAnswerd,
    AllQuestions,
    MyQuestions,
    SalonBanner,
    MoreClasses,
    QuestionIncrease,
    CheckAnswer,
    GetSalons,
    AskFree,
    GetUnreadCount,
    MyScanAnswer,
    WechatConfig,
    IsSign,
    Sign,
    SignCount,
    AskCount

} from './address.js'

export default {
    /**
    * 获取所有提问列表
    * 参数：page
    *      pageSize
    */
    getAllQuestions: function(params){
        // return axios.post(AllQuestions, qs.stringify(params))

    },
    /**
    * 获取当日沙龙课程列表
    */
    getTodaySalonList: function(){
        return wx.request({
            url: SalonBanner,
            header: {
                'content-type': 'application/json'
            },
            method: 'GET'
        })
    }
}
