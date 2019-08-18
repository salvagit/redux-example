import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movies";

class ListMovies extends PureComponent {
  constructor(props) {
    super(props);
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;
    console.log(movies);
    return <p>no movies</p>;
  }
}

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
