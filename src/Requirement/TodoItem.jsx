import PropTypes from "prop-types";
import { useState } from "react";
import TodoForm from "./TodoForm";

const RItem = ({ r, index, requirements, setRequirements }) => {
  const [isEditing, setIsEditing] = useState(false);
  const onStart = () => setIsEditing(true);
  const onCancel = () => setIsEditing(false);

  const onDelete = () =>
    setRequirements((prev) => prev.filter((item) => item.id !== r.id));

  return (
    <li>
      {isEditing ? (
        <TodoForm
          isEditing
          status={isEditing}
          payload={r}
          onCancel={onCancel}
          requirements={requirements}
          setRequirements={setRequirements}
        />
      ) : (
        <>
          {index + 1}. {r.funcName} - {r.funcPage} - {r.status}
          <button onClick={onStart}>수정</button>
          <button onClick={onDelete}>삭제</button>
          <ol type="i">
            {r.details.map((d) => {
              return <li key={d}>{d}</li>;
            })}
          </ol>
        </>
      )}
    </li>
  );
};

export default RItem;

RItem.propTypes = {
  // RItem 컴포넌트의 propTypes를 정의
  r: PropTypes.shape({
    // 'r' prop은 객체 형태여야 함
    id: PropTypes.string.isRequired, // 'id'는 필수로 문자열이어야 함
    funcName: PropTypes.string.isRequired, // 'funcName'은 필수로 문자열이어야 함
    funcPage: PropTypes.string.isRequired, // 'funcPage'는 필수로 문자열이어야 함
    status: PropTypes.string.isRequired, // 'status'는 필수로 문자열이어야 함
    details: PropTypes.arrayOf(PropTypes.string).isRequired, // 'details'는 문자열 배열이어야 하며 필수
  }).isRequired, // 'r' prop 자체는 필수로 제공되어야 함
  index: PropTypes.number.isRequired, // 'index'는 필수로 숫자여야 함
  requirements: PropTypes.array.isRequired, // 'requirements'는 필수로 배열이어야 함
  setRequirements: PropTypes.func.isRequired, // 'setRequirements'는 필수로 함수이어야 함
};

//  shape이 특정 구조를 가진 객체라는 것을 지정하는 데 사용(즉, 해당 객체 내의 키에 대한 유형을 정의합니다).
