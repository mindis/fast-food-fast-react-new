import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { loginUser } from '../../actions/userActions';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    errors: [],
  };

  componentWillMount() {
    const { user, history } = this.props;
    return user.isAuthenticated && history.push('/users/foods');
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.user.isAuthenticated) return nextProps.history.push('/users/food');
    return nextProps.errors && this.setState({ errors: nextProps.errors });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { email, password } = this.state;

    const loginData = {
      email,
      password,
    };

    const { loginUser: dispatchLogin, history } = this.props;
    dispatchLogin(loginData, history);
  };

  render() {
    const {
      email, password, errors, isLoading,
    } = this.state;
    return (
      <main>
        <div className="container hero-fullx">
          <div className="text-center contain-50">
            <div className="card card-shadow text-inverse">
              <h2>Login To Your Account</h2>
              <p>Login to have a wonderful experience and enjoy amazing discounts</p>
              <form className="form-data contain" onSubmit={this.onSubmit}>
                <div className="form-member">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-input email"
                    placeholder="Enter Email"
                    onChange={this.onChange}
                  />
                  {errors.map(
                    error => error.param === 'email' && (
                    <li key={`${error.param}-${Math.random()}`} className="list-item error">
                      {error.msg}
                    </li>
                    ),
                  )}
                </div>
                <div className="form-member">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-input password"
                    placeholder="Enter Password"
                    onChange={this.onChange}
                  />
                  {errors.map(
                    error => error.param === 'password' && (
                    <li key={`${error.param}-${Math.random()}`} className="list-item error">
                      {error.msg}
                    </li>
                    ),
                  )}
                </div>
                <div className="form-member">
                  <div className="response-area">
                    {errors.length === 1 && errors[0].msg && (
                      <li key={`${errors.length}-${Math.random()}`} className="list-item error">
                        {errors[0].msg}
                      </li>
                    )}
                  </div>
                  <div className={`loader ${isLoading ? '' : 'hide'}`}>
                    <i className="fa fa-spinner fa-spin" />
                  </div>
                  <button name="login" type="submit" className="btn btn-green btn-block login">
                    Login
                  </button>
                </div>
                <p>
                  Dont have an account?
                  <Link to="/signup" className="link">
                    Signup Instead
                  </Link>
                </p>
                <p>
                  Go back home
                  <Link to="/" className="link">
                    Home
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.array,
  history: PropTypes.object,
};

LoginPage.defaultProps = {
  errors: [],
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(withRouter(LoginPage));
