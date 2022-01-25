import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  // AdminFlagContext の中にProviderがあるのでそれでchildreを囲む
  // valueの中にグローバルに扱う実際の値を設定
  // ContextオブジェクトとしてisAdminとsetIsAdminを設定（オブジェクトの省略記法）
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
