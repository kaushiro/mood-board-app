import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
interface UserDataState {
  teamIndex?: number;
  userTeam?: string;
  userIndex?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  mood?: string;
  time?: string;
  isFirstTimUser?: boolean;
}
interface UserContextState {
  userData?: UserDataState;
  setUserData?: Dispatch<SetStateAction<UserDataState>>;
}
const InitialUserContextState: UserDataState = {
  teamIndex: 0,
  userTeam: "",
  userIndex: 0,
  firstName: "",
  lastName: "",
  userName: "",
  mood: "",
  time: "",
  isFirstTimUser: true,
};
const NewUserDefaultValue: UserContextState = {
  userData: InitialUserContextState,
  setUserData: () => {},
};

const NewUserContext = createContext<UserContextState>(NewUserDefaultValue);
const NewUserProvider: React.FC<{}> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataState>(
    InitialUserContextState
  );

  return (
    <NewUserContext.Provider value={{ userData, setUserData }}>
      {children}
    </NewUserContext.Provider>
  );
};

export { NewUserContext, NewUserProvider };
