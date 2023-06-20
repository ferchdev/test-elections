const { createContext, useState } = require("react");

const SessionContext = createContext();

export const SessionTestContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SessionContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
