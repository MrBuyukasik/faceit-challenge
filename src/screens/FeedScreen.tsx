import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, RefreshControl, Alert } from "react-native";
import { connect, useDispatch } from "react-redux";
import { MemoryHistory } from "history";
import Screen from "../components/screen/Screen"
import styled from "styled-components";
import { POST_BODY_MAX_LENGTH } from "../common/constants/constants";
import paths from "../routes/paths";
import { RootState } from "../store/reducers/rootReducer";
import {
  getAllPosts
} from '../store/actions/postActions';
import {
  hideLoading,
  showLoading
} from '../store/actions/commonActions';
import { PostsResponse } from "../apis";
import theme from "../common/theme";

const TRIPLE_DOT = "..."
const PostContainer = styled(TouchableOpacity)`
  padding:15px;
  background-color:${theme.palette.background.base};
  margin-top:20px;
  margin-bottom:20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color:${theme.palette.primary.light};
`
/* background-color:${theme.palette.background.base}; */

const AvatarNameContainer = styled(View)`
  flex-direction: row;
  flex:1;
  align-items:center;
`
const Avatar = styled(Image)`
  flex:1;
  height:50px;
`
const AvatarName = styled(Text)`
  flex:4;
  color:${theme.palette.primary.light}
  margin-left:20px;
`
const PostBodyContainer = styled(View)`
  flex-direction: row;
  flex:5;

`
const PostBody = styled(Text)`
  margin:10px 10px 0px 20px;
  flex:4;
  color:${theme.palette.text.primary};
`

const Space = styled(View)`
  flex:1;
`

interface FeedScreenProps {
  history: MemoryHistory;
  getAllPosts(pageSize: number, page: number): any;
  getPostsResponse?: PostsResponse[]
}

const FeedScreen = (props: FeedScreenProps) => {
  const [isFetching, setIsFetching] = useState(false)
  const [postData, setPostaData] = useState<any>()
  const [pageSize] = useState(10)
  const [page, setPage] = useState(1)


  useEffect(() => {
    props.getAllPosts(pageSize, page)
  }, [])

  useEffect(() => {
    setPostaData(props?.getPostsResponse)
  }, [props?.getPostsResponse])

  const handleBodyMaxCharacter = (body: string) => {
    if (body?.length > POST_BODY_MAX_LENGTH) {
      return body.substring(0, POST_BODY_MAX_LENGTH) + TRIPLE_DOT
    }
    return body;
  }

  const handleNavigatePostDetails = (item: any) => {
    props?.history?.push(paths.POST_DETAILS_SCREEN, { selectedItem: item })
  }

  const handleRenderPosts = ({ item }: any) => {
    return (
      <PostContainer onPress={() => handleNavigatePostDetails(item)}>
        <AvatarNameContainer>
          <Avatar source={{ uri: item?.avatar }} />
          <AvatarName>{item?.title}</AvatarName>
        </AvatarNameContainer>
        <PostBodyContainer>
          <Space />
          <PostBody numberOfLines={5} >{handleBodyMaxCharacter(item?.body)}</PostBody>
        </PostBodyContainer>
      </PostContainer>
    )
  }

  const handlePostsRefresh = async () => {
    await setPage(page + 1)
    props.getAllPosts(pageSize, page).then((response: any) => {
      if (response && response.payload && !response.payload.length) {
        Alert.alert("Sorry no more available content for now.")
      }
    })
  }



  return (
    <Screen unScrollable refreshControl={
      <RefreshControl
        refreshing={isFetching}
        onRefresh={handlePostsRefresh}
      />
    } history={props?.history} headerText="News">
      {postData && <FlatList
        style={{ flex: 1 }}
        onRefresh={handlePostsRefresh}
        refreshing={isFetching}
        data={postData}
        renderItem={handleRenderPosts}
        keyExtractor={(_, index) => index.toString()}
      />}
    </Screen >
  );
};

const mapStateToProps = (state: RootState) => ({
  getPostsResponse: state.posts.getPostsResponse,
});

const mapDispatchToProps = {
  getAllPosts,
  showLoading,
  hideLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);

