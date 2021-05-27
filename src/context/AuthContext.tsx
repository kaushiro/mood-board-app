import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthDataState {
  userTeam?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  mood?: string;
  time?: string;
}
interface AuthContextState {
  userData?: AuthDataState;
  setAuthData?: Dispatch<SetStateAction<AuthDataState>>;
}
const InitialAuthContextState: AuthDataState = {
  userTeam: "",
  firstName: "",
  lastName: "",
  userName: "",
  mood: "",
  time: "",
};
const NewAuthDefaultValue: AuthContextState = {
  userData: InitialAuthContextState,
  setAuthData: () => {},
};

const NewAuthContext = createContext<AuthContextState>(NewAuthDefaultValue);
const NewAuthProvider: React.FC<{}> = ({ children }) => {
  const [userData, setAuthData] = useState<AuthDataState>(
    InitialAuthContextState
  );
  return (
    <NewAuthContext.Provider value={{ userData, setAuthData }}>
      {children}
    </NewAuthContext.Provider>
  );
};

export { NewAuthContext, NewAuthProvider };
