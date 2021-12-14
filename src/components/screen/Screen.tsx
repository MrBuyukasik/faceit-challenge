import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";
import { MemoryHistory } from "history";
import { RootState } from "../../store/reducers/rootReducer";
import theme from "../../common/theme";
import TopBar from "../top-bar/TopBar";
import { SafeAreaView } from "react-native-safe-area-context";


const ScreenContainer = styled(SafeAreaView)`
  flex:1;
  justify-content: space-between;
  background-color:${theme.palette.background.body};
`;

const PageScroll = styled(ScrollView)`
  flex:1;
  padding: 12px 20px;
`;

const Page = styled(View)`
  flex:1;
  padding: 12px 20px;
`;

interface ScreenProps {
  history: MemoryHistory;
  children: ReactNode;
  showGoBack?: boolean;
  hideBottomBar?: boolean;
  headerText?: string;
  goBack?(): void;
  refreshControl?: any;
  unScrollable?: boolean;
}

const Screen = (props: ScreenProps) => {
  return (
    <ScreenContainer>
      <TopBar {...props} />
      {props?.unScrollable ? (
        <Page>{props.children}</Page>

      ) : (
        <PageScroll refreshControl={props?.refreshControl}>{props.children}</PageScroll>
      )}
    </ScreenContainer>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
