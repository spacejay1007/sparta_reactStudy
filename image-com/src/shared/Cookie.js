
//name으로 value를 가져와야하니 name이 들어감
const getCookie = (name) => {
    //가지고 오는 함수 생성 split 사용하여 파싱 해야하는데
    //
    let value = "; "+document.cookie;
    let parts = value.split(`; ${name}=`); // aa=xx; user_id=aaa;

    //만약 쿠키에서 내가 찾는것이 없다면
    // pop 은 배열의 마지막 요소만 뺴오는거 shift 는 배열의 앞 요소만 빼오는거
    if (parts.length === 2){
        return parts.pop().split(";").shift();
    }
}

//exp 는 만료일 exp를 인수로 받아오지 않아도 기본값을 지정해 놓은 게 exp=5
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 날짜를 만들어줍니다. setTime 해서 일시 설정해주는 쿠키 사용기한
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
