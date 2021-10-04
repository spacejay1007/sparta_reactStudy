
//name으로 value를 가져와야하니 name이 들어감
const getCookie = (name) => {
    let value = "; "+document.cookie;
    let parts = value.split(`; ${name}=`); // aa=xx; u

    //만약 쿠키에서 내가 찾는것이 없다면
    if (parts.length === 2){
        return parts.pop().split(";").shift();
    }
}

//exp 는 만료일 exp를 인수로 받아오지 않아도 기본값을 지정해 놓은 게 exp=5
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 날짜를 만들어줍니다.
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    // 저장!
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const deleteCookie = (name) => {
    // let date = new Date("2020-01-01").toDSCString();
    // console.log(date);
    // document.cookie = name+"=; expires="+date;
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';

};

export {getCookie, setCookie, deleteCookie};
