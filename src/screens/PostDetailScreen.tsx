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


const UserCardContainer = styled(TouchableOpacity)`
  padding:15px;
  flex:1;
  margin-bottom:30px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color:${theme.palette.primary.light};
  background-color:${theme.palette.background.base};

`

const PostContainer = styled(View)`
  padding:15px;
  margin-bottom:30px;
  flex:1;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color:${theme.palette.primary.light};
  background-color:${theme.palette.background.base};
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
  color:${theme.palette.primary.light};
`
const PostBodyContainer = styled(View)`
  flex-direction: row;
  margin-top:20px;
  flex:5;

`
const PostBody = styled(Text)`
  margin:10px 10px 0px 20px;
  flex:4;
  color:${theme.palette.text.primary}
  align-self:center;
`

const UserName = styled(Text)`
  flex:4;
  margin-top:30px;
  margin-left:20px;
  color:${theme.palette.text.primary}
  justify-content:center;
`
const NameContainer = styled(Text)`
  flex:4;
  margin-left:20px;
  justify-content:space-between;
`
const UserTitle = styled(Text)`
  margin-bottom:5px;
  color:${theme.palette.primary.light};
`

const StyledTitleText = styled(Text)`
  margin-bottom:5px;
  color:${theme.palette.primary.light};
`

interface PostDetailsScreenProps {
  history: MemoryHistory;
  location: Location;
  getUserById(userId: string): any;
  userResponse?: UserResponse
}

const PostDetailsScreen = (props: PostDetailsScreenProps) => {

  const [selectedItem] = useState<PostsResponse>(props?.location?.state?.selectedItem)

  useEffect(() => {
    props.getUserById(props?.location?.state?.selectedItem?.userId)
  }, [])

  const handleNavigateUserDetails = (user?: UserResponse) => {
    props.history.push(paths.AUTHOR_DETAILS_SCREEN, { user })
  }

  return (
    <Screen goBack={() => { props?.history.goBack() }} showGoBack history={props?.history} headerText="Post Details">
      <StyledTitleText>Publisher Info</StyledTitleText>
      <UserCardContainer onPress={() => handleNavigateUserDetails(props?.userResponse)}>
        <UserNameContainer>
          <UserAvatar source={{ uri: props?.userResponse?.avatar }} />
          <NameContainer>
            <UserTitle>{props?.userResponse?.name}</UserTitle>
          </NameContainer>
        </UserNameContainer>
      </UserCardContainer>
      <PostContainer>
        <AvatarNameContainer>
          <Avatar source={{ uri: selectedItem?.avatar }} />
          <AvatarName>{selectedItem.title}</AvatarName>
        </AvatarNameContainer>
        <PostBodyContainer>
          <PostBody>{selectedItem.body}</PostBody>
        </PostBodyContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsScreen);
