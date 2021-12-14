import { connect } from "react-redux";

import Loading from "./Loading";

import { RootState } from "../../store/reducers/rootReducer";

const mapStateToProps = (state: RootState) => ({
  loading: state.common.loading,
});

export default connect(mapStateToProps)(Loading);
