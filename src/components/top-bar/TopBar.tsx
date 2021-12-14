import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";
import color from "../../common/color";
import { MemoryHistory } from "history";
import { RootState } from "../../store/reducers/rootReducer";
import iconWhiteBack from "../../assets/img/iconWhiteBack.png";
import paths from "../../routes/paths";
import theme from "../../common/theme";

const Header = styled(View)`
  flex-direction: row;
  padding: 10px;    
  background-color:${theme.palette.background.alt2};
`;
const Left = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Middle = styled(View)`
  align-items: center;
  flex:1;
`;

const StyledHeaderText = styled(Text)`
  color:${theme.palette.primary.light}
  font-size: 16px;
  margin-right: 8px;
  text-align:center;
`;

const StyledBackButton = styled(Image)`
  height:20px;
  width:20px;
`;

interface TopBarProps {
  history?: MemoryHistory;
  showGoBack?: boolean;
  headerText?: string;
  goBack?(): any;
}

const TopBar = (props: TopBarProps) => {

  return (
    <>
      <Header>
        <Left>
          {props.showGoBack && (
            <TouchableOpacity onPress={props?.goBack}>
              <StyledBackButton source={iconWhiteBack} />
            </TouchableOpacity>
          )}
        </Left>
        {props?.headerText && (
          <Middle>
            <StyledHeaderText>{props?.headerText}</StyledHeaderText>
          </Middle>
        )}
      </Header>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
