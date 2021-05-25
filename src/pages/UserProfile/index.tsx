import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, NavLink } from "react-router-dom";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { MainContentWrapperStyled, TeamHeaderStyled } from "./styles";

interface IParamsProp {
  teamName: string;
  userName: string;
}
const UserProfile: React.FC = () => {
  const [userNameData, setUserNameData] = useState({});
  let slug = useParams<IParamsProp>();
  // console.log(slug);
  const allTeamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });
  // console.log(allTeamsArray);
  const selectedTeamObject = allTeamsArray.filter(
    (team) => Object.keys(team)[0] === slug.teamName
  )[0][`${slug.teamName}`];
  console.log(selectedTeamObject);

  const allowed = [slug.userName];

  const selectedMemberData = Object.keys(selectedTeamObject)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = selectedTeamObject[key];
      return obj;
    }, {});

  console.log(selectedMemberData);
  // console.log(userNameData);

  const selectedMemberFullName = Object.values(selectedMemberData)[0][
    "fullName"
  ];
  const selectedMemberMood = Object.values(selectedMemberData)[0]["moods"];
  console.log(selectedMemberMood);
  const displayedMood =
    Object.keys(selectedMemberMood) + ": " + Object.values(selectedMemberMood);
  console.log(displayedMood);

  // const selectedMemberData = selectedTeamObject.map((name) => console.log(name));
  // console.log(selectedMemberData);
  // const namesList = Object.entries(selectedTeamArray).map(([key]) => {
  //   console.log(`${key}`);
  //   return key;
  // });
  return (
    <MainContentWrapperStyled>
      <TeamHeaderStyled>{`${Object.keys(
        selectedMemberData
      )}`}</TeamHeaderStyled>
      <p>{selectedMemberFullName}</p>
      <p>{displayedMood}</p>
    </MainContentWrapperStyled>
  );
};

export default withErrorHandler(UserProfile, axios);
