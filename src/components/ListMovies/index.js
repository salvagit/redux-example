import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movies";

class ListMovies extends PureComponent {
  constructor(props) {
    super(props);
    this.props.getMovies();
  }

  render() {
    const { movies, isLoadign } = this.props;
    return (
      <div>
        {isLoadign && <p>loadign ..</p>}
        {!isLoadign &&
          movies.length &&
          movies.map((el, index) => {
            return <p key={index}>{el.Title}</p>;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadign: state.movies.isLoadign,
  movies: state.movies.items
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
