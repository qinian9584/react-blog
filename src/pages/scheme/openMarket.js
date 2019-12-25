
// 家长端：ztjy://com.seebaby/
// 园丁端：ztjy.teacher.applink://com.yuanding.seebaby/

// 掌通家园 下载地址
const schemaName = {
    default: 'market://details?id=com.seebaby',//通用,
    huawei: 'appmarket://details?id=com.seebaby',//华为市场
    vivo: 'vivoMarket://details?id=com.seebaby',//vivo
    isMi: 'mimarket://details?id=com.seebaby',//小米
    tmast: 'tmast://appdetails?pname=com.seebaby'
}
export const Market = (name = 'default')=>{
    window.location.href = schemaName[name];
}