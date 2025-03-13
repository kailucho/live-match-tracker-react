import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setupSocket } from '../../services/socket';
import { Card, Row, Col, Typography, Badge, Divider, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const MatchesList = () => {
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = setupSocket(dispatch);
    return () => socket.disconnect();
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#f5f7fa', padding: '40px', minHeight: '100vh' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: '30px' }}>
        <Title level={2}>⚽ Partidos en Vivo</Title>
        <Input
          placeholder="Buscar equipo..."
          prefix={<SearchOutlined />}
          style={{ width: 250, borderRadius: '8px' }}
        />
      </Row>
      <Row gutter={[24, 24]}>
        {matches.map((match) => (
          <Col xs={24} sm={12} md={8} key={match.id}>
            <Badge.Ribbon text="EN VIVO" color="red">
              <Card hoverable style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Text type="secondary">Liga</Text>
                <Divider style={{ margin: '10px 0' }} />
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text strong style={{ fontSize: '18px' }}>{match.teamA}</Text>
                  </Col>
                  <Col>
                    <Text strong style={{ fontSize: '22px', color: '#1890ff' }}>{match.scoreA}</Text>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text strong style={{ fontSize: '18px' }}>{match.teamB}</Text>
                  </Col>
                  <Col>
                    <Text strong style={{ fontSize: '22px', color: '#ff4d4f' }}>{match.scoreB}</Text>
                  </Col>
                </Row>
                <Divider style={{ margin: '10px 0' }} />
                <Row justify="space-between">
                  <Text type="secondary">Posesión</Text>
                  <Text>50% - 50%</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Tiros</Text>
                  <Text>10 - 8</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Corners</Text>
                  <Text>5 - 3</Text>
                </Row>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MatchesList;
