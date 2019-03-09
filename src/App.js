import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Input, Button } from "antd";
import { getUsers } from "./store/actions/yelpActions";
import "antd/dist/antd.css";

const Search = Input.Search;
const { Meta } = Card;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      n: 0
    };
  }

  onChange = checked => {
    this.setState({ loading: !checked });
  };
  handleBtnOnClick = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
    this.props.getData(e.target.value);
  };
  onClick = () => {
    this.setState({
      n: this.state.n + 1
    });
    this.props.getData(this.state.value, 20, (this.state.n + 1) * 20 + 1, true);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Search
              placeholder="input city name"
              onChange={value => this.handleBtnOnClick(value)}
            />
          </Col>
          <Row gutter={16} type="flex" justify="center">
            {this.props.data
              ? this.props.data.map(e => (
                  <Col gutter={16} span={6} style={{ paddingTop: "10px" }}>
                    <Card>
                      <Meta
                        title={e.name + " - " + e.city}
                        description={e.categories}
                      />
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
          <Row
            style={{ paddingTop: "20px", textAlign: "center", margin: "auto" }}
            align={"middle"}
          >
            <Button type="primary" size={"large"} onClick={this.onClick}>
              Load more
            </Button>
          </Row>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.yelp.data
});

const mapDispatchToProps = dispatch => ({
  getData: (value, limit, offset, loadtype) =>
    dispatch(getUsers(value, limit, offset, loadtype))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
