import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
};

export const EditButton = (props) => {
  // Context内のisAdminを取得
  // useContextの引数に参照するContextを指定する
  const { isAdmin } = useContext(AdminFlagContext);
  console.log(isAdmin);

  // isAdminがfalse（管理者でない）時にボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
