import styled from 'styled-components';
import React from 'react';


const Image = (props) => {
    const {shape, src, size} = props;
    const styles = {
        src: src,
        size:size,
    }
    //Circle Image
    if(shape ==='circle'){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }
    //Square Image
    if (shape === "rectangle") {
      return (
        <AspectOutter>
          <AspectInner {...styles}></AspectInner>
        </AspectOutter>
      );
    }

    return(
        <React.Fragment>

        </React.Fragment>
    );

}

Image.defaultProps={
    shape: "circle",
    src:"https://pds.joins.com/news/component/htmlphoto_mmdata/201705/31/ec7e79e9-7226-4b53-aa86-f87d7d9a9635.jpg",
    size:36,
};

const ImageCircle=styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image:url("${(props) => props.src}");
    background-size:cover;
    margin:4px;
    `;
    // --size 는 css도 변수를 설정해주는것인데 props 에서 데이터를 받아옴
    //background-size : cover 하면은 정해진 원 사이즈에 이미지를 구겨 넣는다
const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;
const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;
// padding-top 넓이의 4:3 맞추려고 75%
// overflow 영역보다 흘러 넘치는것은 숨김

export default Image;