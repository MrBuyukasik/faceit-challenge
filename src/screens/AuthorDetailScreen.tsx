import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { connect, useDispatch } from "react-redux";
import { MemoryHistory, Location } from "history";

import Screen from "../components/screen/Screen"
import styled from "styled-components";
import theme from "../common/theme";
import { getUserById } from "../store/actions/userActions";
import paths from "../routes/paths";
import { RootState } from "../store/reducers/rootReducer";
import { PostsResponse, UserResponse } from "../apis";



const PostContainer = styled(View)`
  padding:15px;
  margin-bottom:20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color:${theme.palette.primary.light};
  background-color:${theme.palette.background.base};
  flex:1;
`
const UserNameContainer = styled(View)`
  flex-direction: row;
  flex:1;
  align-items:center;
`

const AvatarNameContainer = styled(View)`
  flex-direction: column;
  flex:1;
  align-items:center;
`

const UserAvatar = styled(Image)`
  flex:1;
  height:50px;
`

const Avatar = styled(Image)`
  flex:1;
  width:300px;
  height:300px;
`
const AvatarName = styled(Text)`
  flex:4;
  margin-top:30px;
  margin-left:20px;
  color:${theme.palette.text.primary};
`

const InformationContainer = styled(View)`
  flex-direction: row;
  flex:1;
  justify-content:space-between;
`

const InfoWrapper = styled(View)`
  align-items:center;
`
const StyledTitle = styled(Text)`
  flex:4;
  margin-top:30px;
  margin-left:20px;
  color:${theme.palette.primary.light};
`

interface AuthorDetailsScreenProps {
  history: MemoryHistory;
  location: Location;
  getUserById(userId: string): any;
  userResponse?: UserResponse
}

const AuthorDetailsScreen = (props: AuthorDetailsScreenProps) => {

  const [author] = useState<UserResponse>(props?.location?.state?.user)


  return (
    <Screen goBack={() => { props?.history.goBack() }} showGoBack history={props?.history} headerText="Author Details">
      <PostContainer>
        <AvatarNameContainer>
          <Avatar source={{ uri: author?.avatar }} />
        </AvatarNameContainer>
        <InfoWrapper>
          <InformationContainer>
            <StyledTitle>Name</StyledTitle>
            <AvatarName>{author?.name}</AvatarName>
          </InformationContainer>
          <InformationContainer>
            <StyledTitle>Phone Number</StyledTitle>
            <AvatarName>{author?.phoneNumber}</AvatarName>
          </InformationContainer>
        </InfoWrapper>
      </PostContainer>
    </Screen >
  );
};

const mapStateToProps = (state: RootState) => ({
  userResponse: state.users.userResponse,
});

const mapDispatchToProps = {
  getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailsScreen);
