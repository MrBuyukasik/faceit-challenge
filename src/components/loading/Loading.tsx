import React from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components";
import { View } from "react-native";
import colorUtil from "color";

import color from "../../common/color";
import loadingImage from "../../assets/animate/loading.json";

interface LoadingProps {
  loading: Readonly<object>;
  loadingCount: number;
}

const LoadingView = styled(View)`
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;

  background-color: ${colorUtil(color.black).alpha(0.5).rgb().string()};
`;

const Lottie = styled(LottieView)`
  width: 80px;
`;

const Loading = (props: LoadingProps) => {
  const showLoading = Object.values(props.loading).some(Boolean);

  return showLoading || props.loadingCount > 0 ? (
    <LoadingView>
      <Lottie autoPlay loop source={loadingImage} />
    </LoadingView>
  ) : null;
};

export default Loading;
