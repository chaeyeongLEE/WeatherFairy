import React from 'react';

export default function CalendarPopUp() {
  return (
    <>
      <div>
        <button>x</button>
        <div>
          <span>
            날짜 <input type="text" value={'2023-01-28'} />
          </span>
          <span>
            제목 <input type="text" value={'무해한사람'} />
          </span>
          <span>
            내용 <input type="text" value={'최은영 작가의 소설'} />
          </span>
        </div>
        <button>수정하기</button>
      </div>
    </>
  );
}
