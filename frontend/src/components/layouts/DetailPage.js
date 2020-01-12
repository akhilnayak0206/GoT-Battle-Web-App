import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const DetailPage = ({ location: { state } }) => {
  const { obj } = state || '';
  const [visible, setVisible] = useState(false);

  const verticalTable =
    obj &&
    Object.keys(obj).map(
      key =>
        key != '_id' &&
        key != 'id' &&
        obj[key] != '' && (
          <tr key={key}>
            <th>{key}</th>
            <td>{obj[key]}</td>
          </tr>
        )
    );

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = e => {
    setVisible(false);
  };

  return (
    <Fragment>
      {obj ? (
        <Fragment>
          <Modal
            title={`Details of The ${obj.name}`}
            visible={visible}
            onOk={handleOk}
            bodyStyle={{
              backgroundColor: '#282c34',
              overflow: 'scroll',
              overflowX: 'auto',
              height: '25vh'
            }}
            footer={[
              <Button type='primary' onClick={handleOk}>
                Ok
              </Button>
            ]}
          >
            >
            <table style={{ width: '100%' }}>
              <thead />
              <tbody>
                {obj && verticalTable}
                {/* <tr>
              <th>Name:</th>
              <td>
                Bill Gateskhsdbvjhsa skcjasc skjbcja skHbhb chsachc vshcvcvhc
                bsc hbsa chasc shcbashcvchas
              </td>
            </tr> */}
              </tbody>
            </table>
          </Modal>
          <section className='detailPageContainer'>
            <h1 className='detailPage'>{obj.name}</h1>
            <div className='cardAttacker'>
              <h1 className='wonLost'>
                {obj.attacker_outcome == 'win' ? 'Win' : 'Defeat'}
              </h1>
              <img
                className='attackerDefender'
                src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1578815290/attacker.jpg'
                alt='Attacker'
              />
              <h1 className='kingName'>{obj.attacker_king}</h1>
              <h1 className='kingName'>Attacker</h1>
              {/* <Button onClick={showModal} style={{ marginTop: '5px' }}>
            Details
          </Button> */}
            </div>
            <div className='cardDefender'>
              <h1 className='wonLost'>
                {obj.attacker_outcome == 'win' ? 'Defeat' : 'Win'}
              </h1>
              <img
                className='attackerDefender'
                src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1578815158/defender.jpg'
                alt='Defender'
              />
              <h1 className='kingName'>{obj.defender_king}</h1>
              <h1 className='kingName'>Defender</h1>
              {/* <Button style={{ marginTop: '5px' }}>Details</Button> */}
            </div>
            <Button
              className='viewDetails'
              onClick={showModal}
              style={{
                position: 'fixed',
                alignSelf: 'flex-end',
                bottom: '15%'
              }}
            >
              View Details
            </Button>
          </section>
        </Fragment>
      ) : (
        <section className='notFoundContainer'>
          <h1>
            <i className='fas fa-exclamation-triangle' /> Details Not Found
          </h1>
          <p className='large'>Sorry, the details does not exist</p>
          <p>
            Please go to this page <Link to='/'>Search</Link>
          </p>
        </section>
      )}
    </Fragment>
  );
};

export default DetailPage;
