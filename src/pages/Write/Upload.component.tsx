import React from 'react';

const Upload = () => {
  return (
    <div>
      <div>
        <div>포스트 미리보기</div>
        <div>이미지가 들어갈곳</div>
      </div>
      <div>
        <div>포스트 작성 제목</div>
        <div><textarea></textarea></div>
      </div>
      <div>
        <div>공개 설정</div>
        <div>
          <button>전체 공개</button>
          <button>비공개</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;