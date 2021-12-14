import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";
import { MemoryHistory } from "history";
import { RootState } from "../../store/reducers/rootReducer";
import theme from "../../common/theme";
import TopBar from "../top-bar/TopBar";


const ScreenContainer = styled(View)`
  flex:1;
  justify-content: space-between;
  background-color:${theme.palette.background.body};
`;

const Page = styled(ScrollView)`
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
}

const Screen = (props: ScreenProps) => {
  return (
    <ScreenContainer>
      <TopBar {...props} />
      <Page refreshControl={props?.refreshControl}>{props.children}</Page>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
