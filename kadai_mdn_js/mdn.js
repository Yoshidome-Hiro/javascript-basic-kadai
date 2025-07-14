// 現在の日付と時刻を持つdateオブジェクトを作成
const today = new Date();

// 年を取得
const year = today.getFullYear();

// 月を取得
const month = today.getMonth()+1;

// 日を取得
const day = today.getDate();

// 日本語列を作成し出力
console.log(year + '年' + month + '月' + day + '日');
