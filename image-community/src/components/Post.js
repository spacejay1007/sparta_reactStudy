import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <Grid>
            <Grid is_flex>
                <Image shape="circle" src={props.src}/>
                <Text bold>{props.user_info.user_name}</Text>
                <Text>{props.insert_dt}</Text>
            </Grid>
            <Grid padding="16px">
                <Text>{props.contents}</Text>
            </Grid>
            <Grid>
                <Image shape="rectangle" src={props.src}/>
            </Grid>
            <Grid padding="16px">
                <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
        </Grid>
      </React.Fragment>
    );
}

//위의 정보를 PostList 의 전달을 해주는데
// 기본적으로 필요한 props 들을 미리 넘겨두는 방식
//props 가 없어서 오류가 난다거나 화면이 완전히 깨져버릴 가능성은 떨어짐

Post.defaultProps = {
    user_info :{
        user_name: "Jay",
        user_profile:"https://pds.joins.com/news/component/htmlphoto_mmdata/201705/31/ec7e79e9-7226-4b53-aa86-f87d7d9a9635.jpg",         
    },
    imgae_url:"https://pds.joins.com/news/component/htmlphoto_mmdata/201705/31/ec7e79e9-7226-4b53-aa86-f87d7d9a9635.jpg",  
    contents: "축구팬이시네요",
    comment_cnt : 10,
    insert_dt:"2021-02-27 10:00:00",
};

export default Post;