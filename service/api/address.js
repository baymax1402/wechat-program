import {
	API_ROOT
} from './config.js'

var api = {
    questionsAnswerd: '/Question/answered',
    allQuestions: '/Question/all_question',
    // salonBanner: '/Salon/today',
    salonBanner: '/json/banner.json',
    moreClasses: '/Salon/predict',
    myQuestions: '/Question/my_question',
    questionIncrease: '/Question/increase',
    checkAnswer: '/Question/get_question',
    getSalons: '/Salon/get_salon',
    askFree: '/Question/add',
    getUnreadCount: '/Question/get_noread_count',
    myScanAnswer: '/Question/is_readed',
    wechatConfig: '/Wechats/url_encode',
	isSign: '/Active/isSign',
	sign: '/Active/sign',
	signCount: '/Active/signCount',
	askCount: '/Active/questionCount'

}
//当日沙龙场次banner
// export const SalonBanner = API_ROOT.concat(api.salonBanner)
export const SalonBanner = api.salonBanner
//已回答问题
export const QuestionsAnswerd = API_ROOT.concat(api.questionsAnswerd)
//所有提问
export const AllQuestions = API_ROOT.concat(api.allQuestions)
//我的提问
export const MyQuestions = API_ROOT.concat(api.myQuestions)
//更多课程
export const MoreClasses = API_ROOT.concat(api.moreClasses)
//想问
export const QuestionIncrease = API_ROOT.concat(api.questionIncrease)
//查看回答
export const CheckAnswer = API_ROOT.concat(api.checkAnswer)
//根据时间获取沙龙场次
export const GetSalons = API_ROOT.concat(api.getSalons)
//免费提问
export const AskFree = API_ROOT.concat(api.askFree)
//获取未读条数
export const GetUnreadCount = API_ROOT.concat(api.getUnreadCount)
//查看回答
export const MyScanAnswer = API_ROOT.concat(api.myScanAnswer)
//获取微信配置
export const WechatConfig = API_ROOT.concat(api.wechatConfig)
// 用户本日是否签到
export const IsSign = API_ROOT.concat(api.isSign)
// 签到
export const Sign = API_ROOT.concat(api.sign)
// 签到次数
export const SignCount = API_ROOT.concat(api.signCount)
// 提问次数
export const AskCount = API_ROOT.concat(api.askCount)
