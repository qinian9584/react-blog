/**
 * @description 日期格式化 
 * @param {string}  时间戳, 1575972213089
 * @return {string} 返回格式化时间 ，格式化为"yyyy-MM-dd HH:mm:ss"
 */
export function formatDate(time: number): string{
    var date = new Date(time);
        var y = date.getFullYear();
        var m:number|string = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d:number|string = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h:number|string = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute:number|string = date.getMinutes();
        var second:number|string = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second
}