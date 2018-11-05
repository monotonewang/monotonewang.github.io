let mGenerate = document.getElementById('generate');
let mNumber = document.getElementById('number');
let mContent = document.getElementById('content');
let mTrueValue = document.getElementById('trueValue');
let mNoGuess = document.getElementById('noGuess');

let mBig = "你猜的数据大了";
let mSmall = "你猜的数据小了";
let mOk = "恭喜你猜对了";
let count = 0;

let mRandomNumber;

let isShowTrueNumber = false;

mNoGuess.onclick = function () {
    if (count > 0)
        mTrueValue.textContent = "正确答案："+mRandomNumber.toString();
    else {
        mTrueValue.textContent="兄弟。你还是猜吧！";
    }
}
/**
 * 猜数字
 */
mGenerate.onclick = function () {
    if (count == 0) {
        mRandomNumber = Math.random();
        mRandomNumber = Math.floor(mRandomNumber * 100);
        count++;
        if (isShowTrueNumber)
            mTrueValue.textContent = mRandomNumber.toString();
    }
    if (mNumber.value == "") {
        alert("Please input number")
        return
    }
    if (mNumber.value > mRandomNumber) {
        if (mContent.value != "" && mContent.value != null) {
            mContent.value = mContent.value + "\t" + mNumber.value;
        } else {
            mContent.value = mNumber.value;
        }
        if (isShowTrueNumber) {
            mTrueValue.textContent = mRandomNumber + mBig;
        } else {
            mTrueValue.textContent = mBig;
        }
        mContent.textContent = mContent.value;
    } else if (mNumber.value < mRandomNumber) {
        if (mContent.value != "" && mContent.value != null) {
            mContent.value = mContent.value + "\t" + mNumber.value;
        } else {
            mContent.value = mNumber.value;
        }
        if (isShowTrueNumber) {
            mTrueValue.textContent = mRandomNumber + mSmall;
        } else {
            mTrueValue.textContent = mSmall;
        }
        mContent.textContent = mContent.value;
    } else {
        if (mContent.value != "" && mContent.value != null) {
            mContent.value = mContent.value + "\t" + mNumber.value;
        } else {
            mContent.value = mNumber.value;
        }
        if (isShowTrueNumber) {
            mTrueValue.textContent = mRandomNumber + mOk;
        } else {
            mTrueValue.textContent = mOk;
        }
        mContent.textContent = mContent.value;
    }


}