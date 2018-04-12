import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <Row>

          <Col span={4}></Col>

          <Col span={16} className="page-logo">
            <h1 className="page-logo-main">LoungeLobby</h1>
            <h4 className="page-logo-sub">A Social TV Platform</h4>
          </Col>

          <Col span={4}>

          </Col>

        </Row>
      </div>
    );
  }
}

export default Header;
